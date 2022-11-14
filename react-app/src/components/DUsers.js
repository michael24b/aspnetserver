import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dUser";
import UsersForm from "./DUserForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Th from "./Th";
import Td from "./Td";


const DUsers = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllDUsers();
  }, [props]);

 
  const onDelete = (userId) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteDUser(userId,
         () =>
        toast("Deleted successfully", { appearance: "info" })
      );
  };
  return (
    <React.Fragment>
      
        <div >
          <div className="container flex flex-col mx-auto p-6 lg:flex-row">
            <UsersForm {...{ currentId, setCurrentId }} />
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <Th text="ID" />
                        <Th text="First Name" />
                        <Th text="Last Name" />
                        <Th text="Phone Nbr" />
                        <Th text="BirthDate" />
                        <Th text="Email" />
                        <Th text="Edit" />
                        <Th text="Delete" />
                        
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {props.dUserList.map((record, index) => {
                        return (
                          <tr key={index}>
                            <Td text={index+1} />
                            <Td text={record.firstName} />
                            <Td text={record.lastName} />
                            <Td text={record.phoneNumber} />
                            <Td text={record.birthDate} />
                            <Td text={record.emailAddress} />
                           
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                className="text-green-500 hover:text-green-700"
                                href
                                onClick={() => {
                                  setCurrentId(record.userId);
                                }}
                              >
                                Edit
                              </button>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                className="text-red-500 hover:text-red-700"
                                href
                                onClick={() => onDelete(record.userId)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <ToastContainer />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
    dUserList: state.dUser.list
})

const mapActionToProps = {
    fetchAllDUsers: actions.fetchAll,
    deleteDUser: actions.Delete
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(DUsers);