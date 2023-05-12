import React, { Component } from 'react'
import { init } from 'ityped'



export default class BriefType extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false,loop:false,
        strings: ['Proficiency in web development technologies', 'Familiarity with database technologies' ,"Strong problem-solving and debugging skills", "Proficiency in UI/UX design principles","Experience with testing and debugging" ]})
    }

    
    render(){
      return <div className='bg-dark p-3 mx-5 rounded briefElement '><h5> My Superpowers : <h6 className='mt-3' id="myElement">|</h6></h5>
        </div>
    }
  }

 