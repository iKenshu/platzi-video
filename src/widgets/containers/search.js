import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: 'Bruno Mars'
  }
  handleSubmit = (event) => {
    event.preventDefault()
    
  }

  setInputRef = (element) => {
    this.input = element
  }

  handleInpuChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render(){
    return(
      <Search 
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInpuChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer