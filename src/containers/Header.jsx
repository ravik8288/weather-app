import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import TextField from '../components/TextFIeld/TextField';
import actions from '../store/action/SgaActions';

function Header() {
    const [city, setCity] = useState('Mumbai');
    const dispatch = useDispatch();
    const handleChange = (e) => {
      setCity(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: actions.FETCH_LETLONG, data: { city } });
    };
    useEffect(() => {
      dispatch({ type: actions.FETCH_LETLONG, data: { city } });
    }, [dispatch]);
  return (
    <div className='bg-slate-300 p-4'>
      <form onSubmit={handleSubmit}>
        <TextField value={city} onChange={handleChange} />
        <Button label="submit" />
      </form>
    </div>
  );
}

export default Header