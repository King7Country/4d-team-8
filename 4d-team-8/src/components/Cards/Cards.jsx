import React from 'react'
import "./Cards.scss"

// 3d transform and perspective
// then assign these values to a class


function Cards() {
    return (
     <div className="flip-card">
        <div className="flip-card__image">
          <img className="flip-card__image" src="https://image.shutterstock.com/image-illustration/part-original-alcohol-ink-painting-600w-1534220315.jpg" alt="Inkscape" style={{width:175, height:175,}} />
        </div>

        <div className="flip-card__flip-container">
        <div className="flip-card__inner">
          <div className="flip-card__front">

            <div className="flip-card__info-container">
              <h3 className="flip-card__title">Cruising</h3>
              <p className="flip-card__author">by <span className="flip-card__author--highlight">Oliver Lyu</span></p>
              <div className="flip-card__info-sub">
                <p className="flip-card__track-info">2:35</p>
                <p className="flip-card__track-info">95 BPM</p>
              </div>
            </div>

            <div className="flip-card__description">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aliquam laboriosam exercitationem fugiat, autem earum iste architecto </p>
            </div>

            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.825 6L5 2.2915L1.175 6L-2.12363e-07 4.8583L5 2.18557e-07L10 4.8583L8.825 6Z" fill="#1D1D1D"/>
</svg>


          </div>
          <div className="flip-card__back">

            <div className="flip-card__categories">
              <h4 className="flip-card__headings">Moods</h4>
              <p className="flip-card__buttons">Atmospheric</p>
              <p className="flip-card__buttons">Bright</p>
              <p className="flip-card__buttons">Dreamy</p>
              <p className="flip-card__buttons">Ethereal</p>
              <p className="flip-card__buttons">Fun</p>
            </div>
            

            <div className="flip-card__categories">
              <h4 className="flip-card__headings">Genres</h4>
              <p className="flip-card__buttons">Chill Out</p>
              <p className="flip-card__buttons">Dance/Electronic</p>
            </div>


            <div className="flip-card__categories">
              <h4 className="flip-card__headings">Instruments</h4>
              <p className="flip-card__buttons">Drums</p>
              <p className="flip-card__buttons">Percussion</p>
              <p className="flip-card__buttons">Piano</p>
              <p className="flip-card__buttons">Synthesizer</p>
            </div>

            {/* <button>v</button> */}

          </div>
        </div>
      </div> 

     </div>
    )
}

export default Cards
