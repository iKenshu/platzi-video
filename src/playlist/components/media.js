import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
    state = {}

    handleClick = (event) =>{
        this.setState({
            author: 'Kevin Morales',
        })
    }
    render() {
        // const { author } = this.state
        const { title, cover, author } = this.props

        const styles = {
            container: {
                fontSize: 14,
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red',
            }
        }
        return (
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img className='Media-image'
                        src={cover}
                        width={260}
                        height={160}
                        alt=""
                    />
                    <h3 className='Media-title'>{title}</h3>
                    <p className='Media-author'>{author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media

