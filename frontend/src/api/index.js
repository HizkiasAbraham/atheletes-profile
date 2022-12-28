import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:5000/api";
const headers = {
  "Content-Type": "application/json",
};

function registerAtheleteProfile(payload) {
  return axios
    .post(`${apiUrl}/athlete-profile/register`, payload, { headers })
    .then((res) => res.data);
}

function getAllAtheleteProfiles() {
  return axios
    .get(`${apiUrl}/athlete-profile/all`, { headers })
    .then((res) => res.data);
}

function getAtheletProfileById(id) {
  return axios.get(`${apiUrl}/athelete-profile/${id}`).then((res) => res.data);
}

export {
  registerAtheleteProfile,
  getAllAtheleteProfiles,
  getAtheletProfileById,
};
