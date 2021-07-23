import React from "react";
import ReposItems from "./ReposItems";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  return repos.map((repo) => <ReposItems repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
