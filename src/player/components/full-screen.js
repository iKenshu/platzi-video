import React from 'react'
import { FullScreenIcon } from '../../icons/components/play'
import './full-screen.css'

const FullScreen = (props) => (
  <div 
    className="FullScreen"
    onClick={props.handleFullSCreenClick}
  >
    <FullScreenIcon 
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen