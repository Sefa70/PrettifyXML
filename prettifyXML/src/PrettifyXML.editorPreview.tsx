import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { PrettifyXMLPreviewProps } from "../typings/PrettifyXMLProps";

declare function require(name: string): string;

export class preview extends Component<PrettifyXMLPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PrettifyXML.css");
}
