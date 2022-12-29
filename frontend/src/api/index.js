import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:5000/api";
const headers = {
  "Content-Type": "application/json",
};

function registerAtheleteProfile(payload) {
  return axios
    .post(`${apiUrl}/athlete-profile/register`, payload)
    .then((res) => res.data);
}

function getAllAtheleteProfiles() {
  return axios
    .get(`${apiUrl}/athlete-profile/all`, { headers })
    .then((res) => res.data);
}

function getAtheletProfileById(id) {
  return axios.get(`${apiUrl}/athlete-profile/${id}`).then((res) => res.data);
}

function getProfileImage(fileName) {
  return axios.get(`${apiUrl}/files/${fileName}`);
}

export {
  registerAtheleteProfile,
  getAllAtheleteProfiles,
  getAtheletProfileById,
  getProfileImage
};
