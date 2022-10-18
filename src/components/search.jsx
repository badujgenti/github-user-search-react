import { useState } from "react";
import styled from "styled-components";
import lupe from "../assets/icon-search.svg";
import Card from "./card";

function Search(props) {
  const [name, setName] = useState("badujgenti");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
  };

  return (
    <>
      <MainDiv onSubmit={SubmitHandler} isDark={props.isDark}>
        <Lupe src={lupe} alt="lupe" />
        <TextInput
          type="search"
          placeholder="Search GitHub username..."
          isDark={props.isDark}
        />
        <Submit type="submit"> Search</Submit>
      </MainDiv>
      <Card name={name} setName={setName} isDark={props.isDark} />
    </>
  );
}

export default Search;

const MainDiv = styled.form`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  padding-right: 7px;
  padding-left: 16px;
  margin-top: 35px;
  margin-bottom: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  background-color: ${(props) => (props.isDark ? "#FFFFFF" : "#1E2A47")};
  border-radius: 20px;
`;

const Lupe = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 12px;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => (props.isDark ? "#FFFFFF" : "#1E2A47")};
  color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
`;

const Submit = styled.button`
  height: 46px;
  width: 84px;
  background: #0079ff;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 600;
`;
