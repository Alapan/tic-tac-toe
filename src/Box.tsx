import React, { useState, useContext, useEffect } from 'react'
import Nought from './Nought'
import './Box.css'
import Cross from './Cross'
import { StateContext } from './state'
const isEqual = require('lodash.isequal')

interface BoxProps {
  identifier: number
  gameOverHandler: Function
}

const Box: React.FC<BoxProps> = ({ identifier, gameOverHandler }) => {
  const [boxValue, setBoxValue] = useState<string>('')
  const { state, dispatch } = useContext(StateContext)

  const handleOnMouseDown = () => {
    setBoxValue(state.selectedValue)
  }

  const handleOnMouseUp = () => {
    dispatch({
      type: 'update',
      value: identifier,
    })
  }

  const getNoughtOrCrossPositions = (type: String): Array<number> => {
    const { matrix } = state
    const entries = matrix.filter((selection) => {
      // @ts-ignore
      if (selection.value === type) {
        return selection
      }
    })
    // @ts-ignore
    return entries.map((entry) => entry.position).sort()
  }

  const checkMatrix = () => {
    const winningCombos = [
      [1, 2, 3],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]

    // @ts-ignore
    const noughtPositions = getNoughtOrCrossPositions('nought')
    // @ts-ignore
    const crossPositions = getNoughtOrCrossPositions('cross')
    winningCombos.forEach((combo) => {
      if (isEqual(combo, noughtPositions) || isEqual(combo, crossPositions)) {
        gameOverHandler()
      }
    })
  }

  useEffect(() => {
    checkMatrix()
  }, [state])

  return (
    <div className="box-cls" onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
      {boxValue === 'nought' ? <Nought /> : boxValue === 'cross' ? <Cross /> : null}
    </div>
  )
}

export default Box
