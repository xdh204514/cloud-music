import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  flex: 1;
  .header {
    display: flex;
    margin: 20px 0 0 20px;
    .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }
    .info {
      margin: 6px 0 0 10px;

      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        font-size: 14px;
        font-weight: bold;
      }

      .btns {
        display: flex;
        flex-direction: row;
      }

      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        
      }

      .play {
        &>a {
          background-position: -267px -205px;
        }
        &>a:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        &>a {
          background-position: -300px -205px;
        }
        &>a:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    margin-top: 20px;
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      :nth-child(-n+3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        &>a {
          display: inline-block;
          color: #000;
          cursor: pointer;
        }

        .name {
          flex: 1;
        }

        .operate {
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }
      
      &:hover {
        .operate {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          .btn1 {
            &>button:hover {
              background-position: -267px -288px;
            }
          }

          .btn2 {
            &>button:hover {
              position: relative;
              top: 2px;
              background-position: -22px -700px;
            }
          }

          .btn3 {
            &>button:hover {
              background-position: -297px -288px;
            }
          }
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`