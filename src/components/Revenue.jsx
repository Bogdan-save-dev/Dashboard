import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsCurrencyDollar } from 'react-icons/bs'

export const Revenue = () => {
  return (
    <div>
      {' '}
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white
                  dark:text-gray-200
                  dark:bg-secondary-dark-bg
                  m-3 p-4
                  rounded-2xl md:w-780
                "
        >
          <div className="flex justify-between ">
            <div className="mr-20">
              <p className="font-semibold text-xl">Revenue Updates</p>
            </div>
            <div className="flex items-center  gap-4">
              <p
                className="flex items-center gap-2
              text-gray-600 hover:drop-shadow-xl"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expence</span>
              </p>

              <p
                className="flex items-center gap-2
              text-green-600 hover:drop-shadow-xl"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-2 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$50000</span>
                  <span
                    className="p-1.5 cursor-pointer rounded-full
                text-white bg-green-400 ml-3 text-xs
                hover:drop-shadow-xl"
                  >
                    26%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$20000</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
