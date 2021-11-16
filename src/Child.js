import React,{useContext} from "react";
import CountContext from './context'

export default function Counter() {
  const count = useContext(CountContext)
  return (<h2>{count}</h2>)
}