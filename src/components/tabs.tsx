import React from 'react'

const Tabs = (props:any) => {
  return (
    <div>
        <h1>Custom Tabs</h1>
        {props.children}
    </div>
  )
}

export default Tabs;