import React, { useEffect, useState } from 'react'
import { getVideos } from '../../services/FetchInstance'
import { toast } from 'react-toastify'

interface VideosInfoProps {
  videosName: string
}

interface VideosArrayProps {
  total: number
  totalHits: number
  hits: []
}

export const VideosInfo: React.FC<VideosInfoProps> = ({ videosName }) => {
  const [videosArray, setVideosArray] = useState<VideosArrayProps>()

  useEffect(() => {
    try {
      getVideos(videosName, 1).then((res) => {
        setVideosArray(res)
      })
    } catch (e: any) {
      toast.error('something went wrong!')
    }
  }, [videosName])

  return (
    <div className='row row-cols-1 row-cols-md-2 g-4'>
      {videosArray?.hits &&
        videosArray?.hits.map((item: any) => {
          return (
            <div key={item.id}>
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
            </div>
          )
        })}
    </div>
  )
}
