// https://www.random.org/gaussian-distributions/?num=10&mean=8&stdev=2&dec=2&col=1&notation=scientific&format=html&rnd=new
//    always describe how your data was collected
const raw_data = "[ 8.50e+0, 4.30e+0, 4.50e+0, 1.10e+1, 6.10e+0, 5.60e+0, 8.30e+0, 6.70e+0, 5.50e+0, 1.10e+1 ]";

// clean data
const cleaned_data = clean_data(raw_data);
/*  test the mean function on a small data set with a known mean
const hand_cleaned_data = [8.4, 4.3, 4.5, 1.1, 6.1, 5.6, 8.3, 6.7, 5.5, 1.1];
for (let index = 0; index < 10; index++) {
	console.assert(cleaned_data[index] === hand_cleaned_data[index], "data not properly cleaned");
};
*/

// compute mean
const mean = compute_mean(cleaned_data);
/*  test the mean function on a small data set with a known mean
const hand_computed_mean = 5.170000000000001;
console.assert(mean === hand_computed_mean, "mean is not as expected");
*/

// computing variance
const variance = compute_variance(cleaned_data, mean);
/*  test the variance function on a small data set with a known variance
const hand_computed_variance = 5.8721;
console.assert(variance === hand_computed_variance, "variance is not as expected");
*/

// computing standard deviation
const standard_deviation = compute_std(variance);
/*  test the std function on a small data set with a known std
const hand_computed_std = 2.4232416305436812;
console.assert(standard_deviation === hand_computed_std, "variance is not as expected");
*/

// library:

function clean_data(dirty_string) {
	const de_scied_string = dirty_string.replace(/0e\+[0-1]/g, "");
	const arrayed_data = JSON.parse(de_scied_string);
	return arrayed_data;
};

function compute_mean(data_array)
	let summing_initial = 0;
	for (let number of data_array) {
	    summing_initial += number;
	};
	const summed_initial = summing_initial;
	const computed_mean = summed_initial / cleaned_data.length;
	return computed_mean;
};

function compute_variance(data_array, mean) {
	const initial_minus_mean = [];
	for (let number of data_array) {
	    initial_minus_mean.push(number - mean);
	};
	const init_min_mean_sqrd = [];
	for (let number of initial_minus_mean) {
	    init_min_mean_sqrd.push( Math.pow(number, 2) );
	};
	let sum_init_min_mean_sqrd = 0;
	for (let number of init_min_mean_sqrd) {
	    sum_init_min_mean_sqrd += number;
	};
	const sigmad = sum_init_min_mean_sqrd;
	const computed_variance = (1 / data_array.length) * sigmad;
	return computed_variance;
};

function compute_std(variance_num) {
	return Math.pow(variance_num, (1/2));
};

