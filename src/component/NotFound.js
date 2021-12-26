import React from "react";
import Layout from '../HOC/Layout';

const NotFound = () => {
  return (
    <div className="body">
      <Layout></Layout>
      <div className="text-center not_found">
        <h1>404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
