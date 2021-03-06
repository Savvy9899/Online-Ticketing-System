//Base URL
export const baseURL = "http://localhost:9091/";

//TIME_TABLE
export const TIME_TABLE = baseURL + "timetable/";
export const ADD_TIME_TABLE = TIME_TABLE + "addTimetable";
export const GET_ALL_TIME_TABLE = TIME_TABLE + "getAllTimetables";

// ROUTE
export const ROUTE = baseURL + "routes/";
export const ADD_MAIN_ROUTE = ROUTE + "addMainRoutes";
export const ADD_SUB_ROUTE = ROUTE + "addRoute";
export const GET_ALL_MAIN_ROUTE = ROUTE + "getAllMainRoutes";
export const GET_ALL_SUB_ROUTE = ROUTE + "getAllRoutes";
export const GET_ROUTE_by_ID = ROUTE + "getMainRoutesById?routeId=";
