import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLPreviewProps } from "../typings/PrettifyXMLProps";
import XMLViewer from 'react-xml-viewer';

declare function require(name: string): string;

export default class preview extends Component<PrettifyXMLPreviewProps> {
    render(): ReactNode {
         return <XMLViewer 
         value={this.props.textAttribute} 
         attributeKeyColor = {this.props.attributeKeyColor}
         attributeValueColor = {this.props.attributeValueColor}
         cdataColor= {this.props.cdataColor}
         commentColor= {this.props.commentColor}
         separatorColor= {this.props.separatorColor}
         tagColor= {this.props.tagColor}
         textColor= {this.props.textColor}
         overflowBreak= {this.props.overflowBreak}/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PrettifyXML.css");
}
