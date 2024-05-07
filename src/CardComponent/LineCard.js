import React from 'react';
import { RxCross1 } from "react-icons/rx";

export default function LineCard(props) {
    const handleRemove = () => {
        props.removeCard();
    };

    return (
        <div className='flex'>
            <div className='bg-white p-5 rounded-lg shadow-md col-span-3 md:col-span-1 flex gap-5'>
                <div className=' my-auto'>
                    <img src={props.img} alt='img' className=' h-20 w-24' />
                </div>
                <div>
                    <p className='text-lg font-extrabold '>{props.title.length <= 60 ? props.title : props.title.slice(0, 60) + '...'}</p>
                    <p className=' font-serif py-2'>{props.body.length <= 140 ? props.body : props.body.slice(0, 140) + '...'}</p>
                    <p className='text text-slate-400 font-bold'>{props.date}</p>
                </div>
            </div>
            <div className=' bg-white my-auto m-1 p-2  rounded-3xl' onClick={handleRemove}><RxCross1 size={32} color='red'/></div>
        </div>
    );
}