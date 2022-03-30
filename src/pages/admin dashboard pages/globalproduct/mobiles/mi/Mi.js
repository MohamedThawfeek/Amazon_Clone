import React, { useEffect, useState } from "react";
import axios from "../../../../../components/axios/axios";
import style from "./Mi.module.css";
import { Edit, Delete } from "@material-ui/icons";
import logo from "../../../../../assets/amazon.png";
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
import Price from "react-currency-format";

const Mi = () => {
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState("");
  const [id, setId] = useState("");
  const [input, setInput] = useState({
    name: "",
    images: "",
    price: "",
    color: "",
    category: "",
  });
  const [editProduct, setEditProduct] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const socket = io("https://my-first-mern-app-a-c.herokuapp.com");

  const navigate = useNavigate();

  const filter = (e) => {
    setFilters(e.target.value);
  };

  const load = () => {
    setEditProduct(true);
  };

  const load1 = () => {
    setAddProduct(true);
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
    const mi = async () => {
      try {
        const { data } = await axios.get("/api/mobiles/mi/all", {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        });

        setAllData(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    return mi();
  }, [allData]);

  useEffect(() => {
    socket.connect();
    socket.on("new mi", (miDetails) => {
      setAllData((pre) => [...pre, miDetails]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const del = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/mobiles/mi/delete/${id}`,

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

  const edit = async () => {
    try {
      const { data } = await axios.put(
        `/api/mobiles/mi/update/${id}`,
        input,

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

  const add = async () => {
    try {
      const { data } = await axios.post(
        `/api/mobiles/mi/add`,
        input,

        {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        }
      );
      alert(data.msg);
      setInput({
        name: "",
        images: "",
        price: "",
        color: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;

    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
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

        <div className={style.addbutton}>
          <Button
            onClick={() => {
              load1();
            }}
          >
            Add Product
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Product/Image</TableCell>
              <TableCell align="center">Category</TableCell>

              <TableCell align="center">Edit/Update</TableCell>
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
                <TableCell align="center">{users.color}</TableCell>
                <TableCell align="center">
                  <Price
                    value={users.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </TableCell>
                <TableCell align="center">
                  <img src={users.images} alt="" className={style.img} />
                </TableCell>

                <TableCell align="center" className={style.tabelcell}>
                  {users.category}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {addProduct ? (
        <div className={style.boxes}>
          <div className={style.input}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter change name"
              onChange={handelChange}
              value={input.name}
              name="name"
            />
          </div>

          <div className={style.input}>
            <label>Color</label>
            <input
              type="text"
              placeholder="Enter your product color"
              onChange={handelChange}
              value={input.color}
              name="color"
            />{" "}
          </div>

          <div className={style.input}>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter your product price"
              onChange={handelChange}
              value={input.price}
              name="price"
            />
          </div>
          <div className={style.input}>
            <label>images</label>
            <input
              type="url"
              placeholder="Enter your product image url"
              onChange={handelChange}
              value={input.images}
              name="images"
            />
          </div>
          <div className={style.input}>
            <label>Category</label>
            <input
              type="text"
              placeholder="Enter  product category"
              onChange={handelChange}
              value={input.category}
              name="category"
            />
          </div>

          <div className={style.buttons}>
            <Button
              onClick={() => {
                add();
                setAddProduct(false);
              }}
            >
              upload
            </Button>
            <Button onClick={() => setAddProduct(false)}>cancel</Button>
          </div>
        </div>
      ) : null}

      {editProduct ? (
        <div className={style.boxes}>
          <div className={style.input}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter change name"
              onChange={handelChange}
              value={input.name}
              name="name"
            />
          </div>

          <div className={style.input}>
            <label>Color</label>
            <input
              type="text"
              placeholder="Enter your product color"
              onChange={handelChange}
              value={input.color}
              name="color"
            />{" "}
          </div>

          <div className={style.input}>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter your product price"
              onChange={handelChange}
              value={input.price}
              name="price"
            />
          </div>
          <div className={style.buttons}>
            <Button
              onClick={() => {
                edit();
                setEditProduct(false);
              }}
            >
              upload
            </Button>
            <Button onClick={() => setEditProduct(false)}>cancel</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Mi;
