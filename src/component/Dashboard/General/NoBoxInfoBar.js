import React from 'react'

const NoBoxInfoBar = (props) => {
    return (
        <React.Fragment>
            <span className='text-muted'>{props.title}</span><br/>
            <span>{props.value ? props.value : 0}</span>
        </React.Fragment>
    )
}

export default NoBoxInfoBar
