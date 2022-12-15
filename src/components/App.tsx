import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'
import AuthProvider from '../contexts/AuthContext'
import SingUp from './SingUp'

export const App = () => (
  <AuthProvider>
    <Header />
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <SingUp />
      </div>
    </Container>
  </AuthProvider>
)

export default App
