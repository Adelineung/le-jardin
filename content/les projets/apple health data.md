---
title: 🌱 apple health data
draft: false
tags:
  - health
  - sports
  - 🚧
created: 2025-12-01
---
*under construction* 🚧

inspo:
- https://python-graph-gallery.com/streamchart-basic-matplotlib/
- 

## ideas 
- workout data doesn't just tell a story of 
	- **performance** but is also very much tied to
	- **physical and mental** journey 
	- => signals of **internal states** 

core theme: 
> reading life through workouts, wounds and recovery 📚

## draft) the workout diary project
metrics:
- type of exercise
	- 📊 cardio, weight, others
	- 📊 inside vs. outside
- amount 
	- 📊 quantity, frequency 
	- 📊 consistency 
	- 📊 intensity (bpm)
	- VO2max? 
- qualitative data
	- ✍ goals, intent 
	- ✍ motivation level 
	- ✍ joy level 
	- ✍ emotions, mindset, mental narrative 

other plots to fit?
- 📊 most active day, most active hours 
- intensity = ??? 
- performance = ??? 
- consistency = ??? 
- potentially add the climbing sessions manually too! since i never got to record them 

1. Introduction
	- Theme -- self-understanding 
		- "reading life through workouts, wounds and recovery 📚"
	- Preface -- my personal journey and lived experience
	- Define scope
		- Little field note 
			- describe how you got the data and how you process it 
		- Timeframe and life context
			- 2021-01-13 
			- 2025-11-06
			- 1053 ish rows
			- map to
				- career/work,
				- location,
				- covid,
				- life events/emotional state
2. Chapter 1: (The foundation) The macro / holistic view
	- => identify major seasons/eras/arcs in my **fitness life** 
	- ✅ 0- All workout + counts + my style? 
		- overview of fitness journey 
			- 📊 bar chart or pie chart of all workout + count
		- aggregated by year to see **which year was the most active**
			- 📊 bar chart (y) count per year (x)
				- -> what year? 
			- 📊 stacked bar chart (y) count + type of workout per year (x)
				- more detailed with type of workout, still by year
		- optional: could try to do by month too
			- and add the day/hour here? optional for sure 
	- ✅ 1- Workout calendar (timeline, heatmap) 
		- insights: seasons, activity, hibernation 
			- 📊 1 heatmap all years grouped
				- 📊 by month bar chart, to see how this drops too throughout the months -- december is for sure the calmest month and summer seems most active
			- 📊 N heat maps yearly 
				- natural seasons -> winter, spring, summer, winter ? 
				- beginning of the year resolution vs. end vs. summer shred 
				- any pattern? 
	- ✅ 2- Zoom on the workouts 
		- insights: the type of workout, the amount depending on the seasons too
			- 📊 pie charts for each year, top 5 activities 
				- 3 arcs: 21 - (22-23-24) - 25
			- 📊 line chart for evolution of top 5 activities 
3. Chapter 2: (The stress) Body under stress -- injuries, mental health, unhealthy relationship with workout/diet/fitness  
	- => identify and discuss correlation between health and workout + add emotional/psychology aspects to that 
	- ✅ 0- Physical injuries 🔍
		- environment change 
			- 📊 pie or bar for inside vs. outside vs. gym vs. home workout 
			- 🔍 or any big hiatus, shift? 
		- type of workouts
			- 📊 zoom on **running**? -> intensity drop to address injury! 
				- indoor vs. outdoor
				- Stats_HeartRate_average
				- Stats_DistanceWalkingRunning_sum
				- Stats_ActiveEnergyBurned_sum
				- NO COMBINED METRICS YET! 
				- graphs on the evolution of this with line plots of key metrics
				-  + bar chart for volume as a comparison too? idk 
	- ✅ 1- Mental health, Eating Disorder 🔍
		- intensity and volume
			- 📊 COMBINED METRICS -> "**intensity score**" or whatever 
				- maybe can compute a sort of intensity score? not just amount/vol, but type included right 
		- performance
			- 🔍 to dig more, but any correlation between performance/volume/intensity and heart rate/pace? 
				- e.g. still a lot done, but the quality wasn't even as good, struggling for sure, no pleasure, just torture
		- rigidity vs. flexibility 
			- 🔍 Consistency... rigidity... flexibility -- difficult line to draw honestly 
	- ✅ 2- Emotional connection 
		- control, anxiety, punishment
			- 🔍 any long session of cardio? 
			- 🔍 endless, stacked workout sessions?
			- 🔍 nervous energy workout for sure (HIIT lol)
				- 🔍  pushing the bpm to highhhhh levels for sure 
			- 🔍 what the rest day to work day ratio? Workout Days : Rest Days
				- 📊 ratio Workout Days : Rest Days
4. Chapter 3: (The healing) Arc of recovery 
	- ✅ 1- intensity + type + slowly getting back to prior activities but with consciousness and experience / lessons learnt 
		- Rehab with more flexibility activity for sure 
			- strengthening the muscles around my knee, it's been better 
		- 🔍 introduction of lower impact / gentle activities + new activities too! => enjoying the journey
			- flexibility
			- hiking
			- climbing
			- swimming
			- -> making peace with life and body, enjoying life rather than treating it as a "thing to look good"
		- 🔍 bpm is lower hi hi => no longer an escape
			- 📊 line chat bpm over the year / boxplot by year? 
	- ?? 2- emergence of rest, flexibility, consciousness -- no longer an escape
		- 2024 honestly ZZZ
		- 2025 healing for sure 
		- 🔍 flexibility vs. rigidity -> look at std for the metrics 
			- can be start time consistency 
		- 🔍 Workout Days : Rest Days
		- -> honestly picking past things back up but in a more conscious and gentle way and mindset for sure 
	- mental narrative, healing, peace 
		- how i feel? 
5. Conclusion -- a letter to my previous selves 
	- to my 202X [1-5]

## draft) plots
![[_images/_applehealth/heatmap_all.svg]] *fig. heatmap workout all years (2021-2025)*


 heatmap workout year by year:
![[_images/_applehealth/heatmap_2021.svg]]
![[_images/_applehealth/heatmap_2022.svg]]
![[_images/_applehealth/heatmap_2023.svg]]
![[_images/_applehealth/heatmap_2024.svg]]
![[_images/_applehealth/heatmap_2025.svg]]

![[_images/_applehealth/bar_stacked_workout_type_evolution.svg]] *fig. evolution of workout type (bar stacked)*


