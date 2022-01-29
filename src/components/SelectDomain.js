import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../features/language/langSlice";
import styled from "styled-components";
import { setDomain, setName, setError } from "../features/quiz/user";
import { ifSubmit } from "../features/submit/submit";
import { reset } from "../features/quiz/qcount";

function Home() {
  const opt = [
    {
      id: 0,
      name: "Web Developement",
      route: "webdev",
    },
    {
      id: 1,
      name: "App Developement",
      route: "appdev",
    },
    {
      id: 2,
      name: "IoT",
      route: "iot",
    },
    {
      id: 3,
      name: "Cyber Security",
      route: "cyber",
    },
    {
      id: 4,
      name: "AR/VR",
      route: "arvr",
    },
    {
      id: 5,
      name: "Data Science",
      route: "datascience",
    },
    {
      id: 6,
      name: "Robotics",
      route: "robotics",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState({ hour: "" });
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime({
        hour: date.getHours(),
      });
      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, []);

  useEffect(() => {
    if (time.hour === 1) {
      setOpen(false);
    }
  }, [time.hour]);

  const clickHandler = (name) => {
    dispatch(changeLanguage(name));
    navigate(name);
    dispatch(setDomain(name));
    dispatch(setName(""));
    dispatch(ifSubmit(false));
    dispatch(reset());
    dispatch(setError(""));
  };

  return (
    <>
      <Wrapper>
        <Heading>Choose Your favorate domain and attend the quiz</Heading>
        <h4>Before starting make sure you are comfortable</h4>
        <ButtonGroup>
          {opt.map((item) => {
            return (
              <Button
                disabled={open ? false : true}
                key={item.id}
                onClick={() => clickHandler(item.route)}
                variant="contained"
              >
                {item.name}
              </Button>
            );
          })}
          <Button variant="contained" onClick={() => navigate("/")}>
            Read Instructions
          </Button>
          <Button onClick={() => navigate("/rank")}>Rank list</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}

export default Home;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: black;
  color: white;
  padding: 10px;
  h4 {
    padding: 10px;
    text-align: center;
  }
`;

export const Button = styled.button`
  background: ${(props) =>
    props.variant === "contained"
      ? props.disabled
        ? "#333"
        : "linear-gradient(to left,blue,rgba(68, 2, 255, 1))"
      : "transparent"};
  border: none;
  color: white;
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0px 10px 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 2px solid ${(props) => (props.variant ? "transparent" : "blue")};
  transition: 0.5s;
  &:hover {
    background: black;
    border: 2px solid blue;
    color: blue;
    letter-spacing: 2px;
  }
  font-family: Roboto slab;
  @media (min-width: 600px) {
    width: 41.33333%;
    margin: 20px;
  }
`;

export const ButtonGroup = styled.div`
  width: 80%;
  margin: auto;
  @media (min-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
  padding: 20px 10px;
  margin: 10px 0px;
  color: ${(props) => (props.color ? "blue" : "")};
  letter-spacing: 1px;
  line-height: 35px;
  border-bottom: 2px solid #333;
`;
