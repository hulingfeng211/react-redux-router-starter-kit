import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-k'
               defaultIsVisible={true}
               defaultPosition='bottom'
               defaultSize={0.3}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools;