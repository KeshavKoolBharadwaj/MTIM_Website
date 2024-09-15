import { BgInternal,Logo } from "./Assets";
import Navbar from "./Navbar";

const SponsorUsPage = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] bg-cover bg-center flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
      }}
    >
       <Navbar Logo={Logo} />
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center max-w-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-red-600">Sponsor Us</h1>
        <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
          Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSePSIl5fMcRGTntBUzwm7teADQ_l58eYKNbyrSDfJMCdisKZA/viewform?usp=sf_link" className="text-blue-500 underline hover:text-blue-700">Click Here</a> to fill up the form, we will contact you soon. Make sure you are logged in to a Gmail account.
        </p>
        <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
          For further queries contact:
        </p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>Srijit Kumar Mondal: +91 90734 54008</li>
          <li>Mannu Das: +91 63062 13873</li>
        </ul>
      </div>
    </div>
  );
};

export default SponsorUsPage;
