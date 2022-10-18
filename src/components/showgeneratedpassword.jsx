import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Showgeneratedpassword = () => {
    const passwords=useSelector(state=>state.passwords);
  return (
    <>
    {passwords.map((password,index)=>{
        return(
            <div key={index} className="each-password mt-2">
                <p>{password}</p>
            </div>
        );
    })}
    </>
  )
}

export default Showgeneratedpassword;