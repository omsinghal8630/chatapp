import React, { useState } from 'react'
import useConversation from '../components/zustand/useConversation.js'
import axios from "axios";

const useSendMessage = () =>
{
        const [loading, setLoading] = useState(false)
    const { messages, setMessage, selectedConversation } = useConversation();

    const [error,setError] = useState(null) // new error
    const sendMessage = async (message) =>
    {
        /// coding 
        if (!selectedConversation)
        {
            console.log("No conversation selected");
            setError("No conversation selected");
            return;
        }
        //





        setLoading(true);
        setError(null); // Reset error before sending Message
        let isMounted = true; /// to prevent memeory leaks
        
        try
        {
            const res = await axios.post(
                `/api/message/send/${selectedConversation._id}`,
                { message }
            );
            if (isMounted)
            {  ///
                setMessage([...messages, res.data.newMessage]) //
                setLoading(false);
            }
        } catch (error)
        {
            if (isMounted) { 
                console.log("Error in send messages", error);
                setError("Failed to send message") //
            setLoading(false);
        }
        }
        return () =>    //
        {            //
            isMounted = false;  //  
        };///
        
    };
    return {
        loading,
        error,    // Return error
        sendMessage
  }
    
}

export default useSendMessage
