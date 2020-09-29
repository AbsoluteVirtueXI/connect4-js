import chalk from 'chalk'
import { RULES, HELP } from './constants.js'
import { isColumnFull, putToken } from './board-logic.js'

export const handleCommand = (command, gameState) => {
    //handle the put command
    let reg = /put\((\d+)\)/
    if (reg.test(command)) {
        let column = command.split('(')[1].split(')')[0]
        return handlePut(column, gameState)
    } else {
        switch (command) {
            case 'abandon':
                gameState.winner =
                    gameState.currentPlayer === gameState.player1
                        ? gameState.player2
                        : gameState.player1
                gameState.isFinished = true
                return true
            case 'rules':
                console.log(RULES)
                break
            case 'help':
                console.log(HELP)
                break
            case 'whoami':
                console.log(
                    chalk.white.bold(
                        `\nYou are player ${gameState.currentPlayer} and you play with token: ${gameState.currentToken}\n`
                    )
                )
                break
            default:
                console.log(
                    chalk.white.bold(
                        `\nError: unknown command please use help for a list of available commands.\n`
                    )
                )
                break
        }
    }
    return false
}

const handlePut = (column, gameState) => {
    if (column < 1 || column > gameState.nbColumn) {
        console.log(
            chalk.white.bold(`\nError: column ${column} is out of range.\n`)
        )
        return false
    } else if (isColumnFull(column, gameState)) {
        console.log(
            chalk.white.bold(
                `\nError: column ${column} is full. Please choose another column.\n`
            )
        )
        return false
    } else {
        return putToken(column, gameState)
    }
}
