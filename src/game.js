import chalk from 'chalk'

import * as ui from './cmd_ui.js'
import { copy2DArray } from '../lib/array-lib.js'
import { NB_ROWS, NB_COLUMNS, TOKEN1, TOKEN2, NB_TOKENS } from './constants.js'
import { GameState } from './states.js'
import { handleCommand } from './commands.js'

// Intro
let gameState = new GameState(NB_ROWS, NB_COLUMNS)
ui.printBanner()
gameState.setPlayersName()
console.log('\n\n')

//Main game loop
while (!gameState.isFinished) {
    if (gameState.turn > NB_TOKENS) {
        gameState.winner = ''
        break
    }

    let turnIsFinished = false
    while (!turnIsFinished) {
        ui.showHeader(
            gameState.currentToken,
            gameState.currentPlayer,
            gameState.turn
        )
        ui.printBoard(copy2DArray(gameState.board))
        let command = ui.showPrompt(gameState.currentPlayer)
        turnIsFinished = handleCommand(command, gameState)
        if (turnIsFinished) gameState.turn += 1
    }
}

// End of game
console.log('\n')
ui.printBoard(copy2DArray(gameState.board))
gameState.winner === ''
    ? console.log(chalk.white.bold('\nDraw: no winner, no loser\n'))
    : console.log(
          chalk.white.bold(`\ncongratulations ${gameState.winner} you win\n`)
      )
