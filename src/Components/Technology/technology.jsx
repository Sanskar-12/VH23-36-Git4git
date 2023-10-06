import React from 'react';

const Technology = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-gradient-to-r from-[#1E3A8A] via-[#0442df89] to-[#1f5efd89] ... text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Welcome to Our Technology Page</h1>
      </header>
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#0442df89] to-[#1f5efd89] ... text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Explore the Power of Smart Contracts on Blockchain
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the latest technologies that drive decentralized applications and smart contract development.
          </p>
          <a
            href="https://www.geeksforgeeks.org/smart-contracts-in-blockchain/"
            className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:text-blue-800 font-semibold py-2 px-6 rounded-full inline-block transition duration-300"
          >
            Explore Technologies
          </a>
        </div>
      </section>

      <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold mt-10">Smart Contracts on Blockchain</h2>
      <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

      <div className="flex flex-col justify-between w-full items-center">
        <h3 className="font-mullish text-[28px] leading-20 font-bold max-w-[500px] ">
        Benefits Of Smart Contracts
        </h3>
        <ul className="space-y-2">
          <li className="font-mullish flex items-center space-x-2">
            <span>Trust and Transparency</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <span>Automation and Efficiency</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <span>Cost Savings</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <span>Accuracy and Consistency</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <span>Speed and Efficiency in Dispute Resolution</span>
          </li>
          <li className="font-mullish flex items-center space-x-2">
            <span>Traceability and Auditability</span>
          </li>
        </ul>

        

          <div className="flex items-center cursor-pointer group leading-2 mt-11">
            <a
              href="#"
              className="font-mullish font-bold text-lightBlue500 
                        group-hover:text-grayBlue transition-all duration-200"
            >
              Know More
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default Technology;
