# Tic tac toe - Billy Tech Task

A Simple implementation of a game tic tac toe - with ability to reset game and choose who starts first, tracking wins and whose turn is it.

I choose frontend version of the task, because last few projects i had was all about backend and PHP, so it was a nice change to do some React work :D

## How to run it

Everything is based on create-react-app, so we have pretty simple tools to run app in dev mode, but also in production:

Dev:
> npm install <br>
> npm start

Production:
> npm install <br>
> npm build <br>
> Run your favourite deploy tool, eg. serve -s build 

## Short description

Whole game is using Context API to communicate between components, doing that with actions defined in reducer (services/GameStatusContext.js). To identify symbols used in the game I choosed to use JS Symbols, creating sort of a enum (Symbols + Object.freeze is I think the closest thing what we can achieve to enums in TS). Everything else are simple React components, where most of the game functions are in App.js. If i would to make some things different, I would probably rewrite the whole thing in Typescript and create some unit tests.

## Design

In terms of colors, i was inspired by task page - adding my own personal ideas to that. For styling, i used Material UI (more on that later) and simple CSS - there isn't much styling here, so i decided that another library for styles, or CSS-in-JS are unnecessary.

## Used libraries and snippets
### Libraries
 - Whole app is based on boilerplate from create-react-app - application is really simple, so I used it so I can focus more on coding, less on creating tools for that.
 - Material UI (Core and Icons) - I think that is my favourite UI library for React. It gives a clean and simple base components for creating virtually any app, it also have a library of Material Design icons. So in order to not create everything from the scratch, I used some of the components and icons, what in my opinion gives uniform and neat appearance.

 Besides that, we have react-scripts and web-vitals - tools for development included in create-react-app.

 ### Snippets

 I used one snippet from the web - the mechanism for calculating if we have a winner (services/CalculateWinner.js) - it is a really simple script, so i decided there is no reason to reinvent the wheel and optimize it, because it would make no real difference and i copied it from the official React tutorial about making tic tac toe :)


