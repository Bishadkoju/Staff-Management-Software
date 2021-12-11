import React from 'react'

const NoBoxInfoBar = (props) => {
    return (
        <React.Fragment>
            <span className='text-muted'>{props.title}</span><br/>
            <span>{props.value}</span>
        </React.Fragment>
    )
}

export default NoBoxInfoBar
