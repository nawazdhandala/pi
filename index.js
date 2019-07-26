var gpio = require('rpi-gpio')
var sleep = require('sleep').sleep;
var msleep = require('sleep').msleep;
var gpiop = gpio.promise;

async function run(){
 
await gpiop.setup(7, gpio.DIR_OUT)
await gpiop.setup(11, gpio.DIR_OUT)

while(true){
					
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
