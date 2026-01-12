---
title: 🌱 duo-ai-anki
draft: false
tags:
  - spanish
  - AI
created: 2025-11-01
---
*under construction* 🚧

what?
- retrieve duolingo learnt words from website 
- format into csv
- use ollama and local llms to categorise words
- output anki-friendly flashcards
- *optional: automatically update anki app with these?* 

### 1. duolingo website
- https://www.duolingo.com/practice-hub/words
	- save **cookies** locally to be able to log in automatically
- main tools for web-scraping:
	- **beautiful soup**
	- **selenium**
- output:
	- .csv with list of words and translations

```terminal
done refresh.. lets pause for 5 secs.

lets go to words page
https://www.duolingo.com/practice-hub/words
...

New words learnt count: 3034 words
Congrats you have learnt 1175 new words!
... i.e. might need to load the page 23 times to get all of them :)
```

```csv
,sp,en
0,cansadísimo,really tired
1,encantaron,(?) did you love
2,grandísimo,"really big, very big, really large"
```

### 2. data processing
goal: clean, enhance data with more properties, such as genre, type, customised properties etc. 
#### i. data pre-processing
- clean and format data -> consistent format

#### ii. external database
- if available, can use as a primary step to merge 
- limitation: 
	- different format 
	- reliability
	- incomplete 

#### iii. "internal" processing
- can be the main processing step if good enough, or as a complementary step if [[#ii. external database]] is better

2 methods:
##### either semi-manual
- e.g. copy paste to chatbot for assistance with specific prompt engineering 
	- **observation: the chatbots online (chatgpt, deepseek) are more effective than those local models...** 

##### ... or automatised
- spacy: open-source library for NLP tasks (POS = Part-of-Speech) -> simpler if just need to get grammatical category
	- **observation: : not super accurate, not convincing.** 
```python
nlp = spacy.load("es_core_news_sm")
for word in words:
    doc = nlp(word)
    token = doc[0] if len(doc) > 0 else None
    pos = token.pos_ if token else "UNKNOWN"
    # Try to extract gender from morphological features (Morph)
    gender = token.morph.get("Gender")
    gender_val = gender[0].lower() if gender else "none"
    data.append({
        "Word": word,
        "Gender": gender_val,
        "Type": pos.upper()
    })
```

- ollama: platform that enables llms to run locally (e.g. Mistral) -> more "overkill"
	- simple prompt i.e. zero-shot prompting 
	- with examples i.e. few-shot prompting 
		- **observation: not perfectly accurate or consistent.** 

```python
for word in words:
	prompt = (
		f"Clasifica la palabra o frase '{word}' en español: "
		"¿es un verbo, sustantivo, adjetivo, adverbio, preposición, "
		"conjunción, pronombre, determinante, interjección, o numeral? "
		"Responde solo con el tipo."
	)
	response = ollama.chat(
		model='mistral',
		messages=[{'role': 'user', 'content': prompt}]
	)
	pos = response['message']['content'].strip()
	results.append({'Word': word, 'Type': pos})
```

- **final observation: unfortunately, after testing, neither is actually satisfying... chatbots online are more efficient.**

#### iv. final anki formatting 
- decide what properties to include,
	- simple: word, translation 
	- more detailed: word, translation, gender, type

```csv
,sp,en,gender,type,
0,prestar,"gave, pay, pays",none,verb,
1,hockey,hockey,masc,noun,
2,navegar,"surf, sailing, sail",none,verb,
3,estampilla,stamp,fem,noun,
4,velero,"sailboat, sail",masc,noun,
```