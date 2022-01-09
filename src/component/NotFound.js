import React from "react";
import Background from "./background/background.component";
import Header from "./header/header.compoent";

const NotFound = () => {
  return (
    <div >
      <Background />
        <Header />
      <div className="text-center not_found">
        <h1 className="not_found_text">404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
