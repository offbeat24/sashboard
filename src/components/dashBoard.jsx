import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};
/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class DashBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      widgets: originalLayouts.lg
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
    this.setState({ widgets: [] });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  onRemoveItem(i) {
    this.setState({
      widgets: this.state.widgets.filter((item,index) => index !== i)
    });

  }


  generateDOM = () => {
    return _.map(this.state.widgets, (l, i) => {
      let component = (
        <Card >
          <Card.Header >
            <span className='remove' onClick={this.onRemoveItem.bind(this, i)} style={{textAlign:"match-parent"}}>{"l.type"}<CloseButton /></span>
          </Card.Header>
          <Card.Text>{"l.type"}</Card.Text>
        </Card>
      )
      return (
        <div key={l.i} data-grid={l}>
          {component}
        </div>
      );
    });
  }

  addItems(type) {
    const addItem = {
      x: (this.state.widgets.length * 3) % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 3,
      h: 2,
      i: new Date().getTime().toString(),
    };
    this.setState(
      {
        widgets: this.state.widgets.concat({
          ...addItem,
          type,
        }),
      },
    );
  };
  render() {
    return (
      <div className='p-5' style={{width: '1440px', margin: 'auto'}}>
        <Button onClick={() => this.resetLayout()}>Reset Layout</Button>
        <Button onClick={() => this.addItems()}>Add</Button>
        <ResponsiveReactGridLayout
          className="layout"
          {...this.props}
          width="flex"
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn =>
//     fn.default(DashBoard)
//   );
// }