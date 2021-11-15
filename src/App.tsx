import React from 'react'
import SplitScreen from './components/SplitScreen'
import './App.css'

const LeftHandComponent = ({ message }: { message: string }) => (
  <h1 style={{ backgroundColor: 'red' }}>{message}</h1>
)
const RightHandComponent = () => (
  <h3 style={{ backgroundColor: 'green' }}>Right</h3>
)

const App = (): JSX.Element => {
  return (
    <div className="app">
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent message="test message que não cabe no espaço" />
        <RightHandComponent />
      </SplitScreen>
    </div>
  )
}

export default App
