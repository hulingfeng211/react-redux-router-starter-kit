//require("!style!css!../build/amazeui/css/amazeui.css");

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

import CommentBox from './comment-box.js';

//react 实例
setInterval(function() {
	render(
	    <CommentBox time={new Date()} />,
	    $('#react-content')[0]
	);
}, 500)
