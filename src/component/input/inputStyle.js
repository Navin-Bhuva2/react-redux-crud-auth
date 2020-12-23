import styled from "styled-components";

const ZsInputWrapper = styled.div`
  position: relative;
  .ant-input {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border:none;
  }

  .mask3{
   
  }
  textarea{
    overflow:none;
    border-radius: 3px;
    background-color: #202027 !important;
  }
  .tag-input{
    border:none !important;
    &:focus{
      border:none !important;
    }
  }
  .ant-input-affix-wrapper > input.ant-input {
    padding: 0;
    border: none !important;
    outline: none;
    height: 28px;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
    color: rgba(255, 255, 255, 0.6);
    font-family: HelveticaNeue-Light;
    background: transparent !important;

    &:focus{
      box-shadow:none !important;
    }
  }
  input.ant-input {
    border: 0.3px solid transparent;
  }
  .ant-input-suffix {
    margin-left: 10px;
  }
  .ant-input-affix-wrapper:hover {
  }
  .ant-input-affix-wrapper:focus {
    outline: 0;
  }
  .ant-input-suffix > span {
    margin: 0px !important;
    padding: 0px !important;
  }
  .ant-input-search-icon::before {
    border: none !important;
  }

  .ant-input-search {
    border-radius: 2.5px;
    .ant-input {
      height: 33px;
    }
  }
  .ant-input-group-addon {
    border: none;
    position: relative;
    padding: 0 11px;
    color: #a3a4a9;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    background-color: #111216;
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-input-focused {
    box-shadow: none !important;
    border-color: transparent !important;
    outline: 0;
  }
  .ant-input-number-handler-wrap {
    background: transparent;
    border-radius: 2px;
    border-color: transparent;
    opacity: 1 !important;
  }
  // .ant-input-number-handler {
  //   border-radius: 2px;
  //   background-color: #191922;
  //   border: none;
  //   opacity:1;
  // }
  .ant-input-number-handler-up {
    height: 50% !important;
    border: 1px solid #15151c !important;
    background: #191922;
    border-radius: 2px;
    svg {
      fill: #8c909b;
      width: 14px;
      height: 9px;
      margin-top: -2px;
    }
    &:hover {
      height: 50% !important;
      background: linear-gradient(304deg, #3882bf 95%, #2fb7e2 5%);
      svg {
        fill: #ffffff !important;
      }
    }
  }
  .ant-input-number-input{
    height:32px !important;
  }
  .ant-input-number-handler-down {
    height: 50% !important;
    border: 1px solid #15151c !important;
    border-radius: 2px;
    background: #191922;
    svg {
      fill: #8c909b;
      width: 14px;
      height: 9px;
    }
    &:hover {
      height: 50% !important;
      background: linear-gradient(304deg, #3882bf 95%, #2fb7e2 5%);
      svg {
        fill: #ffffff !important;
      }
    }
  }

  .ant-input-number-focused {
    box-shadow: none !important;
    border-color: #15151c;
    outline: 0;
  }

  .ant-input-number {
    width: 100%;
    transition: none;
    height: 32px;
    border-radius: 3px;
    background-color: #15151c;
    border: none;
    font-family: HelveticaNeue-Light;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
    color: #dddddd;
    &:hover {
      box-shadow: none !important;
    }

    &:focus {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
      border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;
      outline: 0;
      
    }
  }
  .ant-input-prefix {
    margin-right: 4px;
    margin-bottom:1px;
}
  .ant-input {
    width: 100%;
    height: 32px;
    border-radius: 3px;
    background-color: #15151c;
    font-family: HelveticaNeue-Light;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
    color: #dddddd;
    transition: none;

    &:hover {
      box-shadow: none !important;
      border-color: transparent;
    }

    &:focus {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
      border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;
      outline: 0;
    }
  }
  .ant-input-affix-wrapper {
    border: none;
    border-radius: 1.3px;
    background-color: rgba(17, 18, 22, 0.63);
    padding: 0px 10px;
    height: 28px;
    width: 160px;

    &:hover {
    }
    .ant-input {
      border: none !important;
    }
    &:focus {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
      border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;
      outline: 0;
    }
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
    border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;

    outline: 0;
  }
  .ant-input-number-focused {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
    border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;

    outline: 0;
    outline-offset: 0px !important;
    border-color:#65686f;
  }

  .ant-input:focus, .ant-input-focused{
    border-right-width:0px !important;
  }

  .searchBr{
    border:none !important;
  }
`;
export default ZsInputWrapper;
export const ZsInputWrapper1 = styled.div`
.ant-input-affix-wrapper > input.ant-input {
  height: 25px !important;
  color: #666666 !important;
  background: transparent !important;
}
`