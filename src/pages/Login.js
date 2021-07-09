import { gql, useMutation } from "@apollo/client";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onSubmit, onChange, values } = useForm(loginUserCallback,{
    username:"",
    password:"",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result.data.login);
      context.login(result.data.login);
      props.history.push("/");
    },
    onError(err) {
      // console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback(){
    loginUser();
  }

  return (
    context.user? 
    <Redirect to="/"/>:
    <div className="Login Form wrapper">
      <h2>Login</h2>
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
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={onChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Login{loading && "g in..."}</button>
        {errors.general && <p className="error">{errors.general}</p>}
      </form>
      <p className="toggleauth">Don't have an Account? <Link to="/register">Register</Link></p>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(
        username: $username
        password: $password
    ){
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
