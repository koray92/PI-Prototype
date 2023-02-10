import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import MegaMenu from "./megamenu";
import React, { useState } from "react";

const MainMenu = ({ menu }) => {
  const pathcontrol = (path) => {
    if (typeof window !== 'undefined') {
      return path == window.location.pathname ? true : false
      }
    }
    return (
      <ul className="mainmenu">
          {menu.map((nav) => (
            <li
              key={nav.id}
              className={clsx(
                !!nav.submenu && "has-droupdown has-menu-child-item",
                !!nav.megamenu && "with-megamenu"
              )}
            >
                <Anchor className={clsx(
                  "its_new",
                  pathcontrol(nav.path) && "color-white"
                )} path={nav.path}>
                    {nav.text}
                </Anchor>
                {nav?.submenu && <SubMenu menu={nav.submenu} />}
                {nav?.megamenu && <MegaMenu menu={nav.megamenu} />}
            </li>
          ))}
      </ul>
    );
}

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;
