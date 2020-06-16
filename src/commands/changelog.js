const fs = require('fs')
const conventionalChangelog = require("conventional-changelog");

module.exports = function () {

  console.log("changelog");
  conventionalChangelog({ preset: 'angular' }).pipe(fs.createWriteStream('CHANGELOG.md'));
  
};
