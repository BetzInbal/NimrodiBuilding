import { useState, useEffect } from 'react';
import fsJson from '../data/building.json'


interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  const [floorData, setFloorData] = useState<Floor>();
  const [getFloorByIndex, setgetFloorByIndex] = useState<(floorIndex: number) => Floor >((floorIndex: number): Floor  => {
    setFloorData(buildingData[floorIndex])
    return floorData ||   {
      name: "string",
      soldiers: 1,
      purpose: "string",
      description: "string",
      activity: "string"
    }
  });
  const [getListOfActivities, setgetListOfActivities] = useState<() => string[]>((): string[] => {
    return buildingData.map((f) => f.activity)
  });

  useEffect(() => {
    setBuildingData(fsJson)
  }
    , [])

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  }

};

export default useBuildingData;
