import React, {Component} from 'react'
import './Hero.css'

class Hero extends Component {
  render(){
    return (
      <header>
        <div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to bacome a Ninja Developer.</p>
        <a className="button">
          Awesome!
        </a>
        </div>
        
      </header>

     
    )
  }
}



export default Hero