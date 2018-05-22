export const isBoardFull = boards => {
  const { x0, x1, x2, x3, x4, x5, x6, x7, x8 } = boards

  return x0 && x1 && x2 && x3 && x4 && x5 && x6 && x7 && x8
}

export const checkWin = (boards, currentPlayer) => {
  const { x0, x1, x2, x3, x4, x5, x6, x7, x8 } = boards

  // Horizontal
  if ([x0, x1, x2].every(cell => cell === currentPlayer)) {
    return true
  }

  // Horizontal
  if ([x3, x4, x5].every(cell => cell === currentPlayer)) {
    return true
  }

  // Horizontal
  if ([x6, x7, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  // Vertical
  if ([x0, x3, x6].every(cell => cell === currentPlayer)) {
    return true
  }

  // Vertical
  if ([x1, x4, x7].every(cell => cell === currentPlayer)) {
    return true
  }

  // Vertical
  if ([x2, x5, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  // Diagonal
  if ([x0, x4, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  // Diagonal
  if ([x2, x4, x6].every(cell => cell === currentPlayer)) {
    return true
  }

  return false
}
