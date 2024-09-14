import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
import { useState } from 'react';

function Typesend ()
{
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage()
  
  const handleSubmit = async (e) =>
  {
    console.log(e);
    e.preventDefault()
    await sendMessage(message)
    sendMessage("")
  };


  return (
    <form onSubmit={handleSubmit}>
        <div className="flex space-x-1 h-[8vh]  bg-gray-800">
          <div className="w-[70%] mx-4 ">
      <input type="text" placeholder="Type here" value={message} onChange={(e)=>setMessage(e.target.value)} className="border border-gray-700 rounded-xl w-full bg-gray-950 mt-1 px-4 py-3" />
      </div>
      <button>
              <IoSend className="text-3xl" />
      </button>
    </div>
    </form>
  )
}

export default Typesend
