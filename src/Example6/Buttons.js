import React,{useContext} from 'react';
import {ColorContext,UPDADT_COLOR} from './Color'

function Buttons(){
    const {dispathColor} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispathColor({type:UPDADT_COLOR,color:'red'})}}>红色</button>
            <button onClick={()=>{dispathColor({type:UPDADT_COLOR,color:'yellow'})}}>黄色</button>
        </div>
    )
}

export default Buttons