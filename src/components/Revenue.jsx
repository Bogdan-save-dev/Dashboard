import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

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
        </div>
      </div>
    </div>
  )
}
