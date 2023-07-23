import { useState, useCallback, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import {
  DASHBOARD,
  ASSESSMENT,
  MY_LIBRARY,
  ADMIN,
  ROUND_STATUS,
  NO_PAGE,
  PATHNAME_ARR,
} from "../constants";

import NavItem from "../components/NavItem";

import dashboardIcon from "../assets/icons/dashboard.svg";
import assessmentIcon from "../assets/icons/note_alt.svg";
import myLibraryIcon from "../assets/icons/quiz.svg";
import strokeIcon from "../assets/icons/stroke.svg";
import roundStatusIcon from "../assets/icons/admin_meds.svg";


const Layout = () => {

  const { pathname } = useLocation();

  const [tabsName, setTabsName] = useState(() => {

    switch (pathname) {
      
      case DASHBOARD.path:
        return DASHBOARD;

      case ASSESSMENT.path:
        return ASSESSMENT;

      case MY_LIBRARY.path:
        return MY_LIBRARY;

      case ADMIN.path:
        return ADMIN;

      case ROUND_STATUS.path:
        return ROUND_STATUS;

      default:
        return NO_PAGE;
    }
  });


  useEffect(() => {
    
    function handleNoPage() {

      if (!PATHNAME_ARR.includes(pathname)) {
        setTabsName(NO_PAGE);
      }
    }

    handleNoPage();

  }, [pathname]);


  const handleActiveTab = useCallback(
    (main, sub) => setTabsName({ main, sub }),
  []);


  return (
    <>
      <header>
        <nav className="secondary-top-nav">
          <div className="main-tab">{tabsName.main}</div>
          {tabsName.sub?.length ? (
            <div className="sub-tabs">
              <ul>
                {tabsName.sub.map((subTabName, index) => (
                  <li key={index}>{subTabName}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </nav>
      </header>

      <nav className="primary-side-nav">
        <ul className="links-gp">
          <NavItem
            className="dashboard-link"
            icon={dashboardIcon}
            text={DASHBOARD.main}
            path={DASHBOARD.path}
            onClick={() => handleActiveTab(DASHBOARD.main)}
          />
          <NavItem
            className="assessment-link"
            icon={assessmentIcon}
            text={ASSESSMENT.main}
            path={ASSESSMENT.path}
            onClick={() => handleActiveTab(ASSESSMENT.main, ASSESSMENT.sub)}
          />
          <NavItem
            className="my-library-link"
            icon={myLibraryIcon}
            text={MY_LIBRARY.main}
            path={MY_LIBRARY.path}
            onClick={() => handleActiveTab(MY_LIBRARY.main)}
          />
          <NavItem
            className="admin-link"
            icon={strokeIcon}
            text={ADMIN.main}
            path={ADMIN.path}
            onClick={() => handleActiveTab(ADMIN.main)}
          />
          <NavItem
            className="round-status-link"
            icon={roundStatusIcon}
            text={ROUND_STATUS.main}
            path={ROUND_STATUS.path}
            onClick={() => handleActiveTab(ROUND_STATUS.main)}
          />
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
