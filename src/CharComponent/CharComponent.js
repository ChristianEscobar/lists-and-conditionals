import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div className="charComponent" onClick={props.click}>
      {props.value}
    </div>
  )
}

export default charComponent;