import React from 'react';

export default function LandingFeatures() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <section className="mx-auto container  pt-16">
        <div className="px-4 lg:px-0">
          <div role="contentinfo" className="flex items-center flex-col px-4">
            <p className="focus:outline-none uppercase text-sm text-center text-gray-500 leading-none">
              our features
            </p>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              We provide
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-primary-700 dark:bg-primary-900 py-12 mt-12">
        <div
          tabIndex={0}
          aria-label="group of cards"
          className="focus:outline-none px-4 lg:px-0">
          <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
            <div
              aria-label="card 1"
              className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10 mx-auto">
              <div className=" flex flex-shrink-0 mr-5 text-white">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg1.svg"
                  alt="drawer"
                />
              </div>
              <div className="md:w-9/12 lg:w-9/12">
                <h2 className="focus:outline-none text-lg font-semibold leading-5 text-white">
                  Ready to use budget template
                </h2>
                <p className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">
                  We have a pre-made budget template that makes it easy for you
                  to get started right away. The template includes categories
                  for essential expenses, so you don&apos;t have to worry about
                  missing anything important.
                </p>
              </div>
            </div>
            <div
              aria-label="card 2"
              className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
              <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg2.svg"
                  alt="check"
                />
              </div>
              <div className="md:w-9/12 lg:w-9/12 ">
                <h2 className="focus:outline-none text-lg font-semibold leading-5 text-white">
                  Insights
                </h2>
                <p className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">
                  Get a modern dashboard with helpful information about your
                  budget. The dashboard provides an at-a-glance view of your
                  spending, so you can quickly see where your money is going.
                </p>
              </div>
            </div>
            <div
              aria-label="card 3"
              className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20">
              <div className=" flex flex-shrink-0 mr-5 text-white">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg"
                  alt="html-tag"
                />
              </div>
              <div className="md:w-9/12 lg:w-9/12 ">
                <h2 className="focus:outline-none text-lg font-semibold leading-5 text-white">
                  Reporting
                </h2>
                <p className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">
                  We can send you a Google Sheets file monthly/yearly that
                  provides a detailed report of your budget. This makes it easy
                  to review your spending over time.
                </p>
              </div>
            </div>
            <div
              aria-label="card 4"
              className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20">
              <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg4.svg"
                  alt="display"
                />
              </div>
              <div className="md:w-9/12 lg:w-9/12 ">
                <h2 className="focus:outline-none text-lg font-semibold leading-5 text-white">
                  Shared Budgets
                </h2>
                <p className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2">
                  You can invite friends or family members to help you keep
                  track of shared budgets. This is perfect for couples,
                  roommates, or families who want to work together to manage
                  their finances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
