import React from "react";
import { useParams } from "react-router-dom";

const ZoneContent = () => {
  const { zoneID } = useParams();
  return <div> zone id: {zoneID}</div>;
};

export default ZoneContent;
