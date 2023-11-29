import React, { useEffect, useState } from "react";
import {
  Grid,
  Switch,
  Button,
  TextField,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import axios from "axios";
import { EmpList } from "./EmpList";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const Addemp = () => {
  const navigate = useNavigate();
  const [empid, setEmpid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmailid] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [_id, set_id] = useState("");
  const [vali, setVali] = useState(false);
  const [show, setShow] = useState("");

  console.log(show);

  const option = [
    {
      label: "Mumbai",
      value: "Mumbai",
    },
    {
      label: "Pune",
      value: "Pune",
    },
    {
      label: "Nanded",
      value: "Nanded",
    },
    {
      label: "Dehli",
      value: "Dehli",
    },
    {
      label: "Banglore",
      value: "Banglore",
    },
    {
      label: "Chennai",
      value: "Chennai",
    },
  ];

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
      result.status === 200 && setUpdate(false);
      setShow(result.data);
      setEmpid("");
      setFname("");
      setLname("");
      setEmailid("");
      setCity("");
      setMobile("");
      setIsActive(false);
      // window.location.reload(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    } else {
      const url = "http://localhost:2888/addemp";
      const payload = { empid, fname, lname, email, mobile, city, IsActive };
      const result = await axios.post(url, payload);

      setShow(result.data);
      result.status === 200 && setEmpid("");
      setFname("");
      setLname("");
      setEmailid("");
      setCity("");
      setMobile("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 5000);
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

  useEffect(() => {
    setVali(
      fname !== "" &&
        lname !== "" &&
        // city !== "" &&
        email !== "" &&
        empid.length === 5 &&
        mobile.length === 10
    );
  }, [empid, fname, lname, city, mobile, email]);

  useEffect(() => {
    const emails = localStorage.getItem("email");
    // const passwords = localStorage.getItem("password");
    emails || (!emails && navigate("/login"));
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "20px",
        }}
      >
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
            <Select onChange={(e) => setCity(e.value)} options={option} />
          </Grid>

          <Grid item xs={1}>
            <Switch
              IsActive={IsActive}
              onClick={() => setIsActive(!IsActive)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              disabled={update ? "" : !vali}
              onClick={handleEmployee}
              variant="contained"
              fullWidth
            >
              {update ? "update" : "submit"}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleCancel} variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>{" "}
      </div>

      <br />
      {show && <Alert severity="success">{show}</Alert>}
      <br />
      <EmpList setShow={setShow} handleUpdate={handleUpdate} />
    </div>
  );
};
