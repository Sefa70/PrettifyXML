import { Component, ReactNode, createElement } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

export class HelloWorldSample extends Component<HelloWorldSampleProps> {
    render(): ReactNode {
        return <div className="widget-hello-world"> {this.props.sampleText}</div>;
    }
}