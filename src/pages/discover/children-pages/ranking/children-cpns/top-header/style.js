import styled from "styled-components";

export const TopHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  padding: 40px;
`

export const TopHeaderLeft = styled.div`
  width: 158px;
  height: 158px;
  padding: 3px;
  border: 1px solid #ddd;
`

export const TopHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 158px;
  padding: 20px;

  .name {
    font-size: 20px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .info {
    display: flex;
    align-items: center;
    color: #666;
    margin: 8px 0 10px;

    .clock {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-position: -18px -682px;
      position: relative;
      top: -2px;
      margin-right: 3px;
    }

    .update-f {
      color: #999;
    }
  }
`
