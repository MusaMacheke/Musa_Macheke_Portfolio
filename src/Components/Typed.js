import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <section className="TypeEffect" aria-live="polite" aria-label="Typewriter effect showing different developer roles">
      <Typewriter
        options={{
          strings: [
            'Junior Full-Stack Developer',
            'Junior Developer',
            'Intern Developer',
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
      <noscript>
        <p>web developer, frontend developer, mobile developer, backend developer, software developer, freelancer</p>
      </noscript>
    </section>
  );
}

export default Typed;
