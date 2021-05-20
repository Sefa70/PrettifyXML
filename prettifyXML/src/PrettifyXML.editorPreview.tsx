import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLPreviewProps } from "../typings/PrettifyXMLProps";
import XMLViewer from 'react-xml-viewer';
import "./ui/PrettifyXML.css";

declare function require(xml: string): string;

export default class preview extends Component<PrettifyXMLPreviewProps> {
        
        render(): ReactNode {
        const xml = this.props.textAttribute || "";
        const customTheme = {
        "attributeKeyColor"     :this.props.attributeKeyColor,
        "attributeValueColor"   :this.props.attributeValueColor,
        "cdataColor"            :this.props.cdataColor,
        "commentColor"          :this.props.commentColor,
        "separatorColor"        :this.props.separatorColor,
        "tagColor"              :this.props.tagColor,
        "textColor"             :this.props.textColor,
        "overflowBreak"         :this.props.overflowBreak
        }
        const collapsible = {
        "collapsible"           :this.props.collapsible
        }
  
  return (<div className="style">
        <XMLViewer
        xml             = {xml}
        theme           = {customTheme}
        indentSize      = {this.props.indentSize}
        invalidXml      = {this.props.invalidXml}
        collapsible     = {collapsible}
        style           = {this.props.style}
        className       = {this.props.class}
        
        />
        </div>);
        }
}

export function getPreviewCss(): string { 
    return require("./ui/PrettifyXML.css");
}
