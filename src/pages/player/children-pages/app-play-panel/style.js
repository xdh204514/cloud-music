import styled from "styled-components";

export const AppPlayPanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 301px;
  color: #e2e2e2;

  .main {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 260px;
    overflow: hidden;
    background: url(${require("@/assets/img/playpanel_bg.png")}) -1015px 0 repeat-y;

    .img {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: .2;
    }
  }

`