import React from 'react'
import Button from '../UI/Button'

const Banner = () => {
  return (
    <>
      <section className="bg-[#f4f5f7] w-full">
        <div className="max-w-[1320px] mx-auto py-20 md:py-28 px-4">

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">

            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/Home-banner.png"
                alt="banner"
                className="w-[420px] sm:w-[480px] md:w-[540px] lg:w-[600px] h-auto object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
              <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium leading-tight text-primary">
                Awesome Product Collection <br /> In 2022
              </h1>

              <div className="mt-6">
                <Button title={"Shop Now"} path={"/shop"} />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Banner
