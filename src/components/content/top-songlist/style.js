import styled from "styled-components";

export const TopSongListWrapper = styled.div`
  padding: 0 30px 40px 40px;

  .song-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;

      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }

        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 91px;
        }

        .singer {
          width: 173px;
        }
      }

      tbody {
        tr {
          &:hover{
            td {
              .operator {
                .duration {
                  display: none;
                }
                .btns {
                  display: flex;
                }
              }
            }
          }
        }
        td {
          padding: 6px 10px;
        }

        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          width: 307px;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            &:hover{
              cursor: pointer;
            }
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            &:hover{
              cursor: pointer;
              background-position: 0 -128px;
            }
          }

          .name {
            margin-left: 10px;
            &:hover{
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }

        .operator {
          width: 79px;
          .duration {
            display: flex;
          }

          .btns {
            display: none;
            flex-direction: row;
            cursor: pointer;

            .add {
              background-position: 0 -700px;
              width: 13px;
              height: 13px;
              margin-top: 2px;
              &:hover {
                background-position: -22px -700px;
              }
            }
            .favor {
              background-position: -44px -87px;
              width: 18px;
              height: 16px;
              margin: 2px 0 0 4px;
              &:hover {
                background-position: -44px -110px;
              }
            }
            .share {
              background-position: -45px -137px;
              width: 18px;
              height: 16px;
              margin: 2px 0 0 4px;
              &:hover {
                background-position: -45px -160px;
              }
            }
            .download {
              background-position: -83px -174px;
              width: 14px;
              height: 15px;
              margin: 2px 0 0 4px;
              &:hover {
                background-position: -106px -174px;
              }
            }
          }
        }

        .singer-name {
          display: flex;
          width: 153px;
        }
      }
    }
  }
`