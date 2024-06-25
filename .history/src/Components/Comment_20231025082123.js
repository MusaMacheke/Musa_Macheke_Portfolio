import React from 'react';
import Typewriter from  'typewriter-effect';

const Comment = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            'Siphamandla Whati
            Founder of Ekhaya#36 ',
            'Daniel Mabunda'
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