import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { XMLViewContainerProps } from "../typings/XMLViewProps";
import "./ui/XMLView.css";
import App from "./components/XMLViewer";


export default class XMLView extends Component<XMLViewContainerProps> {
    render(): ReactNode {
        return <App/>;
    }
}