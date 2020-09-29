import { copy2DArray } from '../lib/array-lib.js'
import { NO_TOKEN, NB_ALIGN } from './constants.js'

export const isColumnFull = (column, gameState) => {
    column -= 1
    if (gameState.board[gameState.nbRow - 1][column] !== NO_TOKEN) {
        return true
    } else {
        return false
    }
}

export const putToken = (column, gameState) => {
    column -= 1
    //should never be true
    if (isColumnFull(column + 1, gameState)) {
        return false
    }
    for (let i = 0; i < gameState.nbRow; i += 1) {
        if (gameState.board[i][column] === NO_TOKEN) {
            gameState.board[i][column] = gameState.currentToken
            let pos = { row: i, column: column }
            checkVictory(pos, gameState)
            return true
        }
    }
}

const checkVictory = (pos, gameState) => {
    if (
        checkVert(pos, gameState) ||
        checkHoriz(pos, gameState) ||
        checkDiagBotRight(pos, gameState) ||
        checkDiagTopRight(pos, gameState)
    ) {
        gameState.winner = gameState.currentPlayer
        gameState.isFinished = true
    }
}

const checkVert = (pos, gameState) => {
    if (pos.row < NB_ALIGN - 1) return false
    else {
        for (let i = pos.row; pos.row - i < NB_ALIGN; i -= 1) {
            if (gameState.board[i][pos.column] !== gameState.currentToken)
                return false
        }
        return true
    }
}

const checkHoriz = (pos, gameState) => {
    let start =
        pos.column - (NB_ALIGN - 1) >= 0 ? pos.column - (NB_ALIGN - 1) : 0
    let end =
        pos.column + (NB_ALIGN - 1) > gameState.nbColumn - 1
            ? gameState.nbColumn - 1
            : pos.column + (NB_ALIGN - 1)
    let count = 0
    for (let i = start; i <= end; i++) {
        if (gameState.board[pos.row][i] === gameState.currentToken) {
            count += 1
        } else {
            count += 0
        }
    }

    return count === NB_ALIGN
}

const checkDiagBotRight = (pos, gameState) => {
    let startCol =
        pos.column - (NB_ALIGN - 1) >= 0 ? pos.column - (NB_ALIGN - 1) : 0
    let endCol =
        pos.column + (NB_ALIGN - 1) > gameState.nbColumn - 1
            ? gameState.nbColumn - 1
            : pos.column + (NB_ALIGN - 1)
    let startRow = pos.row - (NB_ALIGN - 1) >= 0 ? pos.row - (NB_ALIGN - 1) : 0
    let endRow =
        pos.row + (NB_ALIGN - 1) > gameState.nbRow - 1
            ? gameState.nbRow - 1
            : pos.row + (NB_ALIGN - 1)
    let count = 0
    for (
        let row = startRow, column = startCol;
        row <= endRow && column <= endCol;
        row += 1, column += 1
    ) {
        if (gameState.board[row][column] === gameState.currentToken) {
            count += 1
        } else {
            count += 0
        }
    }

    return count === NB_ALIGN
}

const checkDiagTopRight = (pos, gameState) => {
    const posCopy = { ...pos }
    posCopy.column = gameState.nbColumn - 1 - posCopy.column
    gameState.board.forEach((row) => row.reverse())
    let ret = checkDiagBotRight(posCopy, gameState)
    gameState.board.forEach((row) => row.reverse())
    return ret
}
