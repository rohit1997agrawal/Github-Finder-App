import React, { Fragment, useEffect } from "react";
import { Spinner } from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    hireable,
  } = props.userData;

  if (props.loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      <br />
      <br />
      hireable : {"   "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} alt='img' style={{ width: "150px" }} />
          <strong>{login}</strong>
          <p>{name}</p>
          <p>{location}</p>
          <a href={html_url}> Visit github profile</a>
        </div>
      </div>
      <Repos repos={props.repos} />
    </Fragment>
  );
};

User.propTypes = {
  userData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
export default User;
