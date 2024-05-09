import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Reviews from "../components/reviews";
import AchievementTile from "../components/achievementTile";

const Home = () => {
  return (
    <>
      <Introduction />
      <AchievementTile/>
      <Projects />
      <Skills />
      <Reviews />
    </>
  );
};

export default Home;
