import React from 'react';
import './Navbar.css';

const Navbar = ({ items }) => {
  return (
    <nav className="simple-navbar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;