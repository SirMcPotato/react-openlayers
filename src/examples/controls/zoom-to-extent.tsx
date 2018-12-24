import * as React from "react";

import { Typography, Divider } from "@material-ui/core";

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

import Highlighter from "../Highlighter";

export class ZoomToExtent extends React.Component<any,any> {
  render(){
    return (
      <div>
        <Typography variant="h4" paragraph>ZoomToExtent control</Typography>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.ZoomToExtent />
          </Controls>
        </Map>
        <br/>
        <Divider />
        <br/>
        <Highlighter lang="jsx" code={
`<Map>
  <Layers><layer.Tile/></Layers>
  <Controls>
    <control.ZoomToExtent />
  </Controls>
</Map>`
        } />
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/zoom-to-extent.tsx">source</a>
      </div>
    );
  }
}