
// the std function:

function std(data_array) {
	const mean = compute_mean(data_array);
	const variance = compute_variance(data_array, mean);
	const std = compute_std(variance);;
	return std;
};

// std module dependencies

function compute_mean(data_array) {
	let summing_initial = 0;
	for (let number of data_array) {
	    summing_initial += number;
	};
	const summed_initial = summing_initial;
	const computed_mean = summed_initial / data_array.length;
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

// std module tests
// test the smallest bits & the biggest bits

const test_data = [8.4, 4.3, 4.5, 1.1, 6.1, 5.6, 8.3, 6.7, 5.5, 1.1];

const expected_mean = 5.170000000000001;
const expected_variance = 5.8721;
const expected_std = 2.4232416305436812;

function test_mean(test_data, expected_mean, meaner) {
	const computed_mean = meaner(test_data);
	if (expected_mean === computed_mean) {
		return "mean for the win";
	} else {
		return "FAIL mean";
	}; 
};

function test_variance(test_data, mean, expected_variance,  variencer) {
	const computed_variance = variancer(test_data, mean);
	if (expected_varience === computed_mean) {
		return "variance for the win";
	} else {
		return "FAIL variance ";
	}; 
};

function test_std(test_data, expected_std, std_function) {
	const computed_std = std_function(test_data);
	if (expected_std === expected_std) {
		return "std for the win";
	} else {
		return "FAIL std";
	}; 
};

module.exports = std;










