import { Component, createElement} from 'react'
import XMLViewer from 'react-xml-viewer'

const xml = '<hello>World</hello>'

export default class App extends Component {
  render () {
    return (
      <div>
        <XMLViewer xml={xml} />
      </div>
    )
  }
}