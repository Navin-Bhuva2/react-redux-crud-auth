import React from 'react';
import { Select } from 'antd';
import ZsselectWrapper from "./selectStyle";

const { Option, OptGroup } = Select;

const ZsSelect = (props) => {
    const { data, nested, search, optionFilterProp, value, onChange, id,
        label, placeholdertext, requiredentry, error, errormsg, width, login, pointerEvents } = props;
    if (search) {
        return (
            <div style={{ width: width ? width : "100%" }}>
                {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}
                <Select id={id} style={{ width: width ? width : "100%", borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "0.3px solid transparent" }} showSearch {...props} value={value ? value : undefined}
                    placeholder={placeholdertext}
                    optionFilterProp={optionFilterProp ? optionFilterProp : "children"}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                    {data && data.map(i =>
                        <Option key={i.value} value={i.value}>{i.name}</Option>
                    )}
                </Select>
                {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
            </div>
        );
    }
    else {
        return (
            (nested ?
                <div style={{ width: width ? width : "100%" }}>
                    {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}
                    <Select id={id} placeholder={placeholdertext} style={{ width: width ? width : "100%", borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "0.3px solid transparent", pointerEvents: pointerEvents ? pointerEvents : "all" }} {...props} showSearch>
                        {data.map(i => <OptGroup label={i.type} key={i.type}>
                            {i.field.map(j => <Option key={i.type + j} value={j} type={i.type} onChange={() => onChange(j, i.type)}>
                                {j}<span className="tip">{j}</span>
                            </Option>)}
                        </OptGroup>)}

                    </Select>
                    {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
                </div >
                :
                <div style={{ width: width ? width : "100%" }}>
                    {label && (requiredentry ? login && !error ? <div id={"labelText_" + id} className="controlLabel">{label}</div> : <div id={"labelRequiredText_" + id} className="controlLabel">{label} </div> : <div id={"labelText_" + id} className="controlLabel">{label}</div>)}
                    <Select id={id} onChange={props.onChange} style={{ width: width ? width : "100%", borderBottom: error ? "0.3px solid rgba(255, 89, 89, 0.3)" : "0.3px solid transparent", pointerEvents: pointerEvents ? pointerEvents : "all" }} placeholder={placeholdertext} value={value ? value : undefined}>

                        {data.map(d => <Option value={d.value ? d.value : d} key={d.value ? d.value : d}>
                            <div style={{ display: "flex" }}>{props.preicon && d.value === props.value ? <div>{props.preicon}</div> : ""}<span style={{ marginTop: props.preicon ? "2px" : "0px" }}>{d.name ? d.name : d}</span></div>
                        </Option>)}
                    </Select>
                    {error ? <div className="errorText" style={{ width: width ? width : "100%" }}>{errormsg}</div> : ""}
                </div>)
        );
    }
}
export default ZsSelect;
