import React from 'react'
import NavList from './components/shared/NavList'
import Homepage from './components/Homepage'

const App = () => {
        const navListItems = ["TextReader", "Calculator", "App3", "App4", "App5"];

  return (
    <div>
      <NavList items={navListItems}/>
      <Homepage/>
    </div>
  )
}

export default App