import styled from "styled-components";

export const PlayerSimilarWrapper = styled.div`
  .simi-playlist {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`