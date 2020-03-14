import React from 'react';

const FaceRecognition =  ({ imageUrl }) => {
    return (
       <div className='center ma'>
            <div className='absolute at2'></div>
             <img alt='' src={imageUrl} width='250px' height='auto' />
        
       </div>
    ); 
}

export default FaceRecognition;