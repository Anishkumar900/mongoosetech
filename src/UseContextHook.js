import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import App from './App';
import axios from 'axios';

export const context = createContext();

export default function UseContextHook() {
    const [data,setdata]=useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((data)=>{
            setdata(data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
      {data ? <context.Provider value={{ data: data,setdata:setdata }} >
        <App />
      </context.Provider> : <p>Loading...</p>}

    </div>
  )
}
