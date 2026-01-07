Spirit Blade Memory Match
---
**Author:** Rafael Bianzon  
**Course:** DC 101 – Web Development  
**Project Title:** Spirit Blade Memory Match  
**Mode:** Individual Work  

Game Description
---
Spirit Blade Memory is a browser-based interactive memory match game where players flip cards to reveal wandering spirits and find matching pairs. The game features a cinematic background video, thematic background music, sound effects, and animated card flips to create an immersive experience. Levels progressively increase in difficulty by expanding the grid size and limiting the number of flips per level. Players can pause, resume, or return to the main menu, adding flexibility to gameplay. The game demonstrates careful management of game state, event handling, DOM manipulation, and responsive layout using HTML, CSS, and JavaScript.

This project was created solely for educational purposes. All assets used, including videos, images, and audio, are not owned by me and are credited to their original creators.

Technologies Used
---
- This project was built using pure front-end technologies:
- HTML – Structure of the game, menus, and interactive elements
- CSS – Styling, grid layouts, card flipping animations, and responsive design
- JavaScript – Game logic, state management, event handling, card matching, level progression, and audio control
- Tailwind CSS – Utility-first styling for layout, spacing, and responsiveness
- Git & GitHub – Version control and project hosting

How to Play
---
1. Press the Begin Trial button to start the game.  
2. The game begins at Level 1, with a grid of face-down cards.  
3. Click on a card to flip it and reveal the spirit.  
4. Click a second card to try to find a matching pair.  
5. If the cards match, they remain face-up. If not, they flip back automatically.  
6. The number of remaining flips per level is displayed; running out of flips ends the game.  
7. Successfully matching all pairs completes the level and opens the Next Trial screen.  
8. Players can pause the game, resume, mute or unmute the music, or return to the main menu.  
9. The game progresses through 10 levels with increasing difficulty.  

How to Run the Game
---
- Option 1: Play Online (GitHub Pages)
You can play the game anytime through the live link below  
**Might take a few sec to 1 min to load due to the video background**  
🔗 [https://jrafdev.github.io/DC101_Game_Bianzon-John-Rafael/]

- Option 2: Run Locally on Your Computer  
Download or clone the repository:  
git clone [https://github.com/JRafDev/DC101_Game_Bianzon-John-Rafael]  
Open the project folder and double-click index.html in your browser.  
Start playing and enjoy matching the spirits!  

Gameplay Test
---
**Short Gameplay Video**  
🔗 [https://drive.google.com/file/d/1uuuzPAsre5z9rf5gRxP4bGFDQO_3bkwd/view]
Screenshots
---
### Home Screen  
Displays the game title, cinematic background video, and Begin Trial button.  
<img src="Assets/Home Screen.png" width="300"/>

### Gameplay Board  
Shows a grid of face-down cards. Players flip cards to match spirit images while flips remaining are displayed.  
<img src="Assets/Gameplay Board.png" width="300"/>

### Pause Menu  
Players can pause the game, resume, mute music, or return to the main menu.  
<img src="Assets/Pause Menu.png" width="300"/>

### Level Complete Screen  
Appears after all pairs in a level are matched, offering a Next Trial button to continue.  
<img src="Assets/Level Complete.png" width="300"/>

### Game Over Screen  
Displays when the player runs out of flips before completing the level, with a Retry Level button.  
<img src="Assets/Game Over.png" width="300"/>

References
---
The following external resources were used and properly acknowledged:

Tailwind CSS – Utility-based styling framework. Source: https://tailwindcss.com

Google Fonts – Nunito – Used for clean, modern typography. Source: https://fonts.google.com/specimen/Nunito

Video & Image Assets – Background video and Images featuring the character Miyabi, used solely for educational purposes in this school project. Credit to the original creator.

Audio Assets – Background music by tnbee, used solely for educational purposes in this school project. Original track: YouTube link

JavaScript DOM & Audio API – For dynamic card creation, game state management, and audio playback.
