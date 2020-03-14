import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm =  ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
            {'Face Recognition App. Insert your picture and see the magic as it happens.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 bg-blue'>
                     <input type='text' className='f4 pa2 w-700 center' onChange={onInputChange}/>
                     <button type='' className='w-300 grow f3 link ph3 pv2 dib white bg-light-purple'
                     onClick={onButtonSubmit}
                     >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;