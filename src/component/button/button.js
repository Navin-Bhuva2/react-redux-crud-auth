import React, { Component } from 'react';
import { ButtonWrap, ButtonWrap2, ButtonWrapAction } from './buttonStyle';
import { Spin } from 'antd';

class ZsButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fileList: [],
        }
    }

    render() {
        const { type, title, loading, ...rest } = this.props;
        if (type === "upload") {
            return (
                "btn"
                // <ButtonWrap style={styles} {...rest}>
                //     <Upload {...bprops}>
                //         <span className="labupload">Browse</span>
                //         <img style={{ height: "13px", width: "13px", marginLeft: "10px" }} alt="uploadlogo" onChange={(e)=>this.filesubmit()} src={FolderLogo} />
                //     </Upload>
                // </ButtonWrap>

            )
        }
        else if (type === "file") {
            return (
                <ButtonWrap  {...rest}>
                    <input type="file" />
                </ButtonWrap>
            )
        }
        else if (type && type === 'primary') {
            return (
                <ButtonWrap {...rest} disabled={loading}>
                    {loading ? <Spin size="small" /> : null}{loading ? "   " + title ? title : "" : title}
                </ButtonWrap>
            )
        }

        else if (type && type === 'secondary') {
            return (
                <ButtonWrap2 {...rest} disabled={loading}>
                    {loading ? <Spin size="small" /> : null}{loading ? "   " + title ? title : "" : title}
                </ButtonWrap2>
            )
        }
        else if (type && type === 'action') {
            return (
                <ButtonWrapAction {...rest} disabled={loading}>
                    {loading ? <Spin size="small" style={{ marginLeft: "6px", marginTop: "3px" }} /> : null}{loading ? "   " + title ? title : "" : title}
                </ButtonWrapAction>
            )
        }
        else {
            return (

                <ButtonWrap2 {...rest} disabled={loading}>
                    {loading ? <Spin size="small" /> : null}{loading ? "" + title : <span>{title}</span>}
                </ButtonWrap2>
            )
        }
    }
}

export default ZsButton;