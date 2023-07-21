import React from "react";
import SectionExplore from "../components/sections/SectionExplore/SectionExplore";
import SectionCustomize from "../components/sections/SectionCustomize/SectionCustomize";
import SectionNews from "../components/sections/SectionNews/SectionNews";

const Home: React.FC = () => {
  return (
    <>
      <SectionExplore />
      <SectionCustomize />
      <SectionNews />
    </>
  );
};

export default Home;
