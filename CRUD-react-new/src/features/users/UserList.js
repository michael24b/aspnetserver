import { Link } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import URL from "../../utilities/Constants";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get(`${URL}/api/Users/`)
      .then((res) => {
        setUsers(res.data);
        console.log("running");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRemoveUser = (userId) => {
    axios
      .delete(`${URL}/api/Users/${userId}`)
      .then((json) => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderCard = () =>
    users.map((user, index) => (
      <div
        className="bg-gray-300 p-5  flex items-center justify-between "
        key={index}
      >
        <div className="grid gap-2">
          <h3 className="font-bold text-lg text-gray-700">{`${user.firstName} ${user.lastName}`}</h3>
          <span className="font-normal text-gray-600">{`Phone:  ${user.phoneNumber}`}</span>
          <span className="font-normal text-gray-600">{`BirthDate:  ${user.birthDate}`}</span>
          <span className="font-normal text-gray-600">{`emailAddress: ${user.emailAddress}`}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-user/${user.userId}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(user.userId)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
