import React from 'react'

function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup_inner'>
        Popup
        <button className='close-btn'>Close</button>
        { props.children }
            </div>
        
        </div>
  ) :""
}

export default Popup