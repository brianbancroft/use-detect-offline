import logo from './logo.svg'
import './App.css'
import useDetectOffline from 'use-detect-offline'
import OfflineParagraph from './OfflineParagraph'

function App() {
  const { offline } = useDetectOffline()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <OfflineParagraph offline={offline} />
      </header>
    </div>
  )
}

export default App
