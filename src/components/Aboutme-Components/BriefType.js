import React, { Component } from 'react'
import { init } from 'ityped'



export default class BriefType extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false,loop:false,
        strings: ['Proficiency in web development technologies', 'Familiarity with database technologies' ,"Strong problem-solving and debugging skills", "Proficiency in UI/UX design principles","Experience with testing and debugging" ]})
    }

    
    render(){
      return <div className=' mt-5 p-4 rounded briefElement '> <h5> My Superpowers :</h5><h4  id="myElement"> </h4>
        </div>
    }
  }

 