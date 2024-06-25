import React from 'react';
import Typewriter from  'typewriter-effect';

const Comment = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            'Siphamandla Whati'
            'Founder of Ekhaya#36 Tournament'
            'My organistion is now known by everyone thanks to Musa, he elevated our organisation into new heights.',
            'Daniel Mabunda'
            ''
          ],
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