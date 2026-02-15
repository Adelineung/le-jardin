---
title: CLI-bash 101
draft: false
tags:
  - coding
  - _101
created: 2025-11-01
---
# Command Line (CLI)
- CLI: Command Line Interface 
- Terminal: the application window you type into
- Shell: the program inside the terminal that interprets your commands
- Bash: Bourne-again shell -> UNIX shell
- Console

And basically, it is a text-based way to interact with your computer. 
-> user interacts with Operating System (**OS**), the computer, through a Graphical-User Interface (**GUI**) -- that is this **CLI**

## Essential cmds 
* some cmds
	* `opt+arrow` : move cursor one word
	* `ctrl+a` and `ctrl+e` : go to beginning, end of the line
* some options :
	* `.` (or `./`): current directory
	* `..` : parent directory
	* `~` : user home directory
	* `*` : all files in current directory
	* `-R` : content of a folder, recursively
	* `-h` or `--help` or `info` or `man` : help
	* `-v` or `--version` : version
	* `-u` : user action instead of a root action
	* `>` : send output to a file, overwrite
	* `>>` : send output to a file, append
	* `*.extension`
* `open` : open a file, or a finder window to the dir
* `ls` : lists files in current directory
* `pwd` : path to working dir(ectory)
* `cd` : change directory, or go home if no param
	* `cd -` : previous directory visited
* `mkdir` : make directory (i.e. create folder)
	* `mkdir -p folder1/folder2` : nested folders
* `touch` : create new file
* `man` for manual / documentation
* `cp` & `mv` `[ori_path] [target_path]` : copy & move file from a path to another path (or rename)
	* `cp -R` : for folders, add the option '-R' for recursively 
	* `cp file.txt .` : copy file.txt to current directory
* `rm` : remove file or directory
	* `rm -r` : remove directory
	* `rm -i`, `rm -f` : remove interactive, forcefully
* `find [dir_path] -name ["file"] ` : search for files in dir_path whose name is file
* `grep ['text'] [file]` : search 'text' in file
	* `-i` : case-INsensitive
	* `-n ` : line
	* `-c` : count the number of appearances
	* `-r` : recursively does the search in the entire dir
	* `-w` : entire word only
	* `-v` : inverse search
	* `--color` : color display
* `cat` : output/print the content of a file
	* `head` / `tail` : output the first/last 10 lines of a file
* `echo` or `printf` : write text
	* `echo 'hey' >> [file]` : append 'hey' to file (same with printf)
	* `echo 'hey' > [file]` : overwrite 'hey' to file
* Chaining & piping :
	* `[cmd_a];[cmd_b]` : run A, then B
	* `[cmd_a]&&[cmd_b]` : run A, then B if A passed
	* `[cmd_a]||[cmd_b]` : run A, then B if A failed
	* `[cmd_a]&` : run A in background
	* `[cmd_a]|[cmd_b]` : run A, then pass the output of A to B
* `clear`: clear terminal display
* `reset`: proper reset + clean 

- list the **available serial ports**
```
ls /dev/tty.*
ls /dev/cu.*
```
- `sudo [cmd]` : run cmd as a **superuser** (SUper user DO)
- `du -h` : memory used by files
- brew: **package manager** to install other tools on macOS
    - `brew install [sth]` : install a package
    - `brew uninstall [sth]` : uninstall a package
    - `brew doctor` : check brew for potential problems
- Exit/Quit/Less in commands:
    - `:q!`
    - `q`
    - `:qa`
    - `ctrl+d` or `ctrl+z` : stop operation
    - `ctrl+c` : terminate operation
    - `ctrl+\\\\` : SIGQUIT sig, i.e. exterminate operation
- load bash profile in terminal
	- `source ~/.bash_profile`

`bin` : subdirectory containing executable programs
```
sudo apt-get install xxx
sudo apt-get update
sudo apt-get upgrade
```


## process specifics
- `top` : display live info about current running processes
- `pkill -f "python.*quiz"` : kill all processes with keywords matching full command line 
- `ps aux` : list all processes 
- `jobs` : list background processes
- `python script1.py; python script1.py` : sequential run of processes, one after the other, can be blocking if the first one doesn't complete 
- `python script1.py & python script1.py` : first process run in the background, second one still controlled in terminal, but outputs intermingle
- `&&` : run second if first succeeds
- `||` : run second if first fails
- `python script1.py & python script1.py &` : both processes are run in the background, subshell grouped 
## network specifics

- `ipconfig getifaddr en0`
    - get local ip address
- `ipconfig getoption en0 domain_name_server`
- `ipconfig getsummary en0`
    - get summary
- `ifconfig | grep broadcast`
    - my wifi info
- `curl ifconfig.me`
    - get public ip address
- `hostname`
    - get machine hostname
- `arp -a`
    - list all devices connected to local network
- `ping -c 1 192.168.86.241`


```bash
http://localhost:8080/
```

can be accessed by devices on the same network, with the use of local IP addresses, 

```bash
http://[YOUR-IP-ADDRESS]:8080/
http://192.168.1.15:8080/
```

note: sometimes, it's also worth modifying / removing the "http(s)://" part. 

## python specifics
- `python -V`: which version 
- `which python`: what installation is used for what command
	- `which python3`
	- `which -a python python3`: show full paths of all exe named python or python3

## misc
`sudo pkill coreaudiod` -- gently kill all audio deamon process

- GET https://example.com/api/end-point-name?key=your-api-key
	- to request 

# Bash script 101
- create a bash script:
	- `#!/bin/bash` = a "shebang" which tells the system to use Bash shell to exe this script 
	- `chmod u+x` : change moderator rights/permissions & convert file into an executable file
	    - `chmod 700` is equivalent
	- `./` in this current directory, + name of the exe -> run the script
```
touch bashcmd
echo '#!/bin/bash' > bashcmd
echo 'echo HelloWorld!' >> bashcmd
chmod u+x bashcmd
./bashcmd
```

another example of bash file
```
#!/bin/bash

var = 'world'
echo Hello var!
echo "Hello $var"

current_date=$(date)
echo "Today is $current_date"
```

- declare a variable : `var = "hey"`
- read a variable : `echo $var`
- `read var` : user input for the value of var

```bash
echo "What is your favorite color?"
read color # The user's input is stored in the variable 'color'
echo "You said your favorite color is $color. Nice!"
```

- conditional statements
```bash
echo "Enter a number:"
read number

# Note the spaces! They are important.
if [ $number -gt 10 ]; then
    echo "That's a large number."
elif [ $number -eq 10 ]; then
    echo "That's exactly ten."
else
    echo "That's a small number."
fi
```
- `-eq`: Equal to
- `-ne`: Not equal to
- `-gt`: Greater than
- `-lt`: Less than
- `-ge`: Greater than or equal to

and for strings:
- `=`: Equal to
- `!=`: Not equal to

can also loop through a list:
```bash
for fruit in apple banana orange; do
    echo "I like $fruit"
done

# This will list all .txt files in the current directory
for file in *.txt; do
    echo "Found text file: $file"
done
```