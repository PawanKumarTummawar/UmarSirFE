import React from 'react'
import './NavList.css'

const NavList = (props) => {

  return (
    <ul>
      {props.items.map(
        (navListItem, index) => 
        {
          return <li key={index}> {navListItem}</li>
        }
      )}
    </ul>
  )
}

export default NavList