import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";

import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const { name, avatar_url, location, login, html_url, hireable } =
    githubContext.userData;

  if (githubContext.loading) return <Spinner />;
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
      <Repos repos={githubContext.repos} />
    </Fragment>
  );
};

export default User;
