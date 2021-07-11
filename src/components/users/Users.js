import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import { Spinner } from "../layout/Spinner";

const Users = ({users,loading}) => {

  
    if(loading)
    {
      return <Spinner/>
    }
    else 
    {
    return (
    <div style={userStyle}>
        {users.map((user) => (
          //   <div key={user.id}>{user.login}</div>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
        }
  
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
Users.prototype={
  users : PropTypes.array.isRequired,
  loading : PropTypes.bool.isRequired
}


export default Users;
