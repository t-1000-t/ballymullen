import React, { MutableRefObject, useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts'

const SingUp: React.FC = () => {
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>
  const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>
  const { singUp } = useAuth() as any
  const [error, setError] = useState<string>('')

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError('Password do not match')

    singUp(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sing Up</h2>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className='w-100' type='submit'>
              Sing Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>Already have an account? Log in</div>
    </>
  )
}

export default SingUp
