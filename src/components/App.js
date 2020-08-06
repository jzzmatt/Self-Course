import React from "react";
import Navigation from "./Navigation";
import "./App.css";
import Course from "./Course";
import Coaching from "./Coaching";
import Contact from "./Contact";
import Route from "./Route";

const App = () => {
  const showCourse = () => {
    if (window.location.pathname === "/course") {
      return <Course />;
    }
  };
  const _home = () => {
    const style = {
      background: "#3c3c3c",
      padding: "10px",
      "border-radius": "20px",
      color: "#fff",
      cursor: "pointer"
    };
    return (
      <div>
        <button
          onClick={() => {
            window.location.pathname = "/";
          }}
          style={style}
        >
          Back Home
        </button>
      </div>
    );
  };

  // const getPath = window.location.pathname;
  // switch (getPath) {
  //   case "/course":
  //     return (
  //       <div>
  //         <Course />
  //       </div>
  //     );
  //   case "/coaching":
  //     return (
  //       <div>
  //         <Coaching />
  //       </div>
  //     );
  //   case "/contact":
  //     return (
  //       <div>
  //         <Contact />
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div>
  //         <Navigation />
  //       </div>
  //     );
  // }
  // return (
  //  <div>
  //    {showCourse()}
  //  </div>
  // );

  return (
    <div>
      <Route path="/course">
        <Course />
      </Route>
      <Route path="/coaching">
        <Coaching />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Navigation home={_home} />
      </Route>
    </div>
  );
};

export default App;
