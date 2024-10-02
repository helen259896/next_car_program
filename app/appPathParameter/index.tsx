import React from "react";
// import ReactDOM from "react-dom";
import {
    // useHistory,
    useParams,
  useLocation
} from "react-router-dom";


export default function usePageViews() {
    let location = useLocation();
    let {param} = useParams();
    // let history = useHistory();
    // React.useEffect(() => {
    //   ga.send(["pageview", location.pathname]);
    // }, [location]);
    return {location, param};
  }