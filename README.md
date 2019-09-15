# Tom's React Dice Game:
A simple App using React and an external component


## Deploy
- Live @:  https://tomgalpin.github.io/dice-game/
  - From:  https://github.com/gitname/react-gh-pages

## Dependencies:
1.  `node-sass`
  - https://www.npmjs.com/package/node-sass
2. `react-dice-complete`
  - https://github.com/AdamTyler/react-dice-complete

## Guidelines
1. A six-sided die is rolled once every turn.
2. Track how many of each number has been rolled.  
3. Once one specific number has been rolled 5 times, then that number is the winner, and the game is over.
4. The user can then start the game over, and they can also reset the game at any point.

## Structure
    .
    ├── /public 
    │     └── favicon.ico
    │     └── index.html
    │     └── manifest.json
    │     └── robots.txt
    ├── /src     
    │     ├── /components
    │     │     ├── diceGame.jsx
    │     │     └── diceResults.jsx
    │     ├── /styles                    
    │     │     ├── buttons.css
    │     │     ├── game-container.css
    │     │     ├── mixins.css  
    │     │     ├── reset.scss   
    │     │     ├── results.scss
    │     │     └── variables.scss
    │     ├── App.js
    │     ├── App.scss
    │     └── index.jsx
    ├── package.json
    └── README.md


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

