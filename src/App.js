import React, { useReducer,createContext,useContext } from 'react';

const countContext = createContext()

function Count(props){
  return (
    <div>
      {props.a}
    </div>
  )
}

function App(){
    
    return (
       <div>
         <countContext.Provider value={20}>
           <Count a={12}></Count>
         </countContext.Provider>
       </div>
    )

}

export default App