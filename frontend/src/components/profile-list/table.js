import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function createData(id, name, gender, dateOfBirth, team, sport, location) {
  return { id, name, gender, dateOfBirth, team, sport, location };
}

export default function ProfileListTable({ data = [] }) {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const mappedData = data.map((d) =>
      createData(d._id, d.name, d.gender, d.dob, d.team, d.sport, d.location)
    );
    setRows(mappedData);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Sport</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => navigate(`/profile-list/${row.id}`)}
              style={{ cursor: "pointer" }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.name || "-"}
              </TableCell>
              <TableCell align="right">{row.gender || "-"}</TableCell>
              <TableCell align="right">{row.dateOfBirth || "-"}</TableCell>
              <TableCell align="right">{row.team || "-"}</TableCell>
              <TableCell align="right">{row.sport || "-"}</TableCell>
              <TableCell align="right">{row.location || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
