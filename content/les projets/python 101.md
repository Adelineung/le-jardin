---
title: 🐍 python cheatsheet
draft: false
tags:
  - coding
  - _101
created: 2025-11-01
---

# > libs
## pandas 🐼
- Series = 1D 
	- `pd.Series([1, 3, 5, np.nan, 6, 8])` from a list
	- `ppd.Series({'a': 1, 'b': 2, 'c': 3})` from a dict
- DataFrame 2D
	- `pd.DataFrame(dct)` created with a dict
	- `pd.Dataframe(data=[], index=[], columns=[])` created with lists
	- 
- read and save
```python
pd.read_csv(path)
pd.read_csv(path, index_col=0) # if column Unnamed: 0

df.to_csv('output.csv', index=False)

timestamp = datetime.now().strftime("%y-%m-%d_%H_%M_%S")
df.to_csv('df_' + timestamp + '.csv') # or with timestamp 
```
- usuuuually
	- `axis = 0` -> rows (vertical)
	- `axis = 1` -> columns (horizontal)
#### basic ops
- inspection
```python
df.head(3)           # First 3 rows
df.tail(2)           # Last 2 rows  
df.shape             # (rows, columns)
df.info()            # Data types & memory
df.describe()        # Statistical summary

df.columns           # Column names
df.index             # Index
df.dtypes            # Data types
```
- selection and indexing
```python
df['Name']           # Single column (Series)
df[['Name', 'Age']]  # Multiple columns (DataFrame)

# Row selection
df.loc[0]            # By label (index)
df.loc[idx_list]
df.iloc[0]           # By position (just the order)
df[~df.index.isin(idx_list)] # or exlude

# Boolean indexing
df[df['Age'] > 30]                    # Age > 30
df[(df['Age'] > 25) & (df['City'] == 'NYC')]  # Multiple conditions

# reset index
df.reset_index(inplace=True) # just reset... 
df.reset_index(drop=True, inplace=True) # add new index! 
```
#### data cleaning
```python
# Handling missing values
df.isnull().sum()           # Count missing per column
df.dropna()                 # Drop rows with missing values
df.fillna(0)                # Fill missing with 0
df.fillna(method='ffill')   # Forward fill

# Removing duplicates
df.drop_duplicates(inplace=True)

# Drop ...
df.drop(columns=['B', 'C'])
df.drop(['B', 'C'], axis=1, inplace=True) # equivalent, axis = 1 -> columns hmmm 

df.drop([0, 1]) # labels, not ordered index!

# Type conversion
df['Age'] = df['Age'].astype(int)
df['Salary'] = pd.to_numeric(df['Salary'])
df['Date'] = pd.to_datetime(df['Date'])
df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d %H:%M')

# Use categorical data for strings with few unique values
df['City'] = df['City'].astype('category')

# Date operations
df['Year'] = df['Date'].dt.year
df['Month'] = df['Date'].dt.month
df['Day'] = df['Date'].dt.day
df['Hour'] = df['Date'].dt.hour
df['Minute'] = df['Date'].dt.minute
df['Second'] = df['Date'].dt.second
df['DayOfWeek'] = df['Date'].dt.day_name()

df['Month'] = df['Date'].dt.to_period("M") # another format, will keep more information and stop at month

# Resampling (for time series)
df.set_index('Date', inplace=True)
monthly = df.resample('M').mean()  # Monthly averages

# Renaming
df.rename(columns={'old_name': 'new_name', 'A': 'a'}, inplace=True)

# Select column types
numeric_cols = df.select_dtypes(include=[np.number]).columns
```
#### data transformation
- add/modify columns
```python
# New column
df['Bonus'] = df['Salary'] * 0.1

# Conditional column
df['Status'] = np.where(df['Age'] > 30, 'Senior', 'Junior')

# Create with handles multiple conditions
conditions = [
    (df['activity'] == 'Running') & (df['indoor_flag'] == 1),
    (df['activity'] == 'Running') & (df['indoor_flag'] == 0),
    (df['activity'] == 'Running') & (df['indoor_flag'].isna())
]
choices = ['Running (Indoor)', 'Running (Outdoor)', 'Running (Unknown)']
df['activity_Detailed'] = np.select(conditions, choices, default=df['activity'])

# or e.g. for timezone adjustment when conditions == 1 value
timezone_adjustments = {
	'America/Guadeloupe': -5,
	'America/New_York': -6,
}
hours_to_subtract = df['Meta_TimeZone_value'].map(timezone_adjustments).fillna(0)
df['startDate'] = pd.to_datetime(df['startDate']).dt.tz_localize(None)
df['startDate'] = df['startDate'] + pd.to_timedelta(hours_to_subtract, unit='h')

# Using apply
df['Name_Length'] = df['Name'].apply(len)
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Old')
df['Salary_Bucket'] = pd.cut(df['Salary'], 
                            bins=[0, 50000, 100000, float('inf')],
                            labels=['Low', 'Medium', 'High'])
                            
# Reorder
df.insert(0, 'Name', df.pop('Name')) # add Name first

# Concat str columns
df["Full_Name"] = df["Family_Name"] + df["First_Name"]
```
- string ops
```python
df['Name_Upper'] = df['Name'].str.upper()
df['Name_Lower'] = df['Name'].str.lower()

df['Has_A'] = df['Name'].str.contains('a', flags=re.IGNORECASE)
df['Has_more'] = df['Name'].str.contains('|'.join(lst)) # multiple patterns

df['First_Letter'] = df['Name'].str[0]
```
- replacing
 ```python
 # Replace with dictionary or specific values
df['Category'] = df['Category'].replace({'X': 'New', 'C': 'Other'})
df['col'] = df['col'].replace([1, 2, 3], 'X')

# Replace where condition is met
df.loc[df['Value'] > 2, 'Value'] = 999         # with a condition
df.loc[:, 'price'] = np.round(df['price'])     # without a condition

# Replace with apply function
df.loc[:, 'price'] = df['price'].apply(round)  # with a function
df['col'] = df['col'].apply(lambda x: x * 2)   # with a custom lambda

# Replace based on condition with np
df['Status'] = np.where(df['Value'] > 1, 'High', 'Low')
```
#### grouping & aggregation
- `as_index` 
```python
# Basic grouping
grouped = df.groupby('City')
grouped.size()                    # Count per city
grouped['Salary'].mean()          # Average salary per city

grouped.size().unstack()          # transpose dimension

# Multiple aggregations
df.groupby('City').agg({
    'Salary': ['mean', 'min', 'max'],
    'Age': ['mean', 'count', 'sum']
})

# Group by multiple columns
df.groupby(['City', 'Status'])['Salary'].mean()
```
- group by temporal 
```python
df.groupby([df['date'].dt.to_period('M'), 'category']).size().unstack()
```
#### sorting and ranking
```python
# Sorting
df.sort_values('Salary')                    # Ascending
df.sort_values('Salary', ascending=False)   # Descending
df.sort_values(['City', 'Salary'])          # Multiple columns
df.sort_values(by=['City', 'Salary'], ascending=[True, False])

# Ranking
df['Salary_Rank'] = df['Salary'].rank(ascending=False)
```
#### pivot, crosstab()
```python
# Create pivot table
pivot = pd.pivot_table(df, 
                       values='Sales',      # Values to aggregate
                       index='Region',      # Rows
                       columns='Product',   # Columns  
                       aggfunc='sum')       # Aggregation function
                       
# Simple cross tabulation
cross = pd.crosstab(df['Region'], df['Product'])

# With values and aggregation -> equivalent to the pivot table here 
cross_values = pd.crosstab(df['Region'], df['Product'],
                          values=df['Sales'],
                          aggfunc='sum')
```
#### merging and concat
- `how`
	- inner
	- outer
	- left
	- right
	- cross
```python
# Concatenation
result = pd.concat([df1, df2]) # rows by default
result = pd.concat([df1, df2], axis=1) # columns, i.e. horizontally 
result = pd.concat([df1, df2], keys=["col1", "col2"]) # rename cols

# Merging (SQL joins on column)
merged = pd.merge(df1, df2, on='key', how='inner') # inner by default

# Join on index (SQL joins on index)
result = df1.join(df2, how='inner') # inner by default

```
#### useful methods and attributes
```python
# Basic stats
df.mean(), df.median(), df.std(), df.min(), df.max(), df.mode(), df.quantile(.75)
df.describe()

# Unique values
df['City'].unique()           # Unique cities
df['City'].value_counts(dropna=0)    # Value counts, incl. NaN
df['City'].value_counts().loc[lambda x: x>2].reset_index()

# Highest-Lowest values
df.nlargest(3, 'Salary')
df.nsmallest(2, 'Age')

# Max-Min rows
df.loc[df['Salary'].idxmax()]
df.loc[df['Age'].idxmin()]

# Correlation
df.corr()                     # Correlation matrix

# Transpose (idx <-> keys)
df.T
```

## numpy
## scikit-learn
## matplotlib / seaborn
> **seaborn is built on Matplotlib** - 
> seaborn = "smart wrapper" that makes common statistical plots easier

|Aspect|Matplotlib|Seaborn|
|---|---|---|
|**Level**|Low-level building blocks|High-level, statistical plotting|
|**Control**|Complete pixel-level control|Less control, but smarter defaults|
|**Syntax**|Verbose, explicit|Concise, declarative|
|**Best For**|Custom, publication-quality plots|Quick statistical exploration|
|**Stats Integration**|None built-in|Built-in statistical aggregations|
|**Example**|`plt.plot(x, y); plt.xlabel(...)`|`sns.lineplot(data=df, x='x', y='y')`|

other alternatives:
- Plotly -- interactive & web
	- or Bokeh
- Altair or ggplot for academic graphs (formal and clean)

## keras
## pytorch
## tensorflow

---
# > python basics
## data types
#### dict
- `.keys()`
- `.values()`
- `.items()`

- access `my_dict[key]`
- delete a key `del my_dict[key]`
- update a dict `d.update(d2)` -> update and add

- `key in my_dict`
- pop item `val = my_dict.pop(key)`

```python
# initialisation 
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'} # direct
my_dict = dict(name='Alice', age=30, city='New York') # dict constructor
my_dict = dict([('name', 'Alice'), ('age', 30), ('city', 'New York')]) # from list of tuples
my_dict = dict(zip(keys, values)) # or with lists
```

```python
for key in my_dict: # default gives key -> equivalent to my_dict.keys()
    print(key)

for key, value in my_dict.items():
    print(f"Key: {key}, Value: {value}")
    
for i, (key, value) in enumerate(my_dict.items()):
    print(f"Index: {i}, Key: {key}, Value: {value}")

```


## files
- f is the file variable 
- opening mode: `"r", "w", "a", "ra+", ...`
```python
f = open("file.txt", "w")

f.write("hello")
f.writelines(lst) # list of strings

f.read() # read to the end 
f.readlines() # list of lines
f.readline() # next line

f.close() # after each use, it's importaaant

with open("text.txt", "r") as f: # automatic closing :) 
	... 
```
- 


## string
string type is literally a list of characters. 

- convert to str `str()` 
- **strip** = remove chars at start and end of str 
	- `s.strip("\n")` whitespace by default
- **split** str to list of elements
	- default delimiter = whitespace `"i am a string".split()`
	- specified delimiter `"i,am,a,string".split(",")`
	- multiple delimiters -> use re library 
- **join** list to str
	- `" ".join(["i", "am", "1", "string"]`
- check start and end, give bool 
	- `.startswith(" ")`
	- `.endswith(" ")`
- reverse str
	- `s[::-1]`
	- `"".join(reversed(s))`
- concatenate str
	- `s1 + s2 + "hello"`
- string formating
- case conversion
	- `.upper()` or `.lower()`
	- `.title()` 
- padding 
	- `f"{number:03d}"`
	- `str(number).zfill(3)`
- substring check
	- `"world" in "hello world"`
- find char
	- `s.find("ent")`
- find index 
	- `s.index("e")`
- replace
	- `s.replace("a", "b")`

```python
s = "hello World"

s.count('l')           # 3 → count occurrences
s.find('World')        # 6 → returns index or -1 if not found
s.index('World')       # 6 → like find() but raises ValueError if not found
s.find('python')       # -1 (not found)

s.upper()              # 'HELLO WORLD'
s.lower()              # 'hello world' 
s.title()              # 'Hello World' → capitalize each word
s.capitalize()         # 'Hello world' → capitalize first character
s.swapcase()           # 'HELLO wORLD' → swap case
s.casefold()           # 'hello world' → aggressive lowercasing (for case-insensitive compares)

s = "hello.world.python"

s.split('.')           # ['hello', 'world', 'python'] → split by separator
s.partition('.')       # ('hello', '.', 'world.python') → split at first occurrence
"|".join(['a','b','c'])# 'a|b|c' → join sequence with separator

"abc".isalpha()        # True → all alphabetic characters
"123".isdigit()        # True → all digits
"abc123".isalnum()     # True → alphanumeric
"   ".isspace()        # True → all whitespace
"Hello".istitle()      # True → titlecase format
"HELLO".isupper()      # True
"hello".islower()      # True

s = "hi"

s.center(10, '*')      # '****hi****' → center in width
s.ljust(10, '-')       # 'hi--------' → left justify  
s.rjust(10, '-')       # '--------hi' → right justify
s.zfill(5)             # '000hi' → zero-pad to width
```

#### re library 
- pattern
	- `r'\d{3}'` -- exactly 3 digits
	- `r'\S+'` -- any non whitespace char, one or more 
	- `r'[A-Za-z]'` -- any alphabetical char
	- `r'.'` -- any single character
	- `r'\s'` -- any whitespace
	- `r'\w'` -- any word character 
	- `r'[0-9]'` -- any digit
	- `r'[^\s]+'` -- entire string but whitespace
	- `?` -- zero or one (i.e. optional but max 1)
	- `*` -- zero or more (i.e. optional)
	- `+` -- one or more (i.e. necessary 1, but can be more)
	- ... 
- `re.IGNORECASE` case-insensitive 
```python
import re
text = "Hello, my email is user@example.com and phone is 123-456-7890"

re.search(pattern, text)    # Find first match
re.findall(pattern, text)   # Find all matches as list
re.finditer(pattern, text)  # Find all matches as iterator
re.sub(pattern, repl, text) # Replace matches
re.split(pattern, text)     # Split by pattern
re.match(pattern, text)     # Match from beginning

items = re.split(r'[,;:.\s]\s*', text) # multiple delimiters
```
## lists
#### list indexing
- first and last `lst[0]`, `lst[-1]`
- length = items count `len(lst)`
- sub-sequences
	- `lst[start:end:step]`
	- `lst[1:-1]`
	- `lst[::2]` -> 1st, 3rd, ... elements 
	- `lst[::-1]` -> inverse list
- remove item
	- `del lst[3]`
	- `del lst[1:3]`
- modify with assignment 
	- `lst[0] = 1`
	- `lst[1:3] = ["2", 1, 5]`
#### list functions
- append one item to the end of the list
	- `lst.append(val)`
	- `lst.append([1,2,3])` -> adding that list as one item 
- extend = appends multiple elements 
	- `lst.extend(c)` with c a container
- concatenate = append list to list 
	- `lst = lst + lst_1`
- duplicate 
	- `lst = lst * 3`
- get position (index) of a val
	- `lst.index(val)`
- insert element at index
	- `lst.insert(val, idx)`
- remove element
	- `lst.remove(val)`
- remove and return
	- `lst.pop([idx])`
- count val occurence
	- `lst.count(val)`
- reverse list (≠ sort):
	- `lst[::-1]` reverse index 
	- or `lst.reverse()`
- sort list 
	- not in-place i.e. just a print:
		- `sorted(lst)` ascending by default
		- `sorted(lst, reverse=True)` descending 
	- in-place i.e. apply the function i.e. change the list:
		- `lst.sort()` ascending by default
		- `lst.sort(reverse=True)` descending
#### list manip 
- operation "+" won't work directly `lst + 10` 
```python
my_list = [1, 2, 3, 4, 5]
result = [x + 10 for x in my_list]
```
- but list + list = append 
- operation "\*" duplicates! 
```python
my_list = [1, 2]
print(my_list * 3) # [1, 2, 1, 2, 1 ,2]
result = [x*3  for x in my_list]
print(result) # [3, 6]
```

- intersection list
```python
set(list1) - set(list2) # gives items in list1 not in list2
set(list2) - set(list1) # gives items in list2 not in list1
set(list1) ^ set(list2) # gives all items that are in only one list
set(list1) & set(list2) # gives the intersection of items (in both lists)
```

## functions
- `args` = variable position arguments, default values, tuple
- `kwargs` = variable names arguments, dict
```python
def fct(x,y,z, a=3, b=5, *args, **kwargs):
	"""documentation"""
	...
	return res
```
## loops
#### statements
- `break` statement = terminate / exit the loop immediately 
- `continue` statement = bypass the rest of the code in the iteration and go to the **next iteration** 
- `pass` statement = basically do nothing, serves as a placeholder

#### loops
- iterative loop statement: for loop
- conditional loop statement: while loop
- `range(start,end,step)`
- `enumerate(lst)`
- `zip(lst1,lst2)`
#### for loop 
```python
for var in sequence:
for i in range(10):
for i in range(len(lst)):
```
```python
for i,e in enumerate(lst):
	print("ite", i)
	print(f'element {e} = {lst[i]}')
```
```python
for k,v in enumerate(lst):
	print("ite", i)
	print(f'element {e} = {lst[i]}')
```
#### while loop
```python
i = 0
while i<100:
	do something
```
## others
#### variable assignment 
- variable assignment `=`
- unpack sequence `a, *b = seq`
- increment `x+=`
- decrement `x-=`
- swap values `a,b=b,a`
#### base types
- int
- float
- bool
- str
- bytes
#### container types
- ordered sequences (fast index access, repeatable values)
	- list `["hello", 1, var_1]`
	- tuple `("hello", 1, var_1)`
- key containers (no a priori order, fast key access, each key is unique)
	- dict `{"key": "value"}`
	- set `{"key1", "key2"}`
#### conversion
- `int()`
- `float()`
- `str()`
- `list()`
- `dict()`
- `set()`
#### one-line ops 
- `[int(x) for x in (1, -5, 6.558)]`
- `['even' if x % 2 == 0 else 'odd' for x in numbers]`
#### boolean logic
- `>`, `>=`, `==`, `!=`
- `a and b`
- `a or b`
- `not a`
- `|` union
- `&` intersection
#### module imports
🔴
```python
from datetime import time
import matplotlib as plt
```
#### conditional statement 
```python
if x:
	do something
elif not(y):
	do something
else:
	do something
```
#### exceptions and errors
```python
raise Exception()

try:
	your code here
except Exception as e:
	print("error caught", e)
```
#### print and display
- `sep=" "` and `end="\n"` by default
- `file=sys.stdout` by default 
- `{val:0.2f}` digits after comma, float type
- `{val:03d}` leading 0 (padding), int type
```python
print(f'combining {val} and {val:0.2f}\n\t') # f-string
print("{:03d}".format(i)) # equivalent 

print('first str','second one', sep = ";", end = "")
```
```python
display(lst) # to see all items
print(df.to_string()) # to see all the rows and columns
```
- `from IPython.display import display, clear_output`
	- `clear_output(wait=False)` -- clear cell output
#### misc
- `s = input("please enter something:")`
#### generic ops on containers 
```python
len(lst)
min(lst), max(lst), sum(lst) 

sorted(lst)
sorted(lst, reverse=True)
sorted(lst, reverse=True)

val in lst # gives bool

all(lst) # True if all element >0 or True
any(lst) # True if any element >0 or True

any(n > 5 for n in lst) # e.g. 

lst.copy()
```
#### generic ops
- `type()`
- `len()`

#### time
```python
import time

time.strftime("%d-%m-%y_%H-%M-%S") # current timestamp
time.strftime("%A, %B %d, %Y") # "Monday, January 01, 2024"

time.sleep(2)  # Pause for 2 seconds

start_time = time.time()
...
end_time = time.time()
elapsed = end_time - start_time
print(f"Execution took {elapsed:.2f} seconds")  # "Execution took 1.50 seconds"
```
#### datetime
- `.strftime()` formatting -> **str**
- `.strptime()` parsing + converting to **datetime**
- `timedelta()` 
- get individual components of **datetime** as value
	- `.year`, `.month`, ... `.second`
- ... or method: `.weekday()`
- datetime comparison is possible (`>`, `>=`, `==`)
```python
from datetime import datetime, date, time, timedelta

# Current time
now = datetime.now()

# Formatting
formatted = now.strftime("%Y-%m-%d %H:%M:%S")

# Parsing
dt = datetime.strptime("2024-01-01", "%Y-%m-%d") # 00:00:00 by default
dt = datetime.strptime("2024-01-15 14:30:00", "%Y-%m-%d %H:%M:%S")

# Arithmetic
future = now + timedelta(days=7)

# Components
year, month, day = now.year, now.month, now.day

# Difference
diff = future - now
days = diff.days
```

#### random
```python
import random

random.seed(42)             # seed for reproducibility 

random.random()             # float [0.0 - 1.0]
random.uniform(1.5, 10.5)   # float in range
random.randint(1, 6)        # int in range (incl), here it's like a dice

items = ['apple', 'banana', 'cherry', 'date', 'elderberry']
random.choice(items)        # random choice from sequence, e.g.'cherry'
random.choices(items, k=3)  # with replacement i.e. can be duplicates, ['banana', 'apple', 'banana']
random.sample(items, 3)     # w/o replacement i.e. no duplicates, ['date', 'apple', 'cherry']

random.choices(items, weights=weights, k=5) # can have weights, same length 

random.shuffle(items)       # in-place shuffle
```

#### lambda, map, apply 
- **lambda:** quick, anonymous functions for simple operations
```python
# Regular function
def even_or_odd(x):
	if x % 2 == 0:
		return 'even'
	else:
		return 'odd'

# Lambda equivalent
even_or_odd = lambda x: 'even' if x % 2 == 0 else 'odd'
```
- **map()**: apply a function (either lambda or regular) to every item in an iterable
```python
numbers = [1, 2, 3, 4, 5]

# With lambda
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# With regular function
def double(x):
    return x * 2

doubled = list(map(double, numbers))
print(doubled)  # [2, 4, 6, 8, 10]
```
- `apply()` is primarily from pandas, not built-in Python
	- `axis = 0` by default -> **columns**
	- `axis = 1` -> applies to each **row**
```python
# apply to columns (series)
df['name'].apply(lambda x: x.title())
df['age'].apply(lambda x: x + 5)

# apply to rows
df['description'] = df.apply(
    lambda row: f"{row['name']} is {row['age']} years old", 
    axis=1
)
```




#### xxx
```python


```
#### xxx
```python


```
#### xxx
```python


```