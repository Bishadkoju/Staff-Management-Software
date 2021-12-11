import React from 'react'

function Leave_table() {
    return (
        <div className="div_format mt-4 pt-3">
            <span className="heading_text">My leave History</span>
            <div className="check_in_table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">From-To Date</th>
                    <th scope="col">Paid/Unpaid</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Approved By</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted muted_text">15 Nov 2021 - 15 Nov 2021</td>
                    <td>Paid</td>
                    <td className="text-muted muted_text">Sick</td>
                    <td className="text-muted muted_text">Headached</td>
                    <td className="text-muted muted_text">Ram</td>
                    <td>
                      <input
                        type="checkbox"
                        name="action_check_in"
                        id="action_check_in"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted muted_text">15 Nov 2021 - 15 Nov 2021</td>
                    <td>Paid</td>
                    <td className="text-muted muted_text">Sick</td>
                    <td className="text-muted muted_text">Headached</td>
                    <td className="text-muted muted_text">Ram</td>
                    <td>
                      <input
                        type="checkbox"
                        name="action_check_in"
                        id="action_check_in"
                      />
                    </td>
                  </tr>

                </tbody>
              </table>
              <div className="see_more_check_in_table d-flex justify-content-end">
                <div>
                  <a href="" className="btn btn-primary">See More...</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Leave_table
