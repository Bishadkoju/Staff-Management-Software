import React from "react";
import ActionMenuTable from "./ActionMenuTable";

const AdminUserTable = () => {
  return (
    <div class="user_table div_format pt-4">
      <div class="form-group">
        <input
          type="text"
          name="user_search"
          id="user_search"
          placeholder="Search User here..."
          class="user_table_search_user"
        />
      </div>
      <table class="table">
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
            <td class="text-muted">Mark</td>
            <td class="text-muted">Manager</td>
            <td class="text-muted">mark@gmail.com</td>
            <td class="text-muted">9823413123</td>
            <td class="text-primary">$ 15.01</td>
            <td class="text-primary">$10</td>
            <td class="text-primary">$14</td>
            <td>
              <ActionMenuTable />
            </td>
          </tr>
          <tr>
            <td class="text-muted">Jacob</td>
            <td class="text-muted">Admin</td>
            <td class="text-muted">jacob@gmail.com</td>
            <td class="text-muted">9823413123</td>
            <td class="text-primary">$ 15.01</td>
            <td class="text-primary">$10</td>
            <td class="text-primary">$14</td>
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
