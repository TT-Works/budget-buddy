import LandingFeatures from './LandingFeatures';

import LandingFlow from './LandingFlow';
import LandingFooter from './LandingFooter';
import LandingHero from './LandingHero';
import LandingNav from './LandingNav';
import React from 'react';

export default function LandingPage() {
  return (
    <main>
      <LandingNav />
      <LandingHero />
      <LandingFlow />
      <LandingFeatures />
      <LandingFooter />
    </main>
  );
}
