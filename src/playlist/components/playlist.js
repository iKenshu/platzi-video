import React from 'react'
import Media from './media'
import Category from './category'

import './playlist.css'

function Playlist(props) {
  const playlist = props.data.categories

  return (
    <div>
    {
      playlist.map((item) => {
        return (
          <div key={item.id}>
            <Category {...item} />
            <div className='Playlist'>
            {
              item.playlist.map((item) => {
                return <Media {...item} key={item.id}/>
              })
            }
            </div>
          </div>
          )
      })
    }
    </div>
    )
  }

export default Playlist