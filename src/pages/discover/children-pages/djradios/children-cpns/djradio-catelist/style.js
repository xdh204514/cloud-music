import styled from "styled-components";

export const CateListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -33px;

  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }

  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`

export const CateListContent = styled.div`
  flex: 1;
  width: 900px;
  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #C20C0C;
      }
    }
  }

  .cate-page {
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;
    max-height: 200px;
    overflow: hidden;
  }

  .cate-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    height: 70px;
    margin: 0 0 25px 33px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    border: 2px solid transparent;

    :hover {
      background-color: #eee;
    }

    &.active {
      color: #C20C0C;
      border: 2px solid #d35757;

      .image {
        background-position: -48px 0;
      }
    }
  }
`

export const ItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`