import React from 'react'
import Div from '../Div'

export default function MovingText({text, variant}) {
  return (
    <>
      <Div className="d-flex justify-content-center pb-5">
        <img src={'static/Capture100.PNG'} className='img-fluid w-75' />
      </Div>
      <Div
          className={`cs-moving_text_wrap cs-bold mt-5 cs-primary_font ${
              variant ? variant : ''
          }`}
      >
      <Div className="cs-moving_text_in">
        <Div className="cs-moving_text" style={{color:'#06c17c', WebkitTextStroke: '3px #fff'}}>{text}</Div>
        <Div className="cs-moving_text" style={{color:'#06c17c', WebkitTextStroke: '3px #fff'}}>{text}</Div>
      </Div>
    </Div>
    </>
  )
}
