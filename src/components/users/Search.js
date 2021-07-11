import React , {useState} from 'react'
import PropTypes from "prop-types";

const Search = ({showClear,clearUsers,searchUsers}) =>
{
        const [text, setText] = useState('')

        const onChange = e =>   setText(e.target.value);

        const onSubmit = e =>{
                e.preventDefault();
                searchUsers(text);
                setText('')
        }
        
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input onChange={onChange} type="text" name="text" value={text} placeholder="Search users......" />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                   {showClear && <input type="button" value="Clear" onClick={clearUsers}  className="btn btn-light btn-block"/> }
                </form>
            </div>
        )
    
}

Search.prototype={
    searchUsers: PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired
}

export default Search
