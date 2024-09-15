import { BgInternal, srijonee, archisman, Logo } from "./Assets";
import Navbar from "./Navbar.jsx";

const EventsPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center center" // Center the image
      }}
    >
      <Navbar Logo={Logo} />
      <br /><br />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center mx-4">
          Contact us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* First Image and Caption */}
          <div className="bg-black bg-opacity-60 rounded-lg p-4 max-w-sm text-center">
            <img src={srijonee} alt="Srijonee Chowdhury" className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Srijonee Chowdhury</h2>
            <p className="text-gray-300">Secretary <br />Contact no: +91-9874083087<br />Mail id: xts@sxccal.edu</p>
          </div>
          {/* Second Image and Caption */}
          <div className="bg-black bg-opacity-60 rounded-lg p-4 max-w-sm text-center">
            <img src={archisman} alt="Archisman Manna" className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Archisman Manna</h2>
            <p className="text-gray-300">Assistant Secretary <br />Contact no: +91-8420304488<br />Mail id: xts@sxccal.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
