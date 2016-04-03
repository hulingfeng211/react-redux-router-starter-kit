class Common {
	constructor() {
		console.log('define a module: common');
		this.name = 'common';
		this.target = 'home';
	}
	say(){
		console.log('say:', this.name);
	}
	go(){
		console.log('go:', this.target);
	}
}

export default Common;