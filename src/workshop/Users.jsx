import { useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Call data from https://jsonplaceholder.typicode.com/users
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    console.log(response);
	// setUsers(response.data);
  })

  return (
    <div>
		  Demo with API.
    </div>
  )
}

export default Users