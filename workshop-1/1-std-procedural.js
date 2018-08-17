// https://www.random.org/gaussian-distributions/?num=10&mean=8&stdev=2&dec=2&col=1&notation=scientific&format=html&rnd=new
//    always describe how your data was collected
const raw_data = "[ 8.50e+0, 4.30e+0, 4.50e+0, 1.10e+1, 6.10e+0, 5.60e+0, 8.30e+0, 6.70e+0, 5.50e+0, 1.10e+1 ]";

// clean data
const de_scied_string = raw_data.replace(/0e\+[0-1]/g, "");

const cleaned_data = JSON.parse(de_scied_string);

// compute mean
let summing_initial = 0;
for (let number of cleaned_data) {
    summing_initial += number;
};
const summed_initial = summing_initial;

const mean = summed_initial / cleaned_data.length;
const mean_expected = 8; 

// computing variance
const initial_minus_mean = [];
for (let number of cleaned_data) {
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

const variance = (1 / cleaned_data.length) * sigmad;

// computing standard deviation
const standard_deviation = Math.pow( variance, (1/2) );
const std_expected = 2;