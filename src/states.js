import readlineSync from 'readline-sync'
import chalk from 'chalk'
import { TOKEN1, TOKEN2 } from './constants.js'

const createBoardState = (nbRow, nbColumn) => {
    return new Array(nbRow).fill([]).map(() => new Array(nbColumn).fill(' '))
}

export class GameState {
    constructor(nbRow, nbColumn) {
        this.nbRow = nbRow
        this.nbColumn = nbColumn
        this.turn = 1
        this.player1 = 'Player1'
        this.player2 = 'Player2'
        this.winner = ''
        this.isFinished = false
        this.board = createBoardState(nbRow, nbColumn)
    }

    setPlayersName() {
        this.player1 = readlineSync.question(
            chalk.red.bold('Player 1 enter your name: '),
            {
                defaultInput: 'player1',
            }
        )
        this.player2 = readlineSync.question(
            chalk.yellow.bold('Player 2 enter your name: '),
            {
                defaultInput: 'player2',
            }
        )
    }
    get currentToken() {
        return this.turn % 2 !== 0 ? TOKEN1 : TOKEN2
    }
    get currentPlayer() {
        return this.turn % 2 !== 0 ? this.player1 : this.player2
    }
}
