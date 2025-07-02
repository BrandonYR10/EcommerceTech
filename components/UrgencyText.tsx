// *********************
// IN DEVELOPMENT
// *********************

import React from 'react'

const UrgencyText = ({stock} : { stock: number }) => {
  return (
    <p className='text-success text-xl max-[500px]:text-lg'>¡Date prisa! Solo quedan <span className='badge badge-success text-white text-xl max-[500px]:text-lg'>{stock}</span> productos en stock!</p>
  )
}

export default UrgencyText
