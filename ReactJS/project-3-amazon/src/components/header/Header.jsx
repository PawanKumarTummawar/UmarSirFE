import React from 'react'
import NavList from '../shared/NavList.jsx'

const Header = () => {

    const applicationListItems = ["TextReader", "Calculator", "App3", "App4", "App5", "App6"]
  return (
    // sent as props in the below line
    <NavList items={applicationListItems}/>
  )
}

export default Header