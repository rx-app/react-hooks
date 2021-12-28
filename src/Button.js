import React, {Fragment} from 'react'
import { useState, useMemo } from 'react'

export default  ChildComponent = () => {

    return (
      <Fragment>
        {console.log("ChildComponent Render")} {/* {1} */}
        <span>子组件</span>
      </Fragment>
    )
  
  }
  
  