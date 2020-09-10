import isEqual from 'lodash.isequal'
import React, { useContext, useEffect, useState } from 'react'
import './Box.css'
import Cross from './Cross'
import Nought from './Nought'
import { StateContext } from './state'

interface BoxProps {
  gameOverHandler: () => void
  identifier: number
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

  const getNoughtOrCrossPositions = (type: string): number[] => {
    const { matrix } = state
    const entries = matrix.filter((selection) => {
      // @ts-ignore
      if (selection.value === type) {
        return selection
      }
      return null
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
