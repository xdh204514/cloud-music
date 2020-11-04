import styled from "styled-components";

export const RecommendListWrapper = styled.div`
  
  .recommend-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  img {
    width: 150px;
    height: 150px;
  }
  .name {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }

  p {
    color: #666;
  }
` 