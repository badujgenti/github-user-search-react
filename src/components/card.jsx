import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import location from "../assets/icon-location.svg";
import chain from "../assets/icon-website.svg";
import company from "../assets/icon-company.svg";
import twitter from "../assets/icon-twitter.svg";

function Card({ name, setName, isDark }) {
  const [user, setUser] = useState([]);
  const createdAt = user?.created_at?.split("T")[0].split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${name} `);
      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <MainCard isDark={isDark}>
      <PicAndInfo isDark={isDark}>
        <img src={user.avatar_url} alt="avatar" />
        <div>
          <h1>{user.name}</h1>
          <p> @{user.login}</p>
          <span>
            Joined {createdAt && createdAt[2]}{" "}
            {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}
          </span>
        </div>
      </PicAndInfo>
      <Bio isDark={isDark}>
        <p>{user.bio}</p>
      </Bio>
      <Followers isDark={isDark}>
        <div>
          <p>Repos</p>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
      </Followers>
      <Info isDark={isDark}>
        <p>
          <img
            style={{ height: "20px", width: "14px" }}
            src={location}
            alt="location"
          />{" "}
          {user.location}
        </p>
        <p>
          <img
            style={{ height: "20px", width: "20px" }}
            src={chain}
            alt="chain"
          />{" "}
          {user.url}
        </p>
        <p>
          <img
            style={{ height: "20px", width: "16px" }}
            src={twitter}
            alt="twitter"
          />{" "}
          {user.twitter_username}
        </p>
        <p>
          <img
            style={{ height: "20px", width: "20px" }}
            src={company}
            alt="company"
          />{" "}
          {user.company}
        </p>
      </Info>
    </MainCard>
  );
}

export default Card;

const MainCard = styled.div`
  height: 517px;
  left: 0px;
  top: 0px;
  border-radius: 15px;
  background-color: ${(props) => (props.isDark ? "#FFFFFF" : "#1E2A47")};

  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 32px 24px;
  font-size: 18px;

  @media (min-width: 800px) {
    height: 444px;
    width: 730px;
    left: 0px;
    top: 0px;
    border-radius: 15px;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 70px;
    width: 70px;
    left: 24px;
    top: 32px;
    border-radius: 45px;
    @media (min-width: 800px) {
      height: 117px;
      width: 117px;
      left: 40px;
      top: 40px;
      border-radius: 60px;
    }
  }
`;
const PicAndInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 33px;
  color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
`;

const Followers = styled.div`
  height: 85px;
  width: 279px;
  left: 24px;
  top: 233px;
  color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
  border-radius: 10px;
  background-color: ${(props) => (props.isDark ? "#F6F8FF" : "#141D2F")};
  border-radius: 10px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 800px) {
    width: 100%;
    gap: 50px;
  }
`;

const Info = styled.div`
  p {
    font-size: 12px;
    color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
  }
  img {
    height: 16.249984741210938px;
    width: 19.999980926513672px;
    left: 0px;
    top: 1.875px;
    border-radius: 0px;
  }
`;

const Bio = styled.div`
  color: ${(props) => (props.isDark ? "#1E2A47" : "#F6F8FF")};
`;
