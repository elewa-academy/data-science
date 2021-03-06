# Infinite Practice

Data Science is entire projects, from start to finish.  The best way to practice is to complete as many projects as possible, from start to finish.  But your goal should not be to use the largest data, or use the most powerful algorithms, or to answer the biggest question.  

Instead focus on completing as many simple projects as possible (maybe even 2-3 per week!), being sure to complete each step as attentively as you can.  Try not to challenge yourself with the data sets or analysis techniques. Ideally, each step should be within your comfort zone.  This will give you the opportunity to focus on the interconnections between steps and the integrity of the entire project.  (You've got DataCamp to practice the tech skills in isolation.)

---

## Project Scenarios

__Near Earth Objects:__
* _Question_: Are we safe?
* _Context_: You are part of an EU project doing research for the 2020 budget allocation.   
* _Audience_: Representatives from the EU [Security & Citizenship](https://europa.eu/european-union/about-eu/money/expenditure_en) department.  They want to know if it's worth investing in laser guns to shoot down incoming asteroids.   
* _Data_: https://data.nasa.gov/resource/2vr3-k9wn.json  


__Market Positioning:__
* _Question_: Which product will have the highest ROI?  
* _Context_: The Baby-Boomers (people born just after WWII) are now retiring; they have money, free time, and open minds.  You and some friends from business school want to meet demand with supply by offering discreet access to premium content.  Which product should you offer?  Consider: 
    * The cost of procurement 
    * Risks (financial & legal)
    * Going market rates
    * Target market preferences
    * ...
* _Audience_: A shady venture capitalist. Not strong with numbers, but she knows the market and can see right through any BS.  So get to the point.
* _Data_: https://github.com/fivethirtyeight/data/tree/master/drug-use-by-age

__Becoming Famous:__  
* _Question_: What 3 things do I change about myself to become famouse?  
* _Context_: For your whole life you have wanted nothing more than to be famous, in your eyes the most pure indicator of fame is having a successful movie made about you.  Last week you met a fairy who has offered to change any 3 things about you.  You need to decide which 3 changes will give you the best chance at becoming famous (as measured by being the subject of a successful movie).
* _Audience_: A fairy who will grant you 3 wishes, so long as they aren't selfish.
* _Data_: https://github.com/fivethirtyeight/data/tree/master/biopics

__The Proposal:__
* _Question_: Will you marry me?  
* _Context_:  You and your partner have been together for 5 years already and you're pretty sure this is the real deal.  
* _Audience_: Your hyper-rational significant other, concerned more about the long-term stability of their marriage than your feelings.   
* _Data_: https://github.com/fivethirtyeight/data/tree/master/marriage

---

## Resources

* [online JSON viewer](https://jsoneditoronline.org)
    * copy-paste JSON files into the left side, have  collapsible & readable display on the right  
* API's: 
    * [short intro video](https://www.youtube.com/watch?v=s7wmiS2mSXY)  
    * Someone else giving you access to their computer's memory.  You can read, (and sometimes modify) the data they have stored.
    * [RESTful API convention](https://restful-api-design.readthedocs.io/en/latest/urls.html) - a common way to format API calls (or URLs - the thing you type in the top of your browser).  Not all API's work this way but many do, and understanding this is a good way to begin understanding all API's

___


## The Steps 

0. _Meet your team:_
    * Get to know each other a bit.  What are your strong skills and your weak skills?  What roles does everyone want to practice this time around?  
1. [Place constraints](./constraining-for-success.md):
    * Pinpoint a couple shared objectives and commit to them as a team.  These goals could be anything; a deadline, a tool to practice, a technique to implement in analysis, a data structure to use, ...
2. _Select a question:_
    * Pick a clear and simple question that your team will answer with the data.  At this stage try sticking to simple yes/no questions. Also determine ahead of time clear criteria, what results qualify as a yes?  What qualifies as a no?  Laying this out ahead of time will help focus the rest of your project and make for a stronger conclusion.
    * As your questions grow in complexity (classification, multi-dimensional predictions, or generation) the methods you will need for the analysis will be beyond the scope of this project. 
3. _Select a data set:_
    * Based on the constraints you placed, select as a team the dataset you'd like to use.  Unless you have a constraint placed on your choice of data sets,  pick one that's not too large and that you are all interested in. 
    * Two good places to find data sets: [JSON datasets - clean, easy format](https://github.com/jdorfman/awesome-json-datasets), [Public data sets - sooo many](https://github.com/awesomedata/awesome-public-datasets). 
4. _Study the data:_
    * What might be wrong with the data? How was it collected? What does each and every dimension mean, and how do they relate?  Could there be any obvious corruptions? What sort of biases or imprecisions may be present based on collection methods?
    * Run basic pre-analysis visualizations and scans.  Is the data well-formatted all the way through? What distributions do the different dimensions seem to follow? Are there any strange tails or spikes? Any missing data?
5. _Simplify and clean the data:_
    * What of all this data is most relevant to answering your question?  Identify the feature(s) you will analyze and extract them into a new file. _Save the original, do not modify it._
    * Clean the data down to it's most simplest and efficient format for your tools.  ie. Are floating points necessary? Is a tuple good enough? Are names necessary, or can you code them as smaller numbers?
7. _Select an analysis strategy:_
    * Given your constraints, your question, your experience levels, and the data set, choose the simplest analysis strategy necessary.  A good way to choose this could be to go to DataCamp, move back one lesson, and use the techniques you learned there.
8. _Execute and write up your analysis:_
    * Complete your analysis in small, understandable, and testable steps.  Save the data at each each step for repeatability and testing.  
    * Include simple visualizations and short, clear explanations at key points along the way.  Always tie each step back to the original question, how does this stage of the analysis move you closer to an answer?  Someone with a little bit less experience than you should be able to understand what is happening without too much effort.  
9. _Communicate the results:_
    * Contextualize your report.  What is your audience's technical background? How much do they know about the domain you are studying?  Do they want actionable next steps? Suggestions? Or just a deeper understanding of the situation?
    * Refer directly back to the original question and response criteria.  "I defined my question like so, the data said x, so the answer is ____"
    * Clearly state the answer to your original question, keep your conclusion simple and to the point. The purpose of data science is to find answers you would not find without the data. Do not to use the as support for your own ideas, this is not a persuasive writing class. Sometimes this will mean you have to say "we don't know".  This is much better than fudging the results or stretching the conclusions.
    * Use simple visualizations to illustrate the main findings of your analysis.  Avoid using visualizations that cover more than 2 dimensions at once.  Things like histograms, line graphs, and scatter are almost always more than enough to communicate your findings.  If you think you need more complex visualizations, try practicing your communication skills instead.
10. _Recap the project:_
    * What went well, what didn't?  What was hard, what wasn't? What would you do different next time?  Along with your final report, write up a second short paper about what you learned.  Include the external resources that were most helpful.  
    * This should be thorough enough that you could use it as a study reference while completing your next project.




___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

