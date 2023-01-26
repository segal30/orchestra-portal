import React, { useState, useEffect } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((users) => setUsers(users));
  }, []);

  console.log(users);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 40,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.id}</div>;
      },
    },
    {
      field: "url",
      headerName: "Photo",
      width: 90,
      editable: true,
      renderCell: (params) => (
        <img className="userListImg" alt="userListImg" src={params.value} />
      ),
    },
    { field: "username", headerName: "Username", width: 110 },
    { field: "name", headerName: "Name", width: 110 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 120 },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      renderCell: (params) => {
        return <div>{params.row.address.city}</div>;
      },
    },
    { field: "", headerName: "Member since", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userListTitle">
        Add New User
        <Link
          to="/newUser"
          style={{ textDecoration: "none" }}
          className="linkToNewUser"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        loading={!users.length}
        pageSize={25}
        rowsPerPageOptions={[30]}
        checkboxSelection
      />
    </div>
  );
}
