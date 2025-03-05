import React, { useEffect } from 'react'
import OpenAI from "openai";

const Grok = () => {
    const grokLatest = async () => {
        const client = new OpenAI({
            apiKey: import.meta.env.VITE_XAI_API_KEY,
            baseURL: "https://api.x.ai/v1",
          });
          
          const completion = await client.chat.completions.create({
            model: "grok-2-latest"
          });

          console.log(completion)
    }
    
    useEffect(() => {
        grokLatest()
    },[])

  return (
    <div>
        Grok
      
    </div>
  )
}

export default Grok
