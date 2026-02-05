import { Navbar } from './components/Navbar';

import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Services } from './components/Services';
import { ImplementationProcess } from './components/ImplementationProcess';
import { Benefits } from './components/Benefits';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <ImplementationProcess />
      <Benefits />
      <Projects />
    </div>
  );
}

export default App;
