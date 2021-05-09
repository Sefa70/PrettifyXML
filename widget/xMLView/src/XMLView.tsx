import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { XMLViewContainerProps } from "../typings/XMLViewProps";

import "./ui/XMLView.css";

export default class XMLView extends Component<XMLViewContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : ""} />;
    }
}