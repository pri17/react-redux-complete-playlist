import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['pink','oragne','red','yellow']
    const randomColor = colors[Math.floor(Math.random()*3)]

    const className = randomColor + '-text';

    return (props)=>{
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow