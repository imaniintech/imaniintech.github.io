# Tic Tac Toe


## UI Breakdown
- Title
- 3x3 Grid
    - Grid is clickable
    - Grid is assigned to correct player for each play and displays that information throughout the game
- Display
    - Show who wins the game
    - Show if there's a draw
    - Message stating when it's the current player's turn
- Restart
    - Button that will restart the game

## Game Flow Breakdown for Cell Clicks
- When a cell is clicked, it needs to be traccked
- When a cell is clicked, needs to check if the click made is a valid move
    - If there is already a choice in the cell, need to make sure the choice can't be overriden
- Should update the game state
- Should validate the game state
    - Check if player won
    - Check if game ended in draw
        - Depedning on the game state either stop the game or change the current player
- Make sure the updates reflect in the UI
- Repeat game flow as needed
    
