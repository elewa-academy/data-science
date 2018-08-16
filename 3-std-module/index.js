// require things
const clean_data = require('./data-cleaner.js');
const std = require('./std-module.js');

const file_system = require('fs');

// load raw data & create a copy
let pre_raw_data = file_system.readFileSync("./raw-data.txt", "utf8");
const raw_data = pre_raw_data.toString();

// clean data & save it to a file
const cleaned_data = clean_data(raw_data);
file_system.writeFileSync("./cleaned-data.txt", cleaned_data); 

// compute std & write it to a file
const standard_deviation = std(cleaned_data);
file_system.writeFileSync("./std.txt", standard_deviation); 