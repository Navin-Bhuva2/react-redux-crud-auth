import styled from "styled-components";

export const ButtonWrapAction = styled.button`
  box-sizing: border-box;
  appearance: none;
  min-width: 48px;
  height: 28px;
  border-radius: 3px;
  border: solid 0.3px rgba(51, 154, 206, 0.13);
  background-color: rgba(28, 43, 56, 0.43);
  cursor: pointer;
  align-self: center;
  color: #8c909b;
  font-size: 12px;
  font-weight: 500;
  font-family: HelveticaNeue-Medium;
  letter-spacing: 0.64px;
  text-align: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0px;
  color: #8c909b;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    outline: none !important;
    color: #000000;
    border-image: linear-gradient(290deg, #3980be, #2cc0e7);
    border-image-slice: 1;
    background-image: linear-gradient(290deg, #3980be, #2cc0e7);
    font-weight: 600;
  }
  .actionFillTrans{
    background:transparent !important;
}
  &:hover {
    .actionFill {
      path {
        fill: #121319;
      }
    }
    .actionFillTrans{
      background:transparent !important;
      line{
        stroke:#121319;
      }

  }
    .actionStroke {
      path {
        stroke: #121319;
      }
      circle{
        stroke: #121319;
      }
    }
  }
  &:focus {
    .actionFillTrans{
      background:transparent !important;
      line{
        stroke:#121319;
      }

    }
    .actionFill {
      path {
        fill: #121319;
      }
    }
    .actionStroke {
      path {
        stroke: #121319;
      }
      circle{
        stroke: #121319;
      }
    }
  }
  .ant-spin-dot-item {
    background-color: #000000 !important;
  }
  .ant-spin-sm .ant-spin-dot {
    font-size: 13px !important;
  }
  .ant-spin-spinning { margin-right:5px;
    position: relative;
    display: inline-block;
    opacity: 1;
    left: 0;
    top: 0;
  }
`;

export const ButtonWrap = styled.button`
  box-sizing: border-box;
  appearance: none;
  border-radius: 3px;
  background-image: linear-gradient(290deg, #3980be, #2cc0e7);
  border: none;
  cursor: pointer;
  align-self: center;
  font-family: HelveticaNeue-Medium;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.64px;
  text-align: center;
  color: #000000;
  text-align: center;
  line-height: 0px;
  min-width: 76px;
  height: 28px;
  line-height: 0px;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:hover {
    box-shadow: 0 2px 4px 0 #194961;
  }
  &:active {
    // opacity:0.6;
  }
  .ant-spin-dot-item {
    background-color: #000000 !important;
  }
  .ant-spin-sm .ant-spin-dot {
    font-size: 13px !important;
  }
  .ant-spin-spinning { margin-right:5px;
    position: relative;
    display: inline-block;
    opacity: 1;
    left: 0;
    top: 0;
  }
`;

export const ButtonWrap2 = styled.button`
  box-sizing: border-box;
  appearance: none;
  border-radius: 3px;
  border:solid 0.5px rgb(51 154 206 / 0.5);
  background-color: #121319;
  cursor: pointer;
  align-self: center;
  letter-spacing: 0.7px;
  text-align: center;
  color: #8c909b;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  text-decoration: none;
  line-height: 0px;
  height: 28px;
  min-width: 76px;
  transition: all 150ms ease-in-out;
  .ant-spin-spinning { margin-right:5px;
    position: relative;
    display: inline-block;
    opacity: 1;
    margin-right: 2px;
    top: 2px;
    left: 0;
  }
  .ant-spin-sm .ant-spin-dot {
    font-size: 13px !important;
  }
  &:hover,
  &:focus {
    outline: 0;
    color: #000000;
    border-image-slice: 1;
    box-shadow: 0 2px 4px 0 #194961;
    background-image: linear-gradient(291deg, #3980be, #2cc0e7);
    font-weight: 600;
    border: none;
  }

  .ant-spin-dot-item {
    background-color: #000000 !important;
  }
`;
export const UploadButtonWrap = styled.div`
  width: 80px;
  height: 16px;
  border-radius: 1.5px;
  background-color: #15151c;
  cursor: pointer;
  .ant-upload-list-item-sucess,
  .ant-upload-list-item-error .ant-upload-text-icon > .anticon,
  .ant-upload-list-item-sucess .ant-upload-list-item-name {
    color: #47494f;
  }
  .ant-upload-list-item
    ant-upload-list-item-error
    ant-upload-list-item-list-type-text {
    :hover {
      background: red;
    }
  }
  .ant-upload-list-item-info .anticon-loading .anticon,
  .ant-upload-list-item-info .ant-upload-text-icon .anticon {
    position: absolute;
    top: 5px;
    color: #dddddd;
    font-size: 14px;
  }
  .ant-upload-list-item-card-actions {
    position: absolute;
    right: 0;
    opacity: 1;
    /* color: #dddddd; */
  }
  .ant-upload-list-item-card-actions .anticon {
    margin-top: -24px;
    padding-right: 6px;
  }
  .ant-upload-list-item-info {
    height: 100%;
    color: #dddddd;
    padding: 0 12px 0 4px;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  .ant-upload-list-item {
    position: relative;
    height: 22.001px;
    margin-top: 5px;
    width: 150px;
    font-size: 13px;
  }
  .ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
    width: 33.5px;
    height: 6.5px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: 0.32px;
    color: #47494f;
  }
  .ant-tooltip-content {
    width: 33.5px;
    height: 6.5px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: 0.32px;
    color: #47494f;
  }
  .labupload {
    width: 33.5px;
    height: 6.5px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0px;
    letter-spacing: 0.32px;
    color: #47494f;
  }
`;
