import React from 'react'
import Feed from '@components/Feed'


const page = () => {
  return (
    <section className='w-full flex flex-center flex-col'>
        <h1 className='head_text text-center'> 
            Share Your Prompts Anywhere
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            SYP is an open-source tool to share your prompts to the world, in style!
        </p>
        <Feed/>
        
    </section>
  )
}

export default page