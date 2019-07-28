var gpio = require('rpi-gpio')
var sleep = require('await-sleep');
var gpiop = gpio.promise;

async function run() {

	async function setup() {
		console.log("Setting up Ports")
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

		console.log("Setup Complete.")
	}


	async function stop() {
		console.log("Stopping all ports");
		await gpiop.write(40, false)
		await gpiop.write(29, false)
		await gpiop.write(33, false)
		await gpiop.write(32, false)

		//Motors 2
		await gpiop.write(37, false)
		await gpiop.write(19, false)
		await gpiop.write(21, false)
		await gpiop.write(13, false)

		//LED
		await gpiop.write(7, false)
		await gpiop.write(11, false)
	}




	async function test() {
		//LED Test
		console.log("Led Test");
		console.log("Led Test 1");
		console.log("Turning on")
		await gpiop.write(7, true)
		await sleep(100);
		console.log("Turning off")
		await gpiop.write(7, false)
		await sleep(100)
		console.log("Turning on")
		await gpiop.write(7, true)
		await sleep(100);
		console.log("Turning off")
		await gpiop.write(7, false)
		await sleep(1000)

		console.log("Led Test 2");
		console.log("Turning on")
		await gpiop.write(11, true)
		await sleep(100);
		console.log("Turning off")
		await gpiop.write(11, false)
		await sleep(100)
		console.log("Turning on")
		await gpiop.write(11, true)
		await sleep(100);
		console.log("Turning off")
		await gpiop.write(11, false)
		await sleep(1000)

		console.log("Motor Test");
		console.log("Port 40 on");
		await sleep(2000)
		await stop();
		await gpiop.write(40, true)

		console.log("Port 29 on");
		await sleep(2000)
		await stop();
		await gpiop.write(29, true)

		console.log("Port 33 on");
		await sleep(2000)
		await stop();
		await gpiop.write(33, true)

		console.log("Port 32 on");
		await sleep(2000)
		await stop();
		await gpiop.write(32, true)

		//Motors 2

		console.log("Port 37 on");
		await sleep(2000)
		await stop();
		await gpiop.write(37, true)

		console.log("Port 19 on");
		await sleep(2000)
		await stop();
		await gpiop.write(19, true)

		console.log("Port 21 on");
		await sleep(2000)
		await stop();
		await gpiop.write(21, true)

		console.log("Port 13 on");
		await sleep(2000)
		await stop();
		await gpiop.write(13, true)
		await sleep(2000)

		console.log("Stopping test");
		await stop();
	}

	async function motorOn() {

	}

	async function ledOn() {
		while (true) {
			console.log("Turning on")
			await gpiop.write(7, true)
			await sleep(100);
			console.log("Turning off")
			await gpiop.write(7, false)
			await sleep(100)
			console.log("Turning on")
			await gpiop.write(7, true)
			await sleep(100);
			console.log("Turning off")
			await gpiop.write(7, false)
			await sleep(1000)

			console.log("Led Test 2");
			console.log("Turning on")
			await gpiop.write(11, true)
			await sleep(100);
			console.log("Turning off")
			await gpiop.write(11, false)
			await sleep(100)
			console.log("Turning on")
			await gpiop.write(11, true)
			await sleep(100);
			console.log("Turning off")
			await gpiop.write(11, false)
			await sleep(1000)
		}
	}

	await setup();
	//stop and clear all ports on startup. 
	await stop();
	//test 
	await test();
	//stop and clear all ports. 
	await stop();

	ledOn();
}

try {
	run();
} catch (e) {
	console.error(e);
}
