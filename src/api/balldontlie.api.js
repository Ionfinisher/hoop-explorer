import axios from "axios";

export const retrieveTeams = async () => {
  const response = await axios({
    method: "GET",
    url: "https://api.balldontlie.io/v1/teams",
    headers: {
      Authorization: "03204949-d221-4086-908f-4f7c7abc17aa",
    },
  });
  return response.data;
};
