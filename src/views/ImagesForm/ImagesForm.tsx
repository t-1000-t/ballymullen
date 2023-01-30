import React, { BaseSyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { ToastError } from '../Toasts'

interface ImagesFormProps {
  onSubmit: any
}

export const ImagesForm: React.FC<ImagesFormProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('')

  const handleTextChange = (event: BaseSyntheticEvent) => {
    setInputText(event.currentTarget.value)
  }

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    const message = 'Fill the form'

    if (inputText.trim() === '') {
      toast.error(<ToastError message={message} />, { className: 'custom-toast' })
      return
    }

    onSubmit(inputText)
    setInputText('')
  }

  return (
    <form className='d-flex p-2' role='search' onSubmit={handleSubmit}>
      <div className='px-2'>
        <input
          className='form-control me-2'
          type='text'
          placeholder='Search'
          aria-label='Search'
          value={inputText}
          onChange={handleTextChange}
        />
      </div>
      <button className='btn btn-outline-success' type='submit'>
        Search
      </button>
    </form>
  )
}
