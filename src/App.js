import React, { Fragment, useState } from "react";
import { Button, Tag, Divider } from "antd";

const ParentComponent = () => {

  const [count, setCount] = useState<number>(0); //{1}

  return (
    <Fragment>
      <h5>hooks 性能优化篇</h5>
      
      

      <Divider orientation="left">count</Divider>
      <Tag color="magenta">{count}</Tag>
      <Button type="primary" onClick={() => setCount((o: number) => o += 1)}>setCount</Button> {/* {2} */}

      <Divider orientation="left">子组件↓</Divider>
      <ChildComponent /> {/* {3} */}
    </Fragment>
  )
}
