const DASHBOARD = {
  main: "Dashboard",
  sub: [],
  path: "/dashboard"
};

const ASSESSMENT = {
  main: "Assessment",
  sub: ["My Assessments", "Unstop Assessments"],
  path: "/"
};

const MY_LIBRARY = {
  main: "My Library",
  sub: [],
  path: "/my-library"
};

const ADMIN = {
  main: "Admin",
  sub: [],
  path: "/admin"
};
const ROUND_STATUS = {
  main: "Round Status",
  sub: [],
  path: "/round-status"
};

const NO_PAGE = {
  main: "",
  path: '*'
}


const PATHNAME_ARR = [
  DASHBOARD.path, 
  ASSESSMENT.path, 
  MY_LIBRARY.path, 
  ADMIN.path, 
  ROUND_STATUS.path
];


export {
  PATHNAME_ARR,
  NO_PAGE,
  ROUND_STATUS,
  ADMIN,
  MY_LIBRARY,
  ASSESSMENT,
  DASHBOARD
};