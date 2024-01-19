import React from "react";
import PropTypes from "prop-types";

const Page = ({ children }) => {
  return (<section className="content">{children}</section>)
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
