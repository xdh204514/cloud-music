import styled from "styled-components";

export const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const PlayerInfoLeft = styled.div`
  width: 206px;
  

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 198px;
    height: 198px;

    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
    }
  }

  .link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-top: 2px;
      background-position: -34px -863px;
    }

    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`

export const PlayerInfoRight = styled.div`
  width: 414px;
  padding: 0 0 0 20px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .icon {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }

      .name {
        font-size: 24px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 10px;
      }

      .mv {
        display: inline-block;
        width: 21px;
        height: 15px;
        background-position: 0 -18px;
        cursor: pointer;
      }
    }
    .alia {
      font-size: 14px;
      color: #bababa;
      margin-left: 64px;
    }
  }

  .singer, .album {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    a {
      color: #0c73c2;
      cursor: pointer;
    }
  }

  .lyric {
    margin-top: 30px;

    p {
      height: 23px;
      line-height: 3px;
      font-size: 14px;
    }

    .lyric-control {
      position: relative;
      color: #0c73c2;
      background-color: #fff;
      cursor: pointer;
      padding-left: 0;

      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -8px;
        top: 5px;
        background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
      }
    }
  }
`