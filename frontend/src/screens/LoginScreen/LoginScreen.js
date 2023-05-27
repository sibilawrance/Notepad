import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import Error from "../../components/Error.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useNavigate } from "react-router-dom"



const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin)
  const {loading , error , userInfo } = userLogin
 

  useEffect(() => {
    if(userInfo){ 
      
      navigate("/mynotes")
    }

  } ,[navigate , userInfo]); 

  const submitHandler = async (e) => {
    e.preventDefault(); 
    dispatch(login(email,password)) 
  }

  return ( 
    <div>
      <MainScreen title="LOGIN">
      { error && <Error variant="danger">{error}</Error>}
      { loading && <Loading/>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MainScreen>
    </div>
  );
};

export default LoginScreen;
