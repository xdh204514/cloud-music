import styled from "styled-components";

export const ListItemWrapper = styled.div`
  width: 130px;
  margin-top: 20px;

  .image {
    img {
      width: 130px;
      height: 130px;
    }
    cursor: pointer;
  }

  .divider {
    width: 100%;
    BORDER-TOP: #00686b 1px dashed; 
    OVERFLOW: hidden; HEIGHT: 1px
  }

  .info {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    .name {
      cursor: pointer;
      
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      cursor: pointer;
    }
  }

  .info2 {
    display: flex;
    justify-content: flex-start;

    .name {
      cursor: pointer;
      margin-right: 10px;
      
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      cursor: pointer;
    }
  }
`