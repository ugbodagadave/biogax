import { Navbar } from './components/Navbar';

import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Services } from './components/Services';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
    </div>
  );
}

export default App;
