import React,{ useEffect } from "react";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/dUser";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const styles = theme => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             minWidth: 230,
//         }
//     },
//     smMargin: {
//         margin: theme.spacing(1)
//     }
// })
const initialFieldValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  birthDate: "",
  emailAddress: "",
};


const DUserForm = ({ classes, ...props }) => {

    //toast msg.
    

    //validate()
    //validate({firstName:'jenny'})
    // const validate = (fieldValues = values) => {
    //     let temp = { ...errors }
    //     if ('firstName' in fieldValues)
    //         temp.firstName = fieldValues.firstName ? "" : "This field is required."
    //     if ("lastName" in fieldValues)
    //         temp.lastName = fieldValues.lastName ? "" : "This field is required.";
    //     if ('phoneNumber' in fieldValues)
    //         temp.phoneNumber = fieldValues.phoneNumber ? "" : "This field is required."
    //     if ('emailAddress' in fieldValues)
    //         temp.emailAddress = (/^$|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "emailAddress is not valid."
    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldValues === values)
    //         return Object.values(temp).every(x => x === "")
    // }

    const {
      values,
      setValues,
      setErrors,
      handleInputChange,
      resetForm,
    } = useForm(initialFieldValues, props.setCurrentId);

    const handleSubmit = e => {
        e.preventDefault();
      const onSuccess = () => {
        resetForm();
        toast("Submitted successfully", { appearance: "success" });
      }
        if (props.currentId === 0) props.createDUser(values, onSuccess)
        else props.updateDUser(props.currentId, values, onSuccess)
       
    }

    useEffect(() => {
      if (props.currentId !== 0) {
        setValues({
          ...props.dUserList.find((x) => x.userId === props.currentId),
        });
        setErrors({});
      }
    }, [props.currentId]);

    return (
      <React.Fragment>
        <div className="flex mx-auto">
          <div className="w-full ">
            <form
              className="grid gap-4 grid-cols-2 bg-white shadow-md rounded  pt-6 pb-8 mb-4"
              autocomplete="off"
              onSubmit={handleSubmit}
            >
             
              <div className="m-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleInputChange}
                  value={values.firstName}
                />
              </div>
              <div className="m-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  value={values.lastName}
                />
              </div>
              <div className="m-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Nbr
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Nbr"
                  onChange={handleInputChange}
                  value={values.phoneNumber}
                />
              </div>
              <div className="m-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  BirthDate
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="birthDate"
                  type="text"
                  placeholder="BirthDate"
                  onChange={handleInputChange}
                  value={values.birthDate}
                />
              </div>
              <div className="m-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="emailAddress"
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={values.emailAddress}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
               

                <button
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="Submit"
                >
                  Submit
                </button>
                <button
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={resetForm}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          
        </div>
        <ToastContainer />
      </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
  dUserList: state.dUser.list,
});

const mapActionToProps = {
    createDUser: actions.create,
    updateDUser: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(DUserForm);