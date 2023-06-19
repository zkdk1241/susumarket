import React, { useState } from "react";
import backIcon from "../../../img/icon-arrow-left.svg";
import {
  TopHeaderWrapper,
  TopHeaderBackBtn,
  TopHeaderBackIcon,
  TopHeaderSearchInput,
} from "./TopHeaderStyle.js";
import { useNavigate } from "react-router-dom";

export default function SearchTopHeader({ children }) {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState("");

  // 이전 페이지로 이동시키는 함수
  function onClickBack(url) {
    navigation(url);
  }

  return (
    <TopHeaderWrapper>
      <TopHeaderBackBtn onClick={() => onClickBack("/post")}>
        <TopHeaderBackIcon src={backIcon} alt="뒤로가기" />
      </TopHeaderBackBtn>
      {/* input 스타일링 필요 */}
      <input type="text" placeholder="계정검색" />
    </TopHeaderWrapper>
  );
}
