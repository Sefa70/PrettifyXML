import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { hot } from "react-hot-loader/root";

import { XMLViewContainerProps } from "../typings/XMLViewProps";

import "./ui/XMLView.css";

class XMLView extends Component<XMLViewContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : ""} />;
    }
}

export default hot(XMLView);