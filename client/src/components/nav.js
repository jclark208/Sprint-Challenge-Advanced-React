import React,{useState} from 'react';
import {useAxios} from '../hooks/useAxios';

const Nav = () => {
    const [data] = useAxios('http://localhost:5000/api/players');


    return(
        <div>
            <h2>There are <span>{data.length} </span> players on this list.</h2>
        </div>
    )
}


export default Nav;