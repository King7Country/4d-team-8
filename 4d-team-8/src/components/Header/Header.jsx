import React from 'react'
import header from '../../assets/images/header.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={header} alt="header"/>
    </header>
  )
}
