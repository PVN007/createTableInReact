import React, { Fragment, useState } from "react";
import data from "./Data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./Componenets/ReadOnlyRow";
import EditableRow from "./Componenets/EditableRow";
import "./Table.css";

const Table = () => {
  //===============================>Add data<=================================//
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  //===================================>edit form data<==============================//
  const [editContactId, setEditContactId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const handleEditClick = (event, set) => {
    event.preventDefault();
    setEditContactId(set.id);
    const formValue = {
      fullName: set.fullName,
      address: set.address,
      phoneNumber: set.phoneNumber,
      email: set.email
    };
    setEditFormData(formValue);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  // =====================================> handle Cancel ==============================//
  const handleCancleClick = () => {
    setEditContactId(null);
  };

  //=======================================> Delete Row =================================//

  const handleDeleteClick = (contectId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contectId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((set, key) => (
              <Fragment>
                {editContactId === set.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancleClick={handleCancleClick}
                  />
                ) : (
                  <ReadOnlyRow
                    set={set}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h1>Add a contact</h1>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter full name ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter phone number ..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email ..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Table;
