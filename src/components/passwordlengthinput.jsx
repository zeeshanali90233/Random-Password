import React from 'react';
import {useDispatch } from 'react-redux';
import { SetPassLength } from '../redux/actions';

const Passwordlengthinput = () => {
  const dispatch=useDispatch();
    
    const handleLengthChange=(e)=>{
        dispatch(SetPassLength(e.target.value));
    }
  return (
    <div className="input-group input-group-lg mt-2">
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Enter Password Length"
            onChange={handleLengthChange}
          ></input>
        </div>
  )
}

export default Passwordlengthinput;