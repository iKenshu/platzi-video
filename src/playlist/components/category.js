import React, { Component } from 'react'
import Playlist from './playlist'

class Category extends Component {
    render(){
        const { id, title, description } = this.props

        return(
            <div className="Categories">
                <div className="Category" key={id}>
                    <p className="Category-title">{title}</p>
                    <p className="Category-description">{description}</p>
                </div>
                
            </div>
        )
    }
}

export default Category