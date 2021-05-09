import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { XMLViewPreviewProps } from "../typings/XMLViewProps";

declare function require(name: string): string;

export class preview extends Component<XMLViewPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/XMLView.css");
}