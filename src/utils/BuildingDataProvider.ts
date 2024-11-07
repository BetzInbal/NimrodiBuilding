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
  const [floorData, setFloorData] = useState<Floor>();
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  
const x = (floorIndex: number): Floor  => {
  setFloorData(buildingData[floorIndex])
  return floorData ||   {
    name: "string",
    soldiers: 1,
    purpose: "string",
    description: "string",
    activity: "string"
  }
}

  const [getFloorByIndex, setgetFloorByIndex] = useState<(floorIndex: number) => Floor >(x);

  
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
