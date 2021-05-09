var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/XMLView.css";
var XMLView = /** @class */ (function (_super) {
    __extends(XMLView, _super);
    function XMLView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XMLView.prototype.render = function () {
        return createElement(HelloWorldSample, { sampleText: this.props.sampleText ? this.props.sampleText : "World" });
    };
    return XMLView;
}(Component));
export default XMLView;
//# sourceMappingURL=XMLView.js.map