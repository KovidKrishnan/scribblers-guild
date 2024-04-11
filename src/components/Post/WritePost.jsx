import React, { useState } from 'react';
import './write-post.css';

const WritePost = () => {
  const [bold, setBold] =  useState(false)
  const [italic, setItalic] = useState(false)
  return (
    <div className='write-post-container'>
      <input
        className='write-post-title'
        placeholder='a good title will make a good story....'
        name='title'
        id='title'
        type='text'
      />
      <div className='post-content'>
        <textarea
          name='post-content'
          id='post-content'
          placeholder='start writing......'
          className='textarea-content'
        ></textarea>
       
          <span onClick={() => setBold(!bold)} className='bold-button' style={bold?{backgroundColor: 'rgba(172, 125, 136, 0.12)'}:{}}><b>B</b></span>
          <span  onClick={() => setItalic(!italic)} style={italic?{backgroundColor: 'rgba(172, 125, 136, 0.12)'}:{ color: '#DEB6AB' }} className='italic-button'><i>i</i></span>
      </div>
      <button className='post-the-article'>post</button>
    </div>
  );
};

export default WritePost;
