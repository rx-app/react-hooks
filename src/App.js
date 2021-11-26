
import React , { useState } from 'react'
/* 自定义hooks 用于格式化数组将小写转成大写 */
function useFormatList(list){
  let res = list.map(item=>{
    console.log(1111)
    return item.toUpperCase()
  })
  return res
}
/* 父组件传过来的list = [ 'aaa' , 'bbb' , 'ccc'  ] */
function App({ list }){
  const [ number ,setNumber ] = useState(0)
  const newList = useFormatList(list)
  return <div>
    <div className="list" >
      { newList.map(item=><div key={item} >{ item }</div>) }
    </div>
    <div className="number" >
        <div>{ number }</div>
        <button onClick={()=> setNumber(number + 1) } >add</button>
    </div>
  </div>
}
export default App

