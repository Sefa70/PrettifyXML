import { Component, ReactNode, createElement } from "react";
import { PrettifyXMLContainerProps } from "../typings/PrettifyXMLProps";
import XMLViewer from 'react-xml-viewer';


import "./ui/PrettifyXML.css";

export default class Pretttify extends Component<PrettifyXMLContainerProps> {
        
        render(): ReactNode {
        const xml = this.props.textAttribute.value || "";
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
        collapsible     = {collapsible}style={this.props.style}
        className       = {this.props.class}
        tabIndex        = {this.props.tabIndex}
        disabled        = {this.props.textAttribute.readOnly}    
        />
        </div>);
        }
}
