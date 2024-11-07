import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate, useParams } from "react-router";
import Floor from "../pages/Floor/Floor";
import { RootState } from "../store/store";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) =>  {
    const { index } = useParams<{ index: string }>();
    const floorAccess = useSelector(
        (state: RootState) => state.floor
      ).floorAccess;
        if (floorAccess[parseInt(index || "0")] )
     { 
        return(
        <div>
            {component}
        {/* <Routes>
            <Route path={`floor/:${index}`} element={<Floor/>} />
        </Routes> */}
    </div>
    )}
    return(
    <Forbidden/>
    )
    

};

export default PrivateRoute