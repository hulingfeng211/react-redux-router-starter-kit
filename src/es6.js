import $ from 'jquery';

class Test {
	constructor() {
		this.info = 'this is es6: work from es6 module';
		$('#content').html(this.info);
	}
	say() {
		console.log(this.info);
	}
}

export default Test;