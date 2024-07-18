import React from 'react';

import signupImage from '../assets/signup.png';
import walletImage from '../assets/okay.png';
import okayImage from '../assets/wallet.png';
import arrow from '../assets/arrow.svg';

export default function StepSection() {
  return (
    <section className="px-6 text-base"> {/* Increased base text size */}
      <div className='rounded-3xl bg-black py-20'>
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-xl mb-6 leading-normal"> {/* Increased heading size */}
            Get started 
          </h2>
          <div className="md:flex justify-center gap-20">
            <div className="text-center relative px-4">
              <div className='relative'>
                <img src={signupImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
              </div>
              <h3 className="text-lg font-bold mb-4"> {/* Increased heading size */}
                Sign Up
              </h3>
              <p className="text-gray-400 text-lg max-w-sm"> {/* Increased paragraph size */}
               Look at the market cap,1h,24hr,7d values as well as the news
              </p>
            </div>
            <div className="text-center relative px-4">
              <div className='relative'>
                <img src={walletImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
              </div>
              <h3 className="text-lg font-bold mb-4"> {/* Increased heading size */}
                Compare
              </h3>
              <p className="text-gray-400 text-lg max-w-sm"> {/* Increased paragraph size */}
              Look at the prices of Bitcoin or Ethereum, then securely decide which one to buy
              </p>
            </div>
            <div className="text-center relative px-4">
              <img src={okayImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
              <h3 className="text-lg font-bold mb-4"> {/* Increased heading size */}
                Buy Crypto
              </h3>
              <p className="text-gray-400 text-lg max-w-sm"> {/* Increased paragraph size */}
                Invest in crypto and be rich! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
