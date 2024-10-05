# Kaplay Platformer Game

This project is a platformer game built using the [Kaplay](https://kaplay.js.org/) framework. The game involves controlling a player character to avoid obstacles and score points, with increasing difficulty as the game progresses. The game can be played using keyboard or gamepad input.

---

## Installation

Follow the steps below to set up and run the game on your local machine:

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory
bash
Copy code
cd your-repo-name
Install dependencies
bash
Copy code
npm install
Running the Game
To run the game locally, follow these steps:

Start the development server
bash
Copy code
npm start
Open your browser
Go to http://localhost:3000 (or the port specified in your setup).

Building the Project
To build the project for production:

bash
Copy code
npm run build
The build output will be saved in a dist folder.

Game Instructions
Play the Game: Press the Play button, or use the spacebar or gamepad button to start the game.
Jump: Press the spacebar or gamepad to jump.
Avoid Obstacles: Jump over obstacles to increase your score.
Game Over: When the player collides with an obstacle, the game ends and the final score is displayed.
File Structure
bash
Copy code
.
├── assets/            # Contains the game's sprites and graphical assets
├── sounds/            # Contains sound effects for actions like jumping and collisions
├── collidersData.json # JSON data for obstacle placement in the game
└── src/               # Source code directory
    ├── utils.js       # Utility functions (e.g., makeBackground, goToGame)
    ├── player.js      # Contains the makePlayer function to create the player character
    └── scoreBox.js    # Manages displaying the score when the game ends
