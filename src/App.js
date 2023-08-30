import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioMWAC = lazy(() => import('./pages/PortfolioMWAC'));
const PortfolioBodyVibes = lazy(() => import('./pages/PortfolioBodyVibes'));
const PortfolioKarmaTequila = lazy(() => import('./pages/PortfolioKarmaTequila'));
const PortfolioLindaCollins = lazy(() => import('./pages/PortfolioLindaCollins'));
const PortfolioMindBodySpot = lazy(() => import('./pages/PortfolioMindBodySpot'));
const PortfolioBravo = lazy(() => import('./pages/PortfolioBravo'));
const PortfolioJenP = lazy(() => import('./pages/PortfolioJenP'));
const PortfolioAMGLounges = lazy(() => import('./pages/PortfolioAMGLounges'));
const PortfolioElliotMintz = lazy(() => import('./pages/PortfolioElliotMintz'));
const PortfolioSteveInnovates = lazy(() => import('./pages/PortfolioSteveInnovates'));
// const ProcessAndPromise = lazy(() => import('./pages/ProcessAndPromise'));
const Services = lazy(() => import('./pages/Services'));
// const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => (
    <Router>
      <Suspense fallback={
        <div className="h-screen w-screen flex text-primary text-7xl">
          <div className="m-auto animate-spin">.</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/mwac" element={<PortfolioMWAC />} />
          <Route path="/portfolio/body-vibes" element={<PortfolioBodyVibes />} />
          <Route path="/portfolio/karma-tequila" element={<PortfolioKarmaTequila />} />
          <Route path="/portfolio/linda-collins" element={<PortfolioLindaCollins />} />
          <Route path="/portfolio/mind-body-spot" element={<PortfolioMindBodySpot />} />
          <Route path="/portfolio/bravo" element={<PortfolioBravo />} />
          <Route path="/portfolio/jen-p" element={<PortfolioJenP />} />
          <Route path="/portfolio/amg-lounges" element={<PortfolioAMGLounges />} />
          <Route path="/portfolio/elliot-mintz" element={<PortfolioElliotMintz />} />
          <Route path="/portfolio/steve-innovates" element={<PortfolioSteveInnovates />} />
          {/*<Route path="/process-promise" element={<ProcessAndPromise />} />*/}
          <Route path="/services" element={<Services />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
