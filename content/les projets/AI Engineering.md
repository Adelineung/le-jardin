---
title: 🤖 AI Engineering
draft: false
tags:
  - learning
  - AI
created: 2025-11-21
---
# Introduction
... a lot of the foundation chapters (after and before the [[#The AI Engineering Roadmap|4. AI Engineering]] chapter) is covered in [[data science notes|Data Science]]

1. Foundation
	1. [[data science notes#2.1. Python|Python]]
	2. [[data science notes#1. Maths and Statistics|Maths and Statistics]]
	3. [[data science notes#3. Data101, EDA|Data 101]]
2. [[data science notes#4. Machine Learning|Core ML]]
	1. ML concepts (train, eval)
	2. ML algorithms (+ scikit-learn)
3. [[data science notes#5. Deep Learning, AI|Deep Learning]]
	1. NN 101
	2. Core Architecture FNNs, CNNs, RNNs, LSTMs
	3. Frameworks (PyTorch, TensorFlow/Keras)
4. [[#The AI Engineering Roadmap|AI Engineering (i.e. Applied AI)]]
	- [[#1. NLP & Transformers]] (Concepts)
		- [[#1.1. Classic NLP to Modern NLP]]
		- [[#1.2. Transformers & Hugging Face]]
		- [[#1.3. Pre-trained Models & Fine-tuning]]
	- [[#2. GenAI & LLMs]]
		- [[#2.1. GenAI 101]]
		- [[#2.2. LLMs 101]]
		- [[#2.3. AI Models & APIs]]
		- [[#2.4. Tool Integration]]
	- [[#3. Embeddings, Vector DBs & RAG]]
		- [[#3.1. Embeddings]]
		- [[#3.2. Vector DBs]]
		- [[#3.3. RAG 101]]
		- [[#3.4. RAG in production]]
	- [[#4. Prompt Eng & LLM Optimisation]]
		- [[#4.1. Prompt Patterns]]
		- [[#4.2. Prompt Architecture & Management]]
		- [[#4.3. LLM Optimisation]]
		- [[#4.4. Which strategy?]]
	- [[#5. LLM Architectures and Training]]
		- [[#5.1. LLM Architectures Overview]]
		- [[#5.2. Training pipeline]]
		- [[#5.3. Training optimisation techniques]]
		- [[#5.4. Emerging architectures]]
	- [[#6. Agentic AI & Orchestration]]
		- [[#6.1. AI Agents 101]]
		- [[#6.2. Agent Frameworks]]
		- [[#6.3. Knowledge & Context Management]]
		- [[#6.4. Automation & Workflows]]
		- [[#6.5. AI Agent Evaluation & Benchmarking]]
	- [[#7. Advanced topics & Responsible AI]]
		- [[#7.1. Multimodal AI]]
		- [[#7.2. AI ethics, safety, governance]]
		- [[#7.3. Societal Impact & Considerations]]
5. [[data science notes#6. MLOps, cloud|Deployment & MLOps]]
	1. Dockers, API, Cloud
	2. MLOps

Some definitions and terminology to get started...
- About the roles
	- **AI Engineer**: focus on designing/building/developing, implementing/deploying, maintaining real-world AI apps or systems.
	  -> Strong SE skills and practical knowledge of existing models and tools. 
	  -> Usually uses **pre-trained models** and existing AI tools vs. MLE or AI Researcher who can build models from scratch 
	- **AI Research(er) / Scientist**: focus on the theoretical foundations, create new algorithms, push the boundaries of what's possible
	  -> PhD and deep maths knowledge
	- **Applied AI**: Using existing AI tools to solve real-world problems (vs. **Research AI**)
	- **Machine Learning Engineer**: bridge data science and software engineering by deploying and optimising ML in production env. 
- About LLMs/AI
	- **AI vs. AGI**: 
		- **AI**: Artificial Intelligence refers to systems designed to perform specific tasks by mimicking aspects of human intelligence, e.g. decision-making or language processing. 
			- -> "narrow AI", they are highly specialised but lacking broader cognitive abilities. 
		- **AGI**: Artificial **General** Intelligence represent a theoretical form of intelligence that possesses the ability to "understand", learn and apply knowledge **across a wide range of tasks** at a human-like level. 
			- -> "versatile AI", would have the capacity for abstract thinking, reasoning and adaptability similar to human cognitive abilities -- still in theory. 
	- **Inference**: process of using trained model to make predictions on new data vs. training 
		- **Training**: process of teaching a model to recognise and learn patterns to make predictions from a dataset -> adjust internal parameters to minimise errors between predictions and actual outcomes
	- **Transformer**: NN architectures that process sequences of data (text) in a way that revolutionised NLP and are the foundation of LLMs
		- Use **self-attention** mechanisms => context-aware representation + parallelism
		- **Stacked layers** => refined and enhanced processing
		- **Encoder + decoder** => understand + generate sequences of data 
	- **Embeddings**: vector representations of data (words, sentences, images), they capture semantic relationships and patterns in the data, thus widely used in NLP apps. 
	  -> easy to compare, search, analyse unstructured data by mapping similar items close together in a high-dim space
	- **Vector Databases**: specialised systems designed to store, index and retrieve high-dim vectors (like embeddings) thanks to Approximate Nearest Neighbour (ANN) search (similarity / semantic search) vs. exact match (traditional). 
	- **RAG (Retrieval-Augmented Generation)**: AI approach that combines information retrieval with language generation to create more accurate, contextually relevant outputs. -> e.g. external source to enhance knowledge 
	- **Prompt engineering**: process of crafting effective inputs (prompts) to guide AI models to generate desired outputs. 
	- **AI Agents**: refer to autonomous systems that can perceive env, make decisions, take actions to achieve specific goals -> usually can interact with external syst, users, other agents to carry out complex tasks. 

note: other adjacent learning roadmaps
- https://roadmap.sh/prompt-engineering
- https://roadmap.sh/ai-agents

# The AI Engineering Roadmap
## 1. NLP & Transformers
def:
- **Natural Language Processing (NLP)** is a subfield of AI focused on enabling computers to understand, interpret and generate **human language**. 
- **Transformers** are powerful **NN** architectures that have revolutionised NLP by efficiently processing sequences of text using **self-attention mechanisms**.

### 1.1. Classic NLP to Modern NLP 
- **Classic NLP** relies on rule-based techniques, linguistics and statistical methods to analyse text structures, such as 
	- Tokenisation
	- Part-of-Speech (POS) Tagging 
	- TF-IDF
	- Syntactic Parsing
- **Modern NLP** leverages DL models, especially **Transformers**, to **generate contextual word embeddings** and perform tasks like question answering, summarisation, translation with much higher accuracy. 

More definitions for the Classic NLP methods: 
- **Tokenisation**
  Process of breaking down text into smaller units called tokens, which can be words, subwords or sentences. 
  -> transform raw unstructured text into manageable pieces that can be analysed or processed by NLP models
  e.g. "Let's do tokenisation!" => ["Let", "'s", "do", "token", "isation", "!"].
- **Part-of-Speech (POS) Tagging**
  Assigns each token in a sentence a **grammatical category** (noun, verb, adjective, etc.). This helps the model understand syntactic function of each word in the context. 
- **TF-IDF (Term Frequency-Inverse Document Frequency)**
  Statistical measure used to evaluate **how important a word is in a document relative to a collection** (corpus) -- it combines **term frequency** (how often a word appear in a doc) with **inverse document frequency** (how rare the word is across all docs)
  -> this helps in weighting words that are more informative for document classification or retrieval 
- **Syntactic Parsing**
  Analyses the grammatical structure of a sentence to identify **relationships between words**, such as subject, object, or modifiers. It produces a parse tree or dependency graph representing sentence structure, which is useful for deeper language understanding tasks. 
### 1.2. Transformers & Hugging Face 
- Transformers use layers of **self-attention** and feedforward networks to process text, enabling **context-aware representations**.
- **[Hugging Face](https://huggingface.co/)** is a widely used **platform** and library providing **pre-trained transformer models** and **tools for NLP tasks**. It facilitates easy access to models like BERT, GPT, RoBERTa, and tools for fine-tuning and development. 

#### 1.2.1. Transformers
def: **NN** architectures that process sequences of data, especially text, using **self-attention mechanisms**. 
vs. other models (RNNs, LSTMs) that process information step-by-step 
-> transformers analyse **all words in a sequence at once**, making them highly efficient for NPL tasks like translation, question answering ad summarisation. 
=> they are the *engine of modern AI* -- first introduced by Google's 2017 paper "*Attention is all you need*"

💡 Core idea: **self-attention**

> [!NOTE] More
> in [[data science notes]]
cf. [[data science notes#> Neural Networks]]
cf. [[data science notes#5.1.2. Recurrent Neural Networks (RNNs)]]
cf. [[data science notes#5.1.3. Transformers]]

- **RNN**: Recurrent NN, specialised in sequential data processing, can maintain context and internal memory thanks to the recurrency
- **LSTM**: Long Short Term Memory 

vs. 
- **Attention mechanism**
  NN technique that gives **different importance weights** to each component of the input → help **dynamic focus**
- **Self-attention**
  Allows the model to weigh and relate different tokens in a sentence to **each other**, capturing their **contextual meaning**. 
- **Stacked layers and parallelism**
  Transformers use multiple blocks/layers for deeper understanding and can process data in parallel (vs. RNN). 
- **Long-Range Dependencies**
  They are exceptionally good at understanding connections between words that are very far apart in a sentence/document (vs. RNN).
- **Encoder**
  Reads and understands the input text -> Classification, **Named Entity Recognition (NER)**
  (understanding input)
- **Decoder**
  Generates text sequentially -> Translation, summarisation, creative writing 
  (generating output)
- **Encoder-Decoder**
  Understands an input sequence and generates an output sequence -> Translation, Summarisation 
  (tasks that involve generating an output and requiring an input)

#### 1.2.2. Hugging Face 🤗
def: **[Hugging Face](https://huggingface.co/)** is a leading open-source platform providing:
- pre-trained model library -- ready to use or for further fine-tuning
- tools and APIs for NLP tasks
- community hub (models, datasets, guides) 

💡 the GitHub for AI Models, toolkit and platform for AI, transformers, NLP, LLMs 

### 1.3. Pre-trained Models & Fine-tuning
- **Pre-trained models** are trained on massive corpora (text docs) to learn rich language representations and can be adapted to specific tasks without starting from scratch.
- **Fine-tuning** is the process where pre-trained models are further trained on **smaller, task-specific datasets** to improve performance on particular applications like sentiment analysis, named entity recognition, or custom chatbots.

💡 Core idea: **paradigm shift that revolutionised NLP** -> **without starting from scratch**! 
- by making sophisticated language understanding broadly accessible and practical
- => using pre-trained models + fine-tuning 
	- accelerate dev, improve accuracy

#### 1.3.1. Pre-trained Models
def: AI models (usually NN here) trained on massive amounts of text data to learn general language patterns, grammar, semantics -- without having to start from scratch for NLP tasks. 
-> BERT, GPT-2/3/4, RoBERTa, T5, ...
➕ no need to train models yourself which costs a lot of money, time, computational resources 
➕ no need to start from scratch, these already "understand" language 

💡 Core idea: The AI "Base Model" -- already the general-purpose / intelligence model
cf. [[#5.2.1. Pre-training phase]] for more (data, objective, outcome)

- **Pre-training** uses **self-supervised learning on large corpora** (general-purpose datasets), such as Wikipedia (or the whole internet bruh), to learn fundamental patterns and knowledge about the world. 
	- -> building rich language representations by predicting missing or next words. 

**Techniques & Architectures**
- **BERT (Bidirectional Encoder Representations from Transformer)**
  An architecture and a training technique (Masked Language Modeling MLM), this is a method for creating models that understand language context
  -> this is a specific model built using only the encoder component of the Transformer architecture cf. [[#> Encoder-only (BERT, RoBERTa, DeBERTa)]]
	- **RoBERTa** = Robustly optimised BERT approach 
- **GPT (Generative Pre-trained Transformer)**
  An architecture and a training technique (Next Token Prediction, or CLM), this is a method for creating models that generate language. 
  -> this is a specific model built using only the decoder component of the Transformer architecture cf. [[#> Decoder-only (GPT, Llama, Mistral)]]
- **Self-supervised learning**
  Training method where a model learns by generating its own labels from the structure of the data itself, rather than relying on human-provided labels.
  -> in the form of representations / embeddings which are outputs of encoder/decoder techniques (MLM or CLM) in pre-training phase

cf. [[#Some extra numbers and information]] about models

#### 1.3.2. Fine-tuning
def: process of **adapting pre-trained models to a specific task** by continuing training on a **smaller, labeled dataset** relevant to that task. => i.e. **supervised**
-> reduce time, computational resources, annotated data while improving task-specific performance 

💡 Core idea: Specialising the AI -- train it to become an expert at a task 
-> pre-trained (**self-supervised**) **+** fine-tuning (**supervised**) = expert!
cf. [[#5.2.2. Fine-tuning & Alignment]] for more

- **Transfer Learning**
	- the overall concept of transferring knowledge from a general model to a specific task 
	  -> it's somehow the process of using a pre-trained model to specialise in something
- **Fine-tuning**
	- **adjusts the model weights** to specialise in downstream (later on) tasks, often by adding a task-specific head layer. 
	- can include **full model retraining** or parameter-efficient fine-tuning (**PEFT**). 

Fine-tuning in practice:
1. choose and load the pre-trained model (similar to the specific task, but more broad)
2. prepare your specialised dataset (way smaller than general-purpose dataset, should be domain-specific data)
3. fine-tune on your specific data (way quicker than pre-training)

note: if you need quick prototyping (or dataset < 100 examples), then it's worth exploring [[#4. Prompt Eng & LLM Optimisation]] instead -- way quicker, fine-tuning might be overkill here. 

##### > Types of Fine-Tuning (FT)
**>> Full FT**
def: update all parameters of the model
➕ most effective
➖ computationally expensive
➖ can cause "catastrophic forgetting" i.e. model forgets its general knowledge 

**>> Parameter-Efficient FT (PEFT)**
def: update only a small subset of parameters 
- LoRA (Low-Rank Adaptation): add small "adapters" to the model
- QLoRA: basically LoRA with quantisation for even less memory 
- Prompt Tuning: Learns optimal prompt embeddings 

cf. [[#5.3.1. Parameter-Efficient Fine-Tuning (PEFT)]] for more

## 2. GenAI & LLMs
def: 
- **Generative AI (GenAI)** refers to models that can **generate content** such as text, images, or code. 
  -> mimics creativity by producing novel outputs
- **Large Language Models (LLMs)** are a class of **generative models/AI** trained on **vast amounts of text data** to understand and produce human-like language. 
  -> so basically NLP on steroids
  -> use **Transformer** architectures 

💡 Core Idea:
- GenAI = AI that creates new content
- LLMs = GenAI specialised in human language 

so while LLMs are GenAI models, not all GenAI models are LLMs
- GenAI models can also be about 
	- images (DALL-E by OpenAI)
	- video (Sora by OpenAI, or Midjourney)
	- music (Suno AI)
	- speech (Whisper by OpenAI)
	- ... 
- LLMs are more particularly valued for automating language-heavy tasks such as
	- chatbots and conversational AI 
	- content creation
	- data analysis
	- ... 

cf. [[#2.3.5. Top Models 2025]] for a more exhaustive list of AI models
cf. [[AI Chatbots]] for an overview of conversational AI 

### 2.1. GenAI 101

#### 2.1.1. GenAI architectures
- **GANs (Generative Adversarial Networks)**: Two NN competing to generate realistic data
	- **Generator**: creates fake realistic data
	- **Discriminator**: spots fake data vs. real data
- **VAEs (Variational AutoEncoders)**: Encoding and decoding mechanisms for data generation with probabilistic latent spaces. 
  -> probabilistic models that learn latent representations (encode) and can generate new data samples (decode)
- **Autoregressive models**: Sequential generators that produce data one element at a time based on previous elements
- **Diffusion models**: Generate data by reserving a gradual noising process, highly effective in image synthesis. 
- **Transformers**: NN architectures that process sequential data (text) with self-attention mechanisms to capture contextual dependencies, highly efficient for human language processing 
  cf. [[#1.2.1. Transformers]]

#### 2.1.2. GenAI training paradigms
- **Self-supervised learning** where model learns by generating its own labels from the structure of the data, vs. human-labeled data
- Large-scale pre-training on diverse datasets to capture broad knowledge
- Fine-tuning on domain-specific data to specialise generative capabilities

cf. [[#1.3. Pre-trained Models & Fine-tuning]]

#### 2.1.3 GenAI + 
**Applications**
- media 
- research
- automation
- design
- ...

**Challenges**
- ethical concerns: bias, misinformation, malicious content gen
- resource intensity: vast compute and data
- quality and control over generated outputs 

**Recent advances**
- multimodal gen models combining text, images, audio inputs and outputs (cf. [[#7.1. Multimodal AI]])
- integration with retrieval systems (RAGs) for real-time factual accuracy 
- agentic AI that autonomously manages gen tasks with memory and reasoning

**GenAI ecosystem**
- cloud providers offering genAI APIs and platforms (Azure, Google cloud, aws)
- open-source frameworks and models promoting transparency and customisation
- growing community and tools around prompt eng, dataset curation, deployment 

### 2.2. LLMs 101
def: LLMs are a subset of GenAI focused on human language processing and generation, they are built on transformers, trained on massive text datasets and basically can be seen as
- a super-powered autocomplete on steroids / NLP on steroids lol 
- a statistical representation of human language patterns 
- a system that learns to predict the next most likely word (token) in a sequence 

###### A note on moon-shot difference between autocomplete/NLP and LLMs
in fact quite the mystery in modern AI, the leap is crazy, and it has a name: **emergence**. 

it's not necessarily magic, can be explained by 3 components:
- **scale**: colossal, most of the internet, number of parameters 
- **architecture**: revolutionary, transformer and self-attention
- **training objective**: predict the next word, by understanding all context (tone, intent, reasoning) -- kinda developing its own internal models (concept, logic)

in the end, the model still isn't conscious, it just has become a **statistical mirror of human language and reasoning**-- polished, sophisticated, almost perfectly deceiving. 

#### 2.2.1. How do LLMs work?
- **Train** on a massive chunk of the internet (trillions of words, i.e. 10^18 i.e. a billion of a billion)
  -> using unsupervised (no label) and self-supervised (self-created labels) methods
- **Learn** statistical relationships between words, concepts, patterns (thanks to self-attention mechanism)
- **Generate** text by repeatedly predicting the next most plausible word based on the previous words on your instruction 

#### 2.2.2. LLMs capabilities
-> basically can perform a wide range of NLP tasks
- **Text generation**: write emails, essays, stories, poetry, etc. 
- **Question Answering (Q&A)**: provide info and explanations
- **Summarisation**: condense long documents / text
- **Translation**: convert between language
- **Code generation**: write and explain code in various programming language
- **Reasoning** (Chain-of-thought): perform logical inference and step by step problem-solving 
	- **Inference**: using a trained AI model to make predictions on new data. 
	- **Chain of thought**: prompting technique where the model explains its reasoning step-by-step before giving a final answer.

##### A note on "Reasoning"
In the context of AI, "reasoning" does not really mean conscious thought or human-like understanding. 
-> it refers to the model's ability to
- manipulate information according to logical rules and structured processes
- to arrive at an answer that is not directly stated in its training data 

💡 An advanced pattern matching applied to a chain of logic, rather than true deduction 

In fact, 
1. It's about the process, not so much about the answer itself
	- A model that is able to "reason" will demonstrate the step-by-step chain of thought, the pathway that leads to an answer. 
2. It's a learnt skill, and not a built-in capability 
	- Models also learn to "reason" by being trained on a massive amount of text where humans show their work: math textbooks with solutions, code with explanations, philosophical arguments, etc. 
	- => They learn the pattern of how a logical sequence of statements leads to a conclusion. 
3. The core techniques involve "system 2 thinking"
	- The "reasoning" mode uses techniques like Chain-of-thought, Tree of thoughts (explore multiple reasoning paths), Graph of thoughts (create complex web of interconnected reasoning steps), etc. -- and what they have in common is that they are slow and deliberate = System 2 thinking vs. System 1 thinking = fast and intuitive 

So really, for each problem / query, the model:
- **Pattern Recognition and Retrieval**: Identify what type of problem this is and retrieves the most relevant "reasoning patterns" from its training data (this is influenced by prompting and its internal representations)
	- if **pattern** matches "complex problems are solved by breaking them into steps"
	  -> **activate chain of thought process**
	- if **pattern** matches "debates involve considering multiple perspective"
	  -> **activate multi-agent or debate-style reasoning process**
	- if **pattern** matches "mathematical proofs follow logical deductions"
	  -> **activate logical reasoning process**
	- ❗⚠ notice how it's not "choosing" what to do like humans do, but it *activates* the most statistically likely **pattern/process** that matches the query
- **Pattern Execution and Generation**: sequentially generate tokens that follow the retrieved pattern, building the response step-by-step
  -> essentially "autocomplete" a reasoning process, not consciously understanding and creating a genuine one 
  -> it will generate the next token that score highest for "best fit" given the current context and activated patterns

tldr; the "reasoning" is really just a statistical simulation (illusion) of reasoning 
-> the model follows the syntactic and structural (so... linguistic) patterns of logic it has seen before (in textbooks, code, arguments, ...)
-> it can still make basic logical errors as it doesn't have a grounded, internal model of logic like a human does. 
#### 2.2.3. LLMs limitations
1. **Hallucination and inaccuracies**: generate false or made-up information -- though addressed by RAG and RLHF, still pressing and real 
2. **No true Understanding / Reasoning and Common sense**: operate on patterns, not true comprehension or consciousness -> fail at basic logical deduction and common sense reasoning
	- -> it means limited autonomous value creation; cannot form new economic or concept paradigms on its own, or possess genuine moral intuition 
3. **Memory issue (short and long)**:
	- limited by amount of text it can process at once, i.e. the "**working memory**" -> information can be "lost-in-the-middle", forgotten, ignored
		- -> though largely mitigated with massive context capabilities (10M tokens), the lost-in-the-middle problem still persists
	- but also limited by the cross-conversation abilities to remember user preferences and past interactions
		- -> GPT-5 better at it though it's not yet universal, sessions still do start from scratch
4. **Bias and fairness**: reflect, amplify and perpetuate societal biases present in training data (race, gender, culture, stereotypes, etc.)
5. **Prompt sensitivity and brittleness**: small, seemingly insignificant changes to the prompt can lead to drastically different or completely failed outputs 
6. **Out-of-date knowledge and temporal misalignment**: models have a hard/static knowledge cutoff from their training data and unaware of recent events 
	- -> mitigated by Real-time integration (e.g. web search) but core model knowledge remains *almost* frozen *(despite continuous integration and improvement)*
7. **Lack of transparency and explainability (the "black box")**: nearly impossible to understand why a model generated a specific answer or to trace its thought process
	- -> XAI (explainable AI) is gaining awareness and traction 
8. **Security vulnerabilities (jailbreaking and prompt injection)**: safety filters and guidelines can be bypassed with cleverly crafted prompts, making the model generate harmful or restricted content
	- -> despite hardcoded rules for LLM safety, there are ways to trick the model's reasoning and exploit its design more so than break the hardcoded rules (e.g. clever prompting to bypass filter to extract confidential information)
	- -> proactive red teaming to find and patch those vulnerabilities 
9. **High computational cost**: incredibly expensive (money and environment) to run and sustain the whole logistic chain 
	- -> GreenAI; smaller and more efficient models (SLMs), MoE, optimal balance of **Cost, Accuracy and Performance** (**CAP trade-off**)
	- -> so yeah MoE is super expensive during training phase but pretty efficient for inference; so the latter is leveraged, not all model's parameters are activated for a given task, which makes the inference faster and cheaper than a dense model 
		- e.g. Mistral 8x7B has 46.7B param, but only use 13B (<30%) per token 

A longer list of limitations and challenges with AI/LLMs:
1. Fundamental architectural and Cognitive limitations
	1. Lack of true understanding 
	2. Reasoning and logic gaps
	3. Context and memory constraints 
2. Performance and reliability issues
	1. Hallucination and factual errors 
	2. Inconsistency and instability 
	3. Brittleness and lack of robustness 
3. Operation and practical challenges
	1. Computational and resource intensity 
	2. Security and safety risks
	3. Deployment and scalability issues
4. Ethical and societal concerns 
	1. Bias and fairness
	2. Transparency and accountability
	3. Misuse and malicious apps 
5. Knowledge and capability boundaries 
	1. Knowledge limitations
	2. Procedural and creative constraints
	3. Multimodal and interactive limitations

Some areas of improvement:
- Architectural innovations beyond the Transformer 
- Better training paradigms and evaluation methods 
- Robust safety frameworks and ethical guidelines
- Human-AI collab systems that leverage the strength of both 

### 2.3. AI Models & APIs
def: basically the toolbox for an (Applied) AI Engineer

There 3 main access types:
- Proprietary cloud APIs
- Open-source models and local deployment ([[#1.2.2. Hugging Face 🤗]], [[#Ollama]])
- Hybrid models balancing privacy and performance

#### 2.3.1. Proprietary models
def: "closed-source" models, accessed via API, cloud-based, pay per request to use models hosted by a company 
➕ reliability, cutting-edge performance, no need to manage infrastructure, easy integration, scalability, up-to-date models
➖ can be costly, and trade-offs on privacy

Here are the most popular options: 
- **OpenAI**: market leader 
	- **GPT-4/GPT4o**: State-of-the-art reasoning and multimodality 
	- **GPT-3.5-Turbo**: Fast, cheap, good for most common tasks 
- **Anthropic**: focus on safety and constitutional AI
	- **Clause 3 (Opus, Sonnet, Haiku)**: long context windows and strong reasoning. 
- **Google AI**:
	- **Gemini Pro/Ultra**: deep integration with Google's ecosystem and strong multimodal capabilities 

#### 2.3.2. Open-source models 
def: self-hosted or cloud-based, some model are released under open licenses (e.g. Hugging Face, Meta LLaMA, Ollama) and can be downloaded, fine-tuned and run locally or on custom infrastructure
➕ data privacy, cost control at scale, customisation
-> cf [[#1.2.2. Hugging Face 🤗]] 

Most common options: 
- **Meta (Facebook)**
	- **LLaMA 2 / Llama 3**: best open-source LLM, powerful and widely adopted
- **Mistral AI**
	- **Mistral 7B, Mistral 8x7B**: small, fast and extremely efficient 
- **Microsoft**
	- **Phi-3**: new family of small powerful models that run on a phone. 

#### 2.3.3. Local & easy-run models
def: tools that make running open-source models on your own machine possible and simple. 
➕ data privacy, customisation, prototyping, personal use
➖ probably less efficient and performant vs. proprietary ones 

##### Ollama
def: platform that offers LLMs designed to run locally on personal devices -> the easiest way to run LLMs locally
- simple command-line tool 
- manages model downloads, dependencies, execution
- perfect for prototyping and personal use without cloud costs
- ➕ privacy, performance and ease of use! 

The models available can perform tasks like
- text generation,
- summarisation, 
- translation, 
- question answering, 
- etc. similar to popular models like GPT. 
#### 2.3.4. Hybrid approaches
def: combine the strengths of two or more different approaches, models, technologies -- very popular in practice and for enterprise usage
e.g.
- proprietary + open-source -> GPT-4 for complex reasoning + open source Llama for simpler, high-vol tasks
- LLM + specialised model(s) -> LLM + DALL-E to generate images + Whisper to transcribe audio + Calculator API for math -- all within the same conversation 

or even [[#> Mixture of Experts (MoE)]] is a type of hybrid approach where you could mix and match experts (models), where a router is the orchestrator 

the advantages of hybrid models:
- **cost-efficiency**: some models are cheaper than others, so it makes sense to allocate resources accordingly 
- **performance**: same concept, some tools are best suited for some tasks 
- **latency**: small model -> quick responses thus best for simple high-vol tasks, heavy model -> slow but powerful reasoning for complex tasks
- **privacy/sovereignty**: keep sensitive data local, use cloud API for non-sensitive tasks


#### 2.3.5. Top Models 2025
The big 4:
1. **GPT Series (e.g. GPT-5, GPT-5.1)** from OpenAI is a top performer with enhanced coding, reasoning, and multimodal input capabilities.
2. **Google Gemini Series (Gemini 2.5 Pro, Gemini 3 Pro)** pushes large-context windows (2M+ tokens), **multimodal input**, and complex problem-solving modes (strong reasoning).
3. **Anthropic Claude Series (e.g. Opus 4.5, Sonnet 4.5, Haiku 4.5)** are top-tier for **writing**, editing, **coding**, extended thinking for complex problem-solving. 
4. **Meta Llama Series (e.g. Llama 4 Scout, Maverick)** are open-source, massive 10M-token context, multimodal, and highly customisable.

There are other emerging, solid ones (depending on specific tasks too):
- **DeepSeek V3.1** open-source model that is cost-efficient, strong coding/math, hybrid “thinking” and “non-thinking” modes for adaptive usage.
- **Perplexity AI** is one of the best for research-based queries, leveraging real-time web search with citations and outputs concise summaries
- **Alibaba's Qwen** models leverage hybrid MoE architectures, high performance and efficiency, strong multilingual support.
- **Phi-4 by Microsoft** is a lightweight multimodal model that can run on phones.
- **Grok Series (e.g. Grok 4) from xAI** that process real-time information from X, has a more "unhinged/sarcastic" personality, good for content creation. 
- **Whisper from OpenAI** for Speech-to-Text (STT) transcription/translation, high accuracy and supports ~100 languages, free and open-source. 
- **DALL-E 3 from OpenAI** for photorealistic quality of **image** generation, based on text prompts.
- **Sora from OpenAI** is an AI-powered Text-to-**Video** generation tool.
- **Midjourney v6.1** for unmatched artistic/aesthetic quality in **image/video** generation, superior style coherence and strong creative community. 
- **Stable Diffusion (SDXL) from Stability AI** that is completely open-source, unlimited customisation / cost per image, local deployment for privacy. 
- **Mistral AI** is a prominent player in the LLM landscape, focus on developing open-weight and high performance AI solutions -> highly customisable, versatile and transparent. 
- **GLM-4.5V by Zhipu AI** is one of the latest generation Vision-language model (VLM), uses MoE. 
- **Kimi K2 by Moonshot AI** specifically for agentic apps, all in one assistant. 

note: Stable diffusion can both refer to the technique for GenAI, or the specific models e.g. "SDXL" from Stability AI. 

note: on **Claude series by Anthropic** 
- **Opus**: deep reasoning, advanced coding -- best for complex, high-stakes analysis and long multi-step tasks
- **Sonnet**: balanced daily driver -- fast, accurate writing and analysis with strong doc and image understanding for most work
- **Haiku**: ultra-fast and cost-efficient -- ideal for live chat, quick summaries, translations and high-volume workflows

##### Some extra numbers and information

| Model / Provider                                                                                                                                | Parameters (Est.)                                                                                 | Context Window (Tokens)                                                                                      | Key Features & Notes                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OpenAI GPT-4**[](https://en.wikipedia.org/wiki/GPT-4)[](https://explodingtopics.com/blog/gpt-parameters)[](https://openai.com/index/gpt-4-1/) | ~1.8 Trillion (Est.)[](https://explodingtopics.com/blog/gpt-parameters)                           | 128k (GPT-4 Turbo)[](https://en.wikipedia.org/wiki/GPT-4), 1M (GPT-4.1)[](https://openai.com/index/gpt-4-1/) | Mixture of Experts (MoE) architecture. GPT-4.1 features major improvements in coding and long-context comprehension[](https://openai.com/index/gpt-4-1/).                       |
| **OpenAI GPT-5**[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                                       | Undisclosed (System)                                                                              | 400k[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                | Flagship model with unified reasoning capabilities, released August 2025[](https://codingscape.com/blog/most-powerful-llms-large-language-models).                              |
| **Google Gemini 2.5 Pro**[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                              | Not Disclosed                                                                                     | **1,000,000**[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                       | State-of-the-art in complex math and coding. Native multimodal processing (text, image, audio, video)[](https://codingscape.com/blog/most-powerful-llms-large-language-models). |
| **Anthropic Claude 4 Opus**[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                            | Not Disclosed                                                                                     | 200k (1M in beta)[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                   | Recognized for superior reasoning capabilities and a strong focus on safety and reliability[](https://codingscape.com/blog/most-powerful-llms-large-language-models).           |
| **Meta LLaMA 3**[](https://www.instaclustr.com/education/open-source-ai/top-10-open-source-llms-for-2025/)                                      | 8B, 70B[](https://www.instaclustr.com/education/open-source-ai/top-10-open-source-llms-for-2025/) | 128k[](https://www.instaclustr.com/education/open-source-ai/top-10-open-source-llms-for-2025/)               | Open-weight, optimized for dialogue. 8B and 70B parameter sizes available[](https://www.instaclustr.com/education/open-source-ai/top-10-open-source-llms-for-2025/).            |
| **Meta LLaMA 4 Behemoth**[](https://explodingtopics.com/blog/gpt-parameters)                                                                    | 2 Trillion[](https://explodingtopics.com/blog/gpt-parameters)                                     | Information Missing                                                                                          | Open-weight model released in April 2025, showcasing the push for larger open models[](https://explodingtopics.com/blog/gpt-parameters).                                        |
| **Mistral Large 2**[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                                    | Not Disclosed                                                                                     | 128k[](https://codingscape.com/blog/most-powerful-llms-large-language-models)                                | A leading European model, known for strong performance and efficiency[](https://codingscape.com/blog/most-powerful-llms-large-language-models).                                 |

| Model                         | Knowledge Cut-off Date                                                                     | Release Date                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| **OpenAI GPT-5.1**            | September 2024[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates) | November 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates) |
| **Anthropic Claude 4.5 Opus** | March 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates)     | November 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates) |
| **Google Gemini 3**           | January 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates)   | November 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates) |
| **Meta Llama 4**              | August 2024[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates)    | April 2025[](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates)    |

### 2.4. Tool Integration
def: often achieved through frameworks like **Model Context Protocol (MCP)** that allows AI models to connect with external tools, data sources, and APIs. 
-> move them beyond static knowledge bases to becoming dynamic systems that take action, access real-time info and interact with the digital world. 

**Model Context Protocol (MCP)**
def: standardised protocol (spearheaded by Anthropic) that allows AI models to securely connect to external tools, data sources and APIs
-> even for proprietary models! 
-> a bit like the USB-C port for AI apps

#### 2.4.1. Search & Data Analytics 
def: grounding / augmenting AI with real-time, factual information and insights from web search or data
e.g. models like perplexity AI does that by default while others have this as a feature (DeepSeek or OpenAI)
#### 2.4.2. Software development
def: assisting with coding, code completion, explanation and developer productivity
e.g. calling tools like GitHub Copilot, Amazon CodeWhisperer, ... 

#### 2.4.3. Content creation
def: generating and enhancing text, images and video content
e.g. calling tools like Midjourney, DALL-E, etc. 

#### 2.4.4. Workflow automation
def: automating complex tasks and connecting data across business applications 
e.g. with platforms like Zapier, Gumloop or Microsoft Power Automate

## 3. Embeddings, Vector DBs & RAG
def: 
- **Embeddings** are **numerical vector representations of data** (like words or sentences) capturing **semantic meaning**.
- **Vector Databases (VDBs)** store these embeddings to enable fast similarity search. 
- **Retrieval-Augmented Generation (RAG)** combines retrieval of relevant information from these VDBs with LLMs to improve response accuracy. 

This **trio** is revolutionary because it solves the core issues of LLMs:
- LLMs hallucinate facts
- No way to incorporate private data
- Retraining can be expensive

With RAG systems:
- Factually more accurate answers grounded in your data
- Up-to-date information (by updating your own documents in the VDB)
- Cost effective (no retraining needed)
- Explainable (you can see which documents were used for answers)

### 3.1. Embeddings
def: numerical vector representations (high-dim space) that capture the semantic meaning of words, sentences, documents, code, images. 
-> transform unstructured data into a format AI model can efficiently process
- **Semantic meaning**: interpretation of language
  -> including literal definitions, nuances, relationships, context-dependent meanings

💡 Embeddings = vectors
-> capture **meaning as numbers** in high-dim space
-> the numbers in the vector act like "coordinates" representing meaning

#### 3.1.1. Types of embeddings
**> By content type**
- Word embeddings (Word2Vec, GloVe): represent individual words (but **no context**!)
- Contextual embeddings (BERT, Sentence-BERT): represent words/sentences **with context awareness**
- Sentence/Document embeddings: represent entire sentences or documents
- Multimodal embeddings: represent cross-modal content 
	- Image embeddings: ResNet, **CLIP**
	- Audio embeddings: Wav2Vec
	- Graph embeddings: Node2Vec

**> By technical approach**
- **Static embeddings**: fixed representation per word, regardless of context (Word2Vec, GloVe)
	- **Token embedding matrix** = lookup table with static / dictionary meanings, example size [50000 x 512]
	- input = token IDs (e.g. `[103, 254, 891]`)
	- output = word vectors (-> `[I_vec, like_vec, cats_vec]` where each element is 512-dim)
	- again, **no context** included in those 
- **Dynamic/Contextual embeddings**: context-dependent embeddings (BERT, Transformers)
	- -> e.g. the word "bank" can change depending on context financial vs. river
	- output = contextual vectors

#### 3.1.2. Semantic properties 
Embeddings organise concepts in a "semantic space" where:
- **Semantic similarity**: similar meaning = close vectors
	- e.g. "happy" and "joyful" are neighbours
- **Analogical relationship**: mathematical relationships between concepts 
	- e.g. king ➖ man ➕ woman ≈ queen (seems like there is linear structure, those are minus and plus signs)
- **Contextual meaning**: words with multiple meanings get different positions
	- e.g. "bank" (financial) vs. "bank" (river) in different locations
- **Hierarchical relationship**: broader to specific concepts form clusters
	- e.g. animals -> mammals -> dogs -> golden retriever (retriever... retrieval...)

**> Semantic space**
-> the semantic space has meaningful geometric structure that reflects semantic relationships!
in fact, the model discovers that to predict language well, it needs to organise words so that:
- Similar words (with similar meaning) point in similar directions (regardless of how "strong" (magnitude, whatever) they are)
- Relationships correspond to linear translations
- Analogies can be solved with vector arithmetic

#### 3.1.3. Emb creation process
Embeddings are typically generated using the **encoder portion of Transformer models** (like BERT, RoBERTa, etc.)
1. Tokenisation: Tokenise input text (-> into words/subwords)
2. Transformer processing: forward pass through transformer encoder model (BERT, etc.)
3. Embedding extraction: get vector representations for each token (not necessarily words)
4. Pooling: Combine token embeddings into sentence/document embeddings

```
- Input text -> tokens
- tokens -> [Encoder] -> contextual embedding for each token
- contextual embedding for each token -> [Pooling] -> sentence embeddings
```


**> Pooling strategies**
def: convert token embeddings to sentence embeddings 
-> this is extra compared to static **word** embeddings! (Word2vec)
- **Mean Pooling**: average all token embeddings (most common technique)
  -> will create a generic "centre of mass" but can be diluted by unimportant words
- **CLS Token**: use special token's embeddings [CLS]
- **Max Pooling**: take max values across tokens 

**Note on special tokens**
They are dummy tokens added to the input you feed into the AI model for specific instructions / purposes 
-> they are like traffic signs for the AI 
- [CLS] : for classification / sequence-level tasks -- overall meaning or classification placeholder
  -> "here is the summary box"
- [SEP] : to separate segments -- before and after are 2 sequences
  -> "section break"
- [MASK] : for masked language modeling -- predict what's hidden here given the context (either all context MLM, or past words context CLM)
  -> "fill-in-the-blank spot"
- [PAD] : for padding sequences to the same lengths
  -> "empty space / spacer"

#### 3.1.4. Advanced Emb Tech
**> Purpose-built models**
- **Sentence Transformers**: models specifically trained for sentence embeddings 
- **Instructor**: can follow specific embeddings instructions
- **E5**: State-of-the-art for retrieval tasks
- **Multilingual models**: work across languages while preserving meaning

**> Advanced Embeddings Techniques**
-> **Dense vs. Sparse Embeddings**
- **Dense Emb**: low-dim, continuous values (384-1024 dim) -- captures nuanced meaning
- **Sparse Emb**: high-dim, mostly zeros -- better for exact keyword matching
- **Hybrid approaches**: combine both dense and sparse for optimal retrieval 

#### 3.1.5. Evaluating Emb Quality
Key evaluation metrics: 
- **Semantic Similarity**: do similar sentences have similar embeddings? 
- **Retrieval Accuracy**: can we find relevant documents using vector search? 
- **Dimensionality trade-off**: 384 vs. 768 vs. 1024 dimensions (speed vs. quality)

Examples:
```python
# Different models for different needs
models = {
    "fast": "all-MiniLM-L6-v2",        # 384 dim -- speed priority
    "balanced": "all-mpnet-base-v2",   # 768 dim -- good quality, balanced approach
    "quality": "e5-large-v2",          # 1024 dim -- state-of-art, accuracy priority
    "multilingual": "paraphrase-multilingual-MiniLM-L12-v2"
}
```

**Note on dimensions**
- 512 dimensions first introduced for base model (hidden size or embedding size)
- GPU process data most efficiently in powers of 2 and multiples of 64/128
	- 1024 = 2^(10)  
	- 768 = 1024 x 0.75
	- 384 = 768 / 2
### 3.2. Vector DBs
def: Vector DBs are specialised databases optimised for storing and querying vector embeddings efficiently
-> they enable fast **Approximate Nearest Neighbour (ANN)** search 
-> optimised for high-dim vector data and provide scalable, low-latency retrieval 

💡 "Find things similar to this" with vector similarity

##### > Why traditional DBs fail for vectors?
**-> exact match vs. similarity search problem** 
- **Traditional DBs** (SQL, NoSQL): excel at **exact matches** (e.g. `WHERE user_id = 123`)
	- BUT they are terrible for "*find something similar*" queries
	- => with **Approximate Nearest Neighbour (ANN)**, VDBs can answer that question, searching across millions or billions of vectors in ms
- **Vector similarity**: requires finding the "closest" vectors in high-dim space, which is computationally costly and doesn't scale with traditional indexes 

**-> curse of dimensionality**
- as vector dimensions increase (384, 768, 1024+), the space becomes sparse
- traditional indexing methods break down -- everything seem equally close/far
- exact nearest neighbour search becomes computationally prohibitive at scale

#### 3.2.1. VDBs core
##### Core VDBs Architecture components
1. **Vector Storage & Compression**
	- Store dense vectors efficiently (often with **quantisation** to reduce memory)
	- Maintain associations between vectors and their original content/metadata
	- Can store both the embedding vectors AND the original source documents/objects (but also can store the original doc in a separate storage, S3, DB)
2. **Indexing strategies for similarity search**
	- Create specialised data structures that enable Approximate Nearest Neighbour (ANN) search
	- Use mathematical techniques to organise vectors for efficient retrieval
	- Balance trade-offs between accuracy, speed, memory usage
3. **Query execution flow**
	- Receive query vector
	- Use index to find candidate neighbours 
	- Refine and re-rank results based on actual distance calculation
	- Return top-K most relevant matches with scores

**Quantisation**
def: using fewer bits to represent numbers, i.e. reduce precision to save space
-> e.g. FP16 (16 bits) or INT8 (8bits) can save already 50-75% of memory space if original = FP32
-> quantisation can be apply to both the vectors (data) and the entire model (parameters), this latter being the most common meaning! cf. [[#> Model quantisation]]
##### ANN Indexing Strategies
**The very core of it: Approximate Nearest Neighbours (ANN)**
-> That's where the magic of VDBs happens, 
- ANN Indexing are based on **similarity search**
	1. **clever indexing strategies** that approximate neighbourhoods without checking every point
	2. **approximate trade-off** vs. exact match (100% accuracy (or precision), impossible at scale) 
	   -> in practice 95-99% precision and 98% recall is good enough 
- vs. Traditional Indexing which is based on **exact match** 

**Precision**: of all the results returned, how many were actually correct? -- quality, "accuracy"
**Recall**: of all possible correct results, how many were found? -- completeness

Some specific implementations of ANN algorithms: 

**> HNSW (Hierarchical Navigable Small World)**
def: creates a "small world" network where you can hop between distant points quickly, a multi-layer graph for efficient navigation
-> most popular one 
✏ *kind of similar to "**six degrees of separation**" concept, you can find anyone within 6 steps on average.* 

**> IVF (Inverted File Index)**
def: coarse partitioning where vectors are grouped into rough clusters ("Voronoi cells"), then fine search only within the most promising clusters
-> a two-step process: coarse-to-fine search 

**> PQ (Product Quantisation)**
def: compresses vectors for faster distance calculations

**> LSH (Local-Sensitive Hashing)**
def: hashes similar items into same buckets

##### Advanced VDBs capabilities
- Hybrid search
	- combine vector similarity with traditional filtering (exact match)
	- e.g. find docs similar to this query (vector) that were created last week (metadata filter)
- Multi-tenancy & Isolation
	- support multiple users/apps with data isolation
	- essential for SaaS apps service multiple customers
- Dynamic data management
	- real-time updates: add/delete vectors without rebuilding entire indexes
	- versioning: handle evolving embeddings and model versions
#### 3.2.2. Popular VDBs
##### VDBs comparison

| Database     | Type                  | Best For                  | Key Feature                                |
| ------------ | --------------------- | ------------------------- | ------------------------------------------ |
| **Pinecone** | Managed               | Production apps           | Fully managed, auto-scaling                |
| **Chroma**   | Open-source           | Prototyping & simple apps | Easy setup, Python-native                  |
| **Weaviate** | Open-source + Managed | Hybrid search             | GraphQL interface, ML integration          |
| **Qdrant**   | Open-source + Managed | Performance & flexibility | Rich filtering, cloud-native               |
| **Milvus**   | Open-source           | Large-scale enterprise    | Distributed architecture, high scalability |

##### VDBs how to choose the right one
**Considerations:**
- **Scale:** Thousands vs. millions vs. billions of vectors
- **Latency Requirements:** Real-time (ms) vs. batch processing
- **Metadata Complexity:** Simple filters vs. complex hybrid queries
- **Operational Overhead:** Self-hosted vs. fully managed
- **Ecosystem Integration:** Existing tooling and language support

**Decision Framework:**
- **Prototyping:** Chroma (simplest to start)
- **Production Apps:** Pinecone/Weaviate (managed, robust)
- **Large-scale Enterprise:** Milvus/Qdrant (self-hosted, distributed)
- **Complex Filtering:** Weaviate/Qdrant (rich metadata queries)

#### 3.2.2. VDBs performance
**Key Metrics:**
- **Recall@K:** How often the true nearest neighbours are in top-K results
- **Query Latency:** Time to get results (P95/P99 important for production)
- **Throughput:** Queries per second the system can handle
- **Indexing Time:** How long to build/update indexes

**Trade-offs:**
- **Higher Accuracy** ↔ **Higher Latency**
- **Faster Indexing** ↔ **Lower Recall**
- **More Dimensions** ↔ **More Memory/Compute**

### 3.3. RAG 101
def: **Retrieval-Augmented Generation**, a system that retrieves information from your knowledge base (**VDB**) and **augments the LLM's prompt** with it **before generating** an answer. 
-> produce context-aware and fact-based outputs 
➕ accuracy, factuality, relevance by grounding outputs in external knowledge sources

Easy analogy: closed-book exam (no RAG) vs. open-book exam (RAG)

| Without RAG                                                   | With RAG                                                    |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| Can only use what have been memorised during training         | Can look up relevant facts before answering                 |
| Can make up answers and hallucinate when unsure or don't know | Answers are grounded in actual source material              |
| Can't access private documents, or even recent information    | Can access specific knowledge, and check latest information |

Simple concrete RAG step-by-step: 
1. **Knowledge Base preparation** 
	1. Collect your data 
	2. Chunk them into manageable pieces (e.g. 500-word segments)
	3. Create embedding for each chunk
	4. Store in VDBs
2. **Query time with user**
	1. User asks a question Q
	2. Create **embedding** of the question Q 
	3. **Retrieve** most relevant information (document chunks) from **VDB** + return top matches
	4. **Augment** the **LLM prompt**: "Based on this context: [retrieved chunks], answer: [user question Q]"
	5. **Generate** the **final answer** using the grounded context

Concretely, it uses 2 main components:
1. **Retriever** model
	- embeddings and vector search
2. **Generator** model
	- a generative language model like GPT
### 3.4. RAG in production
##### > Frameworks supporting RAG
cf. [[#6.2. Agent Frameworks]] for more info

###### [LangChain](https://www.langchain.com/)
def: general-purpose LLM application framework 
i.e. framework that simplifies building applications powered by language models
-> great for prototyping complex workflows, research, and apps needing max flexibility 
➕ agentic workflow, complex chains 

it offers tools for:
- interacting with databases, APIs, other models
- prompt management 
- data retrieval
- workflow orchestration

making scalable applications easier to develop:
- chatbots
- automated data analysis
- multi-step reasoning systems

###### [LlamaIndex](https://www.llamaindex.ai/)
def: optimised specifically for data ingestion and retrieval 
-> best for production RAG systems, complex docs, advanced retrieval patterns
➕ retrieval COREEE 

it is designed to facilitate the integration of LLMs with structured and unstructured data sources 
-> acts like a data framework that helps build RAG apps by indexing various types of data (docs, databases, APIs)
=> enable LLMs to query and retrieve relevant info efficiently 

###### [Haystack](https://haystack.deepset.ai/)
def: open source python framework that helps you build search and question-answering (Q&A) agents fast (end-to-end)
-> enterprise apps/teams, regulated industries 

e.g.
- you connect your data sources
- pick a language model
- set up pipelines that find the best answer to a user's query 
- => that's it, it's up and running 

##### > The RAG-in-prod process breakdown
**Production RAG Architecture components**
- **Retrieval** enhancement stack (> just vector search) 
- Context management system (> basic chunk)
- **Generation** quality layer (> unfiltered, unsafe, unreliable answers)

1. Knowledge base preparation (one-time setup)
	1. Data ingestion
		- **Collect** all source documents (pdf, word docs, web pages, DB)
		- Handle different formats -> **convert** everything to clean text
		- **Organise** by source, department, category for filtering later
	2. Smart **chunking** 
		- Split documents into logical chunks (not just fixed sizes)
		- Preserve context: keep paragraphs/sections together
		- Add overlap: chunks share some text to maintain continuity 
		- Enrich with metadata: source, date, author, department, confidence_score
	3. **Embedding** generation
		- For each chunk -> generate embedding vector
		- Batch process for efficiency (1000s chunks at once)
	4. Store embeddings in **VDBs**
		- Store: vector + metadata + original text ref 
		- Version control: track when embeddings were created/updated
2. Real-time query processing (per request)
	1. Query understanding (and rewriting)
		- User asks question/query (e.g. "what's our refund policy for international orders")
		- Analyse query intent, identify key entities ("refund", "international")
		- Optionally: rewrite query for better retrieval
	2. Smart **Retrieval** 
		- Generate embedding for the query 
		- Search VDB with hybrid approach (**ANN** and traditional techniques):
			- Vector similarity (semantic meaning)
			- Keyword matching (exact terms)
			- Metadata filtering (e.g. only docs with relevant category, "policy" documents)
		- Get top 5-10 most relevant chunks 
	3. Re-ranking & validation
		- Use more sophisticated model to re-score results
		- Filter out low-confidence matches
		- Ensure diversity: don't return 5 chunks saying the same thing
		- Check for contradiction between sources
	4. Context **Augmentation**
		- Build the augmented prompt: 
		  "Based on this context: [retrieved chunks]
		  Answer this question: [user question]
		  If information is missing, say you don't know."
		- Optionally add instructions for tone, style, citation format. 
	5. **Generation** with guardrails
		- Send to LLM with
			- Temperature = 0 (consistent answers)
			- Max token = reasonable limit
			- Stop sequences to prevent rambling 
		- Monitor for: hallucinations, refusal to answer, off-topic responses
	6. Post-processing & Delivery 
		- Extract citations: link answer sentences to source documents 
		- Format response for the interface (chat, email, etc.)
		- Log: query, source used, response quality, latency
		- Cache: similar future queries can skip full processing
3. Production infrastructure
	1. Scalability & reliability 
		- Load balancing: handle 1000s of concurrent users 
		- Rate limiting: prevent abuse
		- Fallback strategies: if VDB fails, use keyword search 
		- Monitoring: latency, error rates, quality metrics 
	2. Data freshness
		- Incremental updates: when documents change, only re-embed new/modified chunks
		- Scheduled refreshes: periodically re-validate entire knowledge base
		- Version tracking: know which document version was used for each answer
	3. Quality assurance
		- A/B Testing: compare different chunking strategies or models 
		- Human evaluation: regularly spot-check answer quality
		- Feedback loops: track when users thumb-down/report responses to identify gaps 
		- Continuous improvement: use failures to improve retrieval or add missing documents

Key **production metrics**:
- **Accuracy**: are answers correct? (human eval)
- **Retrieval quality**: are we finding the right docs? 
- **Latency**: < 2 seconds for full RAG pipeline
- **Availability**: 99% uptime
- **Cost**: $ per query stays reasonable at scale 

##### > others
**RAG advanced patterns**
 - Recursive RAG pattern
 - Hypothetical Document Embeddings (HyDE)
 - Step-Back Prompting + RAG

**Critical production consideration**
- The "False Positive" problem
- Freshness vs. Stability trade-off
- Evaluation challenge
- Scaling philosophy 

**RAG Usecases**
RAG is used to enhance applications like
- Chatbots
- Customer support
- Content summarisation


Last word: RAG to RAG-nostic systems 

## 4. Prompt Eng & LLM Optimisation
def: 
- **Prompt Engineering** involves crafting **inputs/instructions to LLMs** that guide the model to produce qualitative and desired outputs. 
- **LLM Optimisation** includes techniques like **fine-tuning** or parameter-efficient tuning to improve **a model's performance for specific tasks**. 

In this chapter, we'll see:
1. Start with the **techniques**: how to communicate with LLMs 
2. Move to **architectures**: how to structure the conversations
3. Cover **optimisation**: how to do that efficiently
4. End with **strategy**: when to choose which approach

### 4.1. Prompt Patterns
def: mastering the art of AI communication through structured interaction techniques

-> **Pro tip**: combine techniques to get even more precise and effective results! (e.g. role prompting + step-back prompting)
#### 4.1.1. Zero-shot prompting
def: direct instructions with no examples
-> the most basic task prompt
-> rely entirely on model's pre-trained knowledge and capabilities 

**> When to use?** 
- simple, straightforward tasks
- testing model capabilities
- quick prototyping

**> Examples**:
- "summarise this: ..."
- "translate this english text to french: ..."

#### 4.1.2. Few-shot prompting
def: provide examples to demonstrate patterns and format (e.g. input/output pairs)

**> When to use?** 
- complex **formatting** requirements
- teaching **specific reasoning patterns**
- tasks requiring **consistent** structure

**> Examples**:
```
Input: "2+2" → Output: "4"
Input: "10-5" → Output: "5" 
Input: "7*3" → Output: "21"
Input: "8/2" → Output: "?"
```

#### 4.1.3. Role prompting
def: assign personas for consistent tone, depth, expertise, perspective

**> When to use**
- Need consistent tone or voice
- Domain expertise required 
- Perspective shift
- Constraint enforcement

**> Examples**:
- "You are a friendly customer support agent. Help the user with their issue:"
- "As a senior software engineer, explain this code:"
- "Act as a kindergarten teacher. Explain gravity to a 5-year-old:"

#### 4.1.4. Chain-of-thought (CoT)
def: step by step reasoning for complex problems 
-> encourage the model to break down complex problems into intermediate reasoning steps before arriving at a final answer

**> When to use?** 
- mathematical problems
- logical reasoning
- multi-step decision making

**> Example**
```
"Q: A restaurant has 23 tables. Each table seats 4 people. 
If 15 tables are full, how many people are eating?
A: Let's think step by step:
1. 15 tables are full
2. Each table seats 4 people  
3. So 15 × 4 = 60 people
Therefore, 60 people are eating."
```

#### 4.1.5. Advanced Techniques
**> Self-correction**
def: create feedback loops where the model critiques and improves its own responses.
```
"First attempt: [initial answer]
Now critique this answer and identify any errors or improvements:
[critique]  
Based on this critique, provide an improved answer:"
```

**> Step-back prompting**
def: first prompting the model to identify fundamental principles or concepts, then applying them to the specific problem.
```
"First, what are the key principles of effective storytelling?
Now, apply those principles to improve this story: [story text]"
```

**> Template patterns**
def: creating reusable, parameterised prompt structures for common tasks
```
**Email Response Template:**
"Respond to this email as a [role] with a [tone] tone:
Email: {email_content}
Key points to include: {key_points}"

**Code Review Template:**
"Review this {language} code for {aspects}:
Code: {code}
Provide feedback in the format: {format}"
```

**> Tool/function calling prompts**
def: instruct the LLM when and how to call external tools, APIs or functions to extend its capabilities beyond pure text generation 

When to use? 
- need real-time data (weather, stock prices, news)
- require precise calculation (math, currency conversion)
- access to private DBs or APIs
- performing actions (send emails, update records)

```
"You have access to a calculator tool. Use it when needed.
Question: What's 15% of $84.99 plus 8.25% sales tax?"

"Available tools: get_weather(location), get_calendar_events(date)
User: What's the weather in Tokyo and do I have meetings today?"

"Tools: search_database(query), update_user_profile(user_id, data)
Task: Find user John Doe and update his subscription to premium."
```


#### 4.1.6. Best practices
- Be clear, specific and unambiguous about the task and the expected format 
- Provide enough context, including domain assumptions and edge cases
- Use structure: headings, bullet points, numbered steps, ... 
- Constrain output (length limit, style, allowed options) to reduce drift 
- Iterate: test, inspect failures, refine, and turn good prompts into reusable templates or prompt "systems"


### 4.2. Prompt Architecture & Management
def: structure conversations for reliability, scalability and maintainability 

#### 4.2.1. Conversation Architecture & Roles
##### > Three-layer structure
-> Three-layer conversation architecture
1. System prompts: the foundation 
2. User messages: the input
3. Assistant responses: the output
###### >> System prompts
purpose: define/set context, rules, behaviour, personality, constraints, safety rules, response format
``` python
# Sets context, rules, and behavior guidelines
system_prompt = """
You are an expert technical support specialist for CloudTech Inc.
- Be professional but friendly
- Never make up information about product features
- If unsure, say "I need to check with our technical team"
- Always provide actionable next steps
- Keep responses under 200 words
"""
```

###### >> User messages
def: it's the user query, request, prompt, instructions
```python
# User queries and requests
user_message = "My database connection keeps timing out. What should I do?"
```

In here, you can also resort to more, for example: 
- **Prompt engineering**: cf. [[#4.1.6. Best practices]] and [[#4.1. Prompt Patterns]]
- **Input data**: text to operate on (documents, question, logs)
- **Examples**: few-shot demos to show the model the desired pattern
- **Tool/Function calling**: integrating external APIs and data sources

###### >> Assistant Responses
def: the output from the model including textual response, but also actions and tools executed 
```python
# Model outputs and tool executions
assistant_response = {
    "text": "Let me help you troubleshoot the database connection...",
    "tools_called": ["check_service_status", "search_knowledge_base"],
    "confidence": 0.85
}
```


##### > Advanced Patterns
**Linear conversations**
def: maintain context across exchanges, basic alternation between user and assistant

**Tool-enhanced dialogs**
def: integrate API calls and function execution, assistant will use tools before generating output

**Multi-turn reasoning**
def: complex problem-solving across messages

#### 4.2.2. Production Management & Quality
Some best practice for better management and quality control

**Version Control & Testing:**
- Treat prompts as code -> version, document, and track changes
- A/B testing different prompt strategies and templates
- Automated test suites for critical use cases

**Environment Strategy:**
- Different prompts for dev/staging/production
- Gradual rollout and canary testing (i.e. to a small subset of users first (5%) before full rollout)

**Quality & Evaluation:**
- User ratings and satisfaction metrics
- Human feedback
- Business outcome tracking (conversion, resolution rates)
- Continuous improvement based on real-world performance
- Monitoring: latency, token usage, safety metrics

**Scaling Systems:**
- Template systems for consistent scaling across use cases
- Performance and compliance monitoring at scale 

### 4.3. LLM Optimisation
def: how to optimise LLMs for efficiency, cost and performance (in production)
-> Optimisation for ML/DL/AI refers to methods to update the model parameters to minimise loss functions during training

#### 4.3.1. Parameter tuning
-> the control knobs of LLM optimisation
- Temperature: control creativity vs. consistency
- Max tokens: prevent verbose responses and managing costs
- Stop sequences: define conversation boundaries
- Top-p (Nucleus sampling): advanced sampling for quality control 
##### > Temperature
def: control the **randomness** in the output => **predictable vs. creative**
-> this changes the **probability distribution** of words (likely words can become less likely)
- **Low (0.0 - 0.3)**: deterministic, factual, repetitive -> ideal for Q&A, data extraction
- **Mid (0.5 - 0.7)**: balanced creativity and coherence -> good for conversational agents
- **High (0.9 - 1.5+)**: creative and unpredictable -> can be good for brainstorming, storytelling
- **Rule of thumb**: start low for most apps, increase only if variety is required. 
##### > Max tokens
def: the hard limit on the length of the generated response
- Too low: the responses are cut off mid-thought 
- Too high: wasted tokens (cost), risk of verbose or rambling answers 
- Pro-tip: set this dynamically based on query type -> "summarise" task needs fewer tokens than "write an essay" task
##### > Stop sequences
def: a list of strings that, if generated, will stop the model from generating further tokens
- e.g. ["###", "Human:", "END"]
-> prevent the model from going off-topic, define a clear end to a response, create structured conversation turn 

##### > Top-p (Nucleus sampling)
def: control the diversity of the word choices by considering only the most probable tokens whose cumulative probability exceeds `p` => how many "**reasonable**" options to choose from?
-> this changes the **candidate pool** (only consider the top n% of likely words)
- Low (e.g. `top-p = 0.5`): more focused and predictable
- High (e.g. `top-p = 0.9`): more diverse and creative
- Common combo: `temperature = 0.7, top-p = 0.9` for a good balance

#### 4.3.2. Cost optimisation
def: basically how to select the model to balance cost/quality trade-off

##### > Model selection
def: choose the right tool for the job (cost/quality trade-offs)
- Top-Tier (GPT-4, Claude Opus): high cost -> use for complex reasoning, high-stakes tasks
- Balanced (GPT-3.5-Turbo, Claude Sonnet): ~10-50x cheaper -> good for most standard tasks, chat and summarisation
- Budget/Speed (Claude Haiku, Local models): fastest / cheapest -> good for simple classification, high-volume and low-risk tasks

##### > Caching strategies
def: store and reuse common responses
- Identical queries: cache the full response for frequent, identical prompting 
- Semantic similarity: cache based on the embedding similarity of the query to save on similar-but-not-identical requests

##### > Token efficiency
- shorter prompts: prune unnecessary context and examples
- efficient examples: in few-shot prompts, use minimal and clear examples
- compress inputs: use summarisation or filtering on long context before feeding it to the LLM 
#### 4.3.3. Latency & Performance
##### > Streaming
def: send back tokens as they are generated, instead of waiting for the complete response
=> real-time answering
-> drastically improves perceived latency, making the app feel faster and more responsive
##### > Batching
def: send multiple independent requests in a single API call 
-> reduce overhead and can significantly improve throughput for high-volume apps (e.g. process 100 emails for sentiment at once)
##### > Model quantisation
def: use smaller, quantised versions of models (e.g. 8-bit or 4-bit) when running locally -- by reducing the numerical precision of a model's parameters (i.e. weights and activations)
-> massive reduction in memory and compute requirements, leading to faster inference and often with a negligible drop in quality 

in fact, models parameters are typically trained in 32-bit floating-point (FP32) precision (i.e. 4 bytes per parameter)
-> quantisation converts them to a lower precision like
- FP16 -> 2 bytes per param
- INT8 -> 1 byte per param
- or even INT4 

concretely, 
- Llama 2 70B model is in **FP32** => **280GB** 
- Llama 2 70B **4-bit** quantised version (GPTQ) => **35GB** (8x reduction)

**more details about model parameters**
when we talk about model's parameters:
- the number of parameters
- the precision of the parameters

`1 byte = 8 bits = 1 octet <=> 2^8 = 256 possible values`
- INT4 (4-bit integer) = 0.5 bytes per parameter 
- INT8 (8-bit integer) = 1 byte per parameter 
- FP16 (16-bit, Half precision) = 2 bytes per parameter
- FP32 (32-bit, Full precision) = 4 bytes per parameter

##### > Geographic routing
def: send API requests to the nearest data centre
-> can save lots of response times 

### 4.4. Which strategy?
-> important to match solutions to problems, 
- Start with **prompt-only**; measure quality and failure modes 
- If the model "knows" the domain but formats are poor -> improve instructions, add examples, or structured outputs 
- If it lack domain knowledge -> add **RAG** or external tools
- If the model still hits limits (tone, safety, strict workflow, performance) -> consider **fine-tuning** or smaller specialised models

**> Only Prompt Engineering when...**
- Task is generic and simple
- Rapid prototyping and iteration needed
- Task fits within model's existing capabilities (including knowledge!)
- Need flexibility to change instructions frequently 
- Limited computation budget or data available

**> Add RAG when...**
- Need knowledge beyond model's training cut-off
- Require source citations and verifiability 
- Dealing with private, proprietary or recent information
- Building trustworthy, factual apps 
- Enhanced capabilities for dynamic tasks

**> (And/Or) Add Fine-tuning when...**
- Need consistent style, tone, or format outputs
- Need specialised behaviour
- Need expertise in static tasks
- Domain-specific terminology and pattern required 
- Possession of training datasets (a lot)
- For Enterprise level: Willing to invest in training infrastructure and data preparation


## 5. LLM Architectures and Training
def: focus on the **design and internals of LLMs**, including
- transformer components,
- training phases such as 
	- pre-training,
	- fine-tuning
	- and **Reinforcement Learning with Human Feedback (RLHF)** to improve the model's understanding and generation abilities. 

### 5.1. LLM Architectures Overview
#### 5.1.1. Transformer fundamentals 
The Transformer architecture, introduced in 2017 ("Attention is all you need"), replaced older RNNs and LSTMs by processing all words in a sentence 
- **simultaneously** -> massive parallelisation and much more effective learning of language relationships 
- vs. traditional **sequential processing** 

➕ parallel processing
➕ better long-range dependency modeling

##### > Attention mechanism
def: mechanism that gives **different importance weights** to each component of the input → help **dynamic focus**
e.g. being able to identify and tie back "it" pronoun to previous object in a sentence

##### > Key concepts of self-attention
**Query, key, value (Q,K,V)**: the core of attention (similar to a retrieval system), for each token, the model creates:
- **Query (Q)**: what this token is "looking for"
- **Key (K)**: what this token "offers" to others
- **Value (V)**: the content/info to be passed around

The model uses the Query to match against Keys, and then retrieves the corresponding Values. 
i.e. **Attention score** = **similarity(Q,K)** -> used to weight the Values
-> each token gets a new representation that is a weighted mix of other tokens, based on relevance 

**Multi-head attention**
def: instead of performing one large attention operation, the model runs multiple, smaller attention mechanisms ("heads") in parallel 
-> each head can learn to focus on **different types of relationships** (grammatical structure, entities, long-distance context, syntax, ...)
-> heads are concatenated and projected back into the model dimension

##### > Positional encoding
def: inject information about the position of each word in the sequence by adding a unique vector to each word's embedding 
-> because transformer processes all words at once and has no inherent concept of word order 
-> attention itself is permutation-invariant 

e.g. "the dog bit the man" is identical to "the man bit the dog" in its raw input


##### > Feed-Forward Network (FFN/MLP)
def: a simple Neural Network applied independently to each position after attention
-> this adds non-linearity and transforms the representations further
=> it helps processing meaning better since non-linearity is able to capture more complex patterns (it's like a boost of processing and understanding the meaning after the self-attention work to find relationships between words)
cf. [[data science notes#5.1.0. Feed-forward Neural Networks (FNNs)]] 

how? 
- usually a 2-layer network that expands then contracts the dimensions 
- e.g. 512 -> 2048 -> 512

**Definitions (reminder)**
- **NN (Neural Network)**: (Artificial) Neural Network is a ML model inspired by the structure and function of the human brain's interconnected network of neurons. 
	- Consists of interconnected nodes called artificial neurons, organised in layers.
	- Information flows through the network, with each neuron processing input signals and producing an output signal that influences other neurons in the network. 
- **MLP (Multi-Layer Perceptron)**: A kind of Feed-Forward NN

##### > Residual connections & Layer normalisation
- **Residual connections**: add a layer of input directly to its output 
  -> prevent vanishing gradient in deep networks -- allows signals to flow directly through many layers
	- With residual : `Input → Layer 1 → Layer 2 → Layer 3 → + Input → Output`
	  => original signal stay strong
	- Without: `Input → Layer 1 → Layer 2 → Layer 3 → Output`
	  => signal might be weak
- **Layer normalisation**: normalise activation across the feature dimension
  (not batch dimension)
  -> stabilise training, reduce sensitivity to weight initialisation, speed up convergence 
  -> typically applied after attention and after FFN, but before the residual addition

The combined flow in one Transformer Layer:
```
Input → Attention → Layer Norm → (+ Residual)
      → MLP       → Layer Norm → (+ Residual)
→ Output to next layer
```
which can translate to
```
Input → (finds relationships) → (stabilises) → (keeps signal)
      → (boost meaning)       → (stabilises) → (keeps signal)
→ Output to next layer
```

*note: layer normalisation vs. batch normalisation*
- **layer normalisation**: for each individual example, normalise all features 
  -> no cross-example dependencies 
- **batch normalisation**: for each feature, normalise wrt batch of individual examples
  -> create dependency between examples in the batch
##### > Self-Attention vs. Cross-Attention
- **Self-attention**: relationships **within a single sequence**
  -> allows the model to weigh and relate different tokens in a sentence to **each other**, capturing their **contextual meaning**. 
- **Cross-attention**: relationships **between two different sequences**
  -> words from one sequence look at words from another sequence (usually in translation?)
#### 5.1.2. Major architecture types
##### > Encoder-only (BERT, RoBERTa, DeBERTa)
note: can also be called auto-encoding model
- **Core design**: 
	- Uses only the Transformer's encoder stack
	  -> the encoder is designed to **understand and represent** input text
	- **Bidirectional attention**: each word can see both left and right context (the other words)
	- **Pre-training**: **Masked Language Modeling (MLM)**, where random words are masked (hidden) and the model must predict them using the surrounding context. 
- **Key characteristics**:
	- **Strength**: Deep, contextual understanding of language (input)
	- **Output**: Rich contextual embedding for each token, or pooled sentence representations
	- **Limitations**: Not designed for text generation
- **Common use cases**: text classification (spam detection), sentiment analysis, Named Entity Recognition (NER)
	- **❗Primary use case: Create sentence embeddings for VDBs and RAGs**

##### > Decoder-only (GPT, Llama, Mistral)
note: can also be called auto-regressive model
- **Core design**:
	- Uses only the Transformer's decoder stack
	  -> the decoder is designed to **generate** text, one token at a time
	- **Causal (unidirectional) attention**: each word can only attend to previous words
	- **Pre-training**: uses **Causal Language Modeling (CLM)** / **Next Token Prediction**, where the model predicts the next word of a sequence
	- **Autoregressive** generation: predict next token given all previous ones
- **Key characteristics**:
	- **Strength**: superior text generation, storytelling and conversational ability (generating output)
	- **Output**: Generated text, one token at a time
	- **Architecture**: often uses **Grouped Query Attention (GQA)** for efficiency (e.g. Llama 2/3)
- **Common use cases**: chatbots, content creation, code generation, and the foundation for today's most powerful LLMs -> general purpose reasoning and problem-solving.

##### > Encoder-Decoder (T5, BART)
note: can also be called "sequence-to-sequence model"
- **Core design**:
	- Uses the full Transformer with both encoder and decoder
	- **Encoder processes input with bidirectional attention**
	- **Decoder generates output with causal attention** + cross-attention to encoder
	- **Training**: often framed as "text-to-text" -- all tasks are converted to this format: transform an input sequence into an output sequence
- **Key characteristics**: 
	- **Strengths**: Excellent at text-to-text transformation tasks
	  (generating output based on input)
	- **Output**: Generated sequences based on input sequences
- **Common use cases**: translation between languages, summarisation, question answering, text simplification/rewriting
### 5.2. Training pipeline
Complete LLM training pipeline looks like this:
1. **Pre-training** -> Base Model (Knowledgeable, but unrefined)
2. (SFT) Supervised **Fine-Tuning**  -> Instruction-Tuned Model (Follows instruction, but unreliable and unaligned)
3. (RLHF) Reinforcement Learning from **Human Feedback** -> Aligned Model (Helpful, harmless, honest.... relatively)

```
Pre-training ->       Fine-Tuning       -> Human Feedback 
Base Model   -> Instruction-Tuned Model -> Aligned Model
```

About scale:
- Pre-training: 1-10 trillions tokens (self-supervised)
- Instruction training: 10k-100k examples (supervised)
- RLHF: 10k-100k human rankings (supervised)

note: even though for the fine-tuning part, the training data is about providing both input-output pairs, it's generally not as massive scale as the pre-training because
- **Generalisation**: model learn to extrapolate from examples, no need for huge amounts of them, but just enough to demonstrate the patterns 
	- e.g. you teach how to explain physics -> it'll be able to expand to biology 

#### 5.2.1. Pre-training phase
def: teach the model general language understanding and world knowledge

**Process**:
- **Data**: train on massive text corpora (books, websites, articles, code) -- often trillions of tokens
	- -> **self-supervised**
		- meaning the model creates its own training labels from raw text! (see below how both decoder and encoder models do that)
- **Objective**: 
	- **Decoder** models: Next Token Prediction (a.k.a. Causal Language Modeling)
	  -> "the cat sat on the [mask]" -> "mat" = becomes the label for training)
	- **Encoder** models: Masked Language Modeling 
	  -> "the [mask] sat on the mat" -> "cat" = becomes the label for training)
- **Outcome**: a "base model" with general language capabilities but no specific instruction-following skills
	- Grammar, facts, reasoning patterns, coding patterns
	- ❗**BUT it's not yet helpful or safe for conversations!** 
- **Compute cost**: extremely high -- requires thousands of GPUs/weeks and millions of \$\$\$

#### 5.2.2. Fine-tuning & Alignment 
def: supervised training on task-specific and smaller datasets to make the model helpful, harmless and honest for real-world use. -> mostly **supervised**
- Fine-tuning: train a general purpose model further to excel at specific tasks or styles
- Alignment: make the model behave in ways that are helpful, honest and harmless -- according to human values. 
##### > Supervised Fine-Tuning (SFT)
def: teach the model to follow instructions by training on high-quality human-written examples of desired interactions 
- goal: become good at specific tasks (i.e. expert in one field)
- data: thousands of prompt-response pairs written by experts
- example: 10k customer service conversations for a bank
```
input: "explain quantum computing simply"
target: "quantum computing uses qubits instead of bits [...]"
```
##### > Instruction Tuning
def: a specific type of SFT focused on following diverse instructions
-> you train the model to map: instruction + input -> output 
- goal: become good at following **diverse instructions** (i.e. good general assistant)
- data: broad, varied examples across many task types (translation, summarisation, coding, reasoning)
- example: "summarise this article: [text] -> [summary]", "write a poem about cats: [poem]", ... 

Without instruction tuning:
```
User: "Explain photosynthesis"
Model: "Photosynthesis is the process... [continues with textbook definition]"
```

With Instruction tuning:
```
User: "Explain photosynthesis to a 10-year-old"
Model: "Okay! Imagine plants are like tiny chefs... [uses simple analogy]"

User: "Explain photosynthesis in one sentence for a presentation"
Model: "Photosynthesis is how plants use sunlight to create food from air and water."
```

*note: Instruction Tuning is actually performed first (to get the good general skills), then followed by Specialised SFT (to make it an expert at something)*
##### > Reinforcement Learning from Human Feedback (RLHF)
def: train the model using human preferences as a "reward signal" to guide it toward better behaviour

Breakdown of **RLHF** process:
1. Collect human preferences
	- Show humans multiple model responses to the same prompt 
	- Have them rank which responses are better / more helpful / safer
2. Train a reward model
	- Create a model that predicts human preferences
	- Learns to score responses based on quality/safety 
3. Reinforcement learning
	- The main model generates responses
	- The reward model scores them
	- The main model is updated to maximise reward scores
	- Creates a feedback loop toward more helpful/safe responses

### 5.3. Training optimisation techniques
#### 5.3.1. Parameter-Efficient Fine-Tuning (PEFT)
def: only update a fraction of the model's parameters instead of full fine-tuning billions of parameters (which is incredibly expensive and slow)
##### > LoRA (Low-Rank Adaptation)
def: instead of updating all 7 billion parameters of a model, add tiny "adapter" matrices that are much smaller
- **Original weights**: unchanged / frozen
- **LoRA adapters**: small matrices that are trained (~ 0.1 - 1% of total parameters)
- -> Result: 100x faster training, 90% less memory 

```
# Original layer: Y = W * X
# With LoRA: Y = W * X + (A * B) * X

W = original_weights  # [4096, 4096] - 16.7M parameters - FROZEN ❄️
A = lora_A            # [4096, 8] - 32,768 parameters - TRAINABLE 🔥  
B = lora_B            # [8, 4096] - 32,768 parameters - TRAINABLE 🔥

# Total trainable: ~65K vs 16.7M (256x reduction)
```

##### > QLoRA (Quantised LoRA)
def: LoRA + 4-bit quantisation = even better
-> **Quantisation**: shrink the base model from 16-bit to 4-bit precision 
-> Result: can fine-tune 70B parameter models on a single consumer GPU (gaming GPU = 24GB VRAM)

So basically, the process is: 
1. Quantise base model to 4-bit (75% smaller, assuming FP16)
2. Train LoRA adapters in full precision
3. Merge adapters back for inference

#### 5.3.2. Model optimisation
##### > Quantisation
def: reduce numerical precision (32-bit -> 8-bit -> 4-bit)
-> trade-off is tiny accuracy loss for massive efficiency gains
cf. [[#> Model quantisation]]

##### > Mixture of Experts (MoE)
def: a kind of "divide and conquer" strategy, by using multiple specialised "expert" networks with a routine system
-> model "scale" without proportional compute cost, use 2-3 experts per token 
e.g. Mistral 8x7B = 8 experts, each with 7B parameters
- 2 experts for **common language patterns**
- 2 for **technical/code reasoning**
- 2 for **logical/mathematical thinking**
- 2 for **creative/abstract concepts**

❗while MoE saves compute power, it is heavy on memory bandwidth with all the load/unload of different experts + pretty complex in terms of engineering and implementation 
-> can be super overkill vs. "dense model" = 1 expert = all neurons always active for every token, which is better for low-latency, real-time response, small scale prototyping, consumer hardware

... but also, switching cost (i.e. memory bandwidth) is still cheaper than cost of running a single, large model (i.e. computational power)
- MoE: high memory traffic, but lower computation per token
- Dense: lower memory traffic, but higher computation per token for giant models (70B parameters for Llama 2 70B, crazy)

```
# Dense Model (e.g., Llama 2 70B)
┌─────────────────┐
│   ALL 70B        │  ← Every token uses 100% of the model
│   PARAMETERS    │
└─────────────────┘

# MoE Model (e.g., Mixtral 8x7B)  
┌─────┬─────┬─────┬─────┐
│ 7B  │ 7B  │ 7B  │ 7B  │  ← 56B total parameters
│ Exp1│ Exp2│ Exp3│ Exp4│
└─────┴─────┴─────┴─────┘
    ↑     ↑
    │     │
Only these 2 experts (14B params) used per token
```


##### > Pruning
def: remove less important weights from the model
-> smaller, faster models with minimal performance impact 
-> usually remove weights closest to zero (least active)

##### > Distributed training
- data parallelism: split batches across multiple GPUs
- model parallelism: split model layers across multiple GPUs
- pipeline parallelism: different GPUs handle different stages of processing

###### >> Parallelism more in detail
**Definitions**
- A token = a single unit (word, subword)
- A sequence = a complete sentence or document, composed of tokens
	- usually has a maximum length, e.g. **512** (set number for a particular design/architecture)
		- = **hidden dimension**
	- if exceeds max length, truncate 
- A batch = a group of sequences processed together
	- a group of N sequences of k_i tokens
- A tensor = 3D vector 

**Process**
1. Data preparation
	1. Tokenisation of the raw batch
		- each sequence is tokenised 
	2. Padding
		- all sequences in a batch must be the same length
	3. Convert to numbers
		- not yet embeddings but token ID (in that token dictionary space you know)
2. Hardware processing
	- Batch tensor: stored in GPU memory, shape `[batch_size, max_sequence_length]`
	1. Embedding lookup
		- GPU looks all tokens (= `num_sequence x sequence_length`)
			- e.g. 32 seq x 512 tokens = 16384 total tokens 
		- Convert each token ID to 512-d vector (= hidden dimension)
		- Output shape: `[num_sequences, sequence_length, 512]`
	2. Transformer processing
		- GPU processes the entire batch tensor through each layer
			- GPU has thousands of cores 
			- i.e. can compute all 512 dimensions for **multiple tokens simultaneously** 
			- in one cycle, it can process 4seq x 4tokens x some dimensions
```
Layer 1 Input: [4, 4, 512]  (all sequences, all tokens, all dimensions)
     ↓
Attention computes for all 4 sequences, all 4 tokens in parallel
     ↓  
Layer 1 Output: [4, 4, 512]
     ↓
Layer 2 processes the entire batch
     ↓
Layer 2 Output: [4, 4, 512] etc. 
```


**Key hardware**
- GPU memory (VRAM): store all model weights, activations and tokens
- Compute cores: number of parallel operations possible
- Memory bandwidth: how fast data can move 

**Batch processing**
def: instead of processing on sequence at a time, GPUs can process multiple sequences in parallel (e.g. multiple sentences simultaneously)
=> this is the main source of parallelism

**"Pseudo-parallelism within one sequence"**
for a single long sequence, the GPU uses vectorised operations which gives the illusion of parallelism 

e.g. for high-dim vectors
- GPU has thousands of cores 
- it can compute all 512 elements of a vector simultaneously => thanks to vectorisation 
- but if >>> then the GPU can process them in chunks or by optimising kernels that handle sequences efficiently 
- => at the core of this is leveraging **vector operations**, not so much the hardware / huge amounts of separate processors 

**Practical limits**
- Batch size: 32-128 sequences (this is real parallelism)
- Sequence length: 512-4096 tokens per sequence
- Modern GPUs (H100, A100): can handle ~50k tokens total per batch, VRAM = 80GB

**Distribution strategies**
- Single GPU: process one batch at a time, limited by VRAM 
- Multi-GPU (Model parallel)
	- split model layers across GPUs
	  (GPU1=Layers1-8, GPU2=Layers9-16, etc.)
	- -> tokens move between GPUs during processing
- Tensor Parallel
	- split individual layers across GPUs
	  (each GPU gets part of the weight matrices)
	- -> GPUs collaborate on each operation
- Pipeline Parallel 
	- different GPUs handle different batches in an assembly line 
	  GPU1 process batch 1 (layer1) then sends to GPU2, etc. 

in summary, the illusion is really: 
- vector parallelism within each token 
- batch parallelism across multiple sequences
- hardware optimisation that makes sequential processing extremely fast

**Some numbers**
Small Models (7B parameters)
- Hidden Dim: 4,096
- Sequence Length: 32,768 tokens
- Layers: ~32
- Batch Size (training): 256-512 sequences
- Total tokens/batch: ~8-16 million

Medium Models (70B parameters)
- Hidden Dim: 8,192
- Sequence Length: 131,072 tokens
- Layers: ~80
- Batch Size (training): 128-256 sequences
- Total tokens/batch: ~16-33 million

Large Models (400B+ parameters)
- Hidden Dim: 16,384-20,480
- Sequence Length: 131,072-1,000,000+ tokens
- Layers: ~120
- Batch Size (training): 64-128 sequences
- Total tokens/batch: ~8-128 million

##### > Efficiency techniques
 - **Gradient checkpointing**: trade compute for memory by recomputing intermediate activations during backdrop -> save memory during backpropagation
 - **Mixed precision training**: use 16-bit for most operations, 32-bit for critical parts (-> reduce memory footprint)
 - **Flash attention**: optimised attention algorithm that's 2-3x faster
 - **Optimised optimisers** (Adam, RMSprop, etc.)
 - **Learning rate and Scheduling**
	 - **Learning rate** controls step size for weight updates, crucial for stable and fast training
	 - **Schedules** reduce learning rates over time (step decay, cosine annealing) to fine-tune convergence near minima

##### > Gradient Descent variants
- **Stochastic Gradient Descent (SGD)**: updates model weights using **one or a few samples at a time**, allowing faster, noisy updates
- **Mini-batch Gradient Descent**: compromises between full-batch and SDG by updating with small batches -- balancing stability and speed 
- **Adaptive Methods**: Adam, RMSProp, AdaGrad adapt learning rates per parameter for faster and more stable convergence

### 5.4. Emerging architectures
Beyond the Transformer, the next generation of AI models. 

**Next-generation designs**
- State Space Models (Mamba SSM)
- Multimodal architectures: GPT-4V, LLaVA, Gemini 
- Hybrid approaches: combine different architectural paradigms 

**Efficient Transformers**
- Designed to reduce the quadratic complexity of standard self-attention
- Techniques include sparse attention, linear attention, Performer, Longformer, and Reformer
- Aim: handle longer sequences with lower compute and memory costs while maintaining accuracy 

**Memory-augmented networks**
- Networks with external memory modules to store and retrieve information dynamically 
- Help with long-term context and reasoning beyond fixed input windows

**Multimodel Architectures**
- Combine text, image, audio and other modalities into unified models
- -> enable richer, more versatile AI systems that understand and generate across modalities 

**Retrieval-Augmented Models**
- Not strictly architectural but combine base neural models with external retrieval systems to inject up-to-date knowledge dynamically at inference

**Neural Architecture Search (NAS)**
- Automated process to discover optimal architectures tailored to specific tasks or hardware constraints
- Increasingly applied to design efficient transformer variants 

**Sparse and Dynamic Networks**
- Networks where only parts of the model activate dynamically per input, improving efficiency and adaptability

## 6. Agentic AI & Orchestration
def: 
- **Agentic AI** systems **combine LLMs with tools, memory and reasoning** to perform **complex, multi-step tasks** autonomously. 
- **Orchestration** involves managing and integrating multiple agents, workflows, and protocols to build intelligent apps. 

💡 from AI as a **tool** to AI as an **assistant** 

### 6.1. AI Agents 101
def: autonomous systems that perceive, plan/decide, and act to achieve goals

#### Agent Core concepts
- **Reasoning**: break down complex problems logically
  -> multi-step problem solving
- **Autonomy**: execute with minimal human intervention
  -> more independence
- **Reactivity**: respond to changes and stimuli in their environment dynamically
  -> dynamic adaptation
- **Adaptability**: learn from feedback and improve performance over time
  -> continuous improvement
- **Proactiveness**: anticipate future states and take initiative to fulfil goals
- **Planning**: sequence actions strategically 
- **Social ability**: communicate and cooperate with other agents or humans when needed
- **Tool usage**: leverage APIs, calculators, search 
- **Memory**: retain context and learn from experience
#### Agent types 
- **Simple reflex agents**: act only on current percepts (inputs) without internal state (i.e. without remembering anything about the past or considering the future, in other words, they don't have memory)
  -> e.g. Thermostat or Roomba, no memory, only uses current info 
- **Model-based reflex agents**: maintain internal state representing the environment's state 
  -> e.g. Chatbot that remembers the past conversations
- **Goal-based agents**: possess explicit goals guiding their actions 
  -> e.g. Navigation app that knows it has to calculate the best route to destination while considering traffic etc. / a puzzle-solving AI that knows it has to win the game.
- **Utility-based agents**: evaluate expected outcomes to maximise a utility function, kind of like the goal-based agents, but more flexible and complex because can handle trade-offs, prioritisation, etc.  
  -> e.g. Trading bot balancing risk and reward to maximise profits. 
- **Learning agents**: improve decision-making based on experience and feedback
  -> e.g. Recommendation system that gets better at suggesting products based on user behaviour. 
#### Components of AI Agents
- **Perception** module: acquire data about the environment from sensors or inputs
- **Decision-making** module: applies reasoning, planning or learnt policies to select actions
- **Actuator** module: execute actions that affect the environment or system 
- **Memory/Knowledge** Base: stores facts, previous experiences, relevant data for ongoing context
#### vs. Traditional AI 
- **Traditional AI**: follows specific instructions
- **Agentic AI**: extend traditional AI by adding autonomy and goal-driven behaviour
  -> plans and executes projects (a bit like a project manager)
	- Modern agentic AI often integrates LLMs, bearing adaptive dialogue and reasoning skills. 
	- Multi-agent systems involve several agents interacting, cooperating, or competing. 

Some **examples of applications**:
- Virtual assistants and chatbots that proactively manage tasks.
- Autonomous vehicles navigating and planning routes.
- Robotic process automation in enterprise workflows.
- Cybersecurity agents monitoring and responding to threats.

- AI Software engineers
- Research assistant
- Business process automation
- Data analysis pipelines 

### 6.2. Agent Frameworks
def: agent frameworks are software platforms and libraries designed to facilitate the creation, deployment and orchestration of AI agents. 
-> provide tools, APIs, infrastructure that simplify building intelligent autonomous systems capable of complex reasoning, dialogue and interaction

cf. [[#> Frameworks supporting RAG]] 
#### > Key features of agent frameworks
- **Modular architecture**: enable composition of multiple agents or components such as LLMs, tool integration, memory managers and APIs. 
- **Multi-agent orchestration**: supports coordination and communication among multiple specialised agents working collaboratively 
- **Workflow management**: define sequences, branching, and error handling for complex task exe 
- **Memory and context handling**: integrate different memory types to provide agents with contextual awareness over time and sessions
- **Tool and API integration**: allows agents to leverage external services, DBs, computational resources dynamically 
  -> cf. [[#2.4. Tool Integration]]
- **Scalability and distributed execution**: support running agents at scale across cloud, hybrid env, including parallelism and load balancing 
- **Monitoring, logging and debugging**: facilitates observability to track agent behaviour and diagnose issues 
#### > Agent main frameworks
- **LangChain/LangGraph** (chaining tasks)
  Popular for chaining language model tasks with external data sources and tools, enabling customisable agent workflows. 
- **AutoGen** (multi-agent conversations and collaboration)
  Focuses on multi-agent collab with dynamic conversation and task management.
- **Semantic Kernel** (Microsoft orchestration framework)
  Provides AI orchestration with flexible memory and skill integrations. 
- **LlamaIndex** (RAGs in production)
  Specialised in indexing and retrieval to augment agent knowledge bases. 
- **Orq.ai, CrewAI, SuperAGI** (role-based agent teams with specialised skills / task delegation)
  Emerging platforms offering enhanced scheduling, task delegation, agent coordination capabilities
- **Prefect/Airflow**
  Traditional workflow orchestration adapted for AI (specialised in scheduled and reliable production (data) pipelines)

**Open source vs. commercial**
- Many frameworks have open-source roots that allow community customisation and innovation 
- vs. commercial platforms provide robust scalability, security compliance, and enterprise features 

Similar concept as in cf. [[#2.3. AI Models & APIs]]

#### > Agent architecture patterns
def: decision-making blueprint for AI agents, 3 main categories of patterns:
1. **Reasoning pattern** (how the agent thinks)
	1. ReAct: step by step reasoning with immediate action
	2. Chain of thought: pure step-by-step reasoning without external actions
	3. Step-back prompting: abstract to principles first 
2. **Execution patterns** (how the agent acts)
	1. Plan-and-exe: master plan -> exe
	2. Iterative refinement: try -> critique -> reflexion and improve 
	3. Direct action: single action based on input
3. **Coordination patterns** (how the agents work together)
	1. Multi-agent Horizontal/Vertical: team collab
	2. Multi-agent Competitive: multiple proposals, best wins
	3. Hierarchical: manager-worker relationships

They are building blocks for sophisticated AI systems, and each of them fits specific requirements, problems, complexity. 

Here is a non exhaustive list of patterns: 

**ReAct: Reason -> Act -> Observe loop** 
-> the foundation of modern agents 

💡 each action must be justified by a thought 
->  create transparent, interpretable reasoning 

**Plan-and-Execute: create detailed plan first, then execute**
-> project manager approach

💡 have a goal, plan the entire step by step first, then execute 
-> best for complex, multi-step tasks where the overall strategy matters 

**Reflexion: Self-critique and learn from mistakes**
-> adaptive learner 

💡 iterative thinking, try to get better and learn from mistakes
-> build a memory of past failures to avoid repeating mistakes

**Multi-agent: specialised agents collaborating**
-> team approach

💡 leverage all horizontal, vertical and competitive specialisation patterns 
- **horizontal**: same capability but different tasks (e.g. multiple writer agents)
- **vertical**: different capabilities / roles (e.g. researcher vs. writer vs. editor)
- **competitive**: multiple agents propose solutions, best one selected 

**In summary**

|Pattern|Best For|Complexity|
|---|---|---|
|**ReAct**|Simple to medium tasks|Low|
|**Plan-and-Execute**|Complex, structured tasks|Medium|
|**Reflexion**|Tasks requiring high accuracy|High|
|**Multi-Agent**|Very complex, diverse tasks|Very High|

-> in reality, most production systems use hybrid approaches i.e. use different patterns for different tasks

### 6.3. Knowledge & Context Management
Effective agentic AI depends heavily on accessing, managing and reasoning with relevant knowledge and context. 
-> memory, knowledge and situational awareness 

#### > Agent-RAG-memory integration
Basically the core components for this:
- RAG,
- Memory systems
- and Context management 

###### >> RAG Grounding
-> provide factual up-to-date knowledge base to prevent hallucinations + domain expertise
=> how? vector database search + document retrieval 
cf. [[#3.3. RAG 101]] and [[#3.4. RAG in production]]

**VDBs**
-> store and retrieve relevant context for decisions
cf. [[#3.2. Vector DBs]]

###### >> Memory types/systems in Agents
- **Short-term**: store recent interaction, conversation history and current context (last 10-20-100 messages) -> **context continuity** 
- **Long-term**: maintain factual knowledge, past experiences and learnings, persistent information **across sessions** in VDBs
- **Episodic vs. Semantic memory**: 
	- **episodic** tracks specific events/interactions/experiences
	- vs. **semantic** stores general world knowledge and facts. 
- **Working memory**: current conversation context, active task context

###### >> Context Management
Basically the goal is to maintain coherent multi-turn convo, remember user preferences and past interactions and build persistent expertise over time
- **Token management**: prioritise most relevant information within context windows
- **Context compression**: summarise or extract key points from long conversations
- **Context switching**: maintain multiple concurrent threads/tasks

###### >> Architecture integration -- Agent-RAG-memory flow
```
User query
	-> Agent reasoning
	-> RAG retrieval (factual grounding)
	-> Memory recall (past experiences)
	-> Action decision
	-> Memory storage (learn from this interaction)
```

#### > Adv Techniques for Knowledge management
- **Memory consolidation and summarisation**: automatically condense long interactions
  -> extract key decisions and outcomes
  => reduce redundancy and increase efficiency 
- **Cross-session persistence**: maintain user preferences across conversations
  -> remember project context over days/weeks
  => build personalised agent expertise
- **Conflict resolution**: handle contradictory information from different sources
  -> weight sources by reliability and recency, + flag uncertainties for human review
- **Feedback loops** to update memory and knowledge stores after interaction or new data 

### 6.4. Automation & Workflows
def: Agentic AI excels in designing and executing complex, multi-step automated workflows that coordinate multiple tasks, systems and agents with minimal human supervision. 
-> how do they orchestrate automation and manage workflows to achieve sophisticated objectives? 
#### > Workflow orchestration
- define sequences and dependencies of tasks, decide oder, parallelism and conditional branches
- schedule and trigger workflows based on events or conditions
- integrate multiple AI models, APIs, databases and services into cohesive pipelines

##### >> Workflow patterns in Agentic AI
1. **Sequential workflow**
	- Linear / Chained task execution with dependencies 
	- Each step must complete before next begins 
2. **Parallel processing** 
	- Multiple tasks executed simultaneously 
	- e.g. research agent gather data while writer agent creates outline
3. **Conditional routing** 
	- Dynamic path selection (**branching**) based on results
	- e.g. if analysis finds anomalies -> trigger alert, else -> generate workflow
4. **Human-in-the-loop (HITL)**
	- Critical decision points requiring human approval
	- e.g. contract review -> lawyer approval -> execution 

##### >> Real-world automation e.g.
- Customer service automation
```
User query
	-> Intent classification -> Knowledge base search
	
	-> If complex -> Human escalation 
	-> If simple  -> Generate response 
		      -> Quality check
		      -> Send
```
- Data analysis workflow
```
Data collection -> Data cleaning -> Data analysis
-> Insight generation -> Report writing -> Stakeholder notification
```
##### >> Automation types
**Robotic Process Automation (RPA)**
def: automate repetitive, rule-based digital tasks
e.g. data entry, form filling, screen scraping
-> can be triggered by agents or used as tools by agents

**Cognitive Automation**
def: adds AI/ML to handle unstructured data and decision-making
e.g. document understanding, sentiment analysis, prediction
-> it's essentially what agents already do: reasoning, planning, adapting 

**End-to-End Intelligent Automation**
def: combines RPA + AI agents + human oversight 
e.g. complete customer onboarding
-> agents orchestrate the entire workflow using RPA for repetitive steps and cognitive AI for decisions
```
End-to-End Intelligent Automation
    │
    ├── RPA (repetitive tasks) ← Called by agents
    ├── Cognitive Automation (reasoning) ← Agent core  
    └── Human-in-the-Loop (oversight) ← Agent escalation
```
#### > AI Agents production considerations
**Error handling and retries**
- detect and recover from failures or unexpected states in workflows
- real-time monitoring, alerting and HITL escalations when needed 
- alternative tool fallbacks

**Monitoring and observability**
- step completion rates and timing 
- cost tracking per workflow
- quality metrics and success criteria

**Version control and deployment**
- workflow versioning
- A/B testing different agent configs
- **blue-green** deployments for zero downtime
	- blue(live-stable) and green(staging-testing) use completely separate environments: servers, DBs (though could be same data), models, everything
	- the switch is done by a load balancer that redirects traffic almost instantly
	- easy to rollback to blue if necessary 
	- in reality: gradual rollout with monitoring for safety, cheaper alternative


### 6.5. AI Agent Evaluation & Benchmarking
#### > AI evaluation metrics
##### >> Performance metrics
1. Task performance
	- Task Success Rate: percentage of tasks fully completed correctly 
	- Goal achievement: how well the agent met specified objectives
	- Step efficiency: number of actions taken vs. optimal path
	- Accuracy and precision: performance on specific tasks
	- Long-horizon success: completion rate for multi-step, complex tasks
2. Reasoning quality
	- Logical coherence: soundness of reasoning steps
	- Plan quality: effectiveness of agent planning
	- Error recovery: ability to recognise and correct mistakes
	- Tool selection: appropriate choice of tools for each situation
3. Autonomy and adaptability
	- Independence: ability to operate without human intervention
	- Novel scenario handling: flexibility in unfamiliar situations
	- Dynamic env adaptation: performance in changing conditions
4. Cost & efficiency 
	- Token usage: input + output tokens per task
	- API calls: number and cost of external tools
	- Compute time / time to completion: total processing time from start to finish
	- Cost per task: total expense divided by success rate
	- Scalability: performance under increasing load/complexity 

##### >> Safety and reliability metrics
1. Safety and Control
	- Hallucination Rate: percentage of incorrect/made-up information
	- Boundary Adherence: staying within permitted actions
	- Refusal Accuracy: appropriately decline harmful requests
	- Kill Switch Effectiveness: immediate stopping capability 
	- Adversarial Robustness: resistance to malicious inputs
	- Ethical Compliance: avoidance of harmful behaviour
2. Consistency and Reliability 
	- Output Consistency: similar inputs -> similar quality outputs 
	- Failure Modes: understand how/when the agent fails
	- Edge Case Handling: performance on unusual inputs
	- Long-Running Stability: maintain performance over time
3. Collaboration and Communication 
	- Multi-Agent Coordination: effectiveness in team settings
	- Human-Agent Interaction: quality of communication with users
	- Communication Clarity: coherence and usefulness of output 

#### > AI Benchmarking
def: standardised tests and datasets used to objectively measure, compare and track the performance of AI systems across different capabilities
##### >> Approaches to evaluation
**Standardised Tests**
def: fixed datasets with predefined metrics (MMLU, HumanEval)
-> direct model-to-model comparison 
✔ core capability assessment 

**Scenario-Based Evaluation**
def: complex, realistic task environments (WebArena, simulation env)
-> tests integrated reasoning and tool usage
✔ real-world readiness assessment

**Custom Evaluation Frameworks**
def: organisation-specific tasks and success criteria
-> tailored to specific business use cases
✔ internal dev and product fit

**HITL**
def: human raters evaluate agent outputs and processes
-> qualitative assessment of reasoning, safety and usefulness
✔ safety-critical apps and nuanced tasks

##### >> Major benchmark categories
1. **General reasoning & Knowledge**
	- MMLU: 57 subjects across STEM, humanities, social sciences 
	- GPQA: Graduate-level questions resistant to web search 
	- BIG-Bench: Collaborative benchmark with diverse, difficult tasks
2. **Mathematical & Logical reasoning** 
	- MATH: high school and competition mathematics
	- GSM8K: grade school math word problems 
	- ARC: science questions requiring logical reasoning
3. **Coding & Programming**
	- HumanEval: python programming problems
	- MBPP: basic python coding tasks
	- CodeXGLUE: comprehensive coding benchmark suite
4. **Agent-specific benchmarks**
	- AgentBench: multi-domain tasks (web, coding, math, reasoning)
	- WebArena: real-world web navigation and task completion
	- ToolBench: tool usage and API integration capabilities
5. **Safety & Alignment**
	- TruthfulQA: truthfulness and misinformation resistance
	- ToxiGen: toxic content generation detection
	- Red teaming benchmarks: systematic vulnerability testing
##### >> Benchmark limitations and challenges
**Core challenges**
- Define meaningful evaluation criteria that capture agentic behaviour 
- Balance reproducibility with realism in complex environments
- Evaluate emergent and multi-agent capabilities comprehensively 

**Specific issues**
1. Benchmark contamination: training data leakage into test sets
2. Narrow focus: over-specialisation on benchmark patterns
3. Gaming the system: optimising for scores over real capability 
4. Rapid obsolescence: benchmarks become too easy as models improve 

##### >> Emerging benchmark trends
1. **Dynamic benchmarks**: adaptive difficulty based on model performance, prevent gaming through continuous variation
2. **Real-world evaluation**: moving beyond academic tasks to practical business problems; focus on end-to-end task completion in realistic env
3. **Multi-modal benchmarks**: cross-modal reasoning (text, image, audio, video); MMMU (multi-discipline multi-modal understanding)
4. **Cost-aware evaluation**: performance metrics weighted by computational cost, efficiency as a first-class evaluation criterion 

##### >> Benchmark tools and frameworks
**Benchmarking platforms**
- AgentBench: comprehensive multi-domain agent evaluation
- WebArena: realistic web navigation env
- ToolBench: tool usage and API integration testing
- AgentBoard: performance tracking and comparison dashboard

**Simulation environments**
- Virtual testing groups for autonomous agents
- Safe sandboxing for dangerous or expensive real-world tasks
- Examples: web simulators, API mock env, game-based tests

**Metrics frameworks**
- Combined quantitative and qualitative assessments 
	- **Quantitative**: success rates, efficiency scores, cost metrics 
	- **Qualitative**: reasoning quality, safety, user satisfaction 

## 7. Advanced topics & Responsible AI 
def: 
- **Multimodal AI**: handles multiple data types (text, image, audio)
- **Responsible AI**: focuses on ethics, safety, fairness, bias mitigation, governance to ensure AI systems are trustworthy and aligned with human values. 

### 7.1. Multimodal AI
def: AI systems that can process and understand multiple types of data (text, image, audio, video) simultaneously and draw connections between them 

**Key architectures**
- Early fusion: combine modalities at input level (e.g. convert all inputs to embeddings)
- Late fusion: process modalities separately, merge at decision level
- Cross-attention: allow modalities to interact throughout processing

**State of the art models**
- OpenAI GPT-5 series
- Google Gemini 2.5-3 Pro
- Anthropic Claude 4.5

cf. [[#2.3.5. Top Models 2025]] for more exhaustive list

-> Innovations include transformer architectures combined with 
- [[#> Mixture of Experts (MoE)]]
- and specialised vision-language models (VLMs)

**Technical challenges**
- **Alignment problem**: ensuring different modalities represent the same concepts 
- **Data scarcity**: limited high-quality multimodal training data
- **Computation cost**: exponential increase in model complexity 

**Real-world applications**
- **Medical imaging**: analyse scans + patient history for diagnosis 
- **Autonomous vehicles**: process camera, lidar, map data together 
- **Content moderation**: understand context across text, images, videos, ... 

### 7.2. AI ethics, safety, governance
Because of all [[#2.2.3. LLMs limitations]], striving to build safe and responsible LLMs is of paramount importance. 
#### 7.2.1. Core ethical principles
- **Fairness**: avoid **bias** and ensure equitable treatment
- **Transparency**: explainable decisions and **clear** limitations
- **Accountability**: clear **responsibility** for AI actions and outcomes
- **Privacy**: protect user data and maintain **confidentiality** 
- **Robustness**: maintain **performance** under diverse conditions
- **Human oversight**: appropriate **human control** mechanisms

#### 7.2.2. Safety frameworks & implementation
- **Proactive safety** 
	- **Red teaming**: systematic testing for vulnerabilities and failures 
		- adversarial testing: intentional attempts to break or mislead the system
		- stress testing: performance under extreme or unexpected conditions
	- **Constitutional AI**: models trained to follow explicit ethical principles 
		- self-critique against defined rules
		- automatic refusal of harmful requests
	- **Value alignment**: ensure AI systems act in accordance with human values
		- technical challenge: different cultures and contexts have different values
		- approaches: RLHF, democratic input processes, value learning
- **Governance and compliance** (Regulatory landscape)
	- EU AI Act: risk-based regulation of AI systems
	- NIST AI RMF: framework for managing AI risks
	- Industry standards: responsible AI practices and certifications
	- OECD & IEEE principles
- Monitoring and **Incidence response plan**
	- Rapid containment of harmful outputs 
	- Transparent communication with stakeholders 
	- Systematic root cause analysis and prevention 

cf. [OpenAI resources for safety best practices](https://platform.openai.com/docs/guides/safety-best-practices/) for more
#### 7.2.3. Responsible AI checklist
- **Bias audit**: test across diverse demographics and edge cases
- **Safety testing**: red teaming and adversarial evaluation
- **Transparency**: clear documentation of capabilities and limitations
- **Human oversight**: appropriate level of human control
- **Monitoring**: continuous performance and impact assessment
- **Compliance**: adherence to relevant regulations and standards

#### 7.2.4. Technical frontiers in AI Safety
- AI Safety research 
	- Scalable oversight: techniques to supervise AI systems that can become more capable than humans
	- **Robustness and reliability**
		- Distribution shift: performance on out-of-distribution data
		- **Adversarial robustness**: resistance to malicious inputs
		- Uncertainty quantification: knowing when the model is uncertain
	- Interpretability and explainability
		- Mechanistic interpretability: understanding model internals
		- Feature visualisation: what patterns is the model detecting 
		- Circuit analysis: map information flow through the network
	- Transparent evaluation: model cards, risk assessment frameworks, continuous monitoring of deployed systems
	- Containment and assurance: access controls, deployments safeguards, validation of safety claims
	- Accountability measures: whistleblowing policies and community standards to ensure corporate transparency 
- Emerging capabilities
	- Tool integration & APIs (cf. [[#2.4. Tool Integration]])
		- Seamless connection to external tools and databases
		- **Model Context Protocol (MCP)**
	- Long-context processing
	- Reasoning and planning

**Frontier Models**
def: the most powerful, cutting-edge AI models that push the boundaries of what's possible
-> massive scale (resources and DB), state-of-the-art performance (top-tier results in benchmarks), emergent capabilities (complex, novel, autonomous tasks performed), high cost (expensive to dev and run)

### 7.3. Societal Impact & Considerations
**Economic & workforce impact**
- Job transformation
	- Automation: routine cognitive tasks increasingly automated
	- **Augmentation**: AI as collaborator enhancing human capabilities 
	- New roles: prompt engineering, AI trainers, ethics auditors 
- Education and re-skilling
	- Curriculum evolution for AI-augmented work 
	- Lifelong learning and adaptation strategies

**Environmental considerations**
- Compute efficiency 
	- Carbon footprint: measuring and reducing training/inference costs
	- Sustainable AI: model efficiency, renewable energy usage
- Lifecycle management

**Global and cultural perspectives**
- Cross-cultural alignment
	- Accounting for diverse values and norms
	- Avoiding western-centric bias in training data
- Access and equity
	- Democratising AI access while preventing misuse 
	- Bridging the AI divide between organisations and nations 

# Appendix
- (re)sources:
	- https://roadmap.sh/ai-engineer
	- https://www.datacamp.com/blog/how-to-learn-ai
	- https://www.datacamp.com/tutorial/multilayer-perceptrons-in-machine-learning
	- https://www.vellum.ai/llm-leaderboard
	- https://platform.openai.com/docs/overview
	- https://modelcontextprotocol.io/docs/getting-started/intro
	- http://huggingface.co/learn/llm-course/chapter0/1
	- https://platform.openai.com/docs/guides/safety-best-practices/
---
- quick defs:
	- at scale = when dealing with large amount
	- overhead = fixed cost of doing anything (usually in terms of preparation and setup)
	- throughput = how much work you can do in a given time 
		- so high throughput = many API request per second, or many passengers per hour, etc. 
	- SDK = software development kit, i.e. bundle including tools, libraries, docs, sample code -> if API is a menu, SDK is the whole kitchen kit (menu, ingredients, utensils, recipe book, etc.)
---
- what can be done next
	- NLP in particular 
	- CV in particular 
	- Robotics and autonomous systems eventually 

---
- Microsoft copilot
- OpenAI Codex?
- Google Deepmind

- optional
	- overview of ==Hugging face and the different section==, type of models, dataset etc. 
---
- [x] Filter and review all questions
- [x] what's BERT and GPT then? 
- [x] state of the art models
- [x] specific modality models 
- [x] AI limitation
- [x] what's "reasoning"?
- [x] what about being connected to the web???
- [x] parallelism in detail
- [x] Add numbers such as 
	- number of parameters 
	- context length / context window / memory context ? (i.e. max token)
	- time to train a model etc 
- [x] Cut-off dates / knowledge