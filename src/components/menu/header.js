import React, { useEffect, useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import { Link } from "@reach/router";
import useOnclickOutside from "react-cool-onclickoutside";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? "active" : "non-active",
      };
    }}
  />
);

const Header = function () {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);

  const handleBtnClick = (): void => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = (): void => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = (): void => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = (): void => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = (): void => {
    setOpenMenu(false);
  };
  const closeMenu1 = (): void => {
    setOpenMenu1(false);
  };
  const closeMenu2 = (): void => {
    setOpenMenu2(false);
  };
  const closeMenu3 = (): void => {
    setOpenMenu3(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header id="myHeader" className="navbar white">
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <NavLink to="/">
                <span className="fs-2">PeopleHunt</span>
              </NavLink>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu ">
                  <div className="navbar-item">
                    <NavLink to="/aboutus" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/success" onClick={() => btn_icon(!showmenu)}>
                      Success
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/aboutus" onClick={() => btn_icon(!showmenu)}>
                      About
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>
                      Contact
                    </NavLink>
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  <NavLink to="/">
                    Home
                    <span className="lines"></span>
                  </NavLink>
                </div>

                <div className="navbar-item">
                  <NavLink to="/success">
                    Success
                    <span className="lines"></span>
                  </NavLink>
                </div>

                <div className="navbar-item">
                  <NavLink to="/about">
                    About
                    <span className="lines"></span>
                  </NavLink>
                </div>

                <div className="navbar-item">
                  <NavLink to="/contact">
                    Contact
                    <span className="lines"></span>
                  </NavLink>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
};
export default Header;
