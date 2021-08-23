import React from 'react'
import Spinner from '../assets/spinner.gif'

function Loading() {
  return (
    <>
      <img src={Spinner} alt="spinner" className="spinner" />
    </>
  )
}

export default Loading
