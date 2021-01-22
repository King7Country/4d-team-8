import React from 'react';
import sidebar from '../../assets/images/sidebar.png';
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="sidebar__img" src={sidebar} alt="sidebar"/>
    </aside>
  )
}
