import React from "react";

const HandbookSideNav = (props) => {
  const getHeading = () => {
    let result = [];
    const id = props.splitLocation[3] ? Number(props.splitLocation[3]) : 0;

    props.handbooks.map((handbook) => {
      // Link For the detail of handbook
      let link = `/dashboard/handbook/${handbook.id}`;

      // Check if the current title is active or not
      let class_name = handbook.id === id ? "active_handbook " : "";
      console.log("handbook id", handbook.id);
      console.log("id : ", id);

      result.push(
        <div className={`${class_name} my-2`} key={handbook.id}>
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
      <div className="col-md-3">
        <div className="handbook_left bg-white side-menu">
          <div className="p-2">
            <h5 className="px-2">Handbook</h5>
            <hr />
            {getHeading()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HandbookSideNav;
