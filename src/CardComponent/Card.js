import React from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Card(props) {
    const handleRemove = () => {
        props.removeCard();
    };

    return (
        <div className=''>
            <div className='bg-white p-5 rounded-lg shadow-md col-span-3 md:col-span-1'>
                <div onClick={handleRemove}><RxCross1 size={20} color='red' /></div>
                <p className='text-lg font-extrabold h-20'>{props.title.length <= 40 ? props.title : props.title.slice(0, 40) + '...'}</p>
                <p className=' font-serif h-16'>{props.body.length <= 40 ? props.body : props.body.slice(0, 40) + '...'}</p>
                <p className='text text-slate-400 font-bold'>{props.date}</p>
                <img src={props.img} alt='img' className='mt-3' />
            </div>
        </div>
    );
}