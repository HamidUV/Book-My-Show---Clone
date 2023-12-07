import React from 'react';
import { imageUrl } from '../../constants/constants';
const Cast = (props)=>{
    return <div>
        <div className='flex flex-col items-center'>
            <div className='w-32 h-32'>
                <img src={`${imageUrl+props.image}`} alt="cast&crew" className='w-full h-full rounded-full object-center' />
            </div>
            <h1 className='text-xl text-gray-800'>{props.castName}</h1>
            <h5 className='text-sm text-gray-500'>{props.role}</h5>
        </div>
    </div>
}

export default Cast;