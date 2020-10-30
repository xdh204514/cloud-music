import styled from "styled-components";

export const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left {
    display: flex;
    h2 {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 20px;
    }

    span {
      margin: 9px 0 0 20px;;
      color: #666;
      font-size: 12px;
    }
  }

  .right {
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;

    span {
      color: #c20c0c;
    }
  }
`