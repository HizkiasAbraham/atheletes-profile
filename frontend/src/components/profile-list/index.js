import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllAtheleteProfiles } from "../../api";
import Loading from "../loading";
import ProfileListTable from "./table";

export default function ProfileList() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const loadProfilesList = async () => {
    setLoading(true);
    try {
      const result = await getAllAtheleteProfiles();
      setData(result);
      setLoading(false);
    } catch (error) {}
  };

  React.useEffect(() => {
    loadProfilesList();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5"> Athelete Profile List</Typography>
      <Divider />
      {loading && <Loading />}
      {!loading && !data.length && (
        <Box p={2} textAlign="center">
          <Typography>No athlete profile aded</Typography>
          <Button
            onClick={() => {
              navigate("/register-profile");
            }}
            variant="outlined"
          >
            Register Profile
          </Button>
        </Box>
      )}
      {!loading && !!data.length && <ProfileListTable data={data} />}
    </Box>
  );
}
