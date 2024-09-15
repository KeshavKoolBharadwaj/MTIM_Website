import { BgInternal, Logo } from "./Assets";
import Navbar from "./Navbar";

const RegistrationPage = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Add the Navbar */}
      <Navbar Logo={Logo} />

      {/* Center the content box on the screen */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center max-w-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <h1 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-red-600">Register here!</h1>
          <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
            Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYHJzTdPVJ-vsU7hW1Y8WrG0zAkX9sDJUD4VfHRa_mDaAdow/viewform" className="text-blue-500 underline hover:text-blue-700">Click Here</a> to fill up the form, we will contact you soon. Make sure you are logged in to a Gmail account.
          </p>
          <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
            For further queries contact:
          </p>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>Srijonee Chowdhury: +91-9874083087</li>
            <li>Archisman Manna: +91-8420304488</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
