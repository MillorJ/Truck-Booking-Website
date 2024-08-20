import { useState } from "react";

export const useLeftNavigation = () => {
  const [isLeftNavigationOpen, setIsLeftNavigationOpen] = useState(true);

  const handleLeftNavigation = () => {
    const sideMenu = document.getElementById("side-menu");
    const pgContent = document.getElementById("pg-content");

    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    // if small screen
    if (width <= 768) {
      pgContent.style.marginLeft = "0px";
      if (sideMenu.style.width !== "0px") {
        setIsLeftNavigationOpen(false);
        sideMenu.style.width = "0px";
      } else {
        setIsLeftNavigationOpen(true);
        sideMenu.style.width = "250px";
      }
      return;
    }

    if (sideMenu.style.width !== "0px") {
      setIsLeftNavigationOpen(false);
      sideMenu.style.width = "0px";
      pgContent.style.marginLeft = "0px";
    } else {
      setIsLeftNavigationOpen(true);
      sideMenu.style.width = "250px";
      pgContent.style.marginLeft = "250px";
    }
  };

  return {
    isLeftNavigationOpen,
    setIsLeftNavigationOpen,
    handleLeftNavigation,
  };
};
