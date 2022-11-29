import React from "react";

const ReadOnlyRow = ({ set, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{set.fullName}</td>
      <td>{set.address}</td>
      <td>{set.phoneNumber}</td>
      <td>{set.email}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, set)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(set.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ReadOnlyRow;
