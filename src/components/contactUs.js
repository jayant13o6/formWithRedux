import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { formActions } from "../store/form";

const initialFormValue = {
  name: "",
  email: "",
  query: "",
};

const ContactUs = () => {
  const { form } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = React.useState(initialFormValue);

  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setFormValue((prevValue) => {
        return {
          ...prevValue,
          name: e.target.value,
        };
      });
    } else if (type === "email") {
      setFormValue((prevValue) => {
        return {
          ...prevValue,
          email: e.target.value,
        };
      });
    } else {
      setFormValue((prevValue) => {
        return {
          ...prevValue,
          query: e.target.value,
        };
      });
    }
  };

  const formSubmitHandler = () => {
    if (
      formValue.name.trim().length === 0 ||
      formValue.email.trim().length === 0 ||
      formValue.query.trim().length === 0
    ) {
      window.alert("Please Enter values");
      return;
    }

    if (!formValue.email.includes("@")) {
      window.alert("Please Enter a valid email");
      return;
    }

    dispatch(formActions.insertFormData(formValue));
  };

  return (
    <>
      <div>Contact Us</div>
      <form>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => onChangeHandler(e, "name")}
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => onChangeHandler(e, "email")}
        />
        <input
          type="text"
          placeholder="enter your query"
          onChange={(e) => onChangeHandler(e, "query")}
        />
        <button type="button" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>Name: {form.name}</div>
        <div>Email: {form.email}</div>
        <div>Query: {form.query}</div>
      </div>
    </>
  );
};
export default ContactUs;
