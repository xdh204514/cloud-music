import styled from "styled-components";

export const PlayerSongWrapper = styled.div`
  margin-top: 20px;

  .simi-songlist {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .info {
        display: flex;
        flex-direction: column;

        .name {
          color: #333;
          font-size: 14px;
        }

        .singers {
          display: flex;
          color: #999;
        }
      }

      .operator {
        display: flex;
        justify-content: flex-end;
        
        button {
          cursor: pointer;
        }

        .icon {
          display: inline-block;
          width: 10px;
          height: 11px;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }

        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`