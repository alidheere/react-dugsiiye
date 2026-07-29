import React from "react";
const initialState = {
      step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

import { useReducer } from "react";

const MultipForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
const handleChange = (e) => {
  dispatch({
    type: "UPDATE_FIELD",
    field: e.target.name,
    value: e.target.value,
  });
};
  const handleSubmit = () => {
  alert('Form submitted successfully!');
    resetForm();
};
  const netxStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const resetForm = () => dispatch({ type: "RESET_FORM" });



  return (
    <div>
      <h2> Multi-Step Registration</h2>
      {state.step === 1 && (
        <div>
          <h3> stpe 1: profile</h3>
          <label>
            {" "}
            firstname
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <br />
          <label>
            last name
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <br />
          <button onClick={netxStep}> next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h3> step 2 : contect</h3>
          <label>
            email
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
     
            />
          </label>
          <br />
          <label>
            phone
            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
         
            />
          </label>
          <br />
          <button onClick={prevStep}> back</button>
          <button onClick={netxStep}> next</button>
        </div>
      )}
            {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.phone}
          </p>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}
            {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </div>
    
  );
};

export default MultipForm;
