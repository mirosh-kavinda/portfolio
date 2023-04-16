import React, { Component } from 'react'
import { init } from 'ityped'



export default class BriefType extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false,loop:true,
        strings: ['Full Stack Developer', 'SE Undergraduate' ,"I Care Both UX and UI of your webpages , based in Sri lanka" ]})
    }

    
    render(){
      return <div className='bg-dark p-3 mx-5 rounded briefElement '><h5> My Superpowers : <h6 className='mt-3' id="myElement">|</h6></h5>
        </div>
    }
  }

 