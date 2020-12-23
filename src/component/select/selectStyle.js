import styled from "styled-components";

const ZsselectWrapper = styled.div`
.ant-select:not(.ant-select-disabled) .ant-select-selector {
    background-color: #15151c;
    border: 1px solid #15151c;
    border-radius: 0px;
    color: #dddddd;
    height: 31px !important;
    padding: 0px 11px !important;
  }
  .ant-select {
    width: 100%;
  }
  .ant-select-selector:hover {
    border-color: transparent !important;
  }
  .ant-select-selector:focus {
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
    border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;
  }
  .ant-select-arrow {
    color: #dddddd;
    font-size: 10px;
    /* right: 20px; */
    /* bottom: 66%; */
    top: 60%;
  }
  
  .ant-select-focused {
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
    border-bottom: solid 0.3px rgb(101 104 111 / 0.3) !important;
  }
  
  .ant-select-focused.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none !important;
    border-color: transparent !important;
  }
  .ant-select-multiple .ant-select-selection-item {
    background-image: linear-gradient(to bottom, #111216, #111216) !important;
  }
  .ant-select-selection-item {
    font-size: 12px !important;
  }
  .ant-select-dropdown {
    box-shadow: 0 17px 17px 0 rgba(0, 0, 0, 0.3), 0 0 17px 0 rgba(0, 0, 0, 0.22);
    background-image: linear-gradient(to bottom, #15151c, #15151c),
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.4) 5%,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0)
      );
    border-radius: 1.4px;
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: rgba(18, 19, 25, 0.5) !important;
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: rgba(18, 19, 25, 0.5) !important;
    color: #dddddd;
    box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.35);
    background-image: linear-gradient(
      296deg,
      rgba(41, 210, 243, 0.12) 115%,
      rgba(60, 110, 178, 0.12) -11%
    );
  }
  .tip{
    display: none;
  }
  .ant-select-item-option-content:hover  .tip{
    display: block !important;
    position: absolute;
    z-index:9999;
    top:35px;
    left:30px;
    padding: 3px 8px;
    border-radius: 0.5px;
    border-top-left-radius: 0px;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #000000;
    color: #65686f;
    font-size: 12px;
    letter-spacing: 0.38px;
    max-width: 250px;
    word-break: break-word;
    white-space: normal;
    line-height: 18px;
    font-family: HelveticaNeue-Light;
  
  }
  .ant-select-arrow .anticon > svg {
    fill: #dddddd !important;
    height: 8px;
    width: 10px;
  }
  
  .ant-select-arrow .anticon:not(.anticon-down) > svg {
    fill: #dddddd !important;
    height: 11px;
    width: 11px;
  }
  
  .ant-select-arrow .anticon:not(.anticon-down) {
    margin-top: -3px;
  }
  
  .ant-empty-image {
    display: none;
  }
  
  .ant-select-selection-placeholder {
    font-family: HelveticaNeue-Light;
    font-size: 12px !important;
    font-weight: 400 !important;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.64px !important;
    color: #47494f !important;
    opacity: 1;
    padding: 0px !important;
  }
  
  .ant-select-item {
    font-family: HelveticaNeue-Light;
    font-size: 11px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.64px;
    color: #dddddd;
    /* min-height: 26px !important;
    line-height: 18px !important; */
  }
  
  .ant-select-item-group {
    color: #64676f !important;
    font-size: 10px !important;
    font-weight: 300;
  }
  
  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 27px;
    font-size: 12px;
  }
  
  .ant-empty-description {
    color: #64676f;
    font-size: 11px;
    letter-spacing: 0.64px;
    font-family: HelveticaNeue-Light;
  }
  `;
export default ZsselectWrapper;