import React from 'react';
import Banner from '../Banner';

function LoseBanner({ answer }) {
  return (
    <div>
      <Banner status="sad">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </Banner>
    </div>
  );
}

export default LoseBanner;
