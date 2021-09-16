import React from 'react'

export default function Alert(props) {
    const capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div style={{height:"40px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container `} role="alert">
            <strong>{capitalize(props.alert.type)}:</strong>{props.alert.message}
        </div>}
        </div>
    )
}
