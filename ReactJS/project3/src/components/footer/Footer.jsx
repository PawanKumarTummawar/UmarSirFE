import React from 'react'
import './Footer.css'
import NavList from '../shared/NavList';

const Footer = () => {
    const footerListItems = ['Contact Us', 'About Us', 'Careers', 'Location'];

  return (
     <NavList items = {footerListItems} />
  )
}

export default Footer