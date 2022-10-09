import React from 'react';
import Lottie from "lottie-react";
import reader from '../assets/reader.json'

const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>

            <div className='relative lg:w-1/2'>
                <div className='w-full lg:w-4/5 lg:ml-auto h-96 sm:h-96'>
                <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;