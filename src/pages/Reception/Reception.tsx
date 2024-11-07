import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "../../store/floorreducer";
import { setRole } from "../../store/rolereducer";
import useBuildingData from "../../utils/BuildingDataProvider";
import optionalroles from "../../data/roles.json";
import "./Reception.css";
import { RootState } from "../../store/store";

const Reception: React.FC = () => {
  const floorAccess = useSelector(
    (state: RootState) => state.floor.floorAccess
  );
  console.log(floorAccess);
  
  const currentRole = useSelector((state: { role: string }) => state.role);
  const { buildingData } = useBuildingData();
  const dispatch = useDispatch();

  const handleChangeAccess = (index: number) => {
    dispatch(changeAccess(index));
  };

  const handleSetRole = (index: number) => {
    dispatch(setRole(index));
  };

  return (
    <div className="reception-page">
      <header className="reception-header">
        <p>
          Welcome to the Nimrodi Tower access control system. Toggle each floor's access by clicking on the boxes below.
        </p>
      </header>

      <section className="access-levels">
        <h2>Select Access</h2>
        {floorAccess.map((floor: boolean, index: number) => (
          <div
            key={index}
            onClick={() => handleChangeAccess(index)}
            className={`box ${floor ? "blue" : "red"}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleChangeAccess(index)}
          >
            <h5>{floor ? "Access Granted" : "No Access"}</h5>
            <span>{ `Floor ${index + 1}`}</span>
            {<span>{buildingData[index]?.purpose || `Floor ${index + 1}`}</span>
            }
          </div>
        ))}
      </section>

      <section className="role-selection">
        <h2>Select Role</h2>
        {optionalroles.map((role: string, index: number) => (
          <div
            key={index}
            onClick={() => handleSetRole(index)}
            className={`box ${role === currentRole ? "blue" : "red"}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleSetRole(index)}
          >
            <h5>{role}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reception;
