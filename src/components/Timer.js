import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

function Timer() {
  const [time, setTime] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime({
        hour: date.getHours(),
        min: date.getMinutes,
        sec: date.getSeconds,
      });
    }, 1000);
  }, []);
  return (
    <Container>
      <h1>{`${time.hour} ":" ${time.min} ":" ${time.sec}`}</h1>
    </Container>
  );
}

export default Timer;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-family: "Roboto slab", sans-serif;
  }
`;

const Main = styled.div``;
