import React from 'react';
import Typewriter from  'typewriter-effect';

const Comment = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            ''Siphamandla Whati'
            'Founder of Ekhaya#36 Tournament'
            'My organistion is now known by everyone thanks to Musa, he elevated our organisation into new heights.'',
            'Daniel Mabunda'
            'Senior developer fintech developer at Zengo-X'
            'Musa is a skilled junior fintech developer who took our company to great success, always completes his tasks at work, he does what our clients requires and he is also a skilled junior fullstack developer. Our clients are satisfied with our services all thanks to Musa and other group of developers.'
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