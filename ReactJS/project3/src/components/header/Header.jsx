import React from 'react';
import NavList from '../shared/NavList';

const Header = () => {
    const headerListItems = ['TextReader', 'Calculator', 'App3'];

    return <NavList items = {headerListItems} />;
};

export default Header;
