import { Component, createElement} from 'react'
import XMLViewer from 'react-xml-viewer'

export interface XMLViewPreviewProps {
 xml?: string;
}

export default class App extends Component<XMLViewPreviewProps> {
  render () {
    return (
      <div className="xml">=
        <XMLViewer xml={this.props.xml} />
      </div>
    )
  }
}