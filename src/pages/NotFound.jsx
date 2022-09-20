import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      This page doesnt`t exist
      <Button
        style={{ justifyContent: "center" }}
        onClick={() => navigate("/")}
      >
        Go Home Page
      </Button>
    </Wrapper>
  );
};

export default NotFound;
