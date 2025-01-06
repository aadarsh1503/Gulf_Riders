import React from "react";
import i1 from "./i1.avif";

const MissionSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <h1 className="text-white text-5xl"> hii</h1>
      <div>
        <h3 className="text-red-500 text-lg text-center font-semibold mb-2">
          Our Mission
        </h3>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our mission is to make work meaningful.
        </h2>
      </div>

      {/* First Section */}
      <div className="max-w-7xl ml-0 lg:-ml-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={i1}
            alt="Mission Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Design Quality
          </h4>
          <p className="text-gray-600 mb-2">
            No ipsum rebum est invidunt eos dolore. Sed sea ipsum vero invidunt
            rebum et erat, tempor consetetur sadipscing no ipsum.
          </p>
          <p className="text-gray-600">
            Ut dolor sed aliquyam at lorem ipsum labore diam eos. Tempor labore
            dolor justo nonumy stet, sanctus amet sed accusam elitr amet eirmod.
            No ea gubergren dolores elitr labore ipsum.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mt-4  lg:-mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 ml-0 lg:ml-32 gap-1 items-center ">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Documentation
          </h4>
          <p className="text-gray-600 mb-2">
            No ipsum rebum est invidunt eos dolore. Sed sea ipsum vero invidunt
            rebum et erat, tempor consetetur sadipscing no ipsum.
          </p>
          <p className="text-gray-600">
            Ut dolor sed aliquyam at lorem ipsum labore diam eos. Tempor labore
            dolor justo nonumy stet, sanctus amet sed accusam elitr amet eirmod.
            No ea gubergren dolores elitr labore ipsum.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/electronic-document-electronic-paper-paperless-office-internet-article-online-documentation-organization-typing-text-file-computer-vector-isolated-concept-metaphor-illustration_335657-2745.jpg?t=st=1736068163~exp=1736071763~hmac=62d259b28f5e1947ae07fd25ebc101b184b72b3cc28c973696ab44230813d092&w=740"
            alt="Mission Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>

            {/* third Section */}
            <div className="max-w-7xl mt-0 lg:-mt-10 ml-0 lg:-ml-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/advanced-customization-concept-illustration_114360-4491.jpg?t=st=1736068541~exp=1736072141~hmac=fa65b56bc2c5e437da92c66689a22178279a826aa88ce4b035ccd6208ae151d0&w=740"
            alt="Mission Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h4 className="text-xl font-semibold mt-0 lg:-mt-10 text-gray-800 mb-4">
          Customization
          </h4>
          <p className="text-gray-600 mb-2">
            No ipsum rebum est invidunt eos dolore. Sed sea ipsum vero invidunt
            rebum et erat, tempor consetetur sadipscing no ipsum.
          </p>
          <p className="text-gray-600">
            Ut dolor sed aliquyam at lorem ipsum labore diam eos. Tempor labore
            dolor justo nonumy stet, sanctus amet sed accusam elitr amet eirmod.
            No ea gubergren dolores elitr labore ipsum.
          </p>
        </div>
      </div>

       {/* fourth Section */}
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-6 ml-0 lg:ml-32 gap-1 items-center ">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Life Time Updates
          </h4>
          <p className="text-gray-600 mb-2">
            No ipsum rebum est invidunt eos dolore. Sed sea ipsum vero invidunt
            rebum et erat, tempor consetetur sadipscing no ipsum.
          </p>
          <p className="text-gray-600">
            Ut dolor sed aliquyam at lorem ipsum labore diam eos. Tempor labore
            dolor justo nonumy stet, sanctus amet sed accusam elitr amet eirmod.
            No ea gubergren dolores elitr labore ipsum.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/flat-spring-forward-illustration_23-2149254612.jpg?t=st=1736068619~exp=1736072219~hmac=09ca79b44dca87254529cb0156a0ca4b748804a8093d05e5a01eecb1c116ee84&w=996"
            alt="Mission Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
