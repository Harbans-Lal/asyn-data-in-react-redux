import React, { useState } from 'react'
import '../../src/App.css'
import { useDispatch } from 'react-redux';
import { fetchPostAction } from '../reducer/action/postAction';

export const Header = () => {
  const dispatch  = useDispatch();
    const[search, setSearch] = useState("");
    function handleClick(e){
        dispatch(fetchPostAction(search));
        setSearch("");
    }

  return (
    <div className='header'>
        <h2>React redux project</h2>
        <p>This is simple project that fect the data from the api</p>
        <input type='text' onChange={(e)=> setSearch(e.target.value)} placeholder='search post' value={search} />
        <button onClick={handleClick}>Search</button>
    </div>
  )
}
