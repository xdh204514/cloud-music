import styled from 'styled-components'


export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;
  font-size: 13px;

  /* &>a{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  } */

  .cover-top {
    position: relative;
    &:hover {
      cursor: pointer;
    }
    .img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }

        .play:hover {
          background-position: 0 -60px;
        }
      }
    }
  }

  .cover-name {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-writer {
    color: #666;
  }
`