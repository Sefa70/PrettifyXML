/**
 * This file was generated from PrettifyXML.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface PrettifyXMLContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    attributeKeyColor: string;
    attributeValueColor: string;
    cdataColor: string;
    commentColor: string;
    separatorColor: string;
    tagColor: string;
    textColor: string;
    IndentSize: number;
    invalidXml: string;
    overflowBreak: boolean;
    collapsible: boolean;
}

export interface PrettifyXMLPreviewProps {
    class: string;
    style: string;
    textAttribute: string;
    attributeKeyColor: string;
    attributeValueColor: string;
    cdataColor: string;
    commentColor: string;
    separatorColor: string;
    tagColor: string;
    textColor: string;
    IndentSize: number | null;
    invalidXml: string;
    overflowBreak: boolean;
    collapsible: boolean;
}
