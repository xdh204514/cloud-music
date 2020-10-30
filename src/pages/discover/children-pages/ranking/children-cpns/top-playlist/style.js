import styled from "styled-components";

export const TopPlayListWrapper = styled.div`
  
  .header {
    font-size: 14px;
    color: #000;
    font-family: simsun;
    font-weight: bold;
    margin-top: 20px;
    padding: 6px 0 8px 20px;
  }

  .active {
    background: #e6e6e6;
  }

  .item {
    display: flex;
    align-items: center;
    height: 62px;
    padding: 8px 0 8px 20px;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
    }
    
    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 15px;
      font-family: Arial, Helvetica, sans-serif;

      .name {
        color: #000;
      }
      .update {
        color: #999;
      }
    }
  }
`