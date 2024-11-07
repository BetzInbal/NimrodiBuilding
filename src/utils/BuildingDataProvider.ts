import { useState, useEffect } from 'react';
import fsJson from '../data/building.json'


interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {

  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  setBuildingData(fsJson) 
  
  const [floorData, setFloorData] = useState<Floor>();

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    setFloorData(buildingData[floorIndex])
    return floorData
  }

  const getListOfActivities = ():string[]=>{
    return buildingData.map((f) => f.activity)
  }

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
