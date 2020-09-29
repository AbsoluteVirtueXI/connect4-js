const AUTHOR = 'Sofiane Akermoun'

export const BANNER = `**************************************************
\t   Welcome to Connect 4 game.
A game made for Alyra students by ${AUTHOR}
***************************************************\n\n`

// Board strings
export const BOARD_NB = '      1   2   3   4   5   6   7'
export const BOARD_SEPARATOR = '    +---+---+---+---+---+---+---+'

export const TOKEN1 = 'O'
export const TOKEN2 = 'X'
export const NO_TOKEN = ' '

export const NB_ALIGN = 4
export const NB_ROWS = 6
export const NB_COLUMNS = 7
export const NB_TOKENS = NB_ROWS * NB_COLUMNS

export const RULES = `\nPour gagner une partie, il suffit d’être le premier à aligner 
4 jetons de sa couleur horizontalement, verticalement et diagonalement.
S tous les jetons sont joués sans qu’il y est d’alignement de jetons,
la partie est déclaré nulle.\n`

export const HELP = `
Sofiane> put(1)=> Mettre un jeton du joueur Sofiane dans la colonne 1.
Sofiane> rules => Affiche la régle du jeu.
Sofiane> help => Affiche la liste de toutes les commandes disponibles.
Sofiane> whoami => Affiche le jeton correspondant à ce joueur.
Sofiane> abandon => le joueur Sofiane abandonne l'autre joueur est déclaré vainqueur.
 `
