import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CommentBox from './comment-box.js';

setInterval(function(){
	ReactDOM.render(
	  <CommentBox time={new Date()} />,
	  $('#react-content')[0]
	);
}, 500)