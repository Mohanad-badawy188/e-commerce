import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ImgContainer } from "./Shop/StoreMain";
import {
  Container,
  CreateAcc,
  DontHaveAcc,
  ForgotPassword,
  Heading,
  Input,
  SubHeading,
  SubmitBtn,
  Wrap,
} from "./SignIn";
import { useForm } from "react-hook-form";

import Hpic from "../images/HomePageS6.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "./redux/UserSlice";
import { Img } from "./HomePage/HomePageSectionSix";

function SignUp() {
  const [Errors, setErrors] = useState(false);
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (User.error) {
      setErrors(User.errorDetails);
    }

    localStorage.setItem("user", JSON.stringify(User.user));
    if (User.user.length !== 0) {
      location.reload();
    }
  }, [User]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(RegisterUser(data));
  };

  return (
    <div>
      <Header />
      <Container>
        <Wrap style={{ height: "550px" }}>
          <Heading> Sign Up </Heading>
          <SubHeading> Please Sign up using account detail bellow. </SubHeading>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <Input
              type="text"
              placeholder="User Name"
              {...register("firstName")}
            />
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {User?.error && <div style={{ color: "red" }}>{Errors}</div>}
            <SubmitBtn style={{ marginTop: "40px" }}>Sign Up</SubmitBtn>
          </form>
        </Wrap>
        <ImgContainer>
          <Img src={Hpic} />
        </ImgContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default SignUp;
