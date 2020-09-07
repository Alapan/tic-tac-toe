import React, { useState } from 'react'
import Box from './Box'
import CrossButton from './CrossButton'
import NoughtButton from './NoughtButton'
import { StateProvider } from './state'
import './App.css'
import WinningLine from './WinningLine'

const App: React.FC = () => {
  const [gameOver, setGameOver] = useState(false)

  const gameOverHandler = () => {
    setGameOver(true)
  }

  return (
    <StateProvider>
      <div>
        <CrossButton />
        <NoughtButton />
        <div className="grid">
          {gameOver ? <WinningLine /> : null}
          <div className="container">
            <Box identifier={1} gameOverHandler={gameOverHandler} />
            <Box identifier={2} gameOverHandler={gameOverHandler} />
            <Box identifier={3} gameOverHandler={gameOverHandler} />
          </div>
          <div className="container">
            <Box identifier={4} gameOverHandler={gameOverHandler} />
            <Box identifier={5} gameOverHandler={gameOverHandler} />
            <Box identifier={6} gameOverHandler={gameOverHandler} />
          </div>
          <div className="container">
            <Box identifier={7} gameOverHandler={gameOverHandler} />
            <Box identifier={8} gameOverHandler={gameOverHandler} />
            <Box identifier={9} gameOverHandler={gameOverHandler} />
          </div>
        </div>
      </div>
    </StateProvider>
  )
}

export default App
