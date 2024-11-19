const fs = require("fs");

function combinedFileData(firstname, lastname, age, hobbies) {
  const hobbiesArray = JSON.parse(hobbies);
  const hobbiesFormatted =
    hobbiesArray.length > 1 ? hobbiesArray.slice(0, -1).join(", ") + " and " + hobbiesArray.slice(-1) : hobbiesArray[0];
  const result = `${firstname} ${lastname} is ${age} years old and his hoobies are ${hobbiesFormatted}`;
  console.log(result);
}

function readFileData(fileName, callback) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    }
    callback(data);
  });
}

readFileData("firstname.txt", (firstname) => {
  readFileData("lastname.txt", (lastname) => {
    readFileData("age.txt", (age) => {
      readFileData("hobbies.txt", (hobbies) => {
        combinedFileData(firstname, lastname, age, hobbies);
      });
    });
  });
});
