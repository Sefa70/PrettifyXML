import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLPreviewProps } from "../typings/PrettifyXMLProps";
import "./ui/PrettifyXML.css";
import XMLViewer from "react-xml-viewer";

declare function require(xml: string): string;

export class preview extends Component<PrettifyXMLPreviewProps> {
    render(): ReactNode {
        const xml = "<Timeseries><Mendix>GoMakeIT</Mendix></Timeseries>";
        return (
            <div>
                <XMLViewer xml={xml} />
            </div>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/PrettifyXML.css");
}
