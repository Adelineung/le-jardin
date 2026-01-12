---
title: crontab
draft: false
tags:
  - coding
created: 2025-05-01
---
- list all cron jobs
	- `crontab -l`
- edit cron jobs
	- `crontab -e`

```shell
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sun to Sat;
# │ │ │ │ │                              7 is also Sunday on some systems)
# * * * * *  command_to_execute
```
e.g. At 12:00 on every 7th day-of-month from 1 through 31. (1, 8, 15, 22, 29)
-> basically weekly at noon
```shell
0 12 1-31/7 * * echo henlo 
```

ref:
- https://crontab.guru/