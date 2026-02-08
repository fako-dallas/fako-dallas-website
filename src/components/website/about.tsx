import Link from "next/link";

const About = async () => {
  return (
    <section className="hero_bg container pt-36 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="content_container space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins leading-tight text-gray-700">
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl font-avenir text-gray-600 leading-relaxed max-w-[550px]">
              The <span className="font-semibold text-brandGreen">Fako Dallas Association</span> is a vibrant chapter of the broader Fako America network, dedicated to preserving and promoting the rich culture and heritage of the Fako people from the Southwest Region of Cameroon. 
              Based in the heart of the Dallas–Fort Worth Metroplex, we unite individuals from the Fako Division who now call North Texas home.
            </p>
            <Link href="/about" className="inline-block font-poppins bg-primary text-lg font-semibold text-white bg-brandGreen px-8 py-4 rounded-xl shadow-lg hover:bg-brandGreen/90 transition duration-300">
                Learn More
            </Link>
          </div>

          <div className="w-full order-first md:order-last lg:px-4">
            <div className="flex flex-wrap ">
              <img
                className="w-1/3 h-48 sm:h-64  object-cover rounded-xl p-1 border-2 border-b-black hover:scale-105 transition-transform duration-300"
                src="/images/about1.png"
                alt="Community event"
              />
              <img
                className="w-2/3 h-48 sm:h-64  object-cover rounded-xl p-1 border-2 border-b-black hover:scale-105 transition-transform duration-300"
                src="/images/about2.png"
                alt="Cultural heritage"
              />
            </div>
            <div className="flex flex-wrap">
              <img
                className="w-2/3 h-48 sm:h-64  object-cover rounded-xl p-1 border-2 border-b-black hover:scale-105 transition-transform duration-300"
                src="/images/about3.png"
                alt="Celebration"
              />
              <img
                className="w-1/3 h-48 sm:h-64  object-cover rounded-xl p-1 border-2 border-b-black hover:scale-105 transition-transform duration-300"
                src="/images/about4.png"
                alt="Community gathering"
              />
            </div>
          </div>
        </div>

        {/* Optional brand section */}
        <div className="brand_container mt-20 text-center">
          {/* <Brand /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
