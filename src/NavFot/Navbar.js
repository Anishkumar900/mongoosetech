import React, { useState } from 'react';
import { BsMenuButtonFill } from "react-icons/bs";
import { IoReorderThree } from "react-icons/io5";
import FeedbackForm from '../CardComponent/FeedbackForm';

export default function Navbar(props) {
   
    
    
  return (
    <div className=' '>
        <div className='bg-slate-300 w-80  shadow-2xl shadow-slate-700  rounded-r-xl h-screen py-16 fixed'>
        <div className=' flex  p-4 gap-5 bg-white w-64 rounded-xl shadow-xl mx-auto my-5'>
            <img className='w-16 h-16 rounded-full' src='https://cdn.pixabay.com/photo/2023/03/13/11/18/ai-generated-7849601_960_720.jpg' alt='profileImg'/>
            <div>
                <p className='text-xl font-bold'>Hi Reader,</p>
                <p>Here's your News!</p>
            </div>
        </div>

        <div className='w-64 bg-white shadow-xl mx-auto rounded-xl text-center py-3 my-5'>
            <p className='text-2xl font-extrabold pb-4'>View Toggle</p>
            {
                props.toggle?<div className='flex justify-center gap-4'><div className=' bg-cyan-500 p-2 rounded-md'><BsMenuButtonFill   size={44}/></div>
                <IoReorderThree size={44} onClick={props.togglehandle}/></div>:<div className='flex justify-center gap-4'><BsMenuButtonFill   size={44} onClick={props.togglehandle}/>
                <div className=' bg-cyan-500 p-2 rounded-md'><IoReorderThree size={44}/></div></div>
            }
        </div>
        <div className='text-xl font-extrabold w-64 text-center py-3 bg-white shadow-xl mx-auto rounded-xl'>
            <p className=' pb-5'>Have a Feedback?</p>
            <button className='p-2 bg-emerald-300 mx-10 rounded-xl ' onClick={props.formhandle}>We're Listening!</button>
        </div>
    </div>



    {/* <div className='w-screen'>
        
    </div> */}
    </div>
  )
}
