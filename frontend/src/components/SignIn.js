import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { ImgContainer } from "./Shop/StoreMain";
import Hpic from "../images/HomePageS6.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./redux/UserSlice";
import { Img } from "./HomePage/HomePageSectionSix";

export const Container = styled.div`
  min-height: 80vh;
`;
export const Wrap = styled.div`
  height: 400px;
  width: 450px;
  margin: 150px auto;
  background: #ffffff;
  box-shadow: 0px 0px 25px 10px #f8f8fb;
  padding: 40px;
  @media (max-width: 550px) {
    width: 70%;
    height: 550px;
  }
`;
export const Heading = styled.div`
  font-family: "Josefin Sans";
  font-size: 32px;
  line-height: 38px;

  color: #000000;
  text-align: center;
`;
export const SubHeading = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #9096b2;
  margin-bottom: 25px;
`;
export const Input = styled.input`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 5px 30px;
  width: 80%;
  margin: 15px auto;
  height: 40px;
  color: #9096b2;
  border: 1px solid #c2c5e1;
  border-radius: 2px;
`;

export const ForgotPassword = styled.div`
  font-family: "Lato";
  font-style: normal;
  flex-direction: column;

  margin-bottom: 30px;
  cursor: pointer;
  color: #9096b2;
`;
export const SubmitBtn = styled.button`
  background: #fb2e86;
  border-radius: 3px;
  height: 50px;
  padding: 5px 30px;
  width: 94%;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;

  color: #ffffff;
`;
export const DontHaveAcc = styled.div`
  margin-top: 25px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #9096b2;
  display: flex;
  justify-content: center;
`;
export const CreateAcc = styled.div`
  cursor: pointer;
  color: #9096b2;

  &:hover {
    color: #fb2e86;
  }
`;

function SignIn() {
  const [Errors, setErrors] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const User = useSelector((state) => state.user);
  const onSubmit = async (data) => {
    dispatch(loginUser(data));

    console.log(User);
  };
  console.log(User);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(User?.user));
    if (User.user.length !== 0) {
      location.reload();
    }

    if (User.error) {
      setErrors(User.errorDetails);
    }
    console.log(User);
  }, [User]);
  return (
    <div>
      <Header />
      <Container>
        <Wrap>
          <Heading> Login </Heading>
          <SubHeading> Please login using account detail bellow. </SubHeading>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
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
            <ForgotPassword>Forgot your password?</ForgotPassword>
            <SubmitBtn>Sign In</SubmitBtn>
          </form>
          {User?.error && (
            <div style={{ color: "red", margin: "10px" }}>{Errors}</div>
          )}

          <DontHaveAcc>
            Don't have an Account?{" "}
            <Link to={"/signUp"} style={{ textDecoration: "none" }}>
              <CreateAcc>Create account</CreateAcc>
            </Link>
          </DontHaveAcc>
        </Wrap>
        <ImgContainer>
          <Img src={Hpic} />
        </ImgContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default SignIn;
