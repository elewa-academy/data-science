// data cleaning library

function clean_data(dirty_string) {
	const de_scied_string = dirty_string.replace(/0e\+[0-1]/g, "");
	const arrayed_data = JSON.parse(de_scied_string);
	return arrayed_data;
};

module.exports = clean_data;

// data cleaner test

// https://www.random.org/gaussian-distributions/?num=10&mean=8&stdev=2&dec=2&col=1&notation=scientific&format=html&rnd=new
//    always describe how your data was collected

const test_data_clean = [8.4, 4.3, 4.5, 1.1, 6.1, 5.6, 8.3, 6.7, 5.5, 1.1];
const test_data_raw = "[ 8.50e+0, 4.30e+0, 4.50e+0, 1.10e+1, 6.10e+0, 5.60e+0, 8.30e+0, 6.70e+0, 5.50e+0, 1.10e+1 ]";

function clean_data_test(raw, clean, cleaner_function) {
	const test_cleaned = cleaner(raw);
	for (let index = 0; index < clean.length; index++) {
		if (test_cleaned[index] !== clean[index]) {
			return "data cleaning is broken";
		};
	};
	return "data cleaning works";
};
