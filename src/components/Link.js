import React from "react";

const Link = ({ href, children }) => {
  const onClick = event => {
    event.preventDefault(); //prevent full page reload
    window.history.pushState({}, "", href);

    //Send url Changes Down to the Route , as each route a listen
    //for changes via PopStateEvent
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
