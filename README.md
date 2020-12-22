# Table of Contents
- [Presentation](#homework4-presentation)
- [My Task](#my-task)
- [Acceptance Criteria](#acceptance-criteria)
- [Flow Chart](#flow-chart)
- [Repository Structure](#repository-structure)
- [Description of Functions](#description-of-functions)
    - [goBack()](#goback())
    - [checkBtn(objectType)](#checkBtn(objectType))
    - [startQuiz()](#startQuiz())
    - [resultQuiz()](#resultQuiz())
    - [displayHS()](#displayHS())
    - [getInitial()](#getInitial())
    - [clearHS()](#clearHS())
- [Links](#links)
- [Improvements](#improvements)

# Homework4 Presentation
Web APIs: Code Quiz

# My task
As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges.
To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.

# Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

# Flow Chart
![flowChart](/assets/images/FlowChart.jpg)

# Repository Structure
The ***INDEX.HTML*** and the ***README.MD files*** are at the root of the folder.
All others files are in the **ASSETS** folder which contains a folder for each type of files
- SCRIPT: JavaScript file
- STYLE: CSS file
- Images: screen shot
- Sound: .wav file

# Description of functions
## goBack()
Start of the webpage. it will display the START button before showing the quiz.

## checkBtn(objectType)
Check which answer button has been clicked, and also compare with the correct answer. This function will update the score variable accordingly, *+1* for good answer and *-1* for bad answer. A sound will also be played and a message is displayed and the bottom of the buttons.

## startQuiz()
will launch the quiz.
This function also hold the setInterval() function to count down the time remaining to complete the quiz. The countdown start at 75 seconds.
The next question will be displayed **only** if the user has answer the current question.
When the ime is up or the number of questions ahve been all displayed the function stop and goes to the resultQuiz() function.

## resultQuiz()
This function will display the score, and also get the user initials with a `textbox`.
The validation will be perform by clicking on the SUBMIT `button`.

## displayHS()
This function will display the list of High Score from the `localStorage`, if any data has been stored before.
If the `localStorage` is empty, only the GO BACK and CLEAR HIGHSCORES `buttons` will be shown.

## getInitial()
This function will display the current user score and initials either:
- at the bottom of the list if there is already some data in the High Score list,
- at the first line of the list, if this is the first user.

## clearHS()
This function will clear the `localStorage` of all data.

# Links
[Repository Folder](https://github.com/nhounhou/Homework4)

[Quiz](https://nhounhou.github.io/Homework4)

# Improvements
- Base the logic of the homework on the starter files provided, but too late as I completed the assignment before the files were provided.
- Clean up some of the redundant instruction, like in the functions `displayHS()` and `getInitials()`.
- Working on the aesthetic of the webpage.
<button name="button" onclick="https://nhounhou.github.io/Homework4">Back to Top</button>