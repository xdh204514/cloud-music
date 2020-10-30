import styled from "styled-components";

export const PanelHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 41px;
  line-height: 41px;
  background: url(${require("@/assets/img/playpanel_bg.png")}) -1px 0;
`

export const PanleHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 553px;
  justify-content: space-between;
  padding: 0 10px 0 25px;
  
  h3 {
    font-size: 14px;
    color: #e2e2e2;
    font-weight: bold;
  }

  .operator {
    button {
      background-color: transparent;
      color: #ccc;
    }

    .btn1:hover {
      &>.favor {
        background-position: -24px -20px;
      }
    }

    .btn2:hover {
      &>.delete {
        background-position: -51px -20px;
      }
    }

    .icon {
      display: inline-block;
      position: relative;
      top: 3px;
      right: 2px;
      margin-right: 5px;
      width: 16px;
      height: 15px;
    }
    
    .favor {
      background-position: -24px 0;
    }

    .favor:hover {
      background-position: -24px -20px;
    }

    .delete {
      background-position: -51px 0;
    }

    .delete:hover {
      background-position: -51px -20px;
    }
  }
`

export const PanleHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 433px;
  padding: 0 10px;
  color: #fff;
  font-size: 14px;

  .closeBtn {
    background-color: transparent;
    color: #ccc;
    position: absolute;
    right: 10px;

    .icon {
      display: inline-block;
      position: relative;
      top: 3px;
      right: 2px;
      margin-right: 5px;
      width: 10px;
      height: 10px;
    }

    .close {
      background-position: -205px 0;
      &:hover{
        background-position: -205px -30px;
      }
    }
  }
`