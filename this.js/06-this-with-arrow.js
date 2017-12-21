const outerThis = this;

const func = => {
	console.log(this === outerThis);
};

func(); //true

func.call(null);	//true
func.apply(undefined);//true
func.bind({})();//true

//new func(); //cannot use arrow func with constructor

// const counter = {
// 	count: 0,
// 	incrementPeriodically(){
// 		setInterval(function(){
// 			console.log(++this.count)
// 		}, 1000);
// 	}
// };

// counter.incrementPeriodically() // NaN

const counter = {
	count: 0,
	incrementPeriodically(){
		setInterval(() => {
			console.log(++this.count)
		}, 1000);
	}
};

counter.incrementPeriodically() // 1 2 3 4 5 6 7 .....

