import React from 'react';
import Typewriter from  'typewriter-effect';

const Comment = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Siphamandla Whati', 'FrontEnd Developer', 'React Native Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Comment