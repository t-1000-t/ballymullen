import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getImages } from '../../services/FetchInstance'

interface ImagesInfoProps {
  imagesName: string
}

interface ImagesArrayProps {
  total: number
  totalHits: number
  hits: []
}

export const ImagesInfo: React.FC<ImagesInfoProps> = ({ imagesName }) => {
  const [imagesArray, setImagesArray] = useState<ImagesArrayProps>()

  useEffect(() => {
    // if (!imagesName) return

    try {
      getImages(imagesName, 1).then((res) => {
        setImagesArray(res)
      })
    } catch (e: any) {
      toast.error('something went wrong!')
    }
  }, [imagesName])

  return (
    <div className='row row-cols-1 row-cols-md-2 g-4'>
      {imagesArray?.hits &&
        imagesArray?.hits.map((item: any) => {
          return (
            <div key={item.id} className='card'>
              <img src={item.largeImageURL} className='card-img-top' alt='image' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className='card-text'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
