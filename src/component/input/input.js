import { Input, Tag, InputNumber, Tooltip } from "antd";
import ZsInputWrapper from "./inputStyle";
import Icons from "../icons/icons";
import React, { Component } from "react";
import $ from "jquery";
const { TextArea } = Input;

export class zsInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      editInputIndex: -1,
      editInputValue: "",
      passType: "password"
    };
  }

  componentDidMount() {
    $("#" + this.props.id).on("focus focusout", function () {
      let focusplaceholdertext = $(this).attr("data-focus-placeholder");
      let placeholdertext = $(this).attr("placeholder");

      $(this).attr("placeholder", focusplaceholdertext);
      $(this).attr("data-focus-placeholder", placeholdertext);
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {};
    return Object.keys(update).length > 0 ? update : null;
  }

  // chip functionali ty started.........

  handleClose = (removedTag, i) => {
    let tags = [];
    if (this.props.value) {
      tags = this.props.value.split(",");
      tags.splice(i, 1);
      if (this.props.onChange) {
        this.props.onChange({ target: { value: tags.toString() } });
      }
    }
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let tags = [];
    if (this.props.value) {
      tags = this.props.value.split(",");
    }
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
      if (this.props.onChange) {
        this.props.onChange({ target: { value: tags.toString() } });
      }
    }
    this.setState({ inputValue: "" });
  };

  saveInputRef = input => {
    this.input = input;
  };

  // chip functionality end..........

  visiblepassword = e => {
    this.setState({ passType: e });
  };
  saveEditInputRef = input => {
    this.editInput = input;
  };
  passshow = (
    <Icons
      type="eyeopen"
      style={{ cursor: "pointer" }}
      onClick={() => this.visiblepassword("password")}
    />
  );
  passhide = (
    <Icons
      type="eyeclose"
      style={{ cursor: "pointer" }}
      onClick={() => this.visiblepassword("text")}
    />
  );
  handlePassword = (e) => {
    this.setState({ passType: "password" })
    this.props.onChange(e)
  }
  render() {
    const { inputValue, passType } = this.state;
    const { requirecc, requirebcc, ccclick, bccclick, style, queryresize, tempsearch, textarea, rows, value, id, password, width, searchclear, label, requiredentry, placeholdertext, chip, search, numeric, focusplaceholdertext, error, errormsg, login } = this.props;
    const suffix1 = <Icons type="search" style={{ cursor: "pointer" }} />;
    const suffix = (
      <Icons
        type="searchremove"
        onClick={searchclear}
        style={{ cursor: "pointer" }}
      />
    );

    if (chip) {
      let tagLoop = [];
      if (value) {
        tagLoop = value.split(",");
      }
      return (
        <div style={{ width: width ? width : "100%" }}>
          <ZsInputWrapper>
            {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}
            <div style={{ display: "flex", background: "#15151c" }}>
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small" id={id}
                data-focus-placeholder={focusplaceholdertext}
                style={{ borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none", width: width ? width : "100%", height: "32px", background: "#15151c" }}
                placeholder={placeholdertext}
                className="tag-input"
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
                suffix={
                  <div style={{ display: "flex" }}>
                    <div className="ddReq" style={{
                      padding: "0px 5px", color: "#8488a0", fontSize: "12px", cursor: "pointer", display: requirecc ? "block" : "none",
                      fontFamily: "HelveticaNeue-Light"
                    }} onClick={ccclick}>CC</div>
                    <div className="ddReq" style={{
                      marginRight: "5px", color: "#8488a0", fontSize: "12px", display: requirebcc ? "block" : "none",
                      cursor: "pointer", fontFamily: "HelveticaNeue-Light"
                    }} onClick={bccclick}>BCC</div></div>
                }


              />
              {/* {requirecc?<div className="ddReq" style={{lineHeight:"32px",padding:"0px 5px",color:"#8488a0",fontSize:"12px",cursor:"pointer",fontFamily:"HelveticaNeue-Light"}} onClick={ccclick}>CC</div>:""} */}
            </div>
          </ZsInputWrapper>
          {tagLoop.length > 0 && (
            <div
              className="mask3"
              style={{
                // display: "block",
                // resize:"both",
                // opacity: "1",
                // // transition: "display 1s, opacity 1s, top 1s",
                // minHeight: "2px",
                // background: "#15151c",
                // position: "relative",
                // // top: "-4px",
                // paddingBottom: "10px",
                maxHeight: "100%",
                width: " 100%",
                background: "#15151c",
                display: "flex",
                flexWrap: "wrap",
                overflow: "auto",
                padding: tagLoop.length > 0 ? "8px 14px" : "1px",
                alignContent: "baseline",
                resize: "vertical",
                minHeight: "1px",
                top: "-4px",
                position: "relative",
                borderBottom: error && tagLoop.length > 0 ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none"
              }}
            >
              <div className="menuContent" style={{ boxShadow: "none" }}>
                <div className="tagCont">
                  {tagLoop.map((tag, index) => {
                    const isLongTag = tag.length > 35;

                    const tagElem = (
                      <Tag
                        className="edit-tag"
                        key={tag}
                        closable="true"
                        onClose={() => this.handleClose(tag, index)}
                        style={{
                          height: "22px",
                          borderRadius: "16px",
                          border: "none",
                          background: "#24609f",
                          color: "#dddddd"
                        }}
                      >
                        <span className="selectTags">
                          {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                      </Tag>
                    );
                    return isLongTag ? (
                      <Tooltip title={tag} key={tag}>
                        {tagElem}
                      </Tooltip>
                    ) : (
                        tagElem
                      );
                  })}
                </div>
              </div>
            </div>
          )}
          {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
        </div>
      );
    } else if (search) {
      return (
        <ZsInputWrapper style={{ width: "230px" }}>
          <Input className="searchBr"
            autoComplete="off"
            id={id} placeholder={placeholdertext ? placeholdertext : "Search"}
            data-focus-placeholder={focusplaceholdertext ? focusplaceholdertext : "Search for anything"}
            style={{ width: "230px", border: "none", borderRadius: "5px" }}
            onChange={this.props.onChange}
            value={this.props.value}
            suffix={value ? suffix : suffix1} 
          />
        </ZsInputWrapper>
      );
    } else if (numeric) {
      return (
        <ZsInputWrapper style={{ width: width ? width : "100%" }}>
          {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} style={{ width: width ? width : "100%" }} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} style={{ width: width ? width : "100%" }} className="controlLabel">{label} </div> : <div id={"labelText_" + id} style={{ width: width ? width : "100%" }} className="controlLabel">{label}</div>)}
          <InputNumber id={id} autoComplete="off" placeholder={placeholdertext}
            data-focus-placeholder={focusplaceholdertext}
            style={{ borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none", width: width ? width : "100%" }}
            {...this.props} />
          {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
        </ZsInputWrapper>
      );
    } else if (password) {
      return (
        <ZsInputWrapper style={{ width: width ? width : "100%" }}>
          {label && (requiredentry && !login ? <div id={"labelRequiredText_" + id} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}
          <Input
            autoComplete="off"
            id={"passwordbox_" + id}
            placeholdertext={placeholdertext ? placeholdertext : ""}
            {...this.props}
            onChange={(e) => this.handlePassword(e)}
            type={passType}
            placeholder={placeholdertext}
            data-focus-placeholder={focusplaceholdertext}
            suffix={passType === "text" ? this.passshow : this.passhide}
            style={{ borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none", width: width ? width : "100%", height: "32px", background: "#15151c" }}
          />
          {error ? <div className="errorText">{errormsg}</div> : ""}
        </ZsInputWrapper>
      );
    }
    else if (tempsearch) {
      return (<ZsInputWrapper style={{ width: width ? width : "160px", float: "right" }}>
        <Input className="searchBr"
          autoComplete="off"
          id={id} placeholder="Search"
          style={{ width: width ? width : "160px", border: "none", background: "transparent" }}
          onChange={this.props.onChange}
          value={this.props.value}
          prefix={<Icons type="tempsearch" />} {...this.props}
        />
      </ZsInputWrapper>)
    }

    else if (queryresize) {
      return (<ZsInputWrapper style={{ width: "88px", maxWidth: "350px", border: "none" }}>
        <Input
          autoComplete="off"
          id={id}
          style={style}
          suffix={this.props.suffix} {...this.props}
        />
      </ZsInputWrapper>)
    }

    else {
      return (
        <ZsInputWrapper style={{ width: width ? width : "100%" }}>
          {label && (requiredentry && !login ? <div id={"labelRequiredText_" + id} style={{ width: width ? width : "100%" }} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}

          {/* {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} className="controlLabel">{label} <ColorDot type="requiredText" size="3px" style={{ margin: "0px" }} /></div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)} */}
          {textarea ? (
            <TextArea
              autoComplete="off"
              id={"textarea_" + id}
              rows={rows}
              placeholder={placeholdertext}
              data-focus-placeholder={focusplaceholdertext}
              style={{ borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none", width: width ? width : "100%", padding: "11px" }}
              {...this.props}
            />
          ) : (
              <Input
                id={id}
                placeholder={placeholdertext}
                data-focus-placeholder={focusplaceholdertext}
                autoComplete="off"
                size="default"
                style={{ borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "none", width: width ? width : "100%" }}
                {...this.props}
              />
            )}
          {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
        </ZsInputWrapper>
      );
    }
  }
}

export default zsInput;
