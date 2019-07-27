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

	await gpiop.write(40, false)
	await gpiop.write(29, false)
	await gpiop.write(33, false)
	await gpiop.write(32, false)

	//Motors 2
	await gpiop.write(37, false)
	await gpiop.write(19, false)
	await gpiop.write(21, false)
	await gpiop.write(13, false)

	await gpiop.write(19, true)
	await gpiop.write(29, true)


	while (true) {

		console.log("Turning on")
		await gpiop.write(7, true)
		
		msleep(100);
		console.log("Turning off")
		await gpiop.write(7, false)
		msleep(100)
		console.log("Turning on")
		await gpiop.write(7, true)
		msleep(100);
		console.log("Turning off")
		await gpiop.write(7, false)
		sleep(1)

		console.log("Turning on")
		await gpiop.write(11, true)
		msleep(100);
		console.log("Turning off")
		await gpiop.write(11, false)
		msleep(100)
		console.log("Turning on")
		await gpiop.write(11, true)
		msleep(100);
		console.log("Turning off")
		await gpiop.write(11, false)
		sleep(1)
	}
}


run();
