# Mania: 1 vs 1 Sword Battle Game Specification

## Overview

"Mania" is a 2D HTML5 game that allows players to engage in a 1 vs 1 sword battle with an AI-controlled enemy. The game combines elements of strategy, skill, and progression to create an engaging player experience.

## Features & Game Mechanics

### 1. **Attributes**

Each fighter, both the player and the enemy, possesses the following attributes:
- **Strength**: Determines the base damage a fighter can inflict on an opponent.
- **Speed**: Influences how quickly a fighter can move and dodge enemy strikes.
- **Agility**: Determines the ability of the fighter to counter-attack and the likelihood of dodging incoming strikes.
- **Weapon**: Each weapon has its own damage modifier which is added to the fighter's base strength.

### 2. **Deadly Strike**

- Each fighter has a special "Deadly Strike" move.
- A player needs to land a series of successful strikes without receiving any damage to activate this move.
- The number of successful strikes required for the Deadly Strike activation is unique to each fighter.
- The lethality of the Deadly Strike varies among fighters, meaning some fighters will have an instantly deadly move while others might inflict significant but non-lethal damage.

### 3. **Rounds and Points**

- Each battle consists of multiple rounds.
- Winning a round earns the player points.
- Points can be accumulated and spent in a shop to unlock more skilled fighters or to purchase better weapons.

## User Interface

### 1. **Main Menu**

- **Start Game**: Initiates a new game session.
- **Shop**: Allows players to spend accumulated points on new fighters or weapons.
- **Settings**: Adjust game settings, such as sound and difficulty.
- **Exit**: Closes the game.

### 2. **Game Screen**

- **Player Health Bar**: A visual representation of the player's current health.
- **Enemy Health Bar**: A visual representation of the enemy's current health.
- **Deadly Strike Meter**: Indicates how close a player is to activating their special move. 
- **Points Display**: Shows the current number of points accumulated by the player.

### 3. **Shop**

- **Fighters Tab**: Displays available fighters to unlock.
- **Weapons Tab**: Displays available weapons for purchase.
- **Current Points**: Indicates how many points a player has to spend.

## Game Flow

1. Player starts the game from the main menu.
2. Player chooses their fighter and weapon.
3. The battle begins, with each fighter attempting to reduce their opponent's health to zero.
4. If the player wins the round, they earn points.
5. After each round, the player can choose to spend their points in the shop or continue to the next round.
6. The game continues until the player decides to exit or is defeated.

## Additional Notes

- **Enemy AI**: The AI should be programmed to adapt to the player's strategy over time, increasing the game's challenge.
- **Graphics**: Given that it's a 2D game using the Canvas API, sprite-based graphics with smooth animations for each action (striking, dodging, moving, etc.) will make the game more visually appealing.
- **Sound**: Background music during battles, and sound effects for strikes, dodges, and other actions will enhance gameplay immersion.
- **Progression**: As players unlock more fighters and weapons, they should also encounter more challenging AI opponents, ensuring a consistent difficulty curve.

This specification provides a broad overview of "Mania". Details can be expanded upon, such as more specific attributes for each weapon, unique abilities for each fighter, or even additional game modes (like a tournament mode). However, this foundation serves as a starting point for development.