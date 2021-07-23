import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlertFunc("Please enter something", "Light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          onChange={onChange}
          type='text'
          name='text'
          value={text}
          placeholder='Search users......'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {githubContext.users.length > 0 && (
          <input
            type='button'
            value='Clear'
            onClick={githubContext.clearUsers}
            className='btn btn-light btn-block'
          />
        )}
      </form>
    </div>
  );
};

export default Search;
