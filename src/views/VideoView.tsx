import React, { useEffect, useState } from 'react'
import { getVideos } from '../services/FetchInstance'

interface imagesViewType {
  total: number
  totalHits: number
  hits: []
}

export const VideoView = () => {
  const [videos, setVideos] = useState({} as imagesViewType)

  useEffect(() => {
    getVideos('fish', 1).then(setVideos)
  }, [])

  return (
    <div className='album bg-light'>
      <div className='container'>
        <form className='d-flex p-2' role='search'>
          <div className='px-2'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {videos.totalHits &&
            videos.hits.map((item: any) => {
              return (
                <div className='card'>
                  <video src={item.videos.tiny.url} className='object-fit-contain' autoPlay />
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
              )
            })}
        </div>
      </div>
    </div>
  )
}
