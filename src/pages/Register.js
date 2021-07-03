import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "../util/hooks";
import "./Register.css";

function Register(props) {
  const [errors, setErrors] = useState({});

  //UseForm is a custom Hook that handles the input states and functions
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      // console.log(result);
      props.history.push("/");
    },
    onError(err) {
      // console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="Register Form wrapper">
      <h2>Register</h2>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values.username}
          onChange={onChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={onChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={onChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={onChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button type="submit">Register{loading && "ing..."}</button>
      </form>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
