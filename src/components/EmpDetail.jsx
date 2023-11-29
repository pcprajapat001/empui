import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const EmpDetail = () => {
  const mydata = useLocation();
  const data = mydata.state;
  console.log("data", data);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                  alt=""
                  style={{ width: "200px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <h1>{`${data.fname.toUpperCase()} ${data.lname.toUpperCase()}`}</h1>
                <h3>{data.email}</h3>
                <h3>{data.mobile}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  accusamus ipsa sed, nisi explicabo quos mollitia, inventore
                  quidem suscipit, aperiam repudiandae rerum veniam dolorum quam
                  alias facere nobis possimus! Aperiam tempora qui eaque maxime
                  et, repellendus eligendi omnis delectus natus facilis
                </p>
              </Grid>
              <Grid item xs={3} align="center">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: data.IsActive ? "green" : "red",
                  }}
                ></div>

                <h3>{data.IsActive ? "Active" : "De-Active"}</h3>
                <h1>{data.empid}</h1>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
