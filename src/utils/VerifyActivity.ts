import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const indexRole = roles.findIndex((ro) => ro===role)
  const indexAct = activities.findIndex((ac) => ac===activity)
  return indexRole >= indexAct


  //FILL HERE 3.7
};

export default useIsVerified;
