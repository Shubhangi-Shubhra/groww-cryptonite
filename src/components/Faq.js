import classNames from 'classnames';
import React, { useState } from 'react';

import faq from '../assets/faq.png';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const iconClass = classNames({
    'transition-all duration-300 transform': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mb-3 border-b border-lightgray pb-3'>
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={toggleAccordion}>
        {title}
        <div className={iconClass}>▲</div>
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="container mx-auto py-10 lg:py-20 text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <img src={faq} alt="FAQ" className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              <FaqItem open={true} title="Why should I choose Cryptonite?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="How secure is Cryptonite?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="Do I have to buy a whole Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
              <FaqItem open={false} title="How do I actually buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
