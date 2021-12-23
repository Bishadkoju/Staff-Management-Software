import React from "react";
import ActionMenuTable from "./ActionMenuTable";

const AdminUserTable = () => {
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
            <th scope="col">Commission</th>
            <th scope="col">Bonus</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-muted">Mark</td>
            <td className="text-muted">Manager</td>
            <td className="text-muted">mark@gmail.com</td>
            <td className="text-muted">9823413123</td>
            <td className="text-primary">$ 15.01</td>
            <td className="text-primary">$10</td>
            <td className="text-primary">$14</td>
            <td>
              <ActionMenuTable />
            </td>
          </tr>
          <tr>
            <td className="text-muted">Jacob</td>
            <td className="text-muted">Admin</td>
            <td className="text-muted">jacob@gmail.com</td>
            <td className="text-muted">9823413123</td>
            <td className="text-primary">$ 15.01</td>
            <td className="text-primary">$10</td>
            <td className="text-primary">$14</td>
            <td>
              <ActionMenuTable />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
