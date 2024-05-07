import React, { useContext, useState } from 'react';
import Navbar from '../NavFot/Navbar';
import { context } from '../UseContextHook';
import Card from './Card';
import LineCard from './LineCard';
import FeedbackForm from './FeedbackForm';

const date = "Mon, 21 Dec 2020 14:57 GTM";

export default function Main() {
    const [toggle, setToggle] = useState(false);
    const [formshow,setformshow]=useState(false);
    const formhandle=()=>{
        setformshow(!formshow);
        console.log(formshow);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 
    const { data,setdata } = useContext(context);

    const totalPages = Math.ceil(data.length / pageSize);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRemoveCard = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setdata(updatedData);
    };

    
    
    return (
        <div className='flex'>
            <Navbar togglehandle={() => setToggle(!toggle)} toggle={toggle} formhandle={formhandle}/>

            {
                !formshow?<div className='bg bg-slate-100 pl-96 px-10 w-full'>
                {
                    toggle ? (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((data, index) => (
                                    <Card key={index} index={index} title={data.title} body={data.body} date={date} img='https://th.bing.com/th?q=Books+On+Politics&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' removeCard={() => handleRemoveCard(index)} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className='grid grid-rows-3  gap-5'>
                            {
                                data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((data, index) => (
                                    <LineCard key={index} index={index} title={data.title} body={data.body} date={date} img='https://th.bing.com/th?q=Books+On+Politics&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' removeCard={() => handleRemoveCard(index)} />
                                ))
                            }
                        </div>
                    )
                }
                <div className="flex justify-center gap-10 text-xl font-extrabold m-5">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>: <div className='pl-96 w-screen'><FeedbackForm/></div>
            }

            

   
        </div>
    );
}