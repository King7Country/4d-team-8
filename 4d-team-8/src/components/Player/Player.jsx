import React from 'react';
import player from '../../assets/images/bottom_player.png';
import './Player.scss';

export default function Player() {
  return (
    <div className="player player--animate">
      <img className="player__img" src={player} alt="player"/>
    </div>
  )
}
