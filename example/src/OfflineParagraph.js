import React from "react";
import PropTypes from "prop-types";

function OfflineParagraph(props) {
  const { offline } = props;
  return <p>{offline ? "🔇 You are offline" : "🔊  You are online"}</p>;
}

OfflineParagraph.propTypes = {
  offline: PropTypes.bool.isRequired,
};

export default OfflineParagraph;
