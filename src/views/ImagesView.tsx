import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import { getImages } from '../services/FetchInstance'

interface imagesViewType {
  total: number
  totalHits: number
  hits: []
}

export const ImagesView = () => {
  const [images, setImages] = useState({} as imagesViewType)
  const [textSearch, setTextSearch] = useState('')
  const [textChange, setTextChange] = useState('')

  useEffect(() => {
    getImages(textSearch, 1).then(setImages)
  }, [textSearch])

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    setTextSearch(textChange)
  }

  const handleChange = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    setTextChange(event.currentTarget.value)
  }

  return (
    <div className='album py-5 bg-light'>
      <div className='container'>
        <form role='search' className='d-flex p-2'>
          <div className='col-4 px-2'>
            <input
              className='form-control'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleChange}
              value={textChange}
            />
          </div>

          <button className='btn btn-outline-success' type='submit' onSubmit={handleSubmit}>
            Search
          </button>
        </form>

        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3'>
          {images.totalHits &&
            images.hits.map((item: any) => {
              return (
                <div className='col'>
                  <div className='card p-3 w-40'>
                    <img src={item.largeImageURL} className='card-img-top' alt={item.type} />
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <p className='card-text'>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
