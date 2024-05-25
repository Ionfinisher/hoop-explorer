import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrievePosts = async () => {
  const response = await axios({
    method: "GET",
    url: "https://api.balldontlie.io/v1/teams",
    headers: {
      Authorization: "03204949-d221-4086-908f-4f7c7abc17aa",
    },
  });
  return response.data;
};

export const fetchGithubUser = async () => {
  const res = await fetch("https://api.github.com/users/kiranm27");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  const user: TGithubUser = {
    name: data?.name || "",
    bio: data?.bio || "",
  };
  return user;
};

export const useGithubUser = () => {
  return useQuery(["githubUser"], fetchGithubUser);
};
