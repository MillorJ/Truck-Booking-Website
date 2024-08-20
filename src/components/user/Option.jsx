import React from 'react'

const Option = ({truck}) => {
  return (
    <div>
        <option value={truck.id}>{truck.name}</option>
    </div>
  )
}

export default Option