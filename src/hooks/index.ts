import { useCallback } from "react";

const useScroll = () => {
  const scrollToAboutSec = useCallback(() => {
    const aboutSection = document.getElementById("about-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToExperienceSec = useCallback(() => {
    const aboutSection = document.getElementById("experience-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToSkillsSec = useCallback(() => {
    const aboutSection = document.getElementById("skills-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToWorkSec = useCallback(() => {
    const aboutSection = document.getElementById("work-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToEduSec = useCallback(() => {
    const aboutSection = document.getElementById("education-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    scrollToAboutSec,
    scrollToExperienceSec,
    scrollToSkillsSec,
    scrollToWorkSec,
    scrollToEduSec,
  };
};

export default useScroll;
