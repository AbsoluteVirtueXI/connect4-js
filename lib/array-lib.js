// Pass a 2D array by value instead of pass by reference
export const copy2DArray = (array2D) => {
    return array2D.map((line) => [...line])
}
