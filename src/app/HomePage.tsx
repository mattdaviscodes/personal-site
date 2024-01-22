/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/Container";

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="flex h-[calc(100vh-74px-80px)] lg:h-[calc(100vh-74px-112px)] items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-7xl font-bold text-amber-500">
            HELLO
          </h1>
          <p className="text-2xl">I'm Matt.</p>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
