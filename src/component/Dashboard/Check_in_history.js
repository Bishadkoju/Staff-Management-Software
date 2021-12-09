import React from 'react'

function Check_in_history() {
    return (
        <div className="div_format mt-4 pt-3">
            <span className="heading_text">Check in/out History</span>
            <div className="check_in_table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Check In</th>
                    <th scope="col">Check Out</th>
                    <th scope="col">Total Hours</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted muted_text">15 Nov 2021</td>
                    <td>Jawalakhel</td>
                    <td className="text-muted muted_text">09:45 AM</td>
                    <td className="text-muted muted_text">08:45 PM</td>
                    <td className="text-muted muted_text">8 hr 6 mins</td>
                    <td>
                      <input type="checkbox" name="action_check_in" id="action_check_in" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-muted muted_text">15 Nov 2021</td>
                    <td>Jawalakhel</td>
                    <td className="text-muted muted_text">09:45 AM</td>
                    <td className="text-muted muted_text">08:45 PM</td>
                    <td className="text-muted muted_text">8 hr 6 mins</td>
                    <td>
                      <input type="checkbox" name="action_check_in" id="action_check_in" />
                    </td>
                  </tr>

                  <tr>
                    <td className="text-muted muted_text">15 Nov 2021</td>
                    <td>Jawalakhel</td>
                    <td className="text-muted muted_text">09:45 AM</td>
                    <td className="text-muted muted_text">08:45 PM</td>
                    <td className="text-muted muted_text">8 hr 6 mins</td>
                    <td>
                      <input type="checkbox" name="action_check_in" id="action_check_in" />
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

export default Check_in_history
