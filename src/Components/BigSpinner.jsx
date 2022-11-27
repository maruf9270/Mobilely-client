import React from 'react';

const BigSpinner = () => {
    return (
        <div>
            <div className="h-screen w-full">
                <div className="flex justify-center items-center h-full w-full">
                <div className='w-20 h-20 border-8 border-dotted rounded-full animate-spin mt-5 border-primary'></div>
                {/* <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/> */}
                </div>
            </div>
        </div>
    );
};

export default BigSpinner;