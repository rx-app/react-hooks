import React, { createContext,useReducer } from 'react';

// 这个需要导出，const {color} = useContext(ColorContext)
export const ColorContext = createContext({})  

export const UPDADT_COLOR = 'update_color'



export default (props)=>{
    const [color,dispathColor] = useReducer((state,action)=>{
        switch(action.type){
            case UPDADT_COLOR:return action.color;
            default : return state
        }
    },'blue')
    return (
        <ColorContext.Provider value={{color,dispathColor}}>
            {props.children}
        </ColorContext.Provider>
    )
}