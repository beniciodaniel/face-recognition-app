import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your picture! Give it a try!'}
      </p>
      <div className='center'>
        <div className='center pa4 br3 shadow-5'>
          <input className='f4 w-70 pa2 center' type="text"/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;