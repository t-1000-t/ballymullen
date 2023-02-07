import { useState } from 'react'

import { ImagesForm } from './ImagesForm'
import { ImagesInfo } from './ImagesInfo'

export const ImagesView = () => {
  const [imagesName, setImagesName] = useState('')

  return (
    <div className='album bg-light'>
      <div className='container'>
        <ImagesForm onSubmit={setImagesName} />
        <ImagesInfo imagesName={imagesName} />
      </div>
    </div>
  )
}
