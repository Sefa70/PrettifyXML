/**
 * This file was generated from XMLView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface XMLViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    XMLInput: EditableValue<string>;
}

export interface XMLViewPreviewProps {
    class: string;
    style: string;
    sampleText: string;
    XMLInput: string;
}
