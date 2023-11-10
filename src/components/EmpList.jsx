import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import { EmpItem } from "./EmpItem";

export const EmpList = ({handleUpdate}) => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:2888/empall");
    setData(result.data);
  };



  useEffect(() => {
    getApi();
  }, []);
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

      {data.map((item) => {
        return (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <EmpItem handleUpdate={handleUpdate} item={item} />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
