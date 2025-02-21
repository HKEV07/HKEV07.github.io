import { BrowserRouter } from "react-router-dom";

import { About, Contact, Educations, Hero, Navbar, Works, StarsCanvas,ScrollProgress } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas />
        <About />
        <Educations />
        <Works /> 
        <Contact />
        <ScrollProgress/>
      </div>
    </BrowserRouter>
  );
}

export default App;
