import React from 'react'

function TextField(props) {
  return (
    <input className='input-field' value={props.value} onChange={props.onChange}/>
  )
}

export default TextField