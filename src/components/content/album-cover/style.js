import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  font-size: 12px;
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size  + "px"};
    overflow: hidden;
    margin-top: 15px;

    &>img {
      width: ${props => props.size  + "px"};
      height: ${props => props.size  + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp + "px"};
      text-indent: -9999px;
    }

    :hover .play {
      position: absolute;
      right: 25px;
      bottom: 5px;
      background-position: 0 -85px;
      width: 22px;
      height: 22px;
      text-indent: -9999px;
      cursor: pointer;

      &:hover {
        background-position: 0 -110px;
        cursor: pointer;
      }
    }
  }

  .album-info {
    display: flex;
    flex-direction: column;
    width: ${props => props.size + "px"};
    .name {
      color: #000
    }
    
    .artist {
      color: #666
    }
  }
`
