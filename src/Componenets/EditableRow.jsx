import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancleClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter full name ..."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address ..."
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter phone number ..."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email ..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancleClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
export default EditableRow;
