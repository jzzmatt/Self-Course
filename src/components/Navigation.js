import React, { useState, useRef, useEffect } from "react";
import "./Navigation.css";
import "./Course";
import menulist from "./Menu-List";
import Link from "./Link";

const Navigation = ({ home }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    //console.log(ref.current)
    //console.log(showMenu)

    const onBodyClick = event => {
      //console.log(event.target, "click...");
      //console.log("Status from UseEffect => " + showMenu);
      if (ref.current.contains(event.target)) {
        return;
      }
      setShowMenu(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [showMenu]);

  const display = showMenu ? "displaymenu" : "";

  const menus = menulist.map((menu, idx) => {
    return (
      <li key={idx}>
        <Link href={menu.name.toLowerCase()}>{menu.name}</Link>
      </li>
    );
  });

  //console.log("Status from Body => " + showMenu);

  return (
    <div>
      <div className="navigation__menu">
        <div className="menu__header">
          <button ref={ref} onClick={() => setShowMenu(!showMenu)} type="text">
            Menu
          </button>
          <h2>go to Menu</h2>
        </div>

        <div className={`menu__item ${display}`}>
          <ul>{menus}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
