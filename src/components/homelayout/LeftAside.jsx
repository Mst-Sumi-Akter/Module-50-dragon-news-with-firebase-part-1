import React from 'react';
import Catagories from '../Catagories';
import { Suspense } from 'react';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback = {<span className="loading loading-ring loading-xl"></span>}>
                <Catagories></Catagories>
            </Suspense>
            
        </div>
    );
};

export default LeftAside;