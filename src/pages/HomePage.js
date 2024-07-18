import React from 'react';
import GlobalMarketCapChart from '../components/GlobalMarketCapChart';
import PublicCompaniesHoldings from '../components/PublicCompaniesHoldings';
import './HomePage.css'; // Make sure this file does not contain any references to react-icons or react-reveal
import SideGlobal from '../components/SideGlobal';
import StepSection from '../components/StepSection';
import FaqSection from '../components/Faq';


const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <SideGlobal className="side-global text" />
        <GlobalMarketCapChart />
      </div>
      <StepSection />
      <div className="homepage">
        <PublicCompaniesHoldings />
      </div>
      <FaqSection />
     
    </div>
  );
};

export default HomePage;
