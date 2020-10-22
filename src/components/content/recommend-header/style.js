import styled from 'styled-components'

export const HeaderWrapped = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-position: -225px -156px;

  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #C10D0C;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  } 

  .keywords {
    display: flex;
    margin-left: 20px;

    .divider {
      margin: 0 10px;
      color: #ccc
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`