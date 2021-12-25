import React from "react";

const HandbookSideNav = (props) => {

  const getHeading = () => {
    let result = [];
    const id = props.splitLocation[3] ? props.splitLocation[3] : 1;

    props.handbooks.map((handbook) => {
      // Link For the detail of handbook
      let link = `/admin/handbook/${handbook.id}`;

      // Check if the current title is active or not
      let class_name = (handbook.id == id) ? "active_handbook " : "";

      result.push(
        <div className={`${class_name}`} key={handbook.id}>
          <span className="handbook_side_link px-2 py-2">
            <a href={link}>{handbook.topic}</a>
          </span>
        </div>
      );
    });
    return result;
  };

  return (
    <React.Fragment>
      <div className="col-md-2">
        <div className="handbook_left bg-white side-menu">
          <div className="p-2">
            <h5>Handbook</h5>
            <hr />
            <span className="create_button py-1 pr-4 px-2">
              <a href="/admin/handbook/create">Create Handbook</a>
            </span>
            <hr />
            {getHeading()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HandbookSideNav;
