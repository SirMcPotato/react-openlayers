import * as React from "react";

import { Typography, Divider } from "@material-ui/core";

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

import Highlighter from "../Highlighter";

export class MousePosition extends React.Component<any,any> {
  render(){
    return (
      <div>
        <Typography variant="h4" paragraph>MousePosition control</Typography>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.MousePosition projection="EPSG:3857"/>
          </Controls>
        </Map>
        <br/>
        <Divider />
        <br/>
        <Highlighter lang="jsx" code={
`<Map>
  <Layers><layer.Tile/></Layers>
  <Controls>
    <control.MousePosition projection="EPSG:3857"/>
  </Controls>
</Map>`
        } />
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/mouse-position.tsx">source</a>
      </div>
    );
  }
}