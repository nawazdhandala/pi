var gpio = require('rpi-gpio')
var sleep = require('sleep').sleep;
var msleep = require('sleep').msleep;
var gpiop = gpio.promise;

async function run() {

	//LED
	await gpiop.setup(7, gpio.DIR_OUT)
	await gpiop.setup(11, gpio.DIR_OUT)

	//Motors 1
	await gpiop.setup(40, gpio.DIR_OUT)
	await gpiop.setup(29, gpio.DIR_OUT)
	await gpiop.setup(33, gpio.DIR_OUT)
	await gpiop.setup(32, gpio.DIR_OUT)

	//Motors 2
	await gpiop.setup(37, gpio.DIR_OUT)
	await gpiop.setup(19, gpio.DIR_OUT)
	await gpiop.setup(21, gpio.DIR_OUT)
	await gpiop.setup(13, gpio.DIR_OUT)

	async function stopEverything(){
		await gpiop.write(40, false)
		await gpiop.write(29, false)
		await gpiop.write(33, false)
		await gpiop.write(32, false)

		//Motors 2
		await gpiop.write(37, false)
		await gpiop.write(19, false)
		await gpiop.write(21, false)
		await gpiop.write(13, false)
	}

	await stopEverything();


	while (true) {

		// console.log("Turning on")
		// await gpiop.write(7, true)
		
		// msleep(100);
		// console.log("Turning off")
		// await gpiop.write(7, false)
		// msleep(100)
		// console.log("Turning on")
		// await gpiop.write(7, true)
		// msleep(100);
		// console.log("Turning off")
		// await gpiop.write(7, false)
		// sleep(1)

		// console.log("Turning on")
		// await gpiop.write(11, true)
		// msleep(100);
		// console.log("Turning off")
		// await gpiop.write(11, false)
		// msleep(100)
		// console.log("Turning on")
		// await gpiop.write(11, true)
		// msleep(100);
		// console.log("Turning off")
		// await gpiop.write(11, false)
		// sleep(1)

		console.log("Starting A Motor");
		sleep(2)
		//await stopEverything();
		await gpiop.write(40, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(29, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(33, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(32, true)

		// //Motors 2

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(37, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(19, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(21, true)

		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();
		// await gpiop.write(13, true)
		// console.log("Starting A Motor");
		// sleep(2)
		// await stopEverything();

	}
}

process.stdin.resume();  //so the program will not close instantly

async function exitHandler(options, exitCode) {
	console.log("Stopping everything. ")
	await stopEverything();
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, {cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));


run();
