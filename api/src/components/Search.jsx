import React, { useRef } from 'react'
import { toast } from 'react-toastify';

const Search = () => {
    const searchRef = useRef(null);

    const searchEverywhere = () => {
        const searchValue = searchRef.current.value.trim();

        if(!searchValue){
            toast.error("Please enter search term", {
                position: "top-right",
            });
        }else{
            toast.success(`Searching for: ${searchValue}`,{
                position: 'top-right'
            })
        }
    }
  return (
    <div className='m-2'>
        <input
        className='border'
        ref={searchRef}
        required
        type="text" />
        <button className='cursor-pointer' onClick={searchEverywhere}>search</button>
    </div>
  )
}

export default Search
