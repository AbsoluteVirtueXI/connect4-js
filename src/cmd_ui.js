import chalk from 'chalk'
import readlineSync from 'readline-sync'

import { TOKEN1, TOKEN2, NO_TOKEN } from './constants.js'

import {
    BANNER,
    BOARD_NB,
    BOARD_SEPARATOR,
    NB_ROWS,
    NB_COLUMNS,
} from './constants.js'

export const printBanner = () => {
    console.log(chalk.green.bold(BANNER))
}

const strColorToken = (token) => {
    if (token === TOKEN1) {
        return chalk.red.bold(TOKEN1)
    } else if (token === TOKEN2) {
        return chalk.yellow.bold(TOKEN2)
    } else {
        return NO_TOKEN
    }
}

const printLine = (nb, line) => {
    console.log(
        chalk.cyan.bold(` ${nb} `),
        '| ' +
            strColorToken(line[0]) +
            ' | ' +
            strColorToken(line[1]) +
            ' | ' +
            strColorToken(line[2]) +
            ' | ' +
            strColorToken(line[3]) +
            ' | ' +
            strColorToken(line[4]) +
            ' | ' +
            strColorToken(line[5]) +
            ' | ' +
            strColorToken(line[6]) +
            ' | '
    )
}
export const printBoard = (matrix) => {
    console.log(chalk.cyan.bold(BOARD_NB))
    console.log(chalk.white.bold(`${BOARD_SEPARATOR}`))
    for (const [index, line] of matrix.reverse().entries()) {
        printLine(NB_ROWS - index, line)
        console.log(chalk.white.bold(`${BOARD_SEPARATOR}`))
    }
    console.log(chalk.cyan.bold(BOARD_NB))
}

export const showHeader = (token, playerName, turn) => {
    token === TOKEN1
        ? console.log(
              chalk.red.bold(TOKEN1),
              `: ${chalk.white.bold(playerName)} your turn`
          )
        : console.log(
              chalk.yellow.bold(TOKEN2),
              `: ${chalk.white.bold(playerName)} your turn: `
          )
    console.log(chalk.white.bold(`\nturn: ${turn}`))
}

export const showPrompt = (playerName) => {
    return readlineSync.prompt({
        prompt: ` ${playerName}> `,
    })
}
