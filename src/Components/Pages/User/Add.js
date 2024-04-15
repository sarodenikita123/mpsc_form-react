import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    const { register, handleSubmit } = useForm();
    const navi = useNavigate();

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/user/show')
    }
    return (
        <>
            <div className='container border border-4 w-75'>
                <center><u><b><h3>MPSC form:</h3></b></u></center>
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
                   
                    
                    <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' />
                </form>

            </div>
        </>
    )
}

export default Add