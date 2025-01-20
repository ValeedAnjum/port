import { useState } from "react";

export const useHero = () => {
  const [meatingModel, setMeatingModel] = useState(false);
  const openMeatingModel = () => {
    setMeatingModel(true);
  };
  const closeMeatingModel = () => {
    setMeatingModel(false);
  };
  return {
    meatingModel,
    openMeatingModel,
    closeMeatingModel,
  };
};
