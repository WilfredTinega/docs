import React, { useEffect, useRef, useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = () => {
    const [response, setResponse] = useState([]);
    const inputRef = useRef([]);

    const geminiai = async (prompt) => {         
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI);
        const model = genAI.getGenerativeModel({   model: "gemini-1.5-pro",
            model: "gemini-2.0-flash-thinking-exp-01-21"
          });
        
        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        setResponse(
            result.response.text()
        )

    }

    useEffect(() => {
        geminiai("what is javascript")

    },[])
  return (
    <div>
        <div className='m-2 flex itmes-center justify-center gap-2'>
        <textarea
            className='border rounded-xl px-3 py-1 resize-none overflow-hidden'
            ref={inputRef}
            type="text" required  placeholder='What is in you mind...'/>
        <button
            className='bg-gray-500 p-1 rounded-full'
        onClick={()=>geminiai(inputRef.current.value)}>search</button>
        </div>
        
        <div>
            {
                response
            }
        </div>
        
    </div>
  )
}

export default Gemini
