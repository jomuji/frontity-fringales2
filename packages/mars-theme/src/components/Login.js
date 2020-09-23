import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from 'react-wordpress-auth'
 
const Login = () => {
  const { handleSubmit, register, errors } = useForm()
  const {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    isAuthenticating 
  } = useAuth()
 
  if (isAuthenticated) {
    return <div>Welcome {user.firstName}!</div>
  }
 
  return (
    <form onSubmit={handleSubmit(login)}>
      <label for='email'>Email</label>
      <input type='email' name='email' ref={register} />
      {errors.email && errors.email.message}
 
      <label for='password'>Password</label>
      <input type='password' name='password' ref={register} />
      {errors.password && errors.password.message}
 
      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  )
}