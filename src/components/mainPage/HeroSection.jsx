import Image from "next/image";
import heroImg from "@/img/heroSection/33e79a0ae922148cd35e2eb6f9dd5078.png";
import Title from "../UI/Title";
import Container from "../Container";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-2" // Places the image behind other elements
      />

      {/* Main Content Container */}
      <Container className="relative mx-auto h-full  flex flex-col md:flex-row items-center justify-center  md:pt-[50px]">
        {/* Left Column: Main Heading & Subheading */}
        <div className="flex-1">
          <Title size="text-[19.87vh] leading-[0.85] tracking-wide">
            Men’s
            <br /> Image <br />
            &amp; Mindset<br></br>
            <div className="flex gap-[45px]">
              <>Mentor</>
              <p className="mt-4 text-lg md:text-xl italic">
                Look better, feel bolder, and{" "}
                <span className="text-orange-500 font-bold">
                  don’t be a jerk
                </span>
              </p>
            </div>
          </Title>
        </div>

        {/* Right Column: Quote Box, Button, & Small Text */}
        <div className=" relative mt-8 md:mt-0 md:ml-8">
          {/* Quote Box */}
          <div className="bg-transparent bg-opacity-70 p-6 rounded-lg max-w-md">
            <span className="text-orange-500 text-4xl font-bold leading-none">
              “
            </span>
            <p className="text-sm md:text-base mt-2 leading-relaxed">
              Based on a rich personal collection of mistakes in behavior,
              relationships, and self-esteem. I give you a fast track to a
              better version of yourself.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">
              Who’s this guy?
            </button>
          </div>

          {/* Small Text at the Bottom Right */}
          <p className="absolute bottom-0 right-0 text-sm text-gray-300 mt-4">
            I’m jealous you have it easier, lucky you!
          </p>
        </div>
      </Container>
    </section>
  );
}
