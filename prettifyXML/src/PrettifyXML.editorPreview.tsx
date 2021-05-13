import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLPreviewProps } from "../typings/PrettifyXMLProps";
import { Prettify } from "./components/Prettify";

declare function require(name: string): string;

export default class preview extends Component<PrettifyXMLPreviewProps> {
    render(): ReactNode {
         return <Prettify value={this.props.textAttribute} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PrettifyXML.css");
}
