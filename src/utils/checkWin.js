const checkHorizontalVictory = (boards, currentPlayer) => {
  const { x0, x1, x2 } = boards

  if ([x0, x1, x2].every(cell => cell === currentPlayer)) {
    return true
  }

  const { x3, x4, x5 } = boards

  if ([x3, x4, x5].every(cell => cell === currentPlayer)) {
    return true
  }

  const { x6, x7, x8 } = boards

  if ([x6, x7, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  return false
}

const checkVerticalVictory = (boards, currentPlayer) => {
  const { x0, x3, x6 } = boards

  if ([x0, x3, x6].every(cell => cell === currentPlayer)) {
    return true
  }

  const { x2, x5, x8 } = boards

  if ([x2, x5, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  return false
}

const checkDiagonalVictory = (boards, currentPlayer) => {
  const { x0, x4, x8 } = boards

  if ([x0, x4, x8].every(cell => cell === currentPlayer)) {
    return true
  }

  const { x2, x6 } = boards

  if ([x2, x4, x6].every(cell => cell === currentPlayer)) {
    return true
  }

  return false
}

export const checkWin = (boards, currentPlayer) => {
  if (
    checkDiagonalVictory(boards, currentPlayer) ||
    checkHorizontalVictory(boards, currentPlayer) ||
    checkVerticalVictory(boards, currentPlayer)
  ) {
    return true
  }
}
