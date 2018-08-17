# Workshop 1

__Project 1:__

Part 1:
1. Split into groups.  
2. I'll give each group a small set of data
3. Compute the mean & std of the data I give you by hand.
4. Estimate the mean and std of my complete data set.

Part 2: 
1. Share your data sets with all the groups.
2. Using everyone's data, do what you did in part 1.


__Project 2:__  
Create your own basic std module, inspired by the JavaScript module in this repo.


Chose ONE dimension of this data-set of [near-earth objects](https://data.nasa.gov/resource/2vr3-k9wn.json) to estimate how safe we really are.  To do this you will:  
1. Question the data.
2. Determine which single dimension of data is most relevant to this question.
3. Establish safety thresholds: 
    * ie. Is 1000 objects within 1000 miles a meaningful danger threshold?
4. Clean the dataset down to only that dimension.
5. Do basic pre-analysis data visualization.
6. Run the cleaned data set through your std module.
7. Try to make an inference about the total population of near-earth objects based on your measurements.
8. Present your findings to each other, including your recommended actions based on your conclusions.

___

### Resources

Determining distribution:
* [how-to](http://statisticsbyjim.com/hypothesis-testing/identify-distribution-data/)
* common distributions: [article](https://www.analyticsvidhya.com/blog/2017/09/6-probability-distributions-data-science/), [quick reference]](../common-distributions.pdf)

Inference:
* [point & interval estimation](https://analyse-it.com/docs/user-guide/101/estimation)
* t-test: [less mathy](http://www.statisticshowto.com/probability-and-statistics/t-test/), [more mathy](http://www.sthda.com/english/wiki/t-test-formula)

std from Numpy: [docs](https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.std.html), [source](https://github.com/numpy/numpy/blob/v1.13.0/numpy/core/fromnumeric.py#L2912-L3027)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>



