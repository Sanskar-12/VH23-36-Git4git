// import Image01 form "/src/Assets/images/blockchain.png";
import Image02 from "/src/Assets/images/document01.png";
import Image03 from "/src/Assets/images/document02.png";
import Image01 from "/src/Assets/images/document03.png";

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
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-10 text-md ">
              Create
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 text-md">
              Verify
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-9">
          <img
            src={Image03}
            alt="NoleftsectionImg"
            className="w-[600px]"
          />
           <img
            src={Image01}
            alt="NoleftsectionImg"
            className="w-[450px]"
          />
           <img
            src={Image02}
            alt="NoleftsectionImg"
            className="w-[600px]"
          />
          
        </div>
      </section>
    </>
  );
}

export default Hero;
