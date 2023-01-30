import React, { useState } from 'react'
import { VideoForm } from './VideosForm'
import { VideosInfo } from './VideosInfo'

export const VideoView = () => {
  const [videosName, setVideosName] = useState<string>('')

  return (
    <div className='album bg-light'>
      <div className='container'>
        <VideoForm onSubmit={setVideosName} />
        <VideosInfo videosName={videosName} />
      </div>
    </div>
  )
}
