import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import URL from "../../utilities/Constants";

const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDate: "",
    emailAddress: "",
  });

  const handleAddUser = () => {
    const clear = () => {
      setValues({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDate: "",
        emailAddress: "",
      });
    };

    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      birthDate: values.birthDate,
      emailAddress: values.emailAddress,
      Type: "Add",
    };

    axios
      .post(`${URL}/api/Users/`, data)
      .then(() => {
        clear();
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="firstName"
        value={values.firstName}
        onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        inputProps={{ type: "text", placeholder: "Michael" }}
      />
      <br />
      <TextField
        label="lastName"
        value={values.lastName}
        onChange={(e) => setValues({ ...values, lastName: e.target.value })}
        inputProps={{ type: "text", placeholder: "Baaklini" }}
      />
      <br />
      <TextField
        label="phoneNumber"
        value={values.phoneNumber}
        onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
        inputProps={{ type: "text", placeholder: "70 411 982" }}
      />
      <br />
      <div className="flex flex-col">
        <label className="mb-2 text-base text-gray-800">birthDate</label>

        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
          type="date"
          placeholder="birthDate"
          label="birthDate"
          value={values.birthDate}
          onChange={(e) => setValues({ ...values, birthDate: e.target.value })}
        />
      </div>
      <br />

      <TextField
        label="emailAddress"
        value={values.emailAddress}
        onChange={(e) => setValues({ ...values, emailAddress: e.target.value })}
        inputProps={{
          type: "email",
          placeholder: "michael_baaklini@hotmail.com",
        }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
