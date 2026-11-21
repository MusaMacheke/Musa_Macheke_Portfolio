import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <section className="TypeEffect" aria-live="polite" aria-label="Typewriter effect showing different developer roles">
      <Typewriter
        options={{
          strings: [
            'Software Developer',
            'Mobile & Full-Stack Developer',
            'Oracle Java SE 17 Certified',
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
      <noscript>
        <p>software developer, mobile developer, full-stack developer, Java developer</p>
      </noscript>
    </section>
  );
}

export default Typed;
