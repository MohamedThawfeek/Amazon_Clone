import React, { useEffect, useState } from "react";
import axios from "../../../components/axios/axios";
import style from "./GlobalUsers.module.css";
import { Edit, Delete } from "@material-ui/icons";
import logo from "../../../assets/amazon.png";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import io from "socket.io-client";

const GlobalUsers = () => {
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState("");
  const [id, setId] = useState("");
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const socket = io("https://my-first-mern-app-a-c.herokuapp.com");

  const filter = (e) => {
    setFilters(e.target.value);
  };

  const load = () => {
    setUpdate(true);
  };

  const home = () => {
    navigate("/adminpage");
  };

  const dataSearch = allData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filters.toString().toLowerCase())
    );
  });

  useEffect(() => {
    const allUsers = async () => {
      try {
        const { data } = await axios.get("/api/users/usersData", {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        });

        setAllData(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    allUsers();
  }, [allData]);

  useEffect(() => {
    socket.connect();
    socket.on("new users", (bookDetails) => {
      setAllData((pre) => [...pre, bookDetails]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const del = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/users/delete/${id}`,

        {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        }
      );
      alert(data.msg);
    } catch (error) {
      alert(error.message);
    }
  };

  const upload = async () => {
    try {
      const { data } = await axios.put(
        `/api/users/update/${id}`,
        {
          name: input,
        },
        {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        }
      );
      alert(data.msg);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={logo} alt="" onClick={home} />

        <div className={style.inputs}>
          <input
            type="text"
            placeholder="Search Users"
            onChange={filter}
            value={filters}
          />
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Verified</TableCell>
              <TableCell align="center">Edit/Update</TableCell>
              <TableCell align="center">Users</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSearch.map((users) => (
              <TableRow
                key={users._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontFamily: "cursive",
                  }}
                >
                  # {users._id}
                </TableCell>
                <TableCell align="center" className={style.tabelcell}>
                  {users.name}
                </TableCell>
                <TableCell align="center">{users.email}</TableCell>
                <TableCell align="center">
                  {users.verified ? "Verified" : "Not Verified"}
                </TableCell>

                <TableCell align="center">
                  <Edit
                    className={style.edt}
                    onClick={() => {
                      load();

                      setId(users._id);
                    }}
                  />
                  <Delete
                    className={style.del}
                    onClick={() => del(users._id)}
                  />
                </TableCell>
                <TableCell align="center" className={style.tabelcell}>
                  {users.loginType === 1 ? "admin" : "Guest_User"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {update ? (
        <div className={style.boxes}>
          <div className={style.input}>
            <h5>{id}</h5>
          </div>

          <div className={style.input}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter change name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              name="name"
            />
          </div>

          <div className={style.buttons}>
            <Button
              onClick={() => {
                upload();
                setUpdate(false);
              }}
            >
              upload
            </Button>
            <Button onClick={() => setUpdate(false)}>cancel</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GlobalUsers;
