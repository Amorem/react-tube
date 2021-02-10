import axios from "axios";
import { queryCache } from "react-query";
export const client = axios.create({
  baseURL: "/api/v1",
});

export function authenticate(response) {
  client({
    method: "POST",
    url: "/auth/google-login",
    data: { idToken: response.tokenId },
  })
    .then((res) => {
      console.log("SignIn Sucess: ", res);
      window.location.assign(window.location.href);
    })
    .catch((error) => {
      console.log("SignIn Error: ", error.response);
    });
}

export async function signoutUser() {
  console.log("dsfdsf");
  const res = await client.get("/auth/signout/");
  console.log("res", res);
  window.location.pathname = "/";
}

export async function updateUser() {}

export async function addVideoView() {}

export async function addComment() {}

export async function addVideo({ video }) {
  await client.post("/videos", video);
  await queryCache.invalidateQueries("Channel");
}

export async function toggleSubscribeUser() {}

export async function likeVideo() {}

export async function dislikeVideo() {}

export async function deleteVideo() {}

export async function deleteComment() {}
