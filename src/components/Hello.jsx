import React from 'react'

export default function Hello (props){
    console.log(props)
    return <div>Hello component--- {props.name}</div>
}

// export default Hello