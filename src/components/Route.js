//Adding a Listen , to any time a URL change the Route will update
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    //Clean up the Listen fct
    return () => {
      window.removeEventListener("postate", onLocationChange);
    };
  }, []); //start listining one time

  return currentPath === path ? children : null;
};

export default Route;
