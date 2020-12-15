import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (prop) =>{
    // setTimeout(() => {
    //     prop.history.push('/')
    // }, (2000));
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Abouttttttt</p>
        </div>
    )
}

export default Rainbow(About)