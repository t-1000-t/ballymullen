import React, { BaseSyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { ToastError, toastSuccess } from '../Toasts'

interface VideoFormProps {
  onSubmit: any
}

export const VideoForm: React.FC<VideoFormProps> = ({ onSubmit }) => {
  const [videoText, setVideoText] = useState('')

  const handleChange = (e: BaseSyntheticEvent) => {
    setVideoText(e.currentTarget.value)
    toast.success('Okay!')
  }

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const message = 'Fill the form'

    if (videoText.trim() === '') {
      toast.error(<ToastError message={message} />, { className: 'custom-toast' })
      return
    }
    onSubmit(videoText)
    setVideoText('')
    toastSuccess()
  }

  return (
    <form className='d-flex p-2' role='search' onSubmit={handleSubmit}>
      <div className='px-2'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={videoText}
          onChange={handleChange}
        />
      </div>
      <button className='btn btn-outline-success' type='submit'>
        Search
      </button>
    </form>
  )
}
