import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Update() {
    const { register, handleSubmit, setValue } = useForm();
    const { userId } = useParams();
    const navi = useNavigate();

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('name', result.data.name);
        setValue('email', result.data.email);
        setValue('number', result.data.number);
        setValue('dob', result.data.dob);
        setValue('address', result.data.address);
        setValue('graduate', result.data.graduate);
        
        
    }

    function saveData(data) {
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/user/show')
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className='container'>
                <center><u><b><h1>Update form</h1></b></u></center>
                <form onSubmit={handleSubmit(saveData)} className='m-auto'>
                <label htmlFor='n'>Student Name</label>
                    <input type='text' id='n' className='form-control'
                        {...register('name')} />
                    <br /><br />
                    <label htmlFor='e'>Email</label>
                    <input type='text' id='e' className='form-control'
                        {...register('email')} />
                    <br /><br />
                    <label htmlFor='no'>Number</label>
                    <input type='number' id='no' className='form-control'
                        {...register('number')} />
                    <br /><br />
                    <label htmlFor='d'>DOB</label>
                    <input type='date' id='d' className='form-control'
                        {...register('dob')} />
                    <br /><br />
                    <label htmlFor='a'>Address</label>
                    <input type='text' id='a' className='form-control'
                        {...register('address')} />
                    <br /><br />
                    <label htmlFor='g'>Graduate</label>
                    <input type='text' id='g' className='form-control'
                        {...register('graduate')} />
                    <br /><br />
                    <input type='submit' value='update' className='btn btn-outline-success col-6 btn-lg' />
                    <NavLink to='/user/show'><input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' /></NavLink>
                </form>
            </div>
        </>
    )
}

export default Update