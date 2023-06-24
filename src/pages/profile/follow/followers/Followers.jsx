import React from "react";
import FollowersTopHeader from "../../../../components/commons/topHeader/FollowersTopHeader";
import { FollowersWrapper } from "./followers.style";
import FollowerList from "./FollowerList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FollowerListUl } from "./followerList.style";
import followerAPI from "./followerAPI";
import MenuBar from "../../../../components/commons/menuBar/MenuBar";

export default function Followers() {
  const [followerData, setFollowerData] = useState([]);

  const { userId } = useParams();


  // 팔로워 데이터 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await followerAPI(userId);
        setFollowerData(data);
        console.log("followerData", followerData);
      } catch (error) {
        console.error(
          "팔로워 데이터를 가져오는 중 오류가 발생했습니다:",
          error,
        );
      }
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <FollowersTopHeader />
      <FollowersWrapper>
        <FollowerListUl>
          {followerData.map((follower) => {
            return (
              <FollowerList
                account={userId}
                follower={follower}
                key={follower._id}
              />
            );
          })}
        </FollowerListUl>
      </FollowersWrapper>
      <MenuBar />
    </>
  );
}
