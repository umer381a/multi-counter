import React from 'react'

function Button({increment, handleIncrement}) {
    const handleClick = () => {handleIncrement(increment)}
  return (
    <>
        <button onClick={handleClick}>+{increment}</button>
    </>
  )
}

export default Button