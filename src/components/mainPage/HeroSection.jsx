import Image from "next/image";
import heroImg from "@/img/heroSection/33e79a0ae922148cd35e2eb6f9dd5078.png";
import Title from "../UI/Title";
import Container from "../Container";
import apostroph from "@/img/icons/apostroph.svg";
import Text from "../UI/Text";
import ArrowDown from "@/img/icons/arrow-down.svg";

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
          <Title size="text-[19.87vh] leading-[0.85] tracking-wider">
            Men’s
            <br /> Image <br />
            &amp; Mindset<br></br>
            <div className="flex items-end gap-[45px]">
              <>Mentor</>
              <p className="font-[Ws_Paradose] font-normal italic text-[20px] leading-[26px] tracking-[0.06em] uppercase pb-[10px]">
                Look better,
                <br /> feel bolder, and
                <br />
                <span className="p-[2px] bg-[#E67108]">don’t be a jerk</span>
              </p>
            </div>
          </Title>
        </div>

        {/* Right Column: Quote Box, Button, & Small Text */}
        <div className=" relative mt-8 md:mt-0 md:ml-8">
          {/* Quote Box */}
          <div className="bg-transparent bg-opacity-70  max-w-[27.7vw] ">
            <span className="flex gap-[10.5px]">
              <Image src={apostroph} alt="quote" />
              <Image src={apostroph} alt="quote" />
            </span>
            <Text className="mt-2 leading-[1.2] tracking-[0.06em] uppercase">
              Based on a rich personal collection of mistakes in behavior,
              relationships, and self-esteem. I give you a fast track to a
              better version of yourself.
            </Text>
            <button className="mt-4 bg-[#E67108] text-white cursor-pointer py-[14px] px-[15px] rounded-md font-semibold hover:bg-orange-600 transition-colors">
              <Text
                className={
                  "font-semibold text-[16px] leading-[20px] tracking-[0.2em] text-center uppercase"
                }>
                Who’s this guy?
              </Text>
            </button>
          </div>
        </div>
        {/* Small Text at the Bottom Right */}
      </Container>
      <div className="absolute max-w-[249px] bottom-[4.44vw] right-[4.16vw] font-semibold text-[16px] leading-[20px] tracking-[0.04em] text-right uppercase">
        <div className="inline-flex mb-[16px] p-[1.45vw] border-[1px] border-white rounded-full">
          <Image src={ArrowDown} alt="arrow-down" />
        </div>
        <Text>I’m jealous you have it easier, lucky you!</Text>
      </div>
    </section>
  );
}
