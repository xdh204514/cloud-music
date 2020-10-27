import styled from 'styled-components';

export const MusicListWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #000;
  }

  .item {
    display: flex;
    position: relative;
    margin-left: 1px;
    width: 100%;
    padding: 0 10px 0 25px;
    color: #ccc;
    cursor: pointer;

    &:hover{
      color: #fff;
      background-color: rgba(0,0,0,0.3);
      .item-right {
        .operator {
          .favor {
            background-position: -24px 0;
            &:hover{
              background-position: -24px -20px;
            }
          }

          .share {
            background-position: 0 0;
            &:hover{
              background-position: 0 -20px;
            }
          }

          .download {
            background-position: -57px -50px;
            &:hover{
              background-position: -80px -50px;
            }
          }

          .delete {
            background-position: -51px 0;
            &:hover{
              background-position: -51px -20px;
            }
          }
        }
      }
    }

    &.active {
      color: #fff;
      background-color: rgba(0,0,0,0.3);
      ::before {
        content: "";
        position: absolute;
        left: 8px;
        top: 4px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/sprite_playlist.png")}) -182px 0;
      }
    }

    .item-left {
      display: flex;
      align-items: center;
      width: 250px;
    }

    .item-right {
      display: flex;
      align-items: center;
      width: 268px;

      .operator {
        button {
          background-color: transparent;
        }
        .icon {
          display: inline-block;
          position: relative;
          top: 3px;
          right: 2px;
          margin-right: 2px;
          width: 16px;
          height: 15px;
        }
      }

      .info {
        display: flex;
        justify-content: space-between;

        .singer {
          width: 80px;
          margin-right: 5px;
        }

        .duration {
          width: 40px;
        }

        .link {
          width: 14px;
          height: 16px;
          background-position: -100px 0;
          &:hover{
            background-position: -80px -20px;
          }
        }
      }
    }
  }

`