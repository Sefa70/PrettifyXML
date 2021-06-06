import { Component, CSSProperties, ReactNode, createElement } from "react";
import classNames from "classnames";
import XMLViewer from "react-xml-viewer";

export interface PrettifyProps {
    xml: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    disabled?: boolean;
    attributeKeyColor: string;
    attributeValueColor: string;
    cdataColor: string;
    commentColor: string;
    separatorColor: string;
    tagColor: string;
    textColor: string;
    overflowBreak: boolean;
    indentSize: number;
    invalidXML: string;
    collapsible: boolean;
}

export class PrettifyXML extends Component<PrettifyProps> {
    render(): ReactNode {
        const className = classNames("style", this.props.className);
        return (
            <div className="style">
                <XMLViewer
                    textarea
                    accessKey="xml"
                    xml={this.props.xml}
                    className={className}
                    style={this.props.style}
                    tabIndex={this.props.tabIndex}
                    disabled={this.props.disabled}
                    attributeKeyColor={this.props.attributeKeyColor}
                    attributeValueColor={this.props.attributeValueColor}
                    cdataColor={this.props.cdataColor}
                    commentColor={this.props.commentColor}
                    separatorColor={this.props.separatorColor}
                    tagColor={this.props.tagColor}
                    textColor={this.props.textColor}
                    overflowBreak={this.props.overflowBreak}
                    indentSize={this.props.indentSize}
                    invalidXml={this.props.invalidXML}
                    collapsible={this.props.collapsible}
                />
            </div>
        );
    }
}
