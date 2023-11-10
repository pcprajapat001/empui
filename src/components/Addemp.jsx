import React, { useState } from "react";
import {
  Grid,
  Switch,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { EmpList } from "./EmpList";

export const Addemp = () => {
  const [empid, setEmpid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmailid] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [_id, set_id] = useState("");

  const handleEmployee = async () => {
    if (update === true) {
      const url = "http://localhost:2888/empupd";
      const payload = {
        empid,
        fname,
        lname,
        email,
        mobile,
        city,
        IsActive,
        _id,
      };
      const result = await axios.post(url, payload);
      setEmpid("");
      setFname("");
      setLname("");
      setEmailid("");
      setCity("");
      setMobile("");
      setIsActive(false);
    } else {
      const url = "http://localhost:2888/addemp";
      const payload = { empid, fname, lname, email, mobile, city, IsActive };
      const result = await axios.post(url, payload);
      setEmpid("");
      setFname("");
      setLname("");
      setEmailid("");
      setCity("");
      setMobile("");
      setIsActive(false);
    }
  };

  const handleUpdate = (item) => {
    setEmpid(item.empid);
    setFname(item.fname);
    setLname(item.lname);
    setEmailid(item.email);
    setMobile(item.mobile);
    setCity(item.city);
    setIsActive(item.IsActive);
    set_id(item._id);
    setUpdate(true);
  };

  const handleCancel = () => {
    setEmpid("");
    setFname("");
    setLname("");
    setEmailid("");
    setCity("");
    setMobile("");
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setEmpid(e.target.value)}
                required
                value={empid}
                type="number"
                variant="outlined"
                label="Employee ID"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setFname(e.target.value)}
                required
                value={fname}
                variant="outlined"
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setLname(e.target.value)}
                required
                value={lname}
                variant="outlined"
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setEmailid(e.target.value)}
                required
                value={email}
                variant="outlined"
                label="Email ID"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setMobile(e.target.value)}
                required
                value={mobile}
                type="number"
                variant="outlined"
                label="Mobile No"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                onChange={(e) => setCity(e.target.value)}
                required
                value={city}
                variant="outlined"
                label="City"
                fullWidth
              />
            </Grid>

            <Grid item xs={1}>
              <Switch
                IsActive={IsActive}
                onClick={() => setIsActive(!IsActive)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleEmployee} variant="contained" fullWidth>
                {update ? "update" : "submit"}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={handleCancel} variant="outlined" fullWidth>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br /> <br />
      <EmpList handleUpdate={handleUpdate} />
    </div>
  );
};
