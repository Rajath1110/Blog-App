import { TextInput,Label, Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left div*/}
        <div className='flex-1'>
          <Link to="/" className=' text-4xl dark:text-white bold'>
              <span className='px-2 py-1 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-400 rounded-lg text-white'>RJ</span>Blogs
          </Link>
          <p className='text-sm mt-5'>
            Create an account here. 
          </p>

        </div>
        {/* right div*/}
        <div className='flex-1'> 
          <form className='flex flex-col gap-4'>
            <div className=''>
              <div>
                <Label value='username' />
                <TextInput 
                  type='text'
                  placeholder='Username'
                  id='username'
                /> 
              </div>
              <div>
                <Label value='email' />
                <TextInput 
                  type='email'
                  placeholder='email'
                  id='email'
                /> 
              </div>
              <div>
                <Label value='password' />
                <TextInput 
                  type='password'
                  placeholder='password'
                  id='password'
                /> 
              </div>
              

            </div>
            <div className=''>
              <Button gradientDuoTone='purpleToPink' className='items-center' type='submit'>Sign up</Button>
            </div>
            

          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span><Link to='/signin' className='text-blue-600'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
Signup