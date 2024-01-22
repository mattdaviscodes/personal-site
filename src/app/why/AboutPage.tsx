/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/Container";

const AboutPage: React.FC = () => {
  return (
    <>
      <Container>
        <h1 className="my-8 text-4xl font-bold text-amber-500 sm:text-6xl">
          Why Hire Me?
        </h1>
      </Container>

      <div className="border-y-4 border-amber-500 bg-orange-100 py-4 sm:p-8">
        <Container>
          <div className="flex justify-center">
            <div className="flex items-center justify-between w-full max-w-6xl">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white sm:h-24 sm:w-24 md:h-48 md:w-32 lg:w-44">
                <p className="p-2 text-2xl sm:text-5xl md:pb-4 md:text-6xl">
                  👨‍💻
                </p>
                <p className="hidden text-center md:block md:text-2xl">
                  Software Engineer
                </p>
              </div>
              <p className="text-2xl sm:text-4xl lg:text-6xl">+</p>
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white sm:h-24 sm:w-24 md:h-48 md:w-32 lg:w-44">
                <p className="p-2 text-2xl sm:text-5xl md:pb-4 md:text-6xl">
                  ✍️
                </p>
                <p className="hidden text-center md:block md:text-2xl">
                  Writer
                </p>
              </div>
              <p className="text-2xl sm:text-4xl lg:text-6xl">+</p>
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white sm:h-24 sm:w-24 md:h-48 md:w-32 lg:w-44">
                <p className="p-2 text-2xl sm:text-5xl md:pb-4 md:text-6xl">
                  ❤️
                </p>
                <p className="hidden text-center md:block md:text-2xl">
                  People Person
                </p>
              </div>
              <p className="text-2xl sm:text-4xl lg:text-6xl">=</p>
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white sm:h-24 sm:w-24 md:h-48 md:w-32 lg:w-44">
                <p className="p-2 text-2xl sm:text-5xl md:pb-4 md:text-6xl">
                  🥑
                </p>
                <p className="hidden text-center md:block md:text-2xl">
                  Developer Advocate
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="my-4 justify-center gap-10 md:flex md:flex-wrap lg:grid lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="mb-4 mt-10 text-center text-3xl text-amber-500 sm:text-4xl">
                <span className="pr-2 md:hidden">👨‍💻</span>Software Engineer
              </h2>
              <p className="text-base sm:text-lg">
                For someone to advocate for developers, they must understand
                what it means to work be a developer. They must have lived
                the struggle of trying to deliver a best-in-class product on
                short deadlines with substandard tooling. I have six years of
                professional experience as a full-stack software engineer, most
                recently at SpaceX. I want to use this technical depth to help
                developers succeed despite the pressures of their industry.
              </p>
            </div>
            <div className="lg:col-span-1">
              <h2 className="mb-4 mt-10 text-center text-3xl text-amber-500 sm:text-4xl">
                <span className="pr-2 md:hidden">✍️</span>Writer
              </h2>
              <p className="text-base sm:text-lg">
                I have a non-standard background for a software engineer. I have
                a degree in creative writing, and I spent the
                beginning of my career writing and editing for the web. The
                skills I learned in school and at work have been foundational in
                my career, allowing me to communicate effectively regardless of
                topic or setting, and I feel as comfortable discussing details
                with teammates as I do broad strokes with stakeholders.
              </p>
            </div>
            <div className="lg:col-span-1">
              <h2 className="mb-4 mt-10 text-center text-3xl text-amber-500 sm:text-4xl">
                <span className="pr-2 md:hidden">❤️</span>People Person
              </h2>
              <p className="text-base sm:text-lg">
                A great communicator must have the compassion to meet others
                where they are. The prose we write and the words we say mean
                nothing if the recipient is not considered. I care deeply about
                the experience of those around me. I want to raise all ships, to
                bring people in, to pay forward the support I've received
                throughout my career. I want to help developers feel great in
                their work, and I believe I have the skill and empathy to do it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;
