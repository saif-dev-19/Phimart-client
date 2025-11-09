import React, { useEffect, useState } from 'react';

const DiscountTime = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 *24 *25;
    const getTimeRemaining = () => {
        const now = new Date().getTime();
        const diffrence = (targetDate - now);

        return {
            days : Math.floor(diffrence / (1000* 60 * 60 * 24)),
            hours : Math.floor((diffrence / (1000 *60 * 60)) % 24),
            minutes : Math.floor((diffrence / (1000 *60 )) % 60),
            seconds : Math.floor((diffrence / (1000)) % 60),
        }
    }

    const [timeLeft, setTimerLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimerLeft (getTimeRemaining());
        },1000);

        return () => clearInterval(timer);
    },[]);
    return (

            <div className='flex justify-center space-x-8 text-2xl font-semibold mb-5'>
                        <div>
                            <span className='text-3xl text-white font-bold'>{timeLeft.days}</span>
                            <br />
                            Days
                        </div>
                        <div>
                            <span className='text-3xl text-white font-bold '>{timeLeft.hours}</span>
                            <br />
                            Hrs
                        </div>
                        <div>
                            <span className='text-3xl text-white font-bold'>{timeLeft.minutes}</span>
                            <br />
                            Min
                        </div>
                        <div>
                            <span className='text-3xl text-white font-bold '>{timeLeft.seconds}</span>
                            <br />
                            Sec
                        </div>   
                </div>
    );
};

export default DiscountTime;