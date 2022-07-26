import React from "react";
import { useDispatch } from "react-redux";
import { edit, modifyUser } from "../features/userSlice";
import { putProfile } from "../utils/apiCall";

function EditUser(props) {
  let firstName;
  let lastName;
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(modifyUser(firstName, lastName));
    putProfile(firstName, lastName);
  };
  const handleCancel = () => {
    dispatch(edit());
  };
  return (
    <div className="modal">
      <div className="edit-inputs">
        <input
          type="text"
          placeholder="First name"
          id="edit-first-name"
          onChange={(e) => (firstName = e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          id="edit-last-name"
          onChange={(e) => (lastName = e.target.value)}
        />
      </div>
      <div className="edits-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default EditUser;
