import React, { Component } from 'react'
import Playlist from './playlist'

import Play from '../../icons/components/play'

function Category(props) {
  const { id, title, description } = props

  return(
    <div className="Categories">
      <div className="Category" key={id}>
        <p className="Category-title">{title}</p>
        <p className="Category-description">{description}</p>
        <Play 
          size={50}
          color="red"
        />
      </div>

    </div>
  )
}


export default Category