---
title: 👩‍💻 data science
draft: false
tags:
  - learning
  - AI
created: 2025-11-09
---
The Data Science Roadmap, 8 main chapters
-> [[AI engineering notes]] for more study related to AI specifically

1. [[#1. Maths and Statistics|Maths and Statistics]]
2. [[#2. Coding|Coding]]
3. [[#3. Data101, EDA|Data101, EDA]]
4. [[#4. Machine Learning|Machine Learning]]
5. [[#5. Deep Learning, AI|Deep Learning, AI]]
6. [[#6. MLOps, cloud|MLOps, cloud ]]
7. [[#7. Data Engineering|Data Engineering]]
8. [[#8. Data Science Challenges|Data Science Challenges]]
9. [[#Appendix]]

... other related study roadmaps:
- AI Engineer: https://roadmap.sh/ai-engineer
- Prompt Engineer: https://roadmap.sh/prompt-engineering
- AI Agents: https://roadmap.sh/ai-agents

---
# 1. Maths and Statistics
def:
- **Mathematics** is the foundation of Data Science (DS) and AI, it's the study of numbers, quantities, shapes and patterns using logic and abstract reasoning. 
	- -> find universal truths and relationships through deduction. 
	- => in DS, this provides the fundamental language for algorithms, it's the "how" things work computationally 
- **Statistics** is the science of collecting, analysing, interpreting and presenting data. 
	- -> framework for making sense of information in the face of uncertainty 
	- => in DS, this provides the methods for drawing conclusions from data, it's the "what does this mean?"

**Mathematics** is about **certainty**,
**Statistics** is about **uncertainty**.

## 1.1 Mathematics foundations
### 1.1.1. Linear Algebra
def: maths of **data structures**, it deals with **vectors**, **matrices** and operations on them.
-> datasets = matrices and all ML model computations are matrix operations. 

- Matrices 
- Eigenvalues
### 1.1.2. Calculus
def: maths of **change**, focusing on limits, **functions**, **derivatives**, integral, infinite series, **gradients**
-> it's related to how ML models **learn**, gradients point the direction to update the model parameters to reduce errors. 

**> Gradients** ❓
def: generalisation of derivatives that rpz the slope and direction of steepest ascent of multi-dim functions
- Gradient Descent
- Stochastic Gradient Descent

**> Optimisation** ❓
def: xxx
- xxx

### 1.1.3. Probability Theory 
def: maths of **uncertainty**, it quantifies how likely events are; foundation for stats that deals with the analysis of random phenomena and uncertainty quantification
-> it's the foundation for making predictions and dealing with noisy, real-world data

##### > Probability Distributions
def: mathematical functions that provide the probability of occurrence of different possible outcomes in an experiment 

Common ones:
- Normal distribution (a.k.a. Gaussian)
- Uniform distribution
- Binomial distribution
- Poisson distribution
- Exponential distribution

They can be either (or both):
- **Continuous**: describe measurable quantities (value in a range) e.g. total value of money
- **Discrete**: describe countable outcomes (whole numbers) e.g. number of coins

**>> Normal Distribution (Gaussian)**
def: the classic "bell curve"
- Symmetrical, continuous 
- Mean = Median = Mode
- Parameters: Mean ($\mu$) and Standard Deviation ($\sigma$)
- The most common distribution in natural phenomena, e.g. height distribution, test scores 

**>> Uniform Distribution**
def: every outcome has equal probability 
- Flat and constant probabilities 
- Can be continuous or discrete
- e.g. dice rolls, lottery draws, random number generators 

**>> Binomial Distribution**
def: counts successes in a fixed number of yes/no trials 
- Discrete, two possible outcomes
- Parameters: Number of Trials (n) and Probability of Success (p)
- e.g. coin flips, A/B test conversions 

**>> Poisson Distribution**
def: counts events happening in a fixed interval of time/space 
- Discrete, events are independent 
- Parameters: Average Rate ($\lambda$)
- e.g. website visits per hour, customer arrivals per hour, system failures per day

**>> Exponential Distribution**
def: models time between events in a poisson process
- Continuous, "memoryless"
- e.g. time between customer arrivals, time between earthquakes 


##### > Bayes Theorem
def: probability of an event based on prior knowledge of conditions related to the event 
- start with an initial belief
  **prior** $P(A)$
- see new data
	- **evidence** $P(B)$, 
	- and its **likelihood** $P(B|A$)
- then update to get a revised belief
  **posterior** $P(A|B)$
$$
posterior = \frac{likelihood \times prior}{evidence}
$$
$$
P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}
$$
Example:
- P(Fire) = 1%
- P(Smoke) = 10%
- P(Smoke|Fire) = 90% 
- What's the probability of P(Fire|Smoke)? 
	- $P(Fire|Smoke) = \frac{P(Smoke|Fire) \times P(Fire)}{P(Smoke)}$ = 9%


**>> Naive Bayes**
cf. [[#>> ii. Bayesian ML]] in [[#4. Machine Learning]]

**>> Bayesian Inference**
def: statistical framework that treats probability as a degree of belief that gets updated as new data arrives
- **Traditional** approach (**frequentist**): "there's a 95% probability that data would look like this **if my hypothesis were true**"
	- -> Hypothesis inform Data
- **Bayesian** approach: "there's a 95% probability that my hypothesis is true **given this data**"
	- -> Learn as you go, update beliefs with new evidence
	- => Data inform Hypothesis 


## 1.2. Statistics foundations
### 1.2.1. Descriptive Stats
def: methods to **summarise and describe** the main features of a dataset **quantitatively**

> [!NOTE] for more
> cf. [[#3.3.1. Stats summary]] in [[#3. Data101, EDA]]

**> Mean** 
def: arithmetic average of a set of values -> sum all values, divide by number of values
➖ sensitive to outliers 

**> Median** 
def: middle value separating the higher half from the lower half of a data set -> robust measure of central tendency
➕ unaffected by outliers 

**> Mode** 
def: value that appears most often in a dataset
➕ useful for categorical data -> most common category

**> Variance** 
def: measure of **dispersion** that rpz how far each number in the set is from the **mean**, thus from every other number in the set
$$
V = \sigma^2=\frac{\sum(x-\mu)^2}{n}
$$
**> Standard Deviation** 
def: the **sq root of the variance** -> **variance in the same units** as the data
$$
\sigma = \sqrt{V}
$$
**> Covariance** 
def: **joint variability** of two random variables -> direction of **linear relationship**
- positive = same trend 
- negative = opposite trend
$$
Cov(X,Y)
$$

**> Correlation** 
def: **standardised** covariance -> measure the strength and direction of **linear relationship** between two variables ([-1, 1])
➕ easier to interpret cause normalised
- positive and close to 1 = strong positive relationship
- 0 = not linear relationship
$$
\rho_{XY} = \frac{Cov(X,Y)}{\sigma_X\sigma_Y}
$$
with $\sigma$ std 

**> Skewness vs. Kurtosis**
- **Skewness**: measures asymmetry of a distribution 
	- positive skew: tail on the right, mean > median (order: mode, median, mean)
	- negative skew: tail on the left, mean < median (order: mean, median, mode)
	- zero skew: symmetric distribution e.g. normal curve (mean, median, mode similar)
- **Kurtosis**: measures the tail heaviness and peak sharpness relative to a normal distribution
	- high: heavy tails, sharp peak -> more outliers
	- low: light tails, flatter peak -> fewer outliers
	- normal distribution: kurtosis=3
	- => tail thickness / outlier proneness 

**> QQ plot**
def: **Quantile-Quantile plot** is a visual tool to check if a dataset follows a theoretical distribution (usually the normal distribution, i.e. it's a normality visual check tool)
-> plot data's quantiles against the quantiles of a theoretical distribution
- Straight diagonal line -> distribution matches the theoretical one 
- S-shaped curve -> skewness (positive or negative)
- Points curved above/below line at ends -> heavy or light tails (kurtosis difference)
- Outliers -> individual points far from the line at ends


### 1.2.2. Inferential Stats
def: methods to **draw conclusions and make predictions** about a population, based on a **sample data**
-> which includes hypothesis testing, confidence intervals, estimations, ... 
-> it's about going beyond the data you have to understand something bigger
#### i. Hypothesis Testing
def: a process within inferential stats where you can make an assumption (the **null hypothesis**) and then use **sample data** to see if there is enough evidence to reject that assumption
- **Null Hypothesis** ($H_0$): default assumption that there is no effect or difference, nothing's happening, might be pure luck 
- **Alternative Hypothesis** ($H_1$): hypothesis that there is an effect or a difference, something else is happening, not exactly pure luck

🔑 basically to **determine the effect of chance on the differences**

There are 3 common statistical tests:
- **t-tests**: for comparing means (2 groups)
- **Chi-square tests**: for categorical data
- **ANOVA**: for comparing means of multiple groups (sort of a more advanced t-test)

| Test       | Definition                                       | Use                                                             | Example                                                                                                         |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| t-tests    | Compares **means between two groups**.           | Used to compare the average values of two groups.               | For instance, to see if the average sales differ between two regions.                                           |
| Chi-square | Examines frequency distribution.                 | Used when analyzing **frequencies across categories**.          | For example, to check if the distribution of customers between two stores is different.                         |
| ANOVA      | Compares **means between three or more groups**. | Used to compare the average values across more than two groups. | For instance, you can compare average sales across multiple cities, such as New York, Chicago, and Los Angeles. |

##### > t-tests
def: statistical test used to determine if there's a significant difference between the means of two groups
- **t-value or t-score**: ratio of the difference between the mean of the two sets and the variation that exists within them 
	- t-score >>> (critical t-score)
		- -> groups are different, can reject $H_0$ 
	- t-score <<<
		- -> groups are similar
- **degrees of freedom**: values in a study that have the freedom to vary 
- **t-distribution or t-table**: reference table that lists **critical values** of t, which define threshold for significance for certain stat tests
	- **two-tailed tests**: used when the $H_1$ is non-directional i.e. if the hyp states that a population parameter is not equal to a certain value (≠) (e.g. one population is ≠ from the other)
	- **one-tailed tests**: used when the $H_1$ is directional i.e. if the hypothesis states that a population parameter is > or < something (e.g. one population is bigger than the other)

different types of t-tests: 
- paired (dependent): two dependent groups, can be same group but ≠ conditions
- equal variance or pooled (independent): two different populations
- unequal variance (independent): two different populations
- one-sample: one group being compared against a standard reference value

depending on
- similarity of the sample records
- number of data records in each sample set 
- variance in each sample set 

e.g.
- t-score = 2.24
- degrees of freedom = 24
- alpha level or level of significance, $\alpha = 1 - \text{confidence level} = 0.05$ (generally)
- **method 1**: compare to t-value from the t-distribution (one-tailed or two-tailed)
	- critical t-score: 2.064
	- => **t-score > critical t-score**
	- => can reject $H_0$ !
- **method 2**: calculate p-value
	- if p-value << 0.05
	- => can reject $H_0$

##### > Chi-Square Test
def: hypothesis test used to examine relationships between **categorical variables** (e.g. yes/no, categories) such as whether two variables are **independent (chance) or related**. 
-> non-parametric test (e.g. no assumption of normal distribution) since categorical vars can be nominal, ordinal, or just groupings -- not continuous values, hence no normal distribution 

examples:
- chi-square test checks if the distribution of disease (yes/no) is dependent of smoking status (smoker, non-smoker)
- flavour preference (categories) differs between males or females 
- left-right handed vs. nationality 

**>> independence test**
def: used to test if 2 categorical variables are related to each other, or independent 

**>> goodness of fit**
def: used to test if the frequency distribution of a categorical variable is different from your expectations (hypothesis)

##### > ANOVA
def: **AN**alysis **O**f **VA**riance, a collection of stat tests used when comparing the means of three or more groups to see if at least one group's mean is different from others. 
-> experiments where you want to compare multiple groups on a numeric outcome 
-> variance within the group vs. between the groups
-> determine the influence of independent variables on the dependent variable in a regression study

- ANOVA coefficient = F-statistic = Between group Variance / Within group Variance = MS_between / MS_within
	- MS = Mean sum of squares
- if F >> : between group variance big, within group variance small => at least one of the group means is significantly ≠ from others 
	- => can reject $H_0$ -- something must be going on!
- if F << : between group variance small and within group var big => dispersed, homogenous, not significantly ≠ 
	- => cannot reject $H_0$ -- maybe due to chance?

more details:
- arithmetic mean for each group $i$: $\mu_i$
- overall mean $G$
- sum of squares for each group $SS_{i} = \sum^{i}{(x-G)^2} = \sum^{i}{x^2}-(\sum^{i}{x})^2/n_i$
- sum of squares between group $SS_{between} = \sum^{i}n_i{(\mu_i-G)^2}$
- sum of squares within group $SS_{within} = \sum^{i}SS_i$
- total sum of squares $SS_{total} = \sum^{total}{x^2}-(\sum^{total}{x})^2/N = SS_{between} + SS_{within}$
- mean sum of squares $MS_{between} = SS_{between} / df_{between}$
	- degree of freedom between groups $df_{between} = N-1$
- mean sum of squares $MS_{within} = SS_{within} / df_{within}$
	- degree of freedom within groups $df_{within} = \sum^{i}n_i - N$
- F-statistic = $MS_{between} / MS_{within}$
-> you can calculate the p-value after this, remember that p-value <<< means that $H_0$ can be rejected

some assumptions need to be met:
- **independence** of observations
- **homogeneity** of variances
- **normal** distribution

examples:
- crop yields vs. 3 ≠ fertilisers
- reduce blood pressure vs. 4 ≠ drugs
- exam test scores vs. 3 ≠ teaching methods
=> are the differences in mean between the groups significant enough to be due to the different testing variables? or is it more likely due to chance (i.e. not high enough)?

**>> one-way ANOVA**
- 1 independent variable (i.e. a single factor)
- ≥ 2 groups 
- goal: determine if a significant ≠ exists between the means of the groups. 
-> simpler to interpret

example:
- 1 independent variable = teaching method 
- 3 groups of student 
- 1 dependent variable = exam score
- null hypothesis $H_0$ : mean exam scores across all 3 teaching methods are equal 
- alternative hypothesis $H_1$ : at least one group's mean significantly differs 
- => ANOVA tells if the variation in exam scores can be due to differences in teaching methods or if it's likely due to chance 

**>> two-way ANOVA**
- 2 independent variables
- each with ≥ 2 groups
- goal: analyse how both indep var influence the dependent var (i.e. the result)
=> deeper insight into how different factors together can impact outcomes

example:
- 1 dependent variable = exam score
- 1/2 independent variable = does the **teaching method** affect exam score?
- 2/2 independent variable = does the **study method** affect exam score?
- interaction = does effectiveness of **teaching method** depend on **study method** used?

*note: Post-Hoc Tests after ANOVA to determine which groups are different*

#### ii. P-values
def: probability of obtaining test results at least as extreme as the results actually observed, assuming the null hypothesis is true (i.e. "nothing special is happening" until you find good evidence to say otherwise)
-> i.e. **how likely it is to see your data happening purely by chance**
-> i.e. an indicator of stat significance, but not the size of importance of an effect
-> i.e. helps decide if the observed patterns in a data are likely due to random chance or reflect a real underlying phenomenon 
-> i.e. how surprising your data would be if the null hypothesis was true

- **p-value < 0.05 (5%)** 
	- -> "purely by chance" <<<
	- => observed data is unlikely under the null hypothesis 
	- => there is enough evidence to **reject the null hypothesis** in favour of an alternative hypothesis -> **something else is going on**
- vs. p-value >>
	- -> "purely by chance" >>>
	- => data is consistent with the null hypothesis
	- => there is insufficient evidence to reject it 
	- -> well **nothing is going on then**

#### iii. Confidence Intervals
def: range of values that is used to estimate an unknown population parameter (e.g. mean) with a certain **level of confidence**
-> instead of giving just one number, it's a range where the true value is likely to be 
-> sense of reliability, uncertainty and precision of your estimate from sample data
- **confidence interval** = range where true value likely falls
- **confidence level** (e.g. 95%) = how sure you are about this range

Concrete example: 
- goal: estimate student height at a school 
- sample data: measure height of 30 students -> **Mean estimate**
- **Standard Error**:
$$
\text{SE} = \frac{\sigma_{sample}}{\sqrt{n}}
$$
- **Margin of Error** for 95% (i.e. **z-value** = 1.96, related to normal distribution):
$$
\text{ME} = z \times \text{SE} = z \times \frac{\sigma}{\sqrt{n}}
$$
- => confidence interval would be the **Mean estimate ± ME** with a confidence lvl of 95%
$$
CI = \bar{x} ± ME = \bar{x} ± z \times \frac{\sigma}{\sqrt{n}}
$$

#### iv. Stats Cheatsheet
... for finance and investing apps. 

source: https://www.investopedia.com/terms/a/anova.asp

| **Test**                   | **Purpose**                                                                                                      | **When to Use**                                                                      | **Applications in Finance/Investing**                                                                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ANCOVA**                 | Compares the arithmetical means of two or more groups while controlling for the effects of a continuous variable | • Normal distribution<br>• Comparing multiple independent variables with a covariate | • Analyzing investment returns while controlling for market volatility<br>• Evaluating the effectiveness of financial strategies while accounting for economic conditions                 |
| **ANOVA**                  | Compares the means of three or more groups                                                                       | • Data is normally distributed                                                       | • Comparing financial performance across different sectors or investment strategies                                                                                                       |
| **Chi-Square Test**        | Tests for association between two categorical variables (can't be measured on a numerical scale)                 | • Data is categorical (e.g., investment choices, market segments)                    | • Analyzing customer demographics and portfolio allocations                                                                                                                               |
| **Correlation**            | Measures the strength and direction of a linear relationship between two variables                               | • Data is continuous                                                                 | • Assessing risk and return of assets, portfolio diversification                                                                                                                          |
| **Durbin-Watson Test**     | Checks if errors in a prediction model are related over time                                                     | • Time series data                                                                   | • Detecting serial correlation in stock prices, market trends                                                                                                                             |
| **F-Test**                 | Compares the variances of two or more groups                                                                     | • Data is normally distributed                                                       | • Testing the equality of variances in stock returns and portfolio performance                                                                                                            |
| **Granger Causality Test** | Tests for a causal relationship between two time series                                                          | • Time series data                                                                   | • Determining if one economic indicator predicts another                                                                                                                                  |
| **Jarque-Bera Test**       | Tests for normality of data                                                                                      | • Continuous data                                                                    | • Assessing if financial data follows a normal distribution                                                                                                                               |
| **Mann-Whitney U Test**    | Compares medians of two independent samples                                                                      | • Data is not normally distributed                                                   | • Comparing the financial performance of two groups with non-normal distributions                                                                                                         |
| **MANOVA**                 | Compares means of two or more groups on multiple dependent variables simultaneously                              | • Data is normally distributed<br>• Analyzing multiple related outcome variables     | • Assessing the impact of different investment portfolios on multiple financial metrics<br>• Evaluating the overall financial health of companies based on various performance indicators |
| **One-Sample T-Test**      | Compares a sample mean to a known population mean                                                                | • Data is normally distributed, or the sample size is large                          | • Comparing actual versus expected returns                                                                                                                                                |
| **Paired T-Test**          | Compares means of two related samples (e.g., before and after measurements)                                      | • Data is normally distributed, or the sample size is large                          | • Evaluating if a financial change has been effective                                                                                                                                     |
| **Regression**             | Predicts the value of one variable based on the value of another variable                                        | • Data is continuous                                                                 | • Modeling stock prices<br>• Predicting future returns                                                                                                                                    |
| **Sign Test**              | Tests for differences in medians between two related samples                                                     | • Data is not normally distributed                                                   | • Non-parametric alternative to the paired t-test in financial studies                                                                                                                    |
| **T-Test**                 | Compares the means of two groups                                                                                 | • Data is normally distributed, or the sample size is large                          | • Comparing the performance of two investment strategies                                                                                                                                  |
| **Wilcoxon Rank-Sum Test** | Compares the medians of two independent samples                                                                  | • Data is not normally distributed                                                   | • Non-parametric alternative to the independent t-test in finance                                                                                                                         |
| **Z-Test**                 | Compares a sample mean to a known population mean                                                                | • Data is normally distributed, and the population standard deviation is known       | • Testing hypotheses about market averages                                                                                                                                                |
### 1.2.3. Time Series Analysis
def: statistical methods for analysing data points collected in chronological order to identify patterns, trends and make **forecasts**. 

💡 Datapoints are not independent -- each point depend on previous ones -> **temporal dependence**
- **Time series**: set of observations recorded over time (can be daily, monthly, etc.)

##### > Key Components Time Series
def: series = trend + seasons + cycles + error/noise/residue
- **Trend**: Persistent long-term increase or decrease in the mean of the series
	- -> slowest moving part of a series, i.e. the largest time scale of importance
	- time-dependent concept
- **Seasonality**: Regular, predictable/periodic patterns that repeat (e.g. daily, weekly, yearly) in the mean of the series
	- -> often driven by the cycles of the natural world, or by conventions of social behaviour surrounding dates and times
	- time-dependent concept
	- e.g. seasons, time of year, day of week dependent
- **Cyclical**: Irregular, long-term fluctuations (e.g. economic cycles)
	- -> patterns in a time series associated with how the value in a series at one time depends on values at previous times, but not necessarily on the time step itself
	- serial-dependent concept
	- e.g. volcano eruptions, epidemics, animal populations
- **Noise/Random**: Unexplained variation

Some modeling tools for each of the component:
###### >> Trend modeling tools
- Moving Average 
- Engineering Trend
###### >> Seasonality tools
- Seasonal indicators
- Fourier features 
###### >> Cycle tools
- Lags

##### > Essential Concepts Time Series
- **Stationarity**: A time series whose statistical properties (mean, variance) don't change over time
	- tests: xxx
- **Autocorrelation**: How a series correlates with its own past values
- **Decomposition**: Breaking a series into Trend + Seasonality + Residual components
##### > Common Time Series Models & Methods
... generally for forecasting. 

**>> ARIMA**
def: AutoRegressive Integrated Moving Average, the classical statistical model

notes: and all the derivatives... 
- ... 
- https://machinelearningmastery.com/time-series-forecasting-methods-in-python-cheat-sheet/
❓ to finish 

**>> Exponential Smoothing**
def: weighted averages where recent observations get more weight

**>> LSTM**
def: Long Short Term Memory 
-> DL approach for complex temporal patterns 

**>> Prophet**
def:


##### > Time Series -- misc
**>> Applications**
- Stock market forecasting 
- Demand/sales prediction 
- Weather forecasting
- IoT sensor monitoring
- Web traffic analysis

**>> Special considerations**
- No random splitting: must use time aware train/test splits -> cf. [[#> Time Series Split]]
- Cross-Validation: use techniques like "rolling window" validation 
- Feature Engineering: lags, rolling average, seasonal indicators, ... 

# 2. Coding
def: programming languages specifically suited for data manipulation, stat analysis, ML implementation across different scales and domains

## 2.1. Python
def: versatile, high-level programming language renowned for its simplicity and extensive ecosystem of data science libraries (incl. numpy, pandas, scikit-learn, ...)

> [!info] More
> [[python 101]]

### 2.1.1. numpy
def: fundamental package for **scientific computing** in python, providing support for large, **multi-dim arrays** and **matrices** along with **mathematical functions**

- ndarray: **N-dim array** object providing efficient and operations for numerical data (i.e. matrix❓)
- vectorise: **element-wise array operations** that avoid explicit loops, significantly improving computational performance through optimised C implementations 
- broadcasting: arithmetic operations with arrays of different shapes ❓❓

### 2.1.2. pandas

> [!info] More
> [[python-101#pandas-|python 101 - pandas]]

def: fast, powerful, flexible open-source **data analysis and manipulation** tool

- DataFrame: 2D labeled **data structure** with columns, holding any data type 
- Series: 1D labeled **array**, can hold any data type

Data Processing: methods to prepare data for analysis
- missing data
- remove duplicates
- correct inconsistencies

### 2.1.3. ML/DL libraries
#### i. scikit-learn
def: comprehensive **ML library** featuring simple and efficient tools for **data mining** and **analysis**, built on numpy, scipy and matplotlib. 

note: ah bah si en fait, c'est bien cette library que j'utilise pour toute la partie ML xd 

❓ this deserves its own note

- pipeline
- gridsearchCV

#### ii. PyTorch
def: research-friendly DL framework from Facebook, more intuitive for many and popular in academia 
#### iii. TensorFlow / Keras
def: 
- TensorFlow (Google): powerful, production-level DL framework, can be complex, but very scalable
- Keras: user-friendly API that runs on top of TensorFlow -- easiest way to start building NNs

### 2.1.4. Visualisation libraries
#### i. matplotlib
def: fundamental plotting lib for python, comprehensive and highly customisable **2D plotting library**

❓ deserves its own note too 

- figures and axes
- charts and plots
#### ii. seaborn
def: built on top of matplotlib, provides stats visualisations with nice defaults and simpler syntax
## 2.2. R
def: specialised programming language and environment for **stat computing** and graphics
## 2.3. SQL
def: **S**tructured **Q**uery **L**anguage, standard language for **managing and querying relational DB systems**. -> it's a language, not a product

some definitions about databases:
- **Relational DB** (RDB): organise data into structured tables composed of rows and columns
	- each row = record, uniquely identified by a primary key 
	- each column = field, attribute
	- tables are linked through relationships using foreign keys
	- ➕ data integrity, data consistency (**ACID** properties: Atomicity, Consistency, Isolation, Durability)
	- => SQL is the primary language used to manip and query RDB 
- **Non-Relational DB** (NoSQL): store data in formats other than tables, such as documents (MongoDB), key-val pairs (Redis), wide-column stores (Cassandra), or graphs (Neo4j).
	- ➕ flexibility with unstructured or semi-struct data
	- ➕ scale horizontally 
	- ➖ not fully enforce ACID compliance 
- **NewSQL** DB: combine scalability of **NoSQL** with **ACID** transactions of RDB, providing both high performance and consistency. 

a bit further:
- **DB Management System** (DBMS): full software sys that users and apps interact with for **data management**
	- -> tools and interfaces to create, update, query data
	- -> overall DB ops: user management, transaction control, integrity checks, concurrency, backups, query parsing
	- e.g. MySQL, PostGreSQL, Microsoft SQL Server, Oracle
- **DB Engine**: a.k.a. storage engine, it's a core component or subsystem within a DBMS responsible specifically for **data handling**, storage and retrieval. 
	- -> executes **CRUD** (Create, Read, Update, Delete) ops
	- -> manages low-level tasks: indexing, caching, transaction support 
	- e.g. SQLLite, InnoDB, MyISAM
		- -> can have its own tweaks in querying language right? 

| Relational DB | NoSQL DB      |              |           |               |
| ------------- | ------------- | ------------ | --------- | ------------- |
|               | **Document**  | **Wide-col** | **Graph** | **Key-value** |
| MySQL         | MongoDB       | Cassandra    | Neo4j     | Redis         |
| PostgreSQL    | ElasticSearch | BigTable     | Neptune   | DynamoDB      |
| Oracle        | CosmosDB      | HBase        |           | Memcached     |
| MS SQL        | CouchDB       |              |           |               |

cf. [[#7.1. Data Eng Cycle]] for more

> [!info] More
> code: [[SQL 101]]

### 2.3.1. MySQL
def: open-source **RDB Management System** (RDBMS) that uses SQL
-> popular for webapps, easy to use and widely supported 

### 2.3.2. PostGre
def: advanced open-source **RDB Management System** (RDBMS) 
-> standards compliance, extensibility, powerful features like JSON support and robustness 
-> suitable for complex queries and large-scale apps 

### 2.3.3. SQLLite
def: lightweight, serverless, file-based **DB engine**. 
-> embeddable in apps, used for mobile, desktop, and testing env
-> not designed for heavy concurrent loads but very convenient
## 2.4. SE for DS
**> Version control Git**
def: git is a system for tracking code changes, collaborating with others, reverting mistakes, etc.
-> essential for reproducibility 

- **GitHub / GitLab**: platforms for hosting and managing Git repositories 

> [!info] More
> code: [[git 101]]


**> APIs and Deployment**
def: **A**pplication **P**rogramming **I**nterface, a set of rules allowing different applications to communicate

- **FastAPI** / **Flask**: python framework for building web APIs. 

**> Basic Scripting**
def: CLI & Scripting used for automating tasks and running pipelines from the command line

> [!info] More
> code: [[CLI-bash 101]]

# 3. Data101, EDA
def: foundation of all data work, involving core concepts, processes and methodologies for
1. **collecting**,
2. **cleaning**,
3. **processing** and
4. **understanding** data
5. before **analysis**. 

Main data disciplines, focus on distinct aspects of the **data lifecycle**:
- **Data Engineering** (cf [[#7. Data Engineering]])
  def: build and maintain the **infrastructure and pipelines** that collect, clean, transform, and store data for analysis and use.
- **Data Science**
  def: analyse and model data to extract **insights**, build **predictive models** and **support decision-making** using stats, ML, and domain knowledge. 
- **Data Analytics** (cf. [[#3.6. Data Visualisation Tools]])
  def: focus on **interpreting** processed data through **visualisation**, **reporting**, and **descriptive** stats to inform business actions
- **Machine Learning Engineer** (cf. [[#6. MLOps, cloud]])
  def: bridge data science and software engineering by **deploying and optimising ML in production** env. 
- **AI Engineering** (cf. [[#5. Deep Learning, AI]])
  def: build, test and deploy **AI models and systems**, combining ML, SE and data handling to create intelligent apps.
- **Data Governance**
  def: ensure data **quality, security, privacy and compliance** through policies and processes

Some data handling terms:
- **Data Wrangling** (or munging): broadest term to refer to **entire process** of taking raw, messy data and transforming into clean, structured format. 
  -> include cleaning, enriching, transforming, merging data from various sources. 
- **Data Pre-processing**: subset of wrangling that specifically prepares the data **for ML models**. the focus is on making the data digestible for algorithms. 
	- **Feature Engineering**: create better inputs for ML models, key part of data pre-processing
- **Data Processing**: **general term** for any operation on data, it can be synonymous with wrangling, or refer to large-scale data transformation in data engineering (ETL)
- **Data Cleaning**: correct the imperfections in data, which is a critical sub-task within wrangling
- **Data Mining**: discover hidden patterns in data, this comes after data is prepared, and typically makes use of ML techniques
- **ETL/ELT**: create data pipelines from sources to storage, can be considered as a part of data engineering or a form of large-scale processing. 
- **Data Modeling**: design how data is **structured and organised** (e.g. schema design for DB), ensuring data is stored and accessed efficiently and meaningfully -> more DB/data engineering design, often involved early in pipeline 
- **Data Analysis**: answer questions with data (human-led) => the overarching goal with all of these data related processes

![[_images/data_terminology_diagram.svg]]
## 3.1. Data Types
def: classification of data based on its **structure**, organisation, format

##### > Structured Data
def: highly **organised data** with a predefined schema, typically stored in **relational DB** with rows and columns
-> **SQL** tables, **CSV** files, spreadsheets, ... 

##### > Unstructured Data
def: data without a predefined organisational structure, which requires specialised processing techniques -> **no predefined structure**
-> **text** documents, **images**, videos, audio files, social media posts, ... 

##### > Semi-structured Data
def: data that doesn't conform to rigid structure but contains **organisational properties** like tags and markers 
-> **json**, **xml**, email formats 

## 3.2. Data Preprocessing
def: crucial **data cleaning and preparation** phase where raw, messy data is transformed into a clean, structured format suitable for analysis (or specifically **ML models**). 

There are common steps to address in this process (not all covered here):
1. 🔜 data acquisition and import (DB, csv, APIs) 
2. 🔜 data integration (combine from sources, formats)
   cf. [[#7.1.1. Data Generation (Collection & Integration)]] in the [[#7. Data Engineering]] chapter
3. 🟢 data cleaning (na, duplicates, outliers, inconsistencies)
4. 🟢 data transformation (type conversion, norm/stand num, encode cat)
5. 🔜 data reduction (reduce dim, feature selection or extraction)
   cf. [[#> Dimensionality reduction]] for some *examples*
6. 🔜 feature engineering (new meaningful features)
   cf. [[#3.4. Feature Engineering]] in this same chapter
7. 🔜 data splitting (train, validation, test)
   cf. [[#3.5. Data Splitting]] in this same chapter

🟢: covered here / done
✔: covered already
🔜: covered later  
⏭: skipped / omitted

### 3.2.1. Missing data handling
def: deal with **incomplete data** points including deletion, mean/med/mode **imputation**, or advanced methods like KNN imputation and predictive modeling. 
*na: not available, i.e. missing value*

- **Imputation**: **general** operation of filling missing data points-- **anywhere**, can be inside or outside range of existing data
- **Interpolation**: estimate unknown values that fall **within** the range of known data points
  -> guess what's **between** data, assuming continuity 
- **Extrapolation**: predict values **outside** the range of observed data
  -> **forecast** into the future or to estimate for unobserved areas, **beyond**
  -> can also be **backward**

##### > mean, median, mode imputation
- **Mean imputation**: replace na values with the mean of the available data
	- ➕ preserve overall distribution 
	- ➖ reduce variance 
- **Median imputation**: replace with the median value
	- ➕ more robust to outliers, preserve central tendency 
- **Mode imputation**: the most frequent value
	- ➕ ok for nominal data
	- ➖ introduce bias for small datasets

##### > KNN imputation
def: use k-nearest neighbours algo to impute na values based on similar instances
➕ preserve relationships between variables
➖ computationally heavy 

### 3.2.2. Outlier detection 
def: identify and handle **anomalous data points** that deviate significantly from other observations, which can skew analysis results or model performance, represent errors, rare events, etc. 

Casual methods to detect outliers: 
- **Visual methods**: scatter plots, box plots, histograms to spot unusual points
- **Statistical methods**: z-score, IQR 
- **Distance based methods**: euclidean distance
- **Density based methods**: DBSCAN
  (cf. [[#>> iii. DBSCAN (Density-Based Spatial Clustering)]] in [[#4.1.2. Unsupervised Learning]])
- **ML methods**: isolation forests (tree-based), local outlier factor
- **Dimensional reduction**: PCA
  (cf. [[#>> i. Principal Component Analysis (PCA)]] in [[#4.1.2. Unsupervised Learning]])

##### > z-score method
def: a.k.a standard score, identify outliers as data points that fall beyond a certain **number of std** from the mean of the dataset
-> assuming **normal distribution** of data 
➖ skewed distributions

$$
Z = \frac{X-\mu}{\sigma}
$$
##### > IQR method
def: use **interquartile range** to detect outliers as points below or above a range
➕ robust to non-normal distributions 
➕ skewed distributions
- low bound: $Q1 - 1.5*IQR$
- high bound: $Q3 + 1.5*IQR$

with:
- Q1, Q3 = 25%, 75% 
- $IQR = Q3 - Q1$ 
  = measure of **statistical dispersion** that captures stable sense of data spread in the middle 50% of a dataset (without the outliers, i.e. not the full range)

##### > more basic?
**percentile / quantile**


### 3.2.3. Normalisation
def: **scaling techniques** that transform numerical features to a common scale while preserving relationships
##### > min-max scaling
**def) normalisation**: rescale data to a **fixed range** (usually [0, 1], sometimes [-1, 1]). 
-> use min-max 
➕ features have different scales
➕ work well with distance-based models (k-NN, NN)
➖ sensitive to outliers
$$
X_{norm} = \frac{X-X_{min}}{X_{max}-X_{min}}
$$
##### > standard scaling
**def) standardisation** (z-score scaling): transform data to have $\mu = 0$ and $\sigma = 1$, **no fixed range**
-> keep shape of data distribution
➕ less sensitive to outliers
➕ work well with model assuming normally distributed data (SVM, PCA), or gaussian data
$$
X_{std} = \frac{X-\mu}{\sigma}
$$
##### > robust scaler
def: scale data using stats that are robust to outliers, such as median and IQR -- **no fixed range**
➕ robust to outliers
➕ robust to skewed distributions
$$
X_{scaled} = \frac{X-median}{IQR}
$$
### 3.2.4. Encoding (cat vars)
def: convert categorical text data into numerical format that ML algorithms can process.
-> choosing the right encoding method depends on 
- data type
- number of categories (cardinality)
- algorithm 

##### > label encoding
def: assign a unique integer to each category
➕ **ordinal data** (i.e. ordered)
➖ nominal data (i.e. no intrinsic order)
##### > ordinal encoding
def: assign integers based on the order or ranking of categories
➕ **ordinal data** (i.e. ordered)
##### > one-hot encoding
def: create binary columns for each category, value of 1 or 0 indicates presence or absence
➕ **nominal data** (i.e. no intrinsic order)
➖ high-dimensionality if category number high
##### > target encoding
def: replace categories with mean of the target variable for that category
➕ **high-cardinality** features (i.e. lots of categories)
➖ overfitting 
##### > binary encoding
def: represent categories as binary digits, splitting across multiple columns
➕ **high-cardinality** features (i.e. lots of categories) -> reduce feature space


## 3.3. EDA
def: **E**xploratory **D**ata **A**nalysis, a systematic initial investigative process of analysing datasets to understand, summarise and visualise main characteristics, uncover **patterns**, spot **anomalies**, and **insights**. 

1. ⏭ understand the problem and the data (clarify the business/research q, data available, domain-specific constraints)
2. ⏭ import and inspect data 
3. ✔ data preprocessing steps (data processing part 1) 
   cf. [[#3.2. Data Preprocessing]]
4. 🟢 explore data and variable characteristics (stats, distribution) 
5. 🟢 visualise data (plots) 
6. 🟢 examine relationships between variables (correlation)
7. ✔ detect and handle outliers (data processing part 2)
   cf. [[#3.2.2. Outlier detection]]
8. 🔜 data transformation and feature engineering 
   cf. [[#3.4. Feature Engineering]]
9. ⏭ communicate finding
   cf. [[#7.1.4. Data Serving]] for more hands-on use of the data analysis

🟢: covered here / done
✔: covered already
🔜: covered later  
⏭: skipped / omitted

### 3.3.1. Stats summary
def: calculate **descriptive stats** (mean, med, mode, std, quartiles)
-> to understand **data distribution** (central tendency and spread),
-> detect patterns or anomalies 
-> identify skewness 

Some more definitions (in addition to cf. [[#1.2.1. Descriptive Stats]] from [[#1. Maths and Statistics]])
- **Variance**: measures the average of the **squared** differences between each data point and the mean -- a measure of spread or dispersion
  -> how spread out the values are from the mean, in squared unit!
  -> less intuitive to interpret
$$
V = \sigma^2=\frac{\sum(x-\mu)^2}{n}
$$
- **Std**: square root of the variance
  -> same unit as the data => more interpretable 
$$
\sigma = \sqrt{V}
$$
- **Central tendency**: measure that identifies the center of a data distribution-- can be mean, med, mode
- **Spread**: i.e. **dispersion**, how much data values vary around the central tendency-- can be range, variance, std
- **Normally** distributed: symmetrical, bell-shaped curve where data is evenly distributed around the mean
- **Skewed**: asymmetrical, can have a longer tail on the right (positive skew) or on the left (negative skew)
- **Multi-modal**: two or more peaks or **modes**, indicating multiple values or clusters within the data

### 3.3.2. Data Viz (charts, plots)
def: use visual tools to gain **intuitive understanding** 
-> spot trends, patterns
-> outliers, anomalies
-> dependent variables

cf. [[#2.1.4. Visualisation libraries]] in [[#2. Coding]]
cf. [[#3.6. Data Visualisation Tools]] in the same chapter

##### > basic charts
def: fundamental graphical rpz used to **display** categorical and numerical data relationships

**Bar chart**
def: rectangular bars with length # values they rpz
➕ comparing categorical data across different groups 
- grouped bar chart
- stack bar chart

**Pie chart**
def: circular stat graphic divided into slices = numerical proportion
➕ show parts of a whole relationship 

**Line chart**
def: connect data points with lines
➕ show trends over time 

##### > statistical plots
def: specialised viz designed to rpz data distributions, relationships, statistical properties for **analytical** purposes

**Histogram**
def: **distribution** of numerical data, using bars/bins to show **frequency** counts 

**Scatter plot**
def: cartesian coordinates, display values for 2 variables
➕ reveal correlation patterns

**Box plot**
def: summarise data distribution showing median, quartiles, outliers 

**Density plot**
def: smoothed visualisation of distribution, showing probability density 

**Violin plot**
def: combine box plot and density plot to visualise distribution shape
##### > specialised maps
def: advanced visual rpz for **more complex data relationships** 

**Heatmap**
def: graph rpz where values are depicted as colors in a matrix format
➕ complex correlation matrices, or density distributions

**Confusion matrix**
def: table layout of the performance of a **classification** algo
-> shows **true vs. predicted** classifications 

### 3.3.3. Correlation
def: examine **relationships --strength and direction**-- between two variables using correlation coefficients 
-> to identify potential predictors (which var move together)
-> and **multi-collinearity** (when predictor variables are too highly correlated with each other)

More on **multi-collinearity**:
- **def**: two or more predictors in a model have a very high correlation
- **how to detect**: examine correlation matrix (**pearson** correlation > .8 => very high)
- **issue** with high corr: can cause instability or distortions in regression and other models

How to measure correlation:
- **categorical variables**: cross-tabulations and group comparisons 
- **continuous variables**: correlation coefficients like **pearson**'s r ([-1, 1]) to quantify the **linear** association 
	- ~ +1: strong positive linear relationship (variables increase together)
	- ~ -1: strong negative linear relationship (one increases when the other decreases)
	- ~ 0: little to no linear relationship
- *note: but there are other correlation coeffs to measure other types of relationships*
	- **pearson**: correlation
	- **spearman**: rank correlation
	- **kendall**: tau rank correlation 

## 3.4. Feature Engineering
def: process of creating **new features or transforming existing ones** to improve ML model performance by better representing the underlying patterns in the data
=> improve model performance (reduce overfitting by avoiding irrelevant or redundant features)
-> accuracy (because better inputs)
-> interpretability (by focusing on key predictive variables)
-> efficiency (by reducing dimensionality and computational load)

This step is actually crucial, often iterative, relying on domain expertise, experimentation and evaluation to refine features for optimal model performance. 

e.g. add day, month, year from time-based features (feature extraction)

**> feature creation**
def: generate new features based on **domain knowledge** or by combining existing features
-> e.g. interaction terms, polynomial features

**> feature transformation**
def: apply transformations like log or binning to make features more suitable for modeling
-> binning: a.k.a. data discretisation or bucketing, transforms continuous numerical data into discrete intervals or "bins"

**> feature extraction**
def: reduce dimensionality using PCA, or extract key characteristics from complex data

**> feature selection**
def: choose the most relevant features using filter methods (correlation, chi-square), wrapper methods (recursive elimination), or embedded methods (Lasso, tree-based importance)

**> feature scaling**
cf. [[#3.2.3. Normalisation]] in [[#3.2. Data Preprocessing]] previously 

## 3.5. Data Splitting
def: strategies for **partitioning** datasets into training - validation - testing subsets to properly evaluate model performance (without data leakage) and prevent overfitting.
- **Data leakage**: information that wouldn't be available at the time of prediction is mistakenly used during model training (e.g. preprocessing steps done on the entire dataset before splitting, future info such as outcomes leaks into training features, ...)
  -> cf. [[#Data Preparation & Engineering]] in [[#8.1. Data challenges]]
- **Overfitting**: when a ML learns not only the underlying patters in the training data but also the noise and random fluctuations
  -> amazing perf on training data but very poor on new, unseen data 
  -> basically fails to generalise 
  -> cf. [[#Model Development]] in [[#8.2. Model challenges]]

-> purpose: ensure models are tested on unseen data to assess **generalisation** and avoid overfitting 
- **Training** set: used to **learn** model parameters 
- **Validation** set: used to **tune** hyper-parameters and **select** models
- **Test** set: used for final eval to estimate **real-world performance** 

Some other **best practices**:
- **Randomise** data before splitting (except time series)
- keep test set completely **separate** until final evaluation
- use **cross-validation** techniques for robustness
- use **stratification** to handle class imbalance

### 3.5.1. Train-Test split
def: split data once into training and test subsets
-> typical ratios:
	- train: 70-80 % 
	- test: 20-30 %

if tuning the model parameters requires validation apart from testing, the data can be split into 3 distinct sets. 

### 3.5.2. Cross-Validation
def: resampling procedure used to evaluate ML models on limited data samples by partitioning data into complementary subsets. 

cf. [[#4.2.2. Cross-Validation Eval]] in [[#4. Machine Learning]] for more (kind of redundant, but still relevant)

##### > K-Fold Cross-Validation
def: split data into K equal folds, using K-1 folds for training and 1 fold for testing, rotating through all folds.
-> model trained k times, 
-> each fold serves once as test data
-> performance averaged over folds 
➕ suitable for small datasets

##### > Stratified K-Fold
def: variation that preserves original class proportions in each split
➕ important for imbalanced datasets

##### > Time Series Split
def: specialised method for temporal data that respects time ordering (split chronologically), using past data for training and future data for testing. 
➕ important for time-dependent data (e.g. stock prices)

## 3.6. Data Visualisation Tools
def: tools that create interactive dashboards and reports for business stakeholders
e.g. Tableau, PowerBI, Looker, Metabase

cf. [[#7.1.4. Data Serving]] where BI is discussed for more hands-on, interpretation and use of data for business decision-making support

❓ can go further

# 4. Machine Learning 
## 4.0. Intro
def: **ML is a subfield of AI** focused on developing algo that enable computers to **learn patterns from data**, and **make predictions or decisions** without being explicitly programmed for every task. -> **no hard-coded rules**
-> algo improve automatically by experience (data) vs. hard-coded instructions 
-> ML models learn relationships within data to predict outcomes or classify information 

=> blend of computer science, stats (aaaaand domain expertise)
sikes exactly what data science also is 😐
let's say:
- ML = CS and Maths
- DS = CS, Maths/Stats and Domain Expertise

Goals of Machine Learning:
- enable computers to automatically **learn patterns** from data
- **automate** complex decision-making tasks **without explicit programming**
- make accurate **predictions** or **decisions** on **unseen data**
- **continuously** adapt and improve performance (and accuracy) as more data becomes available 

Some definitions related to CS: 
- **code**: actual lines of instructions written in a programming language
- **algorithm**: step-by-step procedure or set of rules to solve a problem or perform a task (e.g. sorting, searching algo)
- **program**: collection of algorithms and instructions written in a programming language to perform specific functions.
- **script**: type of program, often shorter and interpreted rather than compiled, usually automating tasks.
- **model**: (in ML) mathematical representation trained on data that makes predictions or decisions. 
- **function**: standalone, independent, reusable piece of code designed to perform a specific tasks -- called by name (`function()`)
- **method**: function tied to an object/class in OOP (object-oriented programming) -- called on the object to operate on its data a.k.a. its attributes (`object.method()`)

## 4.1. ML Models
def: different algo approaches and architectures for learning patterns from data, categorised by their learning methodology and application domain 

### 4.1.1. Supervised Learning
def: learning (i.e. trained) from **labeled data** where the desired output is known
-> learn a **mapping from inputs to outputs**
-> so it can accurately **predict labels** for new, unseen data

💡 Core Idea: **Learn from known input-output pairs** 

Some examples: 
- image recognition
- fraud detection
- stock price prediction

#### > Linear models
def: models that assume **linear relationship between input variables and the target** (what we want to predict)

- **Linear relationship**: output changes at a constant rate as the input changes, they are connected linearly, model can draw a straight line/plane/hyperplane through the data points
	- for 1 feature (simple linear regression): $y=mx+b$ 
	- for multiple features (multiple linear regression): $y=w_1x_1 + ... + w_nx_n + b$
	- with
		- $y$ = target
		- $x_i$ = input feature
		- $m$ = slope
		- $b$ = intercept (when x=0)
		- $w_i$ = feature weight (how important)
	- e.g. house_price = 200 x house_size
##### >> i. Linear Regression
def: predict **continuous values** (e.g. house prices)
-> by fitting a **linear equation** to observed data

Example: 
- predict house prices (continuous)
- based on features: size and location

-> cf. [[#> Regularisation in ML]] sometimes needed when too many features involves and model is too simple 
##### >> ii. Logistic Regression
def: despite its name, not really a regression but used for **classification** i.e. discrete categories => binary or multi-class
-> estimate probabilities of discrete outcomes using logistic sigmoid function 

Example: 
- predict spam or not (binary classification)
- based on features: word frequencies, sender characteristics, presence of links, etc. 

**>>> ii. a. Sigmoid Function**
def: math function to map any real value number into probabilities ([0, 1]), **for binary classification or activation function** (NN)
$$
\sigma(x) = \frac{1}{1+e^{-x}}
$$
-> S-shaped curve [0, 1]
#### > Classification
def: **predict discrete categories** => again, binary or multi-class

##### >> i. K-Nearest Neighbours (KNN)
def: classify data points based on labels of the k closest points in the feature space, relying on **distance metrics**. 

note: different from [[#>> i. K-Means]] in [[#> Clustering]] that is an [[#4.1.2. Unsupervised Learning]] technique
- **KNN = Supervised classification**

##### >> ii. Bayesian ML
def: use bayes' thm to update the probability estimate for a hyp as more evidence/data becomes available. 

cf. [[#1.1.3. Probability Theory]] for some background theory

**>>> ii.a. Naive Bayes Classifiers** 
def: based on bayes' thm with the naive assumption that features are independent
-> calculate the probability of each class given the data, and predicts the class with the highest posterior probability 

##### >> iii. Discriminant Analysis
def: statistical method that models the difference between classes based on **feature distributions**

**>>> Linear Discriminant Analysis (LDA)** 
def: find linear combination of features that best separates two or more classes
-> assume normal distributions of predictors and equal covariance among classes
➕ works well when class distributions are gaussian
➕ helps reduce dimensionality 

#### > SVM
def: **S**upport **V**ector **M**achines, supervised ML algo used for classification and regression tasks
-> find optimal **hyperplane** that best separates classes in the feature space
-> by **maximising the margin** i.e. distance between hyperplane and support vectors of each group
➕ effective in high-dim spaces
➕ robust to outliers with soft margin 
➕ memory efficient (only sv matter in defining the model)
➕ both binary and multi-class classification

Some definitions:
- **Hyperplane**: decision boundary that separates different categories of data -- a line in 2D space, a plane in 3D or more
- **Support vectors**: critical data points lying closest to the decision boundary (and directly influence it)
- **Margin**: distance between hyperplane and the nearest data points from each class (sv)
- **Soft margin**: allow for some misclassifications (slack variables) to handle noise and improve generalisation 
- **Kernel**: mathematical function that implicitly transforms data -> **higher-dim space**; this allows SVM to handle non-linear data by finding more complex boundaries in the original space.
	- **Kernel trick**: calculate the similarity (= dot product) between pairs of data points in the transformed high-dim space without explicitly computing their coordinates. 
- **High-dimension**: number of features >>> number of samples

💡 At the core of SVM: 
- **Kernel trick** allows SVM to transform data -> higher-dim space where classes become **linearly separable** without explicitly computing coordinates
- -> can use **different kernels** for this: 
	- **Linear** Kernel: no transformation (ok for data that is linearly separable)
	- **Polynomial** Kernel: data -> polynomial feature spaces => curved boundaries 
	- **Radial Basis Function** (RBF) / **Gaussian** Kernel: data -> infinite-dim space => complex boundaries 
	- **Sigmoid** Kernel: similar to neural activation functions

There are also different types of SVM:
- Linear SVM
- Non-linear SVM
- One-class SVM
- Support Vector Regression (SVR)
- Multi-Class SVM 

#### > Decision Trees
def: supervised ML algo used for both classification and regression tasks
-> models decisions and their possible consequences in a flowchart-like tree structure
➕ intuitive, easy to interpret 
➕ works with both numerical and categorical data
➕ needs little data preprocessing
➕ can capture non-linear relationships
➖ prone to overfitting if not controlled
➖ unstable to small changes in data
➖ can create biased trees if some classes dominate

Some definitions on the structure of the tree: 
- **Root** node: represent the entire dataset and is the starting point of the tree
- **Decision** nodes: internal nodes, nodes where the data is split (based on attribute tests or feature values)
- **Branches**: represent the outcomes of the tests (leading to further nodes or leaves)
- **Leaf** nodes: terminal nodes, represent final predictions or class labels

Definition of Core Concepts:
- **Purity**: metric describing how homogeneous the data within a node is (how well the split separates classes)
	- -> so a node is "pure" when all its data points belong to the same class (for classification) or have similar target values (for regression)
	- -> split decisions aims to create child nodes that are as pure as possible i.e. splits that reduce impurity the most 
- **Pruning**: process of removing sections of a tree (branches) that provide little power for prediction, to prevent overfitting, improve generalisation and simplify the model.
	- **Pre-pruning**: set criteria such as max depth, min sample per leaf, min impurity decrease to stop tree growth before it's too detailed and overfitting. 
	- **Post-pruning**: grow the full tree then trim back branches to limit complexity, often based on validation data performance. 
##### >> i. metrics for splitting
def: the overall idea if to make the split as "decisive" as possible by **decreasing impurity, entropy or variance** within the node for each split. 
###### >>> i.a. Gini Index (measure of impurity)
def: measure how mixed or impure a dataset is
-> gini = [0, 0.5] = [pure, impure]
-> measure **likelihood of incorrect classification** if randomly classify it according to the class distribution in the dataset
$$
Gini = \sum{p_i (1-p_i)}
$$
Gini = 0 is the lowest and best possible outcome for each branch i.e. when everything in the node is the same class.
###### >>> i.b. Information Gain (based on entropy)
def: measure how much **entropy** decreases after a split
-> entropy = overall disorder or unpredictability
$$
Entropy = -\sum{p_i log(p_i)}
$$
###### >>> i.c. SSE or MSE
def: Sum of Squared Errors or Mean Squared Error can be used for regression, to measure variance within a node, aiming to reduce it after splitting. 
##### >> ii. how does the tree work
- the tree recursively splits the dataset based on **features that maximise the purity**
- the splitting continues until
	- the node is pure i.e. all data points belong to one class
	- max tree depth is reached
	- min number of samples in a node is too low to split further
	- further splits yield no meaningful reduction in impurity or improvement (e.g. impurity gain ~ 0)
	- no remaining features to split
#### > Ensemble Learning
def: **combine multiple models** (= "learners") to improve performance over individual models

Core concept:
- leverage **collective** intelligence
	- combine, **average** outputs, vote among their predictions
	- -> reduce **errors**, improve accuracy, limit overfitting
- **compensate** for each other's **mistakes**
	- -> more robust overall 

Type of learners:
- **Base learners**: individual model in an ensemble learning model 
- **Weak learners**: a base learner that performs slightly better than random guessing (which is bad)
	- examples:
		- weak = shallow decision trees
		- base/strong = fully grown decision trees
##### >> i. Bagging
def: a.k.a. bootstrap aggregating, build multiple models (usually same type) on different subsets of training data (bootstrap samples) and **combine their predictions**
-> **Bootstrap**: sampling technique where multiple datasets are created by **random sampling with replacement** from the original data (i.e. can be duplicates)

**>>> i. a. Random forest**
def: ensemble learning method using **bagging with decision trees**
-> many uncorrelated trees on bootstrapped samples, using random subsets of features at each split
-> aggregates tree predictions for improved accuracy and reduced overfitting 

##### >> ii. Boosting
def: **sequentially** build models that **learn from mistakes** of previous models, emphasising harder cases to improve overall accuracy 
-> final prediction is a weighted combination of all models

**>>> ii.a. AdaBoost (Adaptive Boosting)**
def: **sequentially trains weak learners** (often decision trees) where each model focuses on the errors of its predecessor, combining them **weightedly** for improved accuracy 

**>>> ii.b. Gradient Boosting Machines (GBM)**
def: sequentially build learners by optimising a **loss function** using **gradient descent method**

- **ii.b.1. XGBoost (Extreme Gradient Boosting)**
	- def: designed for **speed and performance**, emphasising **regularisation** and efficient **parallel processing**
		- **parallel processing**: optimised and efficient distributed computing
		- **regularisation**: additional regularisation terms (penalty) in the objective function that control model complexity and prevent overfitting
- **ii.b.2. CatBoost**
	- def: specifically designed to handle **categorical features**, reducing overfitting with ordered boosting
		- **ordered boosting**: permutation-driven technique that prevents target leakage and overfitting
- **ii.b.3. LightGBM**
	- def: optimised for even **faster** training with a novel leaf-wise tree growth strategy and particularly good for **large datasets** 

##### >> iii. Stacking
def: different models (*possibly different types*) are trained, and a **meta-model** is used to combine their predictions

Common example: 
- **Base learners** of different types are stacked, e.g. combining
	- decision trees
	- NN
	- linear models
- Trained on the **same dataset**
- Then **combine predictions** using a logistic regression or gradient boosting model as the **meta-learner**
	- trained on these outputs

#### > Neural Networks
def: stack of connected layers that progressively extract more meaningful patterns from data
-> inspired by structure and functioning of human's brain, neurons (or nodes)

cf. [[#5. Deep Learning, AI]] when the layers become deep, i.e. numerous 

**>> The basic unit: The Neuron (or Node)**
- takes multiple inputs 
- weights them by importance
- adds them up
- applies an activation function (e.g. sigmoid, tanh, ReLu, ...) to decide "how much to fire/activate" (i.e. how important)
- sends output to neurons in the next layer

-> activation determines how much and in what way a neuron contributes to the final decision

**>> The structure: Layers**
- input layer: where data enters (one neuron per feature)
- hidden layers: where the magic happens, these layers find the patterns
- output layer: produce the final prediction (e.g. probability of each class)

cf. [[#> Network Layers]] in [[#5. Deep Learning, AI]]

**>> The Learning Process**
- forward pass: data flows through network to make a prediction
- calculate error: compare prediction to actual answer
- backward pass: send the error backward through the network to adjust all the weight => backpropagation
  cf. [[#> Training Cycle Forward vs. Backward propagation]] in [[#5.2. Learning & Optimisation]]

**>> Hierarchical Learning**
- first hidden layer learns simple patterns (e.g. edges in images, basic word combination in text)
- second hidden layer combines those to learn more complex patterns (e.g. shapes, phrases)
- third hidden layer combines those to learn even more complex patterns (e.g. object, sentences)

=> similar to an assembly line where
basic components -> assembled parts -> assembled complex units -> ... -> final product

**>> Importance of Activation Functions**
cf. [[#> Activation functions]] in [[#5. Deep Learning, AI]] 

but basically, without them, NN--no matter how many layers-- would just be fancy linear regression. 
-> the non-linearity introduced by activation functions is what allows NN to learn complex, **CURVED** patterns instead of straight lines 

in fact, each layer would just be doing `output = (weight x input) + bias`
which is a linear transformation, 
stacking them would just be a big linear transformation. 

but activation functions like ReLu, sigmoid, tanh are non-linear,
-> so they "bend" the data at each layer 
=> results in a model that is more flexible and capable of learning curved decision boundaries vs. straight lines 

### 4.1.2. Unsupervised Learning
def: learning by finding patterns in **unlabelled data** -- without pre-existing labels
-> model find **underlying patterns**, relationships, structure without predefined outputs

💡 Core Idea: Discover **hidden patterns** or groupings

Some examples of application:
- customer segmentation
- anomaly detection
- recommendation systems 
- EDA in various domains

*note: another type of unsupervised learning that's not discussed here, association rules methods = find rules that describe relationships between variables in large dataset (e.g. apriori algoritm)*
#### > Clustering
def: group similar data points into **clusters** based on **similarity**
##### >> i. K-Means
def: partitioning method that consists in assigning data points to a fixed number K of exclusive clusters based on proximity (feature similarity) to **cluster centroids** 

How? 
- choose K initial centroids (often randomly selected points in the data space)
- assign each datapoint to the nearest centroid based on a distance metric (commonly euclidean)
- recalculate centroids as the mean of all points assigned to each cluster
- repeat iteratively until convergence -> centroids stabilise 

note: different from [[#>> i. K-Nearest Neighbours (KNN)]]
- **KNN** (supervised classification): assigns labels based on nearest neighbours 
- vs. **K-means** (unsupervised clustering): grouping data points into clusters

**>>> Elbow Method**
def: heuristic used to determine the optimal number of clusters K by finding the "elbow" point in the **within-cluster sum of squares** (WCSS) plot
- WCSS: measures how tight the clusters are

**>>> Silhouette Score**
def: a performance metric that measures of how similar an object is to its own cluster compared to other clusters ([-1, 1])  
→ used as a unsupervised clustering **validation** step, “how meaningful are these clusters?”

cf. [[#4.2.1. Performance Metrics]] for more on the topic of metrics 

**>>> Fuzzy K-Means**
def: allow datapoints to **belong to multiple clusters** with varying degrees of membership, expressed as **probabilities** rather than hard labels. 
-> i.e. **soft cluster membership**

##### >> ii. Hierarchical clustering
def: build a **tree-like structure** (**dendogram**) by iteratively merging or dividing clusters, either agglomerative (bottom-up) or divisive (top-down)
- **agglomerative**: start with individual points and merge the closest clusters iteratively
- **divisive**: start with all points in one cluster and split recursively

##### >> iii. DBSCAN (Density-Based Spatial Clustering)
def: group points **based on data density** -> identify clusters as dense regions separated by sparser areas
➕ good for detecting clusters of arbitrary shape and spotting outliers, noise 

##### >> iv. GMM (Gaussian Mixture Models)
def: use probabilistic models assuming data = **mixture of several Gaussian distributions**
-> assign **soft cluster memberships** vs. hard assignments

#### > Dimensionality reduction
def: simplify data by reducing number of features (dimensions) while preserving important information
##### >> i. Principal Component Analysis (PCA)
def: reduce the dimensionality of data by finding the **principal components** (PC) that **capture the most variance**
-> linear transformation technique that converts possibly correlated variables into linearly uncorrelated PC

- **principal components**: new axes formed as linear combinations of the original variables that capture the most variance i.e. spread/diversity in the data
	- **first PC**: captures the max variance possible along a single axis
	- each **subsequent PC**: captures the max remaining variance while being **orthogonal** (i.e. uncorrelated) to the previous ones. 
- "capturing **the most variance**": these components rpz directions in the data where the points spread out the most 
	- -> thus carrying the most info about **the differences in the data** 

##### >> ii. UMAP
def: **U**niform **M**anifold **A**pproximation and **P**rojection, non-linear dimensionality reduction techniques for visualising high-dimensional data
-> transforms high-d data into embeddings 
-> preserve both local (i.e. similarities among nearest neighbours) and global (i.e. distances/relationships between clusters) structure in the data
-> faster => scale well to large datasets
-> clustering in low-dimensional embeddings

*note: seems like it's the new upgraded and challenger of the OG pioner t-SNE, but pretty much better.* 

##### >> iii. t-SNE
def: **t**-**D**istributed **S**tochastic **N**eighbour **E**mbedding, also a non-linear dimensionality reduction techniques for visualising high-dimensional data
-> transforms data into 2D or 3D embeddings
-> preserve local structure BUT can distort global relationships
-> visually distinct clusters
-> slower on large datasets
-> "stochastic" because the same data can give visually different results on different runs

*note: seems like it's the OG method, but now outperformed by upgraded method UMAP.* 

##### >> iv. Autoencoders (NN)
def: a type of NN trained to **reconstruct their input**, they consist of:
- an **encoder**: compress input data into a lower-dim latent rpz 
- a **decoder**: reconstruct original input from this compressed encoding
-> by learning to **minimise reconstruction error**, they effectively learn compact and meaningful rpz of data
=> useful for dimensionality reduction and noise reduction 


### 4.1.3. Semi-Supervised Learning
def: **hybrid** of (small) **labeled** and (large) **unlabelled** data for training
-> guide learning process with the labeled data
-> still extract useful structure from the unlabelled data
-> improve the model performance overall
➕ real-world problems where labeled data isn't easily accessible or available

💡 Core Idea: **Learn from a little labeled + lots of unlabeled data** 

#### > Self-Training
def: model is trained on small labeled data, then predicts **(pseudo-)labels** for the unlabeled data, which are then used (add to training set) to retrain the model **iteratively**. 

#### > Co-Training
def: two or more models teach each other by labeling data for each other based on their predictions 

#### > Label Propagation
def: uses **graph-theory** -> creates a similarity-graph where
- labeled nodes have fixed labels, 
- unlabeled nodes propagate labels from their neighbours 
- works great when you can define similarity between points

#### > Consistency Regularisation
def: deep-learning based technique, force model predictions to be **stable** under perturbation (transformation, noise)
-> "data augmentation"

the core idea: model should produce similar outputs for 
- nearby points in the data space 
- same input under different transformation (augmentation, dropout, rotation, etc.) or noise

### 4.1.4. Reinforcement Learning
def: type of ML where an autonomous agent **learns** to make decisions by **interacting** with an environment, getting **feedback** through rewards and penalties
-> the goal is to maximise cumulative rewards (<-> min penalties) over time
-> **no labeled input-output pairs**

💡 Core idea: **Trial and Error** process 

The step-by-step process:
- **agent** observes **current state** of the environment 
- takes an **action**
- receive **feedback**, in the form of reward or penalty 
- transitions to a **new state**

*note: Deep RL combines RL with NN => can solve high-D and complex tasks*
#### > Markov Decision Process (MDP)
def: most RL problems are modeled as an **MDP**, defined by these key components: 
- **Agent**: the decision-maker or learner
- **Environment**: the system or *world* with which the agent interacts
- **State** (s): a representation of the *current situation* of the environment the agent is in
- **Action** (a): the *choices* available to/taken by the agent to transition between states
- **Reward** (r): the *feedback signal* from the environment based on the action taken -- indicates how good the action was in that state (can be a reward or a penalty)
- **Policy** (π): the *strategy* the agent follows to **decide its next action**
	- **mapping from states to actions** / "what actions lead to rewards"
	- basically the agent's *brain* 
- **Value function** (V(s) or Q(s,a)): the expected cumulative future reward. 
	- not about immediate gratification but long-term success (damn it's better wired than a hooman in theory)
- the **GOAL** of the agent: learn a **policy (π)** that maximizes the **cumulative future reward**.

#### > Categories of RL algorithms
##### >> i. Model-based vs. Model-free
**>>> i.a. Model-based**
def: the agent learns a **model of the environment's dynamics** (i.e. the probability of transitioning to a new state and the rewards for doing so)
-> the agent can plan by simulating future states within its internal model 
e.g. Dyna-Q, MuZero

- **What they learn**: A model of the environment dynamics  
- **How they work**: Learn transition probabilities P(s'|s,a) and reward function R(s,a)  
- **Planning**: Can simulate future states before taking actions

**>>> i.b. Model-free**
def: most common approach, the agent doesn't learn a model of *how the environment works*
-> it learns **directly which actions are good or bad** through trial and error 
e.g. [[#> Q-Learning]], Policy Gradients 

-> can be value-based or policy-based... or both

##### >> ii. Value-based vs. Policy-based vs. Actor-critic
**>>> ii.a. Value-based**
def: agent learns a **Value Function** Q(s,a), which estimates the quality of an action in a state 
-> the **policy is implicit**: always choose the action with the highest value
➕ excellent for discrete action spaces (e.g. left/right/jump)
e.g. [[#> Q-Learning]], Deep Q-Networks

- **What they learn**: A value function (V(s) or Q(s,a))
- **How they work**: Learn which states or state-action pairs are most valuable
- **Policy**: Implicit - choose the action with highest value
- **What gets updated during training**: Q-Table (or value estimates) with Bellman Equation 
  -> adjust **expectation** for a state-action pair based on what actually happened 

**>>> ii.b. Policy-based**
def: agent directly learns the optimal **Policy** π without needing a value function. 
-> outputs a probability distribution over actions 
➕ excellent for continuous action spaces (e.g. steering a car) or stochastic policies

- **What they learn**: The policy directly (π(a|s)) -- i.e. what to do directly, the actions 
- **How they work**: Learn the probability distribution over actions for each state
- **Value function**: Not learned explicitly
- **What gets updated during training**: The probability distribution over actions
  -> increase or decrease policy probability of an action (~ **instincts**) depending on outcome 

**>>> ii.c. Actor-critic**
def: **hybrid** approach that combines the best of both **Value**-based and **Policy**-based
-> the **Critic**: measures how good the action taken was (value-based)
-> the **Actor**: updates the policy based on the Critic's feedback (policy-based)
➕ actually the foundation for most modern, state-of-the-art IRL algo

- **What they learn**: Both policy (actor) AND value function (critic)
- **How they work**:
	- Actor suggests actions (like policy-based)
	- Critic evaluates those actions (like value-based)
- **What gets updated during training**: Both-- Actor improves its actions while Critic improves its predictions in a feedback loop (~ **understanding** of the world)

#### > Exploitation vs. Exploration
def: RL involves balancing between
- **Exploitation**: choosing **known actions** that yield high rewards (i.e. **make best decision** given current knowledge)
- **Exploration**: trying **new actions** to discover better rewards (i.e. **gather more info** by trying new things)

It is a trade-off because:
- too much exploitation: might never find optimal strategy 
- too much exploration: will never reap the rewards of what is learnt 
- => need a balance 

#### > Q-Learning
def: model-free **value-based** RL algo
-> no model of the env

Goal of Q-Learning:
- agent learn the best actions in various states 
- => maximum cumulative rewards 

How?
- algo builds a **Q-table**
	- in which each entry has a Q-value representing
		- **expected future rewards** for a specific action in a given state 
- the agent interacts with the env
- the Q-values get updated using a learning rule
	- based on receiving rewards and new states
- over time, the agent discover the optimal policy 
	- = strategy of choosing actions that yields the highest long-term reward

Step-by-step:
- start in a state,
- select an action,
- observe rewards and next state
- update Q-val for the state-action (Q(s,a)) pair using the **Bellman equation** (**learning process**)
	- adjust Q-val based on observed rewards and highest Q-val for next possible actions
- repeat and refine Q-table through exploration and exploitation
	- until agent learns which actions are best in each state 

**Bellman equation**
$$
Q(s,a) = Q(s,a) + α * [ R(s,a) + γ \times \text{max}(Q(s', a')) - Q(s,a) ]
$$
where:
- $\alpha$ learning rate
- $\gamma$ discount factor (how much we care about future rewards)
- $R(s,a)$ immediate reward
- $\text{max}(Q(s',a'))$ estimate of the best future rewards from the next state

➕ Advantages 
- Trial and error
- Self-improvement and autonomous learning
- Simple and efficient

➖ Disadvantages 
- Slow learning
- Expensive in some environments
- Curse of dimensionality
- Limited to Discrete actions

### 4.1.5. Deep Learning
def: using multilayer Neural Networks (NN) for complex data like images, speech or text

💡 Core Idea: **Learn hierarchical representations automatically** 
- **hierarchical representations**: learning patterns in layers, a bit like feature recognition assembly line 

cf. [[#> Neural Networks]] in [[#4.1.1. Supervised Learning]] 
cf. next chapter [[#5. Deep Learning, AI]] for more

## 4.2. Model Evaluation
def: process of assessing how well a trained model will perform on unseen data for a given task

💡 Does a trained model **generalise** well to new, unseen data?

### 4.2.1. Performance Metrics
def: the performance metrics depend on the problem type (classification, regression, clustering)
=> some metrics can be more important than others depending on the application 

#### > **Metrics for [[#> Classification|Classification]]**
- True Positive (TP): correctly positive predicted (in fact a P (1)) 
- True Negative (TN): correctly negative predicted (in fact a N (0))
- False Positive (FP): wrongly positive predicted (actually a N (0))
	- Type I error: detect an effect that is not present
- False Negative (FN): wrongly negative predicted (actually a P (1))
	- Type II error: fail to detail an effect, that is present 
##### >> Accuracy 
def: proportion of correct predictions (TP and TN) out of all predictions 
➖ not good for imbalanced datasets
$$
Accuracy = \frac{TP+TN}{Total} = \frac{TP+TN}{TP+TN+FP+FN}
$$
##### >> Precision
def: ratio of TP to **All Positive** predictions (TP + FP)
=> measure quality of positive predictions
-> precision is best when FP is low, i.e. not many **False Alarms** (Type I)
$$
Precision = \frac{TP}{TP+FP}
$$
"from what you got, how much of it is actually right... doesn't tell if you got them ALL though"
##### >> Recall (Sensitivity)
def: ratio of TP detected among all **Actual Positives** (TP + FN)
=> measure model's ability to find ALL positives
-> recall is best when FN is low, i.e. not many **Miss Out** (Type II)
$$
Recall = \frac{TP}{TP+FN}
$$
"did you get them all from the pool? doesn't tell how "precise" you were with the ones you got though..."

##### >> Rates
- TPR = True Positive Rate = **Sensitivity** = **Recall** = **Hit-Rate** 
	- $TPR = TP / Actual Positive = TP / (TP + FN)$

- TNR = True Negative Rate = **Specificity** / Selectivity
	- $TNR = TN / Actual Negative = TN / (TN + FP)$

- FPR = False Positive Rate = Probability of False Alarm / Fall-Out
	- $FPR = FP / Actual Positive = FP / (TP + FN)$

- FNR = False Negative Rate = Probability of Detection / Miss-Rate
	- $FNR = FN / Actual Negative = FN / (TN + FP)$

##### >> Confusion matrix
def: shows TP/TN/FN/FP 
-> diagonal intense = goooood 
##### >> F1-Score
def: harmonic precision and recall 
$$
F1 = \frac{2 \times precision \times recall}{precision + recall}
$$
##### >> ROC/AUC
def:
- **ROC** (receiver operating characteristic curve): visualise trade-offs between y=TPR (**recall**, sensitivity) and x=**FPR** at various **thresholds of classification** (usually .5, but can be tweaked depending on goals)
- AUC (area under the curve): measure overall **separability / discriminatory** power of model (i.e. ability to distinguish between classes)

=> ideally ROC -> (y=1)
=> ideally AUC -> 1 

**>>> Precision-Recall AUC**
def: for imbalanced classification problems, more informative than classic ROC-AUC

- balanced classification: TPR(recall)-FRP 
- imbalanced classification: TPR(recall)-Precision
	- Precision = TP / All positives = TP / TP + FP 

#### > **Metrics for [[#>> i. Linear Regression|Regression]]**
##### >> Mean Absolute Error (MAE)
def: average of absolute errors (with error = predicted - actual)
##### >> Mean Squared Error (MSE)
def: average of squared errors 
-> punishes large errors more heavily 
##### >> Root Mean Squared Error (RMSE)
def: square root of MSE
-> interpretable in the original data units
##### >> $R^2$ Score
def: a.k.a. coefficient of determination, evaluate the goodness of fit of a regression model -- the predictive power [0, 1]
-> provide the proportion of variance in the dependent variable that is explained by the independent variables in the model
- $R^2=0$ : the model doesn't explain any variable (eq. to predicting the mean) -> bad
- $R^2=1$ : the model perfectly explains all the variance in the target variable -> best

#### > **Metrics for [[#> Clustering|Clustering]]**
##### >> Silhouette Score
def: how similar points are to their own cluster vs. other clusters
-> used by cf. [[#>> i. K-Means]] 

##### >> Calinski-Harabasz Index
def: ratio of between-cluster to within-cluster dispersion 

### 4.2.2. Cross-Validation Eval
def: **resampling procedure** used to select and evaluate ML models.
-> can be used for:
- **model selection**: choosing between different models or hyperparameters 
- **model evaluation**: getting a reliable estimate of model performance

cf. [[#3.5.2. Cross-Validation]] in [[#3. Data101, EDA]] (kind of an intro, redundant but it's okay)

naive approach:
-> use a single train/test split
- performance estimate depends heavily on which random split you get
- might be lucky or not with the test set 
- waste of data potential by not using it all for training or evaluation

=> cross-validation solves this by using data more efficiently and providing a more robust performance estimate
➕ less bias, more reliable 
➕ useful when data is limited
➕ robust performance, less overfitting

#### > i. k-Fold CV 
def: most common method,
- dataset is split into $k$ equal parts (= folds), 
- model is trained on $k-1$ folds and tested on the remaining fold
- repeat process $k$ times, each time rotating i.e. using a different fold as the test set 
- final evaluation metric = average performance across all $k$ trials
#### > ii. Stratified k-Fold CV 
def: variation of k-fold CV, but this preserves the same class distributions/proportions in each fold as in the full dataset
=> super useful for **imbalanced** classification problems to ensure each fold is representative 

#### > iii. Leave-One-Out CV (LOOCV)
def: special case of k-fold CV where $k$ = number of datapoints
- each fold = a single datapoint used as the test set
- model is trained on all remaining points

➖ computationally costly

*note: Leave-P-Out CV is the generalisation of this, where $p$ datapoints are left out as the test set each time, iterations over all possible combinations of $p$ points 
=> heavily computationally demanding*

#### > iv. Time Series CV
def: designed for time-dependent/temporal data, where training sets respect temporal order (no future data leaks into training)
-> typically grows the training window forward and tests on subsequent periods to mimic forecasting scenarios
=> basically past data for training, future data for testing

### 4.2.3. Fundamental Eval Concepts
##### > Bias-Variance Trade-Off
- **bias**: error from overly simplistic assumptions -> underfitting because the model can't capture the underlying trend 
- **variance**: error from excessive sensitivity to noise and small fluctuations in the training data -> overfitting because the model memorises the training data instead of learning the generalisable pattern
- **the trade-off**: increase a model's complexity typically reduces bias but increases variance, and vice versa -- the goal is to find the sweet spot of model complexity to minimise both error (i.e. total error) 

|                   | **High Bias**                                                | **High Variance**                                              |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| **What it means** | The model is **too simple** and misses patterns in the data. | The model is **too complex** and learns the noise in the data. |
| **Problem**       | **Underfitting**                                             | **Overfitting**                                                |
| **Performance**   | Bad on **training data** AND bad on **test data**.           | Excellent on **training data**, but bad on **test data**.      |

##### > Overfitting
model performs well on training data but poorly on test data
-> model memorise the noise, fit too closely to training data (weak generalisation), too complex model
- **Detection**: Large gap between training and validation performance
- **Solutions**: Regularisation, simpler models, more data, dropout, early stopping

##### > Underfitting
model performs poorly on both training and test data
-> model too simple to capture underlying patterns in data, bad in training and testing 
- **Detection**: Poor performance everywhere
- **Solutions**: More complex models, better features, longer training

##### > Regularisation in ML
def: add penalty on the model training to manage complexity and prevent overfitting (by relying too heavily on particular features or patterns in training data)

methods to **mitigate overfitting**, esp. with high number of features and simple model such as Regression (cf. [[#>> i. Linear Regression]]) is needed: 
- L1 Regularisation (Lasso)
	- Lasso: Least Absolute Shrinkage and Selection Operator
- L2 Regularisation (Ridge)

⚠❗ too high regularisation can lead to underfitting 

**>> i. Lasso Regression (L1 Regularisation)**
def: adds a penalty to the loss function = absolute value of the magnitude (sum of coeffs)
-> encourage sparsity (lots = 0) by shrinking some coeff **exactly to 0**
=> perform **feature selection** by effectively **removing** less important features 
➕ useful when only a subset of predictors are truly relevant, huge number of features
➕ more interpretability and simplicity (fewer features)
➖ multi-collinearity features
$$
Loss = MSE + \lambda\sum^n_i{|w_i|}
$$
with $\lambda$ regularisation param controlling penalty strength (tradeoff between bias and variance)
and MSE = Mean squared error 

**>> ii. Ridge Regression (L2 Regularisation)**
def: adds a penalty to the loss function = squared magnitude (squared sum of coeffs)
-> shrink coeff towards 0, but **not = 0** => keeps all features but **reduces** their influence if less important 
=> can't perform feature selection
➕ handles multi-collinearity 
➕ more model stability and accuracy
➖ less interpretability
$$
Loss = MSE + \lambda\sum^n_i{w_i^2}
$$


note: cf. [[#> Regularisation techniques in DL/AI]] in [[#5.2. Learning & Optimisation]] for more complex Deep Learning methods

## 4.3. ML Applications 
ML applications can be broadly split into 2 categories:
- **Perception & Understanding**: "what's happening?"
	- classifying images, detecting spam, understanding speech, etc.
- **Action & Decision-Making**: "what should we do?"
	- recommendation sys, self-driving cars, optimising supply chain, etc. 

But also some key Overarching Themes:
- Automation (replace repetitive and manual tasks)
- Personalisation (tailoring exp, content, products to users)
- Optimisation (making systems more efficient)
- Augmentation (assisting human experts)

Across all the fields:
- Healthcare
- Finance
- Transportation
- Retail and e-commerce
- Cybersecurity
- Manufacturing and logistics
- Customer service 
- Robotics 
- ... 

or by applications:
### > Computer Vision (CV)
def: teaching machines to "see and understand" visual data
object: image, video, faces ... 
types: 
- classification, categorisation, labeling
- detection, localisation
- segmentation, understanding, grouping/clustering
- recognition, identification, verification
- generation, synthesis

examples:
- image and video classification -> categorise / label / identify
- image segmentation -> pixel-level understanding / grouping
- facial recognition -> identify and verify
- object detection -> locate and classify 
### > Natural Language Processing (NLP)
def: teaching machines to "understand, read and write" human language
object: text, document, sentiment, language, speech, ... 
types:
- translation
- analysis, understanding
- extraction
- recognition, conversion
- summarisation
- synthesis, generation
- identification, classification
- chatbot, virtual assistants, conversational AI

examples:
- machine translation -> google translate
- sentiment analysis -> analysis and understanding of tone
- text summarisation
- named entity recognition -> identify, extract, classify 
- text generation
- speech recognition -> conversion speech to text
### > Speech & Audio Processing
def: teaching machines to "hear, interpret and generate" sounds and speech
object: voice, command, speaker
type: 
- assistant
- recognition
- identification and verification
- detection and classification
### > Predictive Analytics & Forecasting
def: use historical (past) data to predict future outcomes and trends

examples:
- demand forecasting
- predictive maintenance 
- financial forecasting -> predict stock price, market trends, credit risk
- healthcare prognosis -> predict outcomes or disease progression
### > Recommendation Systems
def: algorithms that suggest relevant items to users based on their preferences and behaviours. 
object: content, product, user, feed, ...
- personalised recommendations
- collaborative filtering 
- profiling

examples:
- content recs -> netflix, youtube, news feed
- product recs -> amazon
### > Robotics & Control
def: programming physical systems to perceive their environment and take intelligent actions autonomously 
- Human-Robot interaction and collaboration
- Autonomous navigation and path planning
- Manipulation and grasping using RL 
### > Anomaly & Fraud detection
def: identify rare, unusual patterns or events that deviate significantly from the norm
- fraud detection in finance and cybersecurity
- fault detection in manufacturing and infrastructure 
### > GenAI
def: AI generation of "new" content that is similar to (but not entire copy) of its training data
- art generation -> images, music, videos
- code generation -> Github copilot, ... 
- synthetic data generation -> to train ML 

# 5. Deep Learning, AI
def: **Deep Learning** is a subset of AI/ML that use **NN with many layers** ("deep" architectures) to automatically learn **hierarchical representations** of data => for more advanced complex patterns
-> multilayered artificial neural networks inspired by human brain to analyse and learn from large and complex datasets (like image, text, sound)
➕ complex patterns, large datasets (actually needed for good performance)
➖ small datasets, black box (poor interpretability) 

cf. [[#> Neural Networks]] in [[#4.1.1. Supervised Learning]] for an introduction to NNs!

- **Hierarchical representations**: learning patterns in layers, a bit like feature recognition assembly line, one layer = 1 feature / step 
- **AI**: umbrella concept of machines doing intelligent tasks 
	- broad field of CS focused on creating systems capable of performing tasks that typically require human intelligence (reasoning, learning, problem-solving, understanding language, perception)
- **NN**: foundation of DL, neural networks are AI/ML models inspired by the structure and functioning of the human brain, **neurons**, they process data through **layers** and learn patterns to solve complex tasks
	- interconnected **layers** of units called **artificial neurons or nodes (or perceptrons)** -> [[#> Network Layers|more about Network Layers]]
	- each node receives inputs and processes them using a mathematical function called an **activation function**, then passes the output to neurons in the next layer 
	- NN learn by **adjusting strengths/weights** of connections between neurons during training 
		- => enable them to recognise patterns and make predictions from data

- Feed-forward vs. Back-propagation 
	- cf [[#> Training Cycle Forward vs. Backward propagation]]
	- note: mostly all NN use both for training phase:
		- forward passes to compute predictions (needed for error calculation too)
		- followed by backward passes to learn optimal parameters (use gradients)

## 5.1. Core architectures
-> NN architectures used in DL but each optimised for different types of data and tasks
- FFNs
- RNNs (feedback loop (i.e. memory capacity) -> sequential data -> text/time series)
- CNNs (convolutional layers + kernels -> spatial patterns -> image)
- Transformers (self-attention -> long-distance relationships/context -> language)

### 5.1.0. Feed-forward Neural Networks (FNNs)
def: simplest form of NN where information flows in one direction, from input to output. 
-> no cycle or loop in the network architecture 

*note: the layers are called "Feed-forward" layers, but they still use backpropagation for the learning phase in order to update the weights!*

#### > Multi-Layer Perceptron (MLP)
def: type of FNN consisting of fully connected neurons with a nonlinear kind of activation function
-> each neuron in one layer connects to every neuron in the next
-> used in various fields: image recognition, NLP, speech recognition
➖ but cannot exploit spatial or sequential structure of data

### 5.1.1. Convolutional Neural Networks (CNNs)
def: specialised NN for processing **grid-like data** such as images, using **convolutional layers** to learn **spatial patterns** followed by **pooling layers** that downsample **spatial dimensions**

- **purpose**: image and video data
- **key idea**: uses filters to **detect spatial patterns** (edges, shapes, objects, textures)
- **applications**: image classification, object detection, computer visions tasks, medical imaging 

**> Convolution layers**
def: layers that apply convolution operations to **extract spatial features** through **learnable filters or kernels**

**> Pooling layers**
def: layers that **reduce spatial dimensions** while retaining important features through operations like max pooling or average pooling

### 5.1.2. Recurrent Neural Networks (RNNs)
def: NN specialised in **sequential data** processing, they have loops in their architecture that allow information to persist across sequence steps, which enables the network to maintain context / **internal memory**
-> **recurrency** to retain temporal context

- **purpose**: sequential data (text, time series, speech)
- **key idea**: has memory to process sequences step-by-step
- **variants**: LSTM (Long Short Term Memory), GRU (handle long-term dependencies better by controlling the information flow)
- **applications**: text generation, time series forecasting, speech recognition 

#### > Vanishing gradient problem
def: challenge in deep NN where the gradients (which guide learning by adjusting weights) become very small as they are back propagated through layers. 
-> when the gradients shrink too much, especially in early layers, those layers learn very slowly or stop learning altogether

Why this happens? 
- gradients get multiplied repeatedly by values < 1 (e.g. derivatives of activation functions) causing them to shrink exponentially as they move backward through many layers

Some techniques to address this:
- ReLU activations
- Residual connections (i.e. skip connections❓)
- Careful weight initialisation
- Batch normalisation

#### > Long Short-Term Memory Networks (LSTM)
def: specialised types of RNNs designed to address the vanishing gradient problem in traditional RNN.
-> incorporate gated mechanisms to better capture long-range dependencies in sequential data
=> particularly effective for tasks like speech recognition, machine translation, sentiment analysis 

#### > Gated Recurrent Units (GRU)
def: ❓

### 5.1.3. Transformers
def: NN architectures that use **self-attention** mechanisms to process **sequential data**, **revolutionising NLP tasks**
-> evaluate importance of all parts of the input sequence **simultaneously** vs. sequentially like RNNs 
=> basically **parallel processing** for more efficiency and scalability + performance

- **purpose**: model NLP and beyond
- **key idea**: uses "**attention**" to **weigh importance** of different input parts 
- **application**: BERT, GPT models, machine translation, text summarisation

**> Attention Mechanism**
def: **NN technique** that allows model to dynamically focus on the most relevant parts of input data when processing it -- vs. treating all input element equally 
-> assigns different "**attention weights**" to various **components of the input**, based on importance for specific task
=> better context understanding, improving performance in lots of NLP tasks 

🔑 **different importance weights** to each component of the input -> help **dynamic focus**

**> Self-Attention**
def: specific form of attention mechanism that relates different positions within a single sequence to each other 
-> the model can **weigh the importance of each element in that sequence wrt others** 
=> compute attention scores among all elements in the sequence simultaneously thus capture long-range dependencies and context more effectively than traditional sequential processing like RNNs

🔑 the weights of each element is **wrt others** in a sequence -> capture **contextual dependencies** 

## 5.2. Learning & Optimisation
### > Core Concept: Gradient Descent 
def: the core concept, iterative optimisation algo used to **minimise the loss function** by **adjusting model parameters** (weights and biases)
-> calculate the gradient (direction and steepness) of the loss and take a step "downhill" towards the minimum 
### > Training Cycle: Forward vs. Backward propagation
- **Forward propagation**: process where input data flows through network, layer by layer, to generate an output prediction
  **-> pure calculation from input to output**
  **=> make predictions**
- **Backward propagation**: algorithm that calculates how to **update each weight** based on error (calculate the **gradient** of the loss function wrt each weight)
  **-> "how much did each weight contribute to the final error?"**
  **=> learning from mistakes + tuning**
### > Loss Functions & Optimisers
- Loss function (cost function): mathematical function that measures the "wrongness" of the model's predictions compared to the true labels
	- e.g. MSE for regression
- Optimisers: algorithms that update the model's weights based on the gradients computed during backprop -- they decide how to take a step downhill 
	- SGD (Stochastic Gradient Descent)
	- Adam (Adaptative Moment Estimation)

### > Regularisation techniques in DL/AI
def: methods to prevent overfitting (model memorises training data, but fails on new data)
- **Dropout**: randomly "drop out" / turn off neurons during training -> force network to not rely on any single neuron 
- **Batch Normalisation**: stabilise training by normalising layer inputs (or basically outputs from previous layer, $\frac{x-\mu}{\sigma}$)
- **Early Stopping**: stop training when validation performance stops improving and starts degrading
- **Weight Decay**: [[#>> i. Linear Regression|L1/L2 Regularisation]] adds a penalty to the loss function based on the magnitude of the weights, encouraging simpler models 

## 5.3. Key Components & Techniques
### > Activation functions
def: non-linear functions applied to a **neuron's output** to determine whether and how strongly it should "fire" (activate)
-> they introduce non-linearity, allowing the network to learn complex patterns
- **ReLU (Rectified Linear Unit)**: $f(x) = max(0,x)$ -- most common default choice, simple, efficient, helps mitigate the vanishing gradient problem
- **Softmax**: used typically in the final output layer for multi-class classification, it converts a vector of raw scores -> probability distribution where all values sum to 1 
### > Network Layers
- **input layer**: entry point for the feature data
- **hidden layers**: layers between input and output where the complex feature learning happens; the "**deep**" in deep learning : D 
- **output layer**: produces the final prediction (e.g. a class probability or a continuous value)
- *note: 1 node / neuron = 1 feature (e.g. 1 pixel BRUHHH)*
### > Transfer Learning
def: cornerstone technique where a model developed for one task is reused as the starting point for a model on a second task 
-> basically **leveraging pre-trained models** vs. training from scratch 
=> **fine-tune** a pre-trained model on your specific (often smaller) dataset 
## 5.4. Adv Models & Practical Aspects
### > Adv Model Types
**>> Autoencoders**
def: unsupervised NN used for learning efficient **data codings** (dim reduction) and **denoising** 
-> **compress** input into latent-space rpz and **reconstruct** output from this rpz

**>> GANs**
def: **G**enerative **A**dversarial **N**etworks, framework where **2 NNs** are trained in competition
- a **Generator**, which creates "fakes" (but really it's synthetic data samples that are indistinguishable from real data)
- a **Discriminator**, which spots fakes (vs. the real data)

-> widely used for generating realistic images, videos and other types of data

### > Practical aspects
**>> Hardware & Frameworks**
def: DL is computationally intensive:
- GPUs (Graphic Processing Units) for parallel computing 
- TensorFlow/Keras for production (cf. [[#iii. TensorFlow / Keras]])
- PyTorch for research (cf. [[#ii. PyTorch]])

**> Interpretability**
def: **XAI or Explainable AI**, the field concerned with making the "**black box**" decisions of deep learning models **understandable to humans** 
-> techniques include SHAP, LIME and saliency maps which are crucial for building trust and debugging models in sensitive domains like healthcare and finance

# 6. MLOps, cloud 
## 6.1. MLOps
def: MLOps is the practice of managing and **automating** the **entire ML lifecycle**, from data prep and model training to deployment (production), monitoring and maintenance
-> **streamline** ML project management: make ML dev and deployment faster, more scalable, more reliable, collaborative between data scientists, engineers and IT ppl

key components (automation of these!):
- **data** ingestion and **versioning**
- **data** preprocessing and feature engineering 
- **model training**, hyper-parameter tuning
- **model validation**, testing
- **model packaging and deployment** (via CI/CD pipelines)
- continuous production **monitoring** and alerting
- model **retraining** or updating triggered by monitoring
- **governance** and compliance throughout the lifecyle
- **automation** of workflows for scalability and repeatability 

advantages:
-> faster model updates
-> better model governance: compliance with regulations, transparency (explainability), ethics, security, accountability etc. 
-> risk reduction
-> continuous improvement 
##### version/source control
def: track, store and manage different versions of datasets, scripts, models
- git or similar tools

##### automated model testing and validation
def: crucial step before deployment, automation ensures consistent QA for accuracy, robustness, performance

- code: unit testing
- ML pipelines: integration tests
❓

##### CI/CD
def: continuous integration, delivery and deployment is a software dev practice 
-> automation of steps to build, test, deploy models rapidly and reliably 
=> frequent, reliable, error-free model updates! 
- CI: integrates changes continuously, + automated tests to ensure QA
- CD: automates packaging models + ensure production ready (manual approval for release tho)

tools:
- Jenkins
- GitHub Actions
- Azure DevOps
##### orchestration
def: coordination and automation of ML lifecycle tasks and workflows to run smoothly 
-> manages workflows and pipelines
-> orchestration tools ensure tasks happen in the right order, handle dependencies, manages failures automatically, streamline collab between teams

tools: (cf. [[#iii. Data Ingestion]] for data pipeline tools)
- Apache Airflow
- Prefect
- Kubeflow Pipelines

##### monitoring and observability
def: 
- monitoring tracks the **health and perf of ML models** in prod continuously (data drift = real time data change over time) -> catch anomalies, trigger alerts
	- + also more generally tracking resources and workflows to detect and rectify any ops issue in the pipeline 
- observability refers to how well you can **understand** what's happening inside your ML (logs, metrics, events)

tools:
- Prometheus 
- Grafana
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Could-native monitoring services

## 6.2. Cloud Computing
def: cloud refers to delivering computing resources (servers, storage, DB, ML tools) **over the internet** vs. local machines (so basically... **data centers**)
-> flexible and on-demand access
-> scalable infrastructure and service 
-> storage, data processing (big data), MLOps
-> **cost efficient**: pay-as-you-go models (depends on usage) i.e. no large upfront cost 

at the core, foundation of **cloud computing**:
- **distributed computing**: model where multiple independent computers work together on a shared task through network communication, each handling a part of the workload
	- => cloud systems are essentially large-scale distributed systems.

other core advantages of cloud computing:
- **elasticity**: instantly scale resources up/down based on demand -> you only pay for what you use and can handle sudden workload spikes smoothly
- **managed services**: cloud providers offer fully managed platforms for DB, ML, analytics, security, etc. -> less ops complexity and speed up dev 
- **global reach**: deploy apps across multiple geo regions -> low latency, redundancy 
- **security and compliance**: heavily secured and compliant with local regulations

note: **edge computing** is a distributed computing model that brings data processing and storage closer to the location where the data is generated (e.g. near sensors and devices vs. centralised cloud data centers)
-> the proximity helps reduce latency (lags, delays, response time) and thus more efficient real-time performance 
-> enhanced data privacy and security too 

### 6.2.1. Cloud concepts
##### virtualisation
def: abstracts physical hardware (servers) into virtual machines (VM) or containers
-> better hardware/resource usage by running multiple isolated env on the same physical machine
- VMs: acts like a separate, indep computer with its own CPU, memory, storage etc.
  -> run with its own OS (manages hardware, run programs)
  -> resource-heavy but strong isolation
- Containers: packaged and virtualised apps
  -> share the host OS kernel
  -> but still isolate apps and dependencies
  -> + lightweight and faster to start

##### containerisation 
def: containers package apps (+ everything they need to run = code, libs, deps) in a portable, lightweight, consistent unit. 

**>> docker**
def: build, package and run containers on a single machine or host. 
=> simple installation, small-scale apps

**>> kubernetes**
def: orchestration platform that manages many containers across multiple machines
-> handles deployment, scaling, networking and health 
=> production-grade, large-scale, distributed apps 

##### serverless computing 
def: allows running code without managing servers
-> cloud provider auto handles scaling, availability and infrastructure concerns
-> pay-as-you-go

##### Infrastructure as Code (IaC)
def: manages cloud resources/infrastructure using config files (json, yaml)
-> repeatable deployments and controllable versions

tools:
- Terraform
- AWS Cloud Formation

### 6.2.2. Cloud providers
##### AWS
def: Amazon Web Services
##### Google Cloud
def: Google's suite of cloud computing services 
##### Microsoft Azure
def: Microsoft's cloud computing service for building, testing, deploying and managing applications and services

# 7. Data Engineering
def: discipline focused on designing, building and maintaining the **infrastructure and systems** that enable efficient collection, storage, processing and delivery of data. 
-> core purpose: transform raw data into usable formats for data scientist, analysts, business users

## 7.1. Data Eng Cycle
The 4 steps of the Data Engineering Lifecycle: 
1. Data Generation
2. Data Storage & Management
3. Data Ingestion
4. Data Serving
### 7.1.1. Data Generation (Collection & Integration)
def: collect/extract data from various sources and unify it in consistent formats
-> the possible sources
- **Database**: organised, structured collection of electronic data that is stored, managed and accessed by a Database Management System (cf. [[#2.3. SQL]] for more info on database)
- **API**: **A**pplication **P**rogramming **I**nterface, sets of protocols, routines and tools that enable different software apps to **communicate** with each other. 
	- allow **interactions** with a service or platform through defined **set of rules and endpoints**
	- -> data **exchange** and functionality use without the need to understand / access the underlying code 
- **Logs**: files that record events, activities, system operation over time 
	- -> historical record of what has happened within a sys including timestamps, event details, performance data, errors, user actions. 
- Mobile Apps, or IoT, ... 

### 7.1.2. Data Storage (& Management)
def: implementing scalable storage solutions such as *data warehouses* or *lakes* for future processing and analysis -- ensuring data accessibility, security, and governance
-> data (digital information) can be stored on physical (hard drives) or cloud-based media (cloud platforms)

##### > how's data managed ie what's a "schema"?
- a schema turns raw data into structured information by enforcing a consistent format, i.e. it's like a template or a structure that defines how data is organised 
	- **schema-on-write**: define the schema before loading the data -> inflexible but data is clean and reliable (warehouse)
	- **schema-on-read**: apply the schema when reading the data -> flexible but can lead to garbage in, garbage out (lake)
	- **star schema**: intuitive, simplest and most common way to model/structure data in a data warehouse, it uses a **central fact table** connected to **multiple dimension tables**, forming a shape like a star
		- -> separate what you **measure** (**facts**) vs. how you **describe** it (**dimensions**)
	- **snowflake schema**: another way of organising data where the dimension tables are split into smaller sub-dimensions to keep **data more organised and detailed** 
		- -> structure is normalised (i.e. hierarchical vs. denormalised = flat dimensions)

##### > how's data stored ie in what kind of architecture?
- **data warehouse**: centralised repo for storing structured, **processed** and filtered data that is optimised for analysis and reporting 
	- **data**: structured and semi-structured / data is cleaned, transformed and modeled (often into a star schema)
	- **schema**: schema-on-write
	- **users**: business and data analysts, ppl running sql queries for BI dashboard and reports
	- **purpose**: **Business Intelligence** (BI), **reporting** 
	- **cost**: typically more expensive than massive storage
- **data lake**: vast, centralised repo that stores raw, **unprocessed data** in its native form, at any scale. 
	- **data**: all, (semi-)(un)structured
	- **schema**: schema-on-read
	- **users**: data scientists, engineers 
	- **purpose**: advanced **analytics**, **ML**, data **discovery** 
	- **cost**: typically cheaper than the warehouse
- **data lakehouse**: modern architecture that get the best of both world
	- low-cost, flexible storage of a data lake
	- management, performance and ACID transactions of a data warehouse (so BI tools can query it directly)

some examples of Data Cloud Platforms for each structure:

| Data Warehouse  | Data Lake                             | Data Lakehouse        |
| --------------- | ------------------------------------- | --------------------- |
| Snowflake       | Amazon S3<br>(Simple Storage Service) | Databricks Delta Lake |
| Google BigQuery | (MS) Azure Data Lake Storage (ADLS)   | Snowflake             |
| Amazon RedShift | Google Cloud Storage                  | Onehouse              |

### 7.1.3. Data Ingestion
def: collect, import data files from various sources into a database for storage, processing and analysis 
-> goal is to clean, transform and store data in an accessible and consistent central repo to prepare it for use within the organisation 

the different types of data ingestion:
- **batch**: process data in large, scheduled chunks/batches -> ok for non-time-sensitive and repetitive tasks e.g. monthly reports
- **streaming** (**real-time**): handle data as it arrives -> time sensitive tasks e.g. fraud detection 
- **hybrid**: both depending on case => more flexibility for diverse business needs 

##### > Data Pipelines
def: series of automated processes that transport and transform data from various sources to a destination for analysis and storage
-> typically involve data **ETL** into DB, lakes, warehouses. 

##### > ETL Process
def: **E**xtract, **T**ransform, **L**oad 
- **E**: extract raw data from various sources
- **T**: transform raw data (e.g. process and clean) into structured data ready to be stored or analysed 
- **L**: load the clean data into the data storage solution (warehouse or lake)

some **tools** used during the **data pipeline**: (cf. MLOps components [[#orchestration]] for similar concept)
- **Apache Airflow**: open-source tool that helps schedule, organise and monitor workflows -- can automate data pipeline
- **Prefect**: open-source orchestration engine that turns **python** functions into production-grade data pipelines -> can build and schedule workflows in python 

##### > Big Data Tools
cf. [[#7.2. Big Data]]

##### > MLOps & Cloud Concepts
cf. [[#containerisation]]
cf. [[#CI/CD]]
cf. [[#monitoring and observability]]
cf. [[#Infrastructure as Code (IaC)]]

### 7.1.4. Data Serving
def: last step of the data engineering process, once the data is stored in the data architecture and transformed into coherent and useful format, basically -> **provide data to end-users** for decision-making and operational purposes
- **Data Analytics**: broader discipline of data, focus on **interpreting** processed data through visualisation, reporting, and descriptive stats -- but also can delve into diagnostic, predictive and prescriptive **analytics**
- **Business Intelligence**: under data analytics, solely focus on **descriptive stats**, it's more so about reporting, dashboard, data visualisation => **monitoring and reporting**
	- **Tableau**: powerful, visual, drag-and-drop dashboards
	- Microsoft) **Power BI**: good for excel integration
	- Google) **Looker**: use modeling layer called "LookML"
	- **Qlik Sense**: associative analytics engine
	- **Streamlit**: open-source python framework to build interactive web apps for DS and ML

##### > Reverse ETL
def: the reverse ETL is the process of extracting data from a data architecture then transforming it to fit requirements of operational systems and then loading it into those operational systems. 
- **operational systems**: different from operating system (OS), they are software that run the day-to-day core operations of a business (CRM, ERP, E-commerce platform, ...)

so basically, vs. ETL (cf. [[#> ETL Process]]):
- **traditional ETL**: Extract data from various sources, Transform to fit Data Warehouse requirements, Load data into Data Warehouse for analysis
	- Production Apps (raw data) -> ETL Pipeline -> Data Warehouse (analysed and enriched data)
	- => "how can we analyse our business?"
- **reverse ETL**: Extract data from Data Warehouse, Transform to fit Ops Systems requirements, Load data into Operational Systems
	- Data Warehouse -> Rev ETL Pipeline -> Business Apps (CRM, Marketing tools, etc.)
	- => "how can we use our analysis to run our business?"

an example of flow: 
- **traditional ETL**
	- Shopify -> ETL -> Data Warehouse -> Tableau Dashboard 
- **reverse ETL** 
	- Customer LTV Score from (Data Warehouse) -> Reverse ETL -> Salesforce -> Sales team take actions based on those insights

=> it **closes the loop between data analysis and business operations** 
- data team does the complex analysis in the warehouse
- rev ETL allows non-tech team to use those with their tools to make impact on business

###### >> Business Apps
def: specialised software that each department in a company uses to do their job


> [!NOTE] note...
> slightly off topic section, but i don't know where to put this for now; still interesting to see and understand the big picture. 


**>>> i. Data Infrastructure Apps**
def: move and manage data between systems
- **Segment**: it is a **Customer Data Platform (CDP)** -- main job is to collect, clean, and control customer data from everywhere and send it to all other tools
  => **collect and route customer even data**
- **Fivetran / Stitch**: ETL tools that sync data from apps (like Salesforce) to the DW 
  => **ETL sync data from biz apps to DW**
- **Hightouch / Census**: Reverse ETL tools that sync data from the W back to business apps
  => **reverse ETL from DW to biz apps**
- **Airflow / Prefect**: workflow orchestration tools that schedule and manage data pipelines

**>>> ii. Customer-Facing Operations ("external")**
- **CRM**: **C**ustomer **R**elationship **M**anagement, central system for all customer data and interactions 
	- **Salesforce**: giant, highly customisable market leader
	- **HubSpot**: an all-in-one platform combining CRM, marketing, sales, and service -- often seen as a more user-friendly alternative to Salesforce for growing companies
- **Marketing Automation**: email campaigns, lead nurturing
	- **HubSpot**
	- **Marketo** (Adobe): Enterprise-level marketing automation
	- **Mailchimp**: Famous for email marketing, now expanding into broader marketing platforms.
- **Customer Support**: 
	- Zendesk, Intercom, Freshdesk

**>>> iii. Internal Operations Apps**
- **ERP**: **E**ntreprise **R**esource **P**lanning, central nervous system of a company, basically manage core processes like finance, inventory, manufacturing and HR. 
	- SAP, Oracle NetSuite, Microsoft Dynamics
- **HR & People Ops**: Workday, BambooHR 
- **Finance**: QuickBooks, Xero
- **Productivity & Collaboration**:
	- **Slack / Microsoft Teams**: communication
	- **Asana / Jira**: project and task management (Asana is general, Jira is very popular with software/engineering teams)
	- **Google Workspace / Notion**: all-in-one workspace for notes, docs, and wikis

**>>> iv. Analytics & BI Apps**
- **BI Tools**:
	- Tableau, Power BI, Looker, ... 
- **Product & Analytics**: track user behavior inside app/website to understand how ppl use and interact with the product
	- **Amplitude**: product & **user behaviour analytics** app, understand how users interact with the product -> **user journey** and **events**, informs what drives **retention**, **conversion** // complex, cross-platform user journey analysis
		- data focus: **user events** (clicked buttons, completed levels, upgraded plans), funnels, retention, cohort analysis, A/B testing
	- **Mixpanel**: very similar to amplitude, track specific user actions and build **funnels** to analyse conversion and retention // intuitive interface and strong funnel/reporting capabilities
	- **Google Analytics**: slightly different, more for marketing & acquisition analytics, understand where the website traffic comes from and what users do at a high level (not so specific and event-based)
		- data focus: page views, traffic sources, demographics, session data

##### > Data Governance
def: overall management of availability, **quality**, usability, **integrity** and security of data in an organisation -- in compliance with **legal and regulatory requirements**
-> it's about establishing rules and processes for handling data 

**>> Data Quality**
def: ensure data is accurate, complete and reliable

**>> Data Catalog**
def: a "library catalog" -- what data exists, where it is, what is means 
-> i.e.**data discovery**

**>> Data Lineage**
def: track where data comes from and how it moves/transforms through systems
-> i.e. **data lifecycle**

**>> Data Ownership**
def: accountability, stewardship and decision-making rights over a data asset 
-> quality, security, management, maintenance, ... 

**>> Access control**
def: determine who can see and use what data

**>> Compliance**
def: ensure data handling meets legal and regulatory requirements

##### > Data Privacy
def: a critical subset of data governance (the overall system), focuses on the proper handling of **personal and sensitive data** -- how it is collected, stored, shared and used in compliance with **laws and individual rights**.

**>> Consent**
def: getting permission from individuals to collect and use their data

**>> Right to Access/Deletion**
def: laws like GDPR give individuals the right to see what data you have on them and request its deletion

**>> Data Minimisation**
def: only collect data that you absolutely need 

**>> Major Regulations**
- **GDPR**: **G**eneral **D**ata **P**rotection **R**egulation, the lord EU law
- **CCPA/CPRA**: California Consumer Privacy Act, california state law
- (bit off-topic) **EU AI Act**: world's first comprehensive legal framework for AI passed by the EU -- law that regulates AI systems based on their potential risk to health, safety and fundamental rights. 
- some others depending on industry, data type, regions... 

## 7.2. Big Data
def: big data refers to the extremely large and complex datasets that are too big or diverse to be handled by traditional data processing methods. 
-> characterised by the **5Vs**:
- **volume**: massive amounts of data (e.g. petabyte = >1M gb)
- **velocity**: high speed at which the data is generated and processed
- **variety**: different types of data (structured, unstructured, semi-structured)
- **veracity**: accuracy and trustworthiness 
- **value**: useful insights and benefits extracted from the data

-> **large-scale data processing**

Other core principle: **FAIR** data principle 
- **F**indability: easy to find data for both humans and machines 
- **A**ccessibility: know how to access the data (authentication and authorisation)
- **I**nteroperability: data usually need to be integrated with other data, apps, workflows, etc. 
- **R**euse: ultimate goal of FAIR is to optimise reuse and replication of data
### 7.2.1. Hadoop
def: *open-source* framework for distributed **storage** and **processing** of large datasets across clusters of computers
- core includes
	- **HDFS** (hadoop distributed file system): splits and stores data across **multiple machines** (low-cost servers/computers i.e. **commodity hardware**)
	- **MapReduce** : programming model to allow **parallel** data-processing (**disk-based**)
- **fault tolerance**: if some parts of the sys fail, it'll still keep working properly without interruption
- **scalability**: ability of a sys to handle growing amount of work by adding more resources (e.g. more servers to manage more data, or more users without performance loss)
- **horizontal scaling**: increasing sys capacity by adding more machines to a network vs. making a single machine more powerful = vertical scaling -- basically distributes workload across many servers
- **batch processing**

### 7.2.2. Apache Spark
def: fast, flexible, **in-memory** data processing engine (often used alongside Hadoop)
-> in-memory = data processing directly in a computer's RAM (memory) instead of slower storage/hard drives (disk) => **++ SPEED**
-> RAM is limited in storage vs. disk 
- in-memory >> traditional disk-based processing like MapReduce (-> Apache Spark faster than just Hadoop)
- + offers batch processing, stream processing, ML, graph computations
	- -> **unified analytics platform**

### 7.2.3. Kafka
def: platform for **real-time data streaming** and messaging
- **high-throughput**: capacity to process a large volume of data in a given time
- fault tolerance 
- process data streams continuously and real-time 

### 7.2.4. NoSQL
def: type of DB designed for **flexibility** and **scalability** of unstructured or semi-structured data
vs. traditional relational DB

Different data models supported:
- **MongoDB** is a popular NoSQL db that stores data as JSON-like formats (**document** data model)
- **Cassandra** (**wide-column** data model)
- key-value,
- graph,
- ... 

### 7.2.5. Hive
def: high-level **data query and scripting tools** built on Hadoop, allows data analysis without deep programming knowledge with **SQL-like queries**

# 8. Data Science Challenges
def: common obstacles, limitations, and practical considerations encountered throughout the data lifecycle from collection to deployment. 

## 8.1. Data challenges
def: issues related to acquiring, cleaning, and preparing high-quality data from diverse sources, ensuring data is reliable and fit-for-purpose for analysis and modeling.
### Data Acquisition & Quality 
def: ensuring the collection of relevant, accurate, and complete data while overcoming issues like data silos, missing values, inconsistencies, and privacy compliance.

**> Finding Data**
data is often **siloed** across different company departments or doesn't exist
and it can be difficult to merge data from diverse, isolated systems with inconsistent formats and accessibility problems 

**> Bias & Ethical concerns in Data**
historical data can contain human and societal biases -> biased models
=> address fairness to avoid biases embedded in training data (cause results in models too)

**> Missing & Noisy Data**
real-world data is messy, with incorrect (inaccurate) entries, missing values (incomplete), outdated or duplicated data, inconsistencies 
-> these have to be thoroughly cleaned to avoid distorting the analysis 

**> Labeling**
for supervised learning, labeling data is often expensive, time-consuming, requires expert knowledge 

**> Unstructured Data**
processing and extracting meaningful insights from unstructured formats like text, images, logs, ... 

**> Imbalanced Datasets**
classes in classification problems are not represented equally, which can cause models to be biased toward majority classes

=> Some solutions:
- **SMOTE**: Synthetic Minority Over-Sampling Technique that creates artificial examples of the minority class to balance the dataset
- **Class weighting**: adjust loss function to give more importance to minority classes during model training

**> Privacy & Security**
protecting sensitive information amid growing regulations and increasing cyber threats 

### Data Preparation & Engineering
**> 80% Rule**
cleaning, transforming, feature engineering can take up to 80% of the project time

**> Data Leakage**
when information from the future / test set "leaks" into the training process, which leads to over-optimistic and useless models

e.g.
- Preprocessing (like scaling) done on the entire dataset before splitting
- Using future information to predict the past (sequential data, time-based data)

=> **Solution**: Always split data first, then preprocess using only training statistics
## 8.2. Model challenges
def: focusing on designing, training, evaluating, and interpreting models that generalise well, avoid bias, and balance accuracy with explainability and computational constraints.
### Model Development
def: designing and training models that balance complexity and performance, while addressing issues like overfitting, bias, reproducibility and computational efficiency.

cf. [[#4.2.3. Fundamental Eval Concepts]]

**> No one size fits all -- Choosing the Right Model**
no single model is best for every problem -> choosing the right algorithm is non-trivial 

**> Overfitting**
model performs well on training data but poorly on test data
-> regularisation, simpler models, more data, dropout, early stopping

**> Underfitting**
model performs poorly on both training and test data
-> more complex models, better features, longer training

**> Bias-Variance Trade-off**
tradeoff between too simple and too complex model 
-> basically balance between over/underfitting 

**> Reproducibility**
getting different results from the same code due to random seeds, different software versions or hardware 
-> it's important to ensure that the results can be reliably reproduced across teams and deployments 

**> Computational cost and efficiency**
def: increasingly critical challenges in model development due to the growing complexity and size of modern deep learning models

- **Resource Intensive Training**: large models require GPU resources, long training times -> can be costly and inaccessible for smaller teams or organisations
- **Inference Latency and Throughput**: need for models to perform quickly and at scale esp. for real-time apps like autonomous driving or recommendation systems -> efficient architectures and model compression techniques are necessary 
- **Algorithmic Efficiency**: research to reduce computational requirements while preserving accuracy -> e.g. transformers variants or lightweights CNNs
- **Trade-offs Between Accuracy and Efficiency**: balance between model complexity and feasibility 

**> Keep up with Rapid Tool Evolution**
adapting quickly to new algo, framework, AI tech

### Evaluation & Interpretation
def: assessing model accuracy and generalisation with appropriate metrics and ensuring interpretability and explainability for trustworthy decision-making.

**> Choosing the Right Metric**
accuracy is often misleading -> just like choosing the right model, choosing the right metric that *aligns with business goals* is also critical 

**> The Black Box Problem**
many powerful model (like deep learning) are difficult to interpret, making it hard to explain *why* a decision was made
-> striking a good balance between model performance with the ability to explain decisions for transparency and trust is essential 

**> Concept Drift**
statistical properties of the target variable change over time, causing the model performance to decay

## 8.3. Deployment challenges
def: managing the transition from development to production, including experimentation, validation, monitoring, and ongoing maintenance to ensure models deliver consistent, real-world value.
### From Prototype to Production
def: controlled experimentation and validation (during rollout) before full-scale deployment

**> Jupyter Notebook to Production Gap**
a model working well in research notebook is very different from a reliable, scalable production system 

**> A/B Testing**
def: controlled experiment where two versions (A and B) of a feature, webapp, app, other solution are randomly presented to users to determine which version performs better based on chosen metrics (clicks, conversions, engagement, ...)
-> evidence-based decision-making: validate changes using real-world user data vs. intuition and assumptions
=> optimise UX, marketing strategies, product features, ... 

step-by-step:
- formulate a hypothesis about which change might improve outcomes
- create 2 versions: A(control) and B(variant)
- randomly assign users to each group
- collect data on outcomes for both groups
- use stats analysis (often hypothesis testing, cf. [[#i. Hypothesis Testing]])
to determine whether observed differences are significant and not due to chance

**> Infrastructure & Scalability**
building pipelines for data ingestion, model serving, monitoring that can handle real-world load
-> **Tool Fragmentation**: managing multiple platforms needed for different parts of the data science pipeline, which can complicate workflows
-> Scalability: challenges in maintaining model performance and response times as data volume, velocity and user load increase in production

Some solutions:
- Distributed Computing: using multiple machines or processors to handle large-scale data processing and model training through parallelisation (cf. [[#6.2. Cloud Computing]])

**> Operationalisation**
integrating models into business processes with continuous monitoring for performance degradation or bias (model drift)

### Monitoring & Maintenance
def: continuous tracking of model performance, detecting drift, managing versioning, and updating models to maintain accuracy and relevance in production.

**> Performance Decay**
models need to be continuously monitored and retrained as data and the world changes
(cf. [[#monitoring and observability]] in MLOps)
-> concept / data / model drift lead to performance decay 

Some solutions:
- **data drift detection**: identify when the stats properties of input data change over time, potentially degrading model performance
- **concept drift detection**: identify when the relationships between inputs and outputs change, requiring model retraining or updating

**> Versioning**
managing versions of data, model code, and the trained model artifacts themselves 


## 8.4. Other challenges
def: encompassing cross-cutting issues like aligning technical work with business goals, navigating ethical and regulatory requirements, and fostering collaboration across stakeholders.
### Tech-Business Relationship
- understand the business context, align tech solution 
- collaborate closely and efficiently 
- communicate complex results and limitations to non-tech stakeholders 

### Ethical & Regulatory Challenges
- Responsible AI: implement safeguards for secure, ethical and transparent AI use
- Bias Mitigation: proactively detect and reduce biases through ethical reviews and audits 
- Governance and Compliance: meet regulatory requirements and maintain thorough documentation for accountability


# Appendix
notes of stuff you wanna include? 
- 🟣 time series stuff -> WIP! 
- 🟣 Maths
- 🟣 coding 
- AWS SageMaker 


- next:
	- [x] git => SE section in Coding 
	- [x] data visu => in EDA, Data subsection => ok but just the placeholder honestly, will have to go slightly deeper
	- [x] bias and variance -> Bias-variance tradeoff
	- [x] data processing, preprocessing, wrangling -> Data101
	- [x] finish 4.2.3. Fundamental Eval Concepts
	- [x] add more to data science challenges
	- [x] A/B testing => DS Challenges
	- [x] ETL -> Data engineering section
	- [x] type of data... and dbase? => Data engineering section
	- [x] big rabbit hole into business apps
- [x] done:
	- [x] Markov decision process
	- [x] k-nearest neighbours vs...... the other one? 
	- [x] regressions? 
	- [x] AI for sure 
	- [x] sql coding
	- [x] variance vs. std
	- [x] CI/CD
	- [x] Docker

- [x] check all the links 
- [x] clean up the cf. and ref :( 
- [x] review all quickly 
- [x] churn? ROI? (aren't they business terms) -> general glossary created 
- [x] GANs or GenAI, diffusion -> [[AI engineering notes]] probably here :) 

-> there are still some stuff to review and complete!
==❓: to review later -- make sure to check them after==

sources:
- https://roadmap.sh/ai-data-scientist
- https://www.datacamp.com/tutorial/anova-test
- https://www.investopedia.com/terms/a/anova.asp
- https://www.scribbr.com/statistics/chi-square-tests/
- https://wandb.ai/mostafaibrahim17/ml-articles/reports/Understanding-L1-and-L2-regularization-techniques-for-optimized-model-training--Vmlldzo3NzYwNTM5
- https://www.scribbr.com/statistics/students-t-table/
- https://ishanjainoffical.medium.com/choosing-the-right-correlation-pearson-vs-spearman-vs-kendalls-tau-02dc7d7dd01d
- https://www.kaggle.com/code/ryanholbrook/linear-regression-with-time-series