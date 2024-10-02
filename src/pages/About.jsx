import professionalPhoto from "../assets/profesional-photo.jpg"
import unm from "../assets/unm.png" // Ganti dengan nama dan path gambar Anda
import bsi from "../assets/bsi.png" // Ganti dengan nama dan path gambar Anda

const About = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Column - Image Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={professionalPhoto} // Gambar diambil dari folder src/assets
            alt="Creative Freedom"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Column - Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Me.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            lorem nec libero dapibus consectetur eget vitae ligula.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center py-3 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center py-3 px-6 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* New Section for Icons and Text */}
      <div className="max-w-screen-xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Education
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">Lorem Ipsum.</p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* First Icon and Text */}
          <div className="flex items-center">
            <img
              src={unm} // Ganti dengan path gambar Anda
              alt="UNM"
              className="w-12 h-12" // Ukuran ikon penuh
            />
            <div className="ml-4">
              <p className="text-gray-700 font-medium text-lg">
                Universitas Nusa Mandiri
              </p>
              <p className="text-gray-500">
                Undergraduate, Information System Grade 3,72
              </p>
            </div>
          </div>

          {/* Second Icon and Text */}
          <div className="flex items-center">
            <img
              src={bsi} // Ganti dengan path gambar Anda
              alt="BSI"
              className="w-12 h-12" // Ukuran ikon penuh
            />
            <div className="ml-4">
              <p className="text-gray-700 font-medium text-lg">
                Universitas BSI
              </p>
              <p className="text-gray-500">
                High School Diploma, Information Technology, Grade 3,68
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
