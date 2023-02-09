import React from 'react';
import Image from 'next/image';

const LandingFlow = () => {
  return (
    <section>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col items-center lg:items-start lg:flex-row">
          <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 pl-12">
            <p className="text-primary-500 uppercase tracking-loose max-lg:text-center">
              initialize your budget buddy
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 dark:text-white max-lg:text-center">
              How to get started?
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4 max-lg:text-center">
              Here’s your guide how to use Budget Buddy. It’s easy as 1-2-3.
            </p>
          </div>
          <div className="ml-0 md:mx-6 lg:w-2/3">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border right-1/2 border-primary-700 rounded-[1%]"></div>
                <div className="border-2-2 absolute h-full border left-1/2 border-primary-700 rounded-[1%]"></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-primary-500">Step 1</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl dark:text-white">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-500 dark:text-gray-300 text-opacity-100">
                      All you need to sign up is a Google account.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-primary-500">Step 2</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl dark:text-white">
                      Configuration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-500 dark:text-gray-300 text-opacity-100">
                      On your first login, you will be asked to configure your
                      own budget buddy. You can customize everything or stick to
                      our predefined settings.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-primary-500">Step 3</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl dark:text-white">
                      Your Dashboard
                    </h4>
                    {/* TODO: Add fancy effect here */}
                    <p className="text-sm md:text-base leading-snug text-gray-500 dark:text-gray-300 text-opacity-100">
                      You can now start using your budget buddy. You can add
                      your expenses and incomes and see how your budget is doing
                      on the /dashboard/.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-primary-500">Optional</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left dark:text-white">
                      Add a person
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-500 dark:text-gray-300 text-opacity-100">
                      You can use Budget Buddy with your friends and family. All
                      you need to do is invite them to your budget and you can
                      start sharing your expenses and incomes.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                width={300}
                height={300}
                alt="Landing Flow"
                className="mx-auto -mt-36 md:-mt-36"
                src="/images/coin-rocket.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFlow;
