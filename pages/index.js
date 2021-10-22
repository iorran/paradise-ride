import React from 'react';

export default function Home() {

  return (   
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto"> 
            <div className="flex">
              <div className="flex-none w-48 relative">
                <img src="http://cdn.weasy.io/users/xiaomi/catalog/scooter_1s_novafoto_1.png" alt="" width={50} height={50} className="absolute inset-0 w-full h-full object-cover" />
              </div> 
              <div className="flex flex-col p-8">
                <p className="text-lg text-gray-800">
                  Paradise Ride é uma farsa!
                </p> 
                <p className="text-sm text-gray-500">
                  Só queria uma trotinete elétrica :(
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}
