import { Component, CSSProperties, ReactNode, createElement } from "react";
import classNames from "classnames";
import XMLViewer from 'react-xml-viewer';

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
    commentColor:string;
    separatorColor: string;
    tagColor:string;
    textColor:string;
    overflowBreak:boolean;
    XMLViewer (): void;
}


export class Prettify extends Component<PrettifyProps> {
        render(): ReactNode { XMLViewer
        const className = classNames("form-control", this.props.className);
        return (
        <div id="xml">
        <XMLViewer textarea
        accessKey="xml" 
        xml={this.props.xml} 
        className={className}
        style={this.props.style}
        tabIndex={this.props.tabIndex}
        disabled={this.props.disabled}
        attributeKeyColor = {this.props.xml}
        attributeValueColor = {this.props.xml}
        cdataColor= {this.props.xml}
        commentColor= {this.props.xml}
        separatorColor= {this.props.xml}
        tagColor= {this.props.xml}
        textColor= {this.props.xml}
        overflowBreak= {this.props.overflowBreak}
        />
        </div>)
    }
}