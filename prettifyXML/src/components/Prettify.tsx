import { Component, ChangeEvent, CSSProperties, ReactNode, createElement } from "react";
import classNames from "classnames";
import XMLViewer from 'react-xml-viewer';

export interface PrettifyProps {
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    onUpdate?: (value: string) => void;
    disabled?: boolean;
    
}

export class Prettify extends Component<PrettifyProps> {
    private readonly handleChange = this.onChange.bind(this);
    render(): ReactNode {
        const className = classNames("textarea.form-control", this.props.className);
        const textarea = document.getElementById("textAttribute");
        return (
        <div>
        <XMLViewer xml
        accessKey="textAttribute" 
        value={this.props.value} 
        className={className}
        style={this.props.style}
        tabIndex={this.props.tabIndex}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        textarea={textarea}/>
        </div>)
    }
    private onChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        if (this.props.onUpdate) {
            this.props.onUpdate(event.target.value);
        }
    }
}