const About = () => {
  const whatsappNumber = "94758125068";
  const message = encodeURIComponent("Hello! I would like to get started with your design services.");

  return (
    <div className="max-w-xl mx-4 sm:mx-auto p-3 sm:p-4 my-5 bg-gray-100 rounded-lg shadow-md">

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">About Us</h2>

      <h2 className="text-xl font-semibold text-gray-800 text-left mb-4">Services We Offer:</h2>

      <ul className="list-disc list-inside text-left text-gray-700 mb-4">
        <li>Class Handbill Design</li>
        <li>Cover Page Design</li>
        <li>Social Media Post Design</li>
      </ul>

      <p className="text-gray-700 mb-4 text-center">
        Fast delivery | High quality | Custom design
      </p>

      <ul className="list-none text-gray-700 space-y-1 text-left">
        <li>✔ Modern & Clean Layouts</li>
        <li>✔ Ready-to-print and post formats (JPG, PNG, PDF)</li>
        <li>✔ Designs tailored to your needs</li>
      </ul>

      <p className="mt-6 font-semibold text-red-500 text-lg mb-4 text-center">
        Message now to get started!
      </p>

    </div>
  );
};

export default About;
