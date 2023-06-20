import styled from "styled-components";

export const ProfileProductWrapper = styled.section`
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
`;
export const ProfileProductTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;

export const ProfileProductUl = styled.ul`
  display: flex;
  gap: 10px;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;
  ::-webkit-scrollbar{
    height: 12px;
}
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    box-shadow: white 1px 1px 2px inset;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(106, 106, 106);
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
    height: 5px;
  }
`;
export const ProfileProductLi = styled.li``;
export const ProfileProductButton = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
`;
export const ProfileProductImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid rgb(219, 219, 219);
`;
export const ProfileProductName = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: 6px 0px;
`;
export const ProfileProductPrice = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;