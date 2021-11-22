import React from "react";

export default function Test(props) {
    const {title,changeTitle} = props
    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>修改</button>
        </>
    )
    
}