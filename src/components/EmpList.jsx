import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { EmpItem } from "./EmpItem";
import { useNavigate } from "react-router-dom";

export const EmpList = ({ handleUpdate, setShow }) => {
  const [data, setData] = useState([]);
  const [pagi, setPagi] = useState(4);
  const navigate= useNavigate()

  const getApi = async () => {
    const result = await axios.get("http://localhost:2888/empall");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleprevious = () => {
    if (pagi > 5) {
      setPagi(pagi - 4);
    }
  };
  const handleNext = () => {
    if (pagi < data.length) {
      setPagi(pagi + 4);
    }
  };

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <b>Emp ID</b>
              </Grid>
              <Grid item xs={2}>
                <b>Full Name</b>
              </Grid>
              <Grid item xs={2}>
                <b>Email ID</b>
              </Grid>
              <Grid item xs={2}>
                <b>Mobile No.</b>
              </Grid>
              <Grid item xs={2}>
                <b>City</b>
              </Grid>
              <Grid item xs={1}>
                <b>Status</b>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {data.slice(pagi - 4, pagi).map((item) => {
        return (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <EmpItem
                  setShow={setShow}
                  handleUpdate={handleUpdate}
                  item={item}
                />
              </CardContent>
            </Card>
          </Grid>
        );
      })}

      <Grid item xs={2}>
        <Button
          style={{ display: pagi <= 5 ? "none" : "block" }}
          onClick={handleprevious}
          variant="contained"
          fullWidth
        >
          previouse
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Button onClick={()=>navigate("/dashboard",{state:data})} variant="contained" fullWidth color="warning">
        Dashboard
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <Button
          style={{ display: pagi >= data.length ? "none" : "block" }}
          onClick={handleNext}
          variant="contained"
          fullWidth
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};
