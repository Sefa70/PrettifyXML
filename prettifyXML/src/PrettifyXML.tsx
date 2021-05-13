import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLContainerProps } from "../typings/PrettifyXMLProps";
import { Prettify } from "./components/Prettify";

import "./ui/PrettifyXML.css";

export default class Pretttify extends Component<PrettifyXMLContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        return <Prettify 
        value={value}
        style={this.props.style}
        className={this.props.class}
        tabIndex={this.props.tabIndex}
        onUpdate={this.onUpdateHandle}
        disabled={this.props.textAttribute.readOnly}

        />;
    }
    private onUpdate(value: string): void {
        this.props.textAttribute.setValue(value);
    }
}


