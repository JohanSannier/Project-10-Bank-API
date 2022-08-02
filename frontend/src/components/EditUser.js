import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, modifyUser } from "../features/userSlice";
import { putProfile } from "../utils/apiCall";

function EditUser(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const handleSave = async () => {
    const profile = await putProfile(firstName, lastName);
    console.log(profile);
    dispatch(
      modifyUser({
        firstName: profile.body.firstName,
        lastName: profile.body.lastName,
      })
    );
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
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last name"
          id="edit-last-name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="edit-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default EditUser;
