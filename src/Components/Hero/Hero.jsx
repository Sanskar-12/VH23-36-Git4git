// src/components/MyComponent.js
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';


function Hero() {
  return (
   <>
   <section className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 ... py-20 w-full min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to Your Document Verification Platform
        </h1>
        <p className="text-lg text-white mb-8">
          Securely create and verify documents with blockchain technology.
        </p>
        <div className="space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full">
            Create
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-full">
            Verify
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center mt-9">
        <img src="./src/Assets/images/leftheroimg.png" alt="NoleftsectionImg"
        class="w-[500px]" />
        <img src="./src/Assets/images/rightheroimg.png" alt="" 
        class="w-[500px]"/>
      </div>
    </section>
   </>
  );
}

export default Hero;
