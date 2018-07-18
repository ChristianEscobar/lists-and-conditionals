import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <div class="charComponent">
      {props.value}
    </div>
  )
}

export default charComponent;