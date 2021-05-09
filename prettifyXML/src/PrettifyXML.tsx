import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { PrettifyXMLContainerProps } from "../typings/PrettifyXMLProps";

import "./ui/PrettifyXML.css";

export default class PrettifyXML extends Component<PrettifyXMLContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
