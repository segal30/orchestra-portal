import React, { useState, useEffect } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { db, storage } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  console.log(users);

  const columns = [
    {
      field: "url",
      headerName: "Photo",
      width: 120,
      editable: true,
      renderCell: (params) => (
        <img
          className="userListImg"
          alt="userListImg"
          src={params.row.photoURL}
        />
      ),
    },

    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.displayName}</div>;
      },
    },
    {
      field: "instrument",
      headerName: "Instrument",
      width: 110,
      renderCell: (params) => {
        return <div>{params.row.instrument}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      renderCell: (params) => {
        return <div>{params.row.email}</div>;
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      renderCell: (params) => {
        return <div>{params.row.phoneNumber}</div>;
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      renderCell: (params) => {
        return <div>{params.row.address}</div>;
      },
    },
    {
      field: "",
      headerName: "Member since",
      width: 120,
      renderCell: (params) => {
        return <div>{params.row.memberSince}</div>;
      },
    },
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
      <div className="userListTitle">Members</div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        loading={!users.length}
        pageSize={100}
        rowsPerPageOptions={[30]}
        checkboxSelection
      />
    </div>
  );
}
