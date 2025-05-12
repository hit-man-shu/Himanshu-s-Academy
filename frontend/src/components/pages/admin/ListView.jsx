import React from "react";
import TableComponent from "../../common/TableComponent";

const ListView = ({ course, ...props }) => {
  return <TableComponent course={course} {...props} />;
};

export default ListView;
