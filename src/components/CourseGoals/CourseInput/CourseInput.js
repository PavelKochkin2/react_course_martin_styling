import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setIsInputValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isInputValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <div hidden={isInputValid}>Invalid input baby</div>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
