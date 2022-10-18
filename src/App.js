import Moon from "./assets/icon-moon.svg"
import styled from "styled-components";
import Search from "./components/search";
import Sun from "./assets/icon-sun.svg";
import { useState } from "react";

function App() {
const [mode, setMode] = useState(Moon);
const [dark ,setDark] = useState("Dark")

const handleClick = () => {
  if (mode === Moon) {
    setMode(Sun);
    setDark("Light")

    
  } else {
    setMode(Moon);
    setDark("Dark")
  }
};
  return (
    <FullCont isDark = {mode===Moon} >
      <Header isDark ={mode === Moon}>
        <p> GithubUserInfo</p>
        <span onClick={handleClick}> {dark} <img src={mode}/> </span>
      </Header>
      <Search isDark={mode === Moon}/>
    </FullCont>
  );
}

export default App;


const FullCont = styled.div`
/* background-color:#F6F8FF; */
background-color: ${(props) => (props.isDark ? "#F6F8FF" : "#141D2F")};
padding:24px;
height:100vh;`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
`