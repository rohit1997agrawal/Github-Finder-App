import React from "react";
import ReposItems from "./ReposItems";
/* import PropTypes from "prop-type"; */
const Repos = ({ repos }) => {
  return repos.map((repo) => <ReposItems repo={repo} key={repo.id} />);
};

/* Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}; */
export default Repos;
