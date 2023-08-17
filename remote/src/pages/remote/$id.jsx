import React from "react";
import { useParams } from "react-router-dom";

const DynamicRemotePage = () => {
  const { id } = useParams();

  return <div>DynamicRemotePage, Param: {id}</div>;
};

export default DynamicRemotePage;
