import React from 'react'

const Form = () => {
  return (
    <div className=' bg-[#FFFFFF1A] backdrop-blur-lg p-8 rounded-2xl text-white'>
        <h1 className=' text-[24px] font-semibold'>Get a quote</h1>
      <form className=' flex flex-col gap-y-3 mt-5'>
        <input type="name" placeholder='Ful Name' className=' bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md' />
          <input type="email" placeholder='Email Address' className=' bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md' />
            <input type="number" placeholder='Phone Number' className=' bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md' />
            <textarea rows={4} placeholder='Description' className=' bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md'></textarea>
            <button className=' py-2 px-5 rounded-full mt-4 bg-red-500 text-white uppercase'>bOOK AN aPPOINTMENT</button>
      </form>
    </div>
  )
}

export default Form
