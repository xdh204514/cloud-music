import styled from 'styled-components';

export const TopBannerWrapped = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    display: flex;
    position: relative;
    height: 285px;
    background-color: red;
  }
`

export const TopBannerLeft = styled.div`
  width: 730px;
  background-color: yellow;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .img {
      width: 100%;
      height: 285px;
    }
  }
`

export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")});
`

export const TopBannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    top: -31px;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`