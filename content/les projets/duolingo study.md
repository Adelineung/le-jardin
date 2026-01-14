---
title: ⭐ duolingo — an experiment that wasn't meant to be one
draft: false
tags:
  - learning
  - language
created: 2025-10-20
shortname: ⭐ duolingo study
---

*last edited: 31-12-2025* 

##  i. introduction
###  1. le commencement
**feb. 9, 2025**
i reinstalled **duolingo**,
*which i had used in the past to learn german for a couple months,*

this time, i logged in, 
and chose a new language course: [[learning spanish|spanish 🇪🇸]] 

/***/


i was learning happily,

getting the xp in, 
duolingo score up, 
top 1 in my leagues,
bronze, silver, gold, ... 
impeccable streak (almost), 

progressing slowly but surely on the path of lessons,
every. single. day. (almost)

one day, i thought, 
> *wait-- ==how can i track my progress?==*
> *is there a way i can even export my data and analyse my progress over time?* 
> 
> *can i understand my own learning style?*

boohoo, 
*pandora box opened* 🤡

###  2. duolingo 101

> [!NOTE] my basic stats (20 oct 2025)
> -  spanish total XP: 153580
> - day streak: 250 (i.e. > 8 months in)
> - spanish score: 69 (early B1, *apparently*)
> - section 5, unit 99 (/250) 

> [!NOTE] my basic stats (31 dec 2025)
> - total XP: 209243
> - german total XP: 11861
> - spanish total XP: 196414
> - day streak: 322
> - spanish score: 74 (early B1, *apparently*)
> - section 5, unit 165 (/250) 

duolingo is the most popular language learning app in the world, 
with millions of users, teaching nearly 40 languages (+ music, maths and chess),
it stands out with a blend of playful characters, catchy designs, engaging user features, quirky content, and a strong and loyal community (at least as of 2025...). 

###### > fun and games
 
game-like experience with a highly interactive learning journey, 
you'll have streaks, rewards, milestones, friends, competition, leagues, etc. 

###### > at its core 💚 : accessibility 

duolingo philosophy is to provide accessible and good quality education to everyone, 

the core content is free, the monetization is done through ads.

there are paid subscriptions available if you want to take it to the next level (super duolingo, duolingo max),
or boost your learning with splendid features (e.g. practice speaking with an AI)

###### > educative

of course, it offers multiple types of lesson and exercise, covering all aspects of language skills:
- listening, 
- speaking, 
- writing, 
- reading

for certain languages, you get a duolingo score as well, which is a metric that gives you a better idea of your current language level, somewhat similar to the CEFR levels (Common European Framework of Reference for Languages).

###### > smartly personalised

especially efficient and relevant as well because of how duolingo tracks and adapts to your own personal learning journey (personalised experience!), 
it learns your strengths and weaknesses, 
offering frequent tailored exercises for you to train and correct your mistakes, 

supporting you further towards proficiency and mastery. great.

###  3. field-note
alright, so going back to the main question, 

> *==how to export my personal duolingo data to track my progress?==*
##### a. access the data 
###### > official website
getting your data directly from the official app is the easiest option if available (shouldn't it be for any user app? i don't understand why this is not more obvious and functional...),

duolingo allows its users to export their personal data from their [website](https://www.duolingo.com/) (log in, [Settings -> Profile](https://www.duolingo.com/settings/profile))-- not directly from the mobile app (hm). 

if you expect to get all your activity data from this, 
you're *wrong*, 
you'll only get your avatar picture, email, timezone, and some other miscellaneous ~~useless~~ information. 

as far as *actual meaningful data*, 
you get one file. 😐

a short CSV file that records the league (`tier`) and the XP (`score`) for each week.

```csv
leaderboard,timestamp,tier,score
leagues,2025-02-09T21:22:00Z,0,3161
leagues,2025-02-17T00:16:27Z,1,3165
...
```
that's it.

no `logfile` with timestamp for each practice, XP, score level, new words learnt, ... 

... 😠
###### > non-official api
one website that deserves the shoutout: https://duome.eu/
*-> add your duolingo username to the end of the link to see your own stats.*

i saved my xp history from this website around **end of april 2025**,
the earliest data i managed to retrieve from there was something **mid april** because they can only pull data from 2 weeks prior:
```csv
date,time,xp,typelesson,titlelesson
13.04.2025 ,16:49:08 ,35,practice,Weather
13.04.2025 ,16:52:02 ,50,practice,
13.04.2025 ,16:58:57 ,60,lesson,Stem Changes
...
```

i wanted to be able to pull data from the source directly, and not have to rely on this website as the middleman, especially to get the full history: from my very first day to today... 

the closest way that enables this (that i found) is through this unofficial python api: https://pypi.org/project/duolingo-api/

unfortunately it is not maintained nor up-to-date, 
it needs some tweaks and workarounds to connect to the API, 
and it doesn't provide all the data that i'd ideally like (e.g. the duolingo score evolution-- which i started manually tracking on a spreadsheet... no choice 😐),

i was still able to retrieve the daily XP and the timestamp for each lesson: 
```json
{'lessons_today':
[{'skillId': '05936ee56d43204947e3e5c904405b78', 'xp': 70, 'eventType': 'LESSON', 'time': 1747560891},
{'skillId': '05936ee56d43204947e3e5c904405b78', 'xp': 78, 'eventType': 'PRACTICE', 'time': 1747561036},
{'skillId': None, 'xp': 50, 'eventType': 'PRACTICE', 'time': 1747562409}],
'xp_today': 198}
...
```
the only catch is: 
> you only get this XP history for the past 2 weeks. just like the other website above. *UGH*. 
> *same constraint.* 

whatever. 

in the end, my first true recorded data is from **13 april 2025**, 
**what is prior to this date is going to be inferred (i.e. approximations only, no accurate true data) thanks to manual clues**. 

##### b. automated retrieval 
given this 2-week time window limitation, 
- i wrote a small `python script` to call the API, retrieve my XP progress, format and store the data in a csv file automatically,
- scheduled it with a simple `cron job` to periodically achieve this,
```csv
,skillId,xp,eventType,time,readable_datetime
428,6bba1a587bebf0c0dcbf36e98d108c2c,39,PRACTICE,1746264677,2025-05-03 11:31:17
429,6bba1a587bebf0c0dcbf36e98d108c2c,60,LESSON,1746212606,2025-05-02 21:03:26
430,6bba1a587bebf0c0dcbf36e98d108c2c,60,LESSON,1746212399,2025-05-02 20:59:59
...
```
##### c. data processing
over time, i accumulated about 1500 lines of data (*edit 31-12-2025: 2000rows!*), 
that i can now process, analyse and visualise 
with `python`, `pandas`, `matplotlib` in vscode. 

it is not too bad eventually.

*note: like i said, i only got my real data from mid april to today, i'll have to perform some backward interpolation to fill up the time window [february - april].*

i am not going to go into too much detail here,
maybe in an appendix section at the end someday. (maybe, maybe not)
##  ii. behavioural psychology: how duolingo designs habits
first off, how does duolingo even shape learning behaviours? 
an non-exhaustive overview of the mechanisms underlying user engagement and habit formation.
###  1. design features that drive habit

> [!NOTE] tldr;
> duolingo leverages behavioral psychology strategically via design features such as streaks, leaderboards, daily reminders, XP, rewards, etc. to hook users and drive user engagement by building a consistent habit into their lives.

duolingo's success story lies in its clever application of behavioural psychology, 
i.e. strategically designing compelling features that encourage users to build the habit of coming back. 
-> **psychological hooks**

learning a language switches from being a boring chore to something playful, fun, satisfying, effortless even. 

and at the heart of this: **streaks**.
by coming back and showing up everyday, 
users extend their streak.
*classic feature.*

don't worry, you'll for sure get (aggressive) daily scheduled **reminders**, 
to notify you throughout the day, that you might potentially lose your streak if you don't complete a lesson.

**XP** offers the instant feedback and gratification of every completed lesson,
"*YOU DID THE JOB, YOU GAINED PROGRESS, SUCH AN ACCOMPLISHMENT!*"

**leagues** and **leaderboard** (ranking with other players in the same league) add a social layer to encourage users to push harder and compete to win the league,
thus allowing them to collect **rewards** and **badges** to showcase proudly on their profile, 
asserting how much of a dedicated learner they are, 

and in order to perform the best, 
one learns to chase the **XP boost**, **chests** by completing the daily **quests**, **gems** to buy more items in the shop, ... 

by perfectly weaving these features together,  
duolingo doesn't just teach vocabulary and grammar, 
it carefully shapes *how* and *when* users engage, 
> -> the goal is to encourage **a habit that not only forms, but *sticks*.**
> an engagement that feels natural.
> 
> it rewires your brain to show up everyday to complete your duty,
> because that's just what you're supposed to do.

duolingo seamlessly makes its way into your daily life.
and that is only the first step of its conquest. 

###  2. the cost of gamification

> [!NOTE] tldr;
>  while beneficial to help build habits and keep motivation high, gamification can shift the goal from genuine learning to “not losing,” maintaining streaks, or chasing XP/leaderboard positions-- sometimes at the expense of genuine language acquisition.

while duolingo's features and gamification strategies are powerful motivators, 
they also come at a cost:
> focus shifts from genuine language acquisition to the relentless pursuit of rewards and dopamine

the features that innocently seem to boost user engagement can gradually turn users' motivation to reach **in-app success** instead of actual, authentic learning progress. 

###### > when the game becomes the goal

with the weekly league competition, the pressure to perform the best and climb the leaderboard gets more intense,
a particularly **vicious cycle**: the more you compete, the more you perform, the higher you rank, the more competitive the pool of players, the more you play, etc. 

and even if one isn't interested in leagues, it is still easy to confuse steady XP growth and perfect streaks for real proficiency, 

> ==when the reward system becomes the goal, engagement turns mechanical.== 

you no longer show up to learn per se, 
but to complete your daily tasks to "not lose". 

in fact, it becomes so void of learning intention that many users begin to prioritise quick lessons, 
come up with strategies to yield max XP at minimal effort as fast as possible,
rely on guesswork instead of actually taking the time to understand grammar or nuances,
etc. 

the brain starts operating with a different system, with a different target 🎯,
- it is no longer about learning intentionally by paying attention to the content, 
- but rushing through the lessons to max out the XP, win the competition or not break the streaks. 

###### > trapped by artificial limits

this goal shift, pressure and tunnel vision can even lead to burnout or disengagement as a whole. 

some users whose journey has been mostly about the streaks can find themselves quitting after loosing that digital number, or even after reaching a symbolic one (e.g. 365 or 1000) because eventually, 
*this* (number) took over the real incentive of using the app, 
that is, the initial language learning motivation altogether. 

app updates and feature choices that further monetize engagement,
such as restricting free practice with energies instead of hearts, or the crazy amount of ads,
can intensify this demotivating feeling and loss of meaning too. 

users can feel trapped (and/or betrayed) by those artificial limitations at any point of their not-so-much-about-learning-anymore journey,
and leave. 

ultimately, this gamification is undoubtedly a double-edged sword:
- it helps build habits and keep motivation going 
- but it can easily distort the users' goal of using the app to begin with, from learning to winning, 

success is no longer measured in genuine proficiency and mastery, 
but xp, streaks, rank, leagues,
... basically, ==an illusion of progress==. 

###  3. the slippery slope: from engagement to frustration

> [!NOTE] tldr;
>duolingo’s evolving features reveal a delicate balancing act ~~(trap)~~:
> - keep users engaged, [[#1-design-features-that-drive-habit|from seamless habit formation to obligation to stay]],
> - frustrate them enough to push toward paid tiers (... monetisation),
> - and [[#2-the-cost-of-gamification|optimize every moment for competition rather than true mastery]]
>  
> i myself, felt betrayed by the platform's values shift, and manipulated by the app design features.

###### > a core system feature shift

when i first started my spanish learning journey with duolingo in **february 2025**,
the app's free tier offered a simple system based on a **heart system**: 
- five hearts in total,
- each lost for a mistake,
- with slow regeneration over several hours.

-> this allowed for *as many lessons* as you could manage, as long as you didn’t make too many mistakes,
=> for fast learners or those careful with mistakes, there was little friction.

*however*,
in **august 2025**, duolingo released an **energy bar system** that changed everything:
- every exercise within a lesson consumed energy, regardless of accuracy,
- completing lessons could drain most of your energy bar in less than 10 minutes,
- and even flawless performance could only replenish a handful of energy.

-> for casual users doing *one or two lessons per day*, the new model worked
=> but, for more ambitious learners, it quickly became a **bottleneck**.

this shift didn’t just slightly adjust user behaviour or promote ease of learning because "✨ mistakes no longer hold you back ✨" (dixit.)

*... no. it felt calculated*.

###### > the emotional repercussions

after being so used to the heart system, switching to the energy model simply didn't feel right anymore. 

out of energy too soon?
-> you’re now prompted to wait, watch ads, or ideally for duolingo’s business model, subscribe to the ✨ premium tier for unlimited play and ad-free lessons ✨

i quickly realised how my **emotional response** was shaped by this:
- with these **restrictive conditions**, i felt pressure to optimise my app usage to be able to still make the most of it, 
- when climbing and competing in leagues, i faced opponents with unlimited resources, thus making victory for free-tier users all the more challenging... i had to invest myself **even more**, 
- the momentum of intense practice was constantly interrupted by energy constraints and ad breaks, which got me into a **cycle of frustration**, chasing a mirage of a progress.

the **psychological effect** was striking:
> each week became a race against time, pushing me to rush through lessons, minimise mistakes, and maximise XP to climb the leaderboard.​ i felt **stressed**.

these app refinements felt masterfully orchestrated: a seamless blend of **motivating and monetising** learner behaviour altogether.

every detail, from XP boosts tight time windows to lesson sequences, seemed to push you right to the edge. 
**addicted, frustrated, manipulated**
just enough to not quit,
just enough to consider upgrading for the paying tier.

it is a cycle that tempts, annoys, and honestly... *fascinates* (me at least) as it acts as a testament to how powerful, behavioural app design can be.

## iii. temporal and motivational dynamics
after this brief overview on the way the app manages to influence its users, 
let's take a look at my journey, specifically how **motivation and effort** actually fluctuate over time--with data. 
###  1. anatomy of a habit
[[#1-design-features-that-drive-habit|duolingo designs features that drive habits to form and stick]],
but the true insight emerges in data, amiright?
###### > the "honeymoon" phase of habit-building 
here's a plot of daily XP and cumulative XP over time.
![[_images/_duolingo/Dec_2025_xp_progress_bar.svg]]*figure 1 - daily xp vs. cumulative xp*

in the first month of february, a consistent upward trajectory is visible: steady daily practice with few interruptions, generating an almost linear climb in cumulative XP. 

people sometimes call this first stage the “*honeymoon” phase*, where novelty, excitement and engagement are strong enough to enjoy and anchor a solid foundation.

the classic [habit-loop psychology](https://thegajerpractice.com/blog/what-is-the-anatomy-of-habits/) is composed of 3 components:
- the **cue**: trigger that initiates the habit. 
- the **routine**: the action you take in response to the cue, i.e. the habit/behaviour itself.
- the **reward**: positive reinforcement, satisfaction from completing the action.

and for duolingo, its ingredients are doing half the job for you already: 
- the **cue**: push notifications, reminders, but also you remembering that you need to complete your lesson of the day, etc. 
- the **routine**: completing your practice session everyday is made easy by duolingo with the fun, simple, short nature of lessons.
- the **reward**: xp, streak counts, badges to provide instant gratification and reinforce consistency.

###### > stable but not static
however, a month-by-month breakdown can highlight nuances. 
![[_images/_duolingo/Dec_2025_month_analysis.svg]]*figure 2 - total XP, daily XP distribution -- consistency vs. volatility scores*

|         | total_xp  | avg_xp     | std_xp | min_xp | max_xp | consistency | volatility |
| ------- | --------- | ---------- | ------ | ------ | ------ | ----------- | ---------- |
| 2025-02 | 9370      | 468.5      | 141.8  | 241    | 716    | ==0.799==   | ==0.303==  |
| 2025-03 | 12781     | 412.3      | 421.6  | 0      | 1716   | ==0.236==   | ==1.023==  |
| 2025-04 | 19075     | 635.8      | 327.3  | 40     | 1308   | 0.470       | 0.515      |
| 2025-05 | 15851     | 511.3      | 377.1  | 29     | 1524   | 0.328       | 0.738      |
| 2025-06 | 11067     | 368.9      | 317.1  | 0      | 1185   | ==0.281==   | ==0.860==  |
| 2025-07 | 18798     | 606.4      | 414.9  | 35     | 1474   | 0.353       | 0.684      |
| 2025-08 | 17713     | 571.4      | 315.8  | 70     | 1267   | 0.437       | 0.553      |
| 2025-09 | 16974     | 565.8      | 395.1  | 40     | 1592   | 0.346       | 0.698      |
| 2025-10 | ==40608== | ==1309.9== | 675.3  | 545    | 2847   | 0.469       | 0.516      |
| 2025-11 | 22013     | 733.8      | 314.2  | 35     | 1574   | 0.565       | 0.428      |
| 2025-12 | 13606     | 438.9      | 106.1  | 166    | 665    | ==1.000==   | ==0.242==  |

*very simple definitions of volatility and consistency to interpret and understand the variations:*
$$
\text{volatility} = \text{coefficient of variation} = \frac{std}{avg}
$$
$$
\text{consistency} = \frac{1}{\text{volatility}} = \frac{avg}{std}
$$
without too much surprise, the data show that even if a habit sticks, it is not static, 
it **fluctuates with time and context**. 

some periods would yield (cf. figure 2.2):
- higher consistency scores such as february and december,
- vs. lower consistency scores such as march and june. 

high consistency scores periods correspond to periods of reliable and predictable daily practice, with low volatility and few missed days.

by contrast, months with lower consistency reveal the cracks: missed days, possible swings in effort, and moments where the habit was challenged by fatigue or competing priorities (may i say, *life*).

>  habit formation thrives in regularity, which is visible as stable, rising XP and consistent daily effort,
>  but disruptions can happen even in established routines, translating in higher standard deviation and possible missed days-- but hey, we are humans afterall. 

###### > cyclical pattern

the story isn’t just one of linear growth, but made of distinct cycles,
much like commitment stages (e.g. a relationship with a person, or a project, or any pursuit).

the early months **feb-mar-apr** mirrored a classic “honeymoon phase” as mentioned,
-> motivation was high, the learning experience felt fresh, and daily XP trended positive (cf. figure 2.1).

inevitably, just as in any new relationship, the initial excitement fizzles out,
months **may-jun** shows a notable dip
-> life distractions took over, priorities shifted, novelty and excitement simply felt less strong.

ultimately, over time, efforts stabilise,
months **jul-aug-sep** indicate that practice did return,
-> in a steadier, more sustainable manner too. 

furthermore, the annual consistency curve resembles a smile (or U-shaped): peaking at both ends of the year (cf. figure 2.2)
-> this cyclical pattern indicates that temporal boundaries (year-start and year-end) correlate with improved reliability metrics

> understanding and expecting these cycles is helpful,
-> embracing the ebbs and flows turns habit into a lasting part of life, by learning to be gentle and patient with every step of the journey, even when it feels like a low.

###  2. consistency and motivational shift 
###### > zoom on consistency ebbs and flows
no habit is perfectly steady.
the real shape of commitment actually presents natural ebbs and flows. 

this calendar view of my weekly XP performance shows a more granular outlook on the “when” behind fluctuating consistency. 
![[_images/_duolingo/Dec_2025_xp_calendar.svg]]*figure 3 - weekly XP performance in calendar view*

periods like **march (weeks 10-11)** or **june (weeks 23-24-25)** reveal a lower activity overall: a couple missed days, lower xp in general, and only showing up for 1 lesson to keep the streak going (~50xp). 

this coincides directly with personal trips and time away from my usual routine.

> these interruptions show that even strong habits are susceptible to external factors.
> and rather than a sign of failure, those are honest and normal instances of how priorities can shift and break the "perfect score" or "perfect streak". 

indeed, i was also traveling during the months of **aug-sep**, but managed to keep my practice sessions pretty consistent as i learnt ways to implement more gentle intentionality. 

> -> in the end, what matters is that consistency comes back naturally as well, as it is easier to get back on track when the **system is already in place**, even when life inevitably gets in the way.

###### > motivational shift
in contrast, **october (weeks 41-42)** marks an all-time high (darker patches), quite the outlier.

and these XP spikes are not accidental either: they correlate strongly with **league tier progression**. 
![[_images/_duolingo/Dec_2025_leagues.svg]]*figure 4 - weekly XP vs. league tier progression*

as motivation isn’t static, sometimes all it takes is a new goal to spark renewed commitment.
[[#-when-the-game-becomes-the-goal|and duolingo knows this all too well]]. 

after early steady climbs through lower leagues, from **feb to june**,
i settled in the highest league for multiple weeks: the diamond league. 

at some point, duolingo created new challenges and rolled out the **diamond tournament** allowing the best performing learners in the diamond league to take it to the next level. 

3 rounds, 3 weeks: quarterfinals, semifinals and finals. 
to compete in the next round, one has to rank among the very top ones. 

my initial incentive to show up and learn casually *dramatically* shifted towards **winning that tournament**, at least once. 
i was hooked in the mechanical-learning loop.

and when your goal and motivation change, 
your whole behaviour and approach to learning also change. 

|             | sum_xp    | mean_xp   | std_xp | count   | min_xp | max_xp |
| ----------- | --------- | --------- | ------ | ------- | ------ | ------ |
| 2025-04     | 11466     | 52.1      | 16.9   | 220     | 14     | 100    |
| 2025-05     | 15851     | **60.7**  | 18.7   | 261     | 10     | 100    |
| 2025-06     | 11067     | **60.1**  | 20.7   | 184     | 10     | 100    |
| 2025-07     | 18798     | **69.1**  | 22.5   | 272     | 10     | 150    |
| 2025-08     | 17713     | **83.2**  | 31.5   | 213     | 12     | 150    |
| 2025-09     | 16500     | **93.8**  | 31.6   | 176     | 15     | 180    |
| ==2025-10== | ==40608== | ==96.2==  | 27.4   | 422     | 12     | 135    |
| 2025-11     | 22013     | ==105.8== | 21.0   | 208     | 35     | 135    |
| 2025-12     | 13606     | ==110.6== | 17.8   | ==123== | 35     | 135    |
| **TOTAL**   | 167622    | -         | -      | 2079    | -      | -      |
| **MEAN**    | 18624     | 81.3      | 23.1   | 231     | -      | -      |

in fact, this month-by-month summary table tells a **compelling story**:
- it is not only about the **total XP** (**sum_xp**), i.e. the amount of XP earned, 
- but also about the **mean_xp**, i.e. the **strategy** in order to get that amount of XP.

-> as soon as competition becomes the goal, the strategies adapt to it too: 
- optimise the XP gains,
- collect all the chests and XP boost,
- aim to maximise XP as much as possible even if it means rushing through lessons and compromising genuine learning progress.

it was no longer about the casual learning sessions, like in **april** with **mean_xp = 52.1,** but more so chasing all the bonus to **double or triple the gains** (mean_xp = 96 for october). 

and this mindset shift became so ingrained, that it carried over the next months as well, as the **mean_xp kept on increasing**, despite a drop in total_xp.
-> even if the goal of chasing the trophy fades away, some strategies, methodologies and habits do stick (*that's why some people would argue it only takes 21 days to build a habit, exactly the 3-week Diamond Tournament...*)

and again, in a way, it is beneficial for you to keep going, to show up and be consistent, 
but in another way, this is duolingo's strategy to keep you hooked and trapped in this mindset of "i need to optimise my in-app digital earnings", to stay engaged. 

> wanting to optimise your in-app wins = you staying engaged with their app = customer retention 

###### > quantitative estimate of time 
beyond streaks, XP, and ranks, the bottom line is about time: 
> *how much of my life did i even invest in this learning journey so far?*

![[_images/_duolingo/2025_duolingo_stats.PNG|800]]*duolingo 2025 year review -- as of Nov. 30, 2025*

the duolingo 2025 year review stats come in handy for this, 
- i completed **2678 lessons**, which took a total of **7360 minutes**, in **291 days** 
- from the day i started in 2025 (feb 9 2025) to **nov 30 2025** 
- which gives on average $7360 / 2678 = 2.75$ minutes per lesson => **==2min45s per lesson==**

to compute the total from february till end of december, we can just add those extra **count = 123 lessons for 2025-12** in the table above, which gives for **==322 days==**:
> - total lesson count = **2801 lessons**
> - total minute spent = **7698 minutes** i.e. **==128 hours 18 minutes==** in total
> - on average ~ 730 hours i.e. **12 hours 09 minutes** per month 
> - on average ~ 167 hours i.e. **2 hours 47 minutes** per week
> - on average ~ **==24 minutes==** per day

these numbers translate abstract metrics (streaks, ranks, XP) into tangible meaning,
they also show that consistent and long-term effort demands a certain level of dedication.

it is for sure a time investment, but steady practice accumulates into meaningful achievement.

showing up over and over again, even if it is for keeping the streaks alive, or not being demoted from your league,
this eventually pays off. 

###### > thoughts on quantity vs. quality

and sure, time spent is only a piece of the puzzle,
quality and quantity aren’t always aligned, 
20 minutes of distracted grinding will never match 20 minutes of deep, focused practice.

still, there is strong evidence that volume and repetition do matter.
in the book [[art and fear|Art & Fear]], authors recount an interesting pottery class experiment:
- one group of students was told they would be graded on quantity i.e. the number of pots they made,
- while the other was graded purely on quality.

at the end of the course, it was the quantity group that produced the best work. 

in fact, their relentless, hands-on practice led directly to mastery,
while the quality group probably over-optimised, scared of making mistakes, chased perfection, eventually produced less satisfying results.

> the takeaway is that meaningful learning often comes from showing up and doing the work over and over again, even when the quality is not perfect at every turn of the journey. ​

so, while time and repetition do not guarantee understanding,
*persistence and accumulated effort* often lay the groundwork for genuine progress. 

> sometimes, the sum of “**good enough**” really does carry you further than optimising for the perfect moment, or the perfect approach.

###  3. patterns of practice
while every learner has a unique rhythm to their practice,
there are probably more common and shared patterns than we think. 

let's take a look at my personal learning style. 
###### > activity distribution in a day

even if one knows more or less what their routine looks like, 
it is still interesting to visualise this with concrete data,

beehive density plot (it looks cool) and heatmap of my XP activity show clear temporal preferences:

![[_images/_duolingo/Dec_2025_time_beehive.svg]]*figure 5 - XP activity density (time of day vs. day of week)*
![[_images/_duolingo/Dec_2025_time_heatmap.svg]]*figure 6 - XP activity heatmap (time of day vs. day of week)*

sessions seem to be **clustered** in two main time windows:
- late mornings (10–11h)
- and evenings (20–23h).

**activity peaks** appear midweek, especially during evening hours,
-> wednesdays at 20h and 23h hit the highest numbers, with over 50 practice sessions logged. 

some nuances are also visible, 
**weekday** evenings seem to be consistently more active than **weekend** evenings, 
which is likely shaped by social habits or deliberate downtime. 

what's funny is this sunday's noon time spike that almost feels like a "**catch-up day**" for the routines missed on saturdays. 

###### > weekly dynamic
plotting the day of week performance confirms the trend:
![[_images/_duolingo/Dec_2025_week.svg]]*figure 7 - day of week performance*

| xp        | mean_xp   | sum_xp | count |
| --------- | --------- | ------ | ----- |
| Monday    | 607.5     | 28554  | 47    |
| Tuesday   | ==709.6== | 33349  | 47    |
| Wednesday | 611.6     | 28744  | 47    |
| Thursday  | 625.3     | 28763  | 46    |
| Friday    | 559.3     | 25730  | 46    |
| Saturday  | 601.7     | 27677  | 46    |
| Sunday    | ==532.7== | 25039  | 47    |

the most active day is **tuesday**, with higher amount of total XP,
followed by a steady **monday-wednesday-thursday** during the weekday still,

from that tuesday peak, a **steady decrease** can also be observed as the week progresses.

**friday** marks a dip, the lowest weekday in terms of activity, 
interestingly, **saturday** sees a slight increase in momentum, 
but **sunday** remains the overall lowest day-- despite that noon-time spike.

without too much surprise, this aligns with the idea that weekends are generally associated with less productivity, as people tend to rest and enjoy social activities more, 
the bulk of the effort typically concentrates at the **start of the week**, 

which also reflects a common tendency where people approach new week, new month and new year with a boost of motivation (or [[#-cyclical-pattern|higher consistency apparently, as seen earlier]]). 
e.g. gym attendance peaks early in the week, month, year

> eventually, while momentum tends to naturally decrease as the week progresses, 
the motivation cycle resets with any new temporal start.

## iv. personal reflection
my personal take and insights, some takeaways. 
###  1. measurable activity vs. genuine language learning 
when one reflects on their language learning journey, 
the central question is:
> *how much did i actually learn? how fluent am i? how much can i actually use the language?* 

... what's really between the measurable signs of activity (daily XP, streaks, ranks) and the less tangible, yet far more meaningful, sense of real language acquisition?

well, that's where the duolingo score comes into play. 

###### > duolingo score (quantitative measure)

the **duolingo language score**, a feature that has been implemented during my app usage, 
is a metric that gives you a better idea of your current language level, somewhat similar to the CEFR levels (Common European Framework of Reference for Languages). 

here's a summary table that matches the Duolingo Score to the CEFR level (from A1 to C2) on the [duolingo website](https://blog.duolingo.com/duolingo-score/): 

| Duolingo Score            | CEFR level       | You can...                                                                                              |
| ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| 0-9                       | very early A1    | use simple words and phrases in some common scenarios                                                   |
| 10-19                     | early A1         | talk about yourself and where you live and ask and answer simple questions                              |
| 20-29                     | high A1          | discuss your daily routine, order food at a restaurant, and chat a little                               |
| 30-59                     | A2               | have basic conversations about familiar topics, including weather, shopping, hobbies, and holiday plans |
| ==60-79==<br>(👋 me here) | ==early B1==<br> | ==handle common situations while traveling, ask for directions, and make reservations==                 |
| 80-99                     | high B1          | share your opinion, tell stories, and navigate most daily situations                                    |
| 100-114                   | early B2         | Have deep discussions about your interests and understand news, movies, and jokes                       |
| 115-129                   | high B2          | express yourself in most situations and use the language in professional and academic scenarios         |
| 130-160                   | C1 and C2        | easily understand all that you hear or read and express nuanced thoughts in sophisticated language      |

my own personal duolingo score progression: 
![[_images/_duolingo/Dec_2025_score.svg]]*figure 8 - duolingo score progression*

| level<br>     | start_date     | end_date       | days_in_level | total_xp   | score_range |
| ------------- | -------------- | -------------- | ------------- | ---------- | ----------- |
| very early A1 | 2025-02-09     | 2025-02-21     | 13            | 5411       | 0-9         |
| early A1      | 2025-02-22     | 2025-04-01     | 39            | 17205      | 10-19       |
| high A1       | 2025-04-02     | 2025-05-14     | 43            | 25597      | 20-29       |
| A2            | 2025-05-15     | 2025-08-12     | 90            | 47595      | 30-59       |
| ==early B1==  | ==2025-08-13== | ==2025-12-30== | ==140==       | ==101598== | ==60-79==   |

... a quick search on the Internet ([here](https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours), [here](https://www.englishexpress.com.sg/articles/cefr-hours-per-level-english/), or [here](https://www.ef.com/wwen/blog/faq/how-long-to-learn-english/)) tells you that a rough time estimation to go from one level to another (from scratch to A1, from A1 to A2, ...) is about **200 hours** spent "studying",

worth noting that these numbers are simply rough estimates as they depend on so many other factors such as: 
- the pace at which you actually learn a language,
- which languages you already speak (easier to pick up spanish if you know french already, than to learn japanese (more different family)),
- how hard you're willing to study the language,
- etc. 

> ... from 0 to early B1, this should have taken,
> let's say **~500 hours** of studying...
> 
> but [[#-quantitative-estimate-of-time|we saw previously that the approximated time i spent on the app was about 128 hours so far]]... quite a huge difference here.

according to the data, i spent roughly **90 days for each A level** (A1, A2). 
but it looks like B levels take more time to master, the pace at which progress grows seems lower.
*-> this is highly dependent on how the courses are built on the app! but it also makes sense that progress feels more significant in the beginning vs. in the middle of the journey, where things tend to feel more stable, like hitting a plateau.*

in any case, this graph of my **duolingo score** shows a steady climb,
a reassuring marker of progress that quantifies growth into digestible numbers.

*but what does it even represent concretely speaking? is this even reliable?*

###### > vs. qualitative real proofs
the duolingo score increases almost proportionally to lesson completion,
without taking into account **accuracy** or any other meaningful aspects. 

thus, it cannot capture the full spectrum of *language proficiency*,
such as conversational fluency, listening comprehension, or cultural nuances that require immersive and authentic experience. 

the score certainly reflects **commitment and consistency**,
but not necessarily my ability to understand or speak spanish confidently in real-world situations.

that is why coupling this measurable progress with qualitative self-assessment and real-world practice is essential in language acquisition.

as described in [[learning spanish|my other post]], 
i use other resources aside from duolingo to learn spanish:
- watching videos in spanish and understanding context and topic, 
- reading book stories in spanish,
- studying grammar and conjugation,
- ~~using spanish in real-life situations~~.

ultimately, it is only by stepping outside of duolingo, 
beyond the scores, XP, lessons, ranks and streaks, 
that you can truly evaluate your progress.

> at the end of the day, 
real-life content gives you **genuine feedback**, 
not the cheer of duo 🦉 dancing after a perfect lesson.

###  2. self-portrait

looking back,
the combination of all these patterns creates a self-portrait that is far more enlightening and nuanced than any single metric or trend considered on its own.

several observations emerge about my learning profile: 
- clear preference for structured, consistent practice within distinct daily time windows, 
- tendency to focus most intensely during evening sessions, 
- lower activity on weekends reflects conscious balance between intense focused study and necessary rest and downtime, 
- overall steady consistency-- while there are natural cycles, the habit is neither erratic nor highly unpredictable,
- dips in activity correspond to real-life priorities and responsibilities, actually demonstrating my ability to be fully present in other life areas when needed.

all together, these data-driven habit insights highlight qualities like discipline, patience, perseverance, and self-awareness.

this self-portrait shed light not only on my language learning journey,
but offers broader lessons about commitment, balance, and the importance of embracing the natural rhythms of life. 

###  3. closing thoughts
well well, 
(language) learning is never a straight line.

it is a deeply personal journey shaped by both measurable effort and intangible growth. 

this wasn't meant to be an experiment when i first started using duolingo, 
but engaging with it (almost) daily brought out many emotions, 
and helped me realise different behaviours in my life too, 

the collected data tells a story of commitment, routine, and ups and downs.

while it is interesting to understand how motivation fluctuates,
what truly matters is to embrace the imperfect and cyclical nature of motivation,
honouring both persistence and rest,
being intentional, 
and remembering why you started. 

ultimately, learning should be a fun and rewarding journey,
not something to stress over or feel like an obligation.

and if it ever feels that way,
it's important to take a step back,
put things in perspective,
and reevaluate your approach. 

at the end of the day, 
this is all meant to help you become better. 💚