// require things
const clean_data = require('./data-cleaner.js');
const mean = require('./std-module.js').compute_mean;
const std = require('./std-module.js').std;

const file_system = require('fs');

// load raw data & create a copy
let pre_raw_data = file_system.readFileSync("./raw-data.txt", "utf8");
const raw_data = pre_raw_data.toString();

// clean data & save it to a file
const cleaned_data = clean_data(raw_data);
file_system.writeFileSync("./cleaned-data.txt", cleaned_data); 

// - the next two steps are inefficient -
//			why?

// compute mean & write it to a file
const mean = mean(cleaned_data);
file_system.writeFileSync("./mean.txt", mean); 

// compute std & write it to a file
const standard_deviation = std(cleaned_data);
file_system.writeFileSync("./std.txt", standard_deviation); 