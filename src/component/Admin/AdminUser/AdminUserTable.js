import React, { useState, useEffect } from "react";
import ActionMenuTable from "./ActionMenuTable";
import axiosInstance from "../../../HelperFunction/Axios";

const AdminUserTable = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      await axiosInstance
        .get(`/user/list/short/`)
        .then((res) => {
          console.log(res.data);
          setUserList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUserList();
  }, []);

  const displayUserData = () => {
    let result = [];
    userList.map((user) => {
      result.push(
        <tr key={user.id}>
          <td className="text-muted">{user.full_name}</td>
          <td className="text-muted">{user.role}</td>
          <td className="text-muted">{user.email}</td>
          <td className="text-muted">{user.phone_number}</td>
          <td className="text-primary">{user.salary}</td>
          <td className="text-primary">{user.store}</td>
          <td>
            <ActionMenuTable userId = {user.id} />
          </td>
        </tr>
      );
    });

    return result;
  };

  return (
    <div className="user_table div_format pt-4">
      <div className="form-group">
        <input
          type="text"
          name="user_search"
          id="user_search"
          placeholder="Search User here..."
          className="user_table_search_user"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Salary</th>
            <th scope="col">Store</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayUserData()}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
