function Electrical_device(power,name) {
    this.name = name;
    this.voltage = '220 вольт';
    this.power = power;
    this.getSwitch = function (activation) {
        console.log(name + ' работает от сети ' + this.voltage + ' и включается ' + activation)
    }


}

function Lighting_devices(name, light_power, power, activation){
    this.name = name;
    this.light_power = light_power;
    this.power = power;
    this.activation = activation;
    this.getLamp = function (){
        console.log(`Световой мощности этой лампы достаточно для освещения ${Math.floor(light_power/150)} кв.м жилой комнаты `)
    }
}
Lighting_devices.prototype = new Electrical_device()

const table_lamp = new Lighting_devices('table_lamp', 600, 9);
const computer = new Electrical_device(400, 'computer');
const conditioner = new Electrical_device(3000, 'conditioner');



table_lamp.getSwitch('вручную!')
computer.getSwitch('вручную!')
conditioner.getSwitch('пультом!')
table_lamp.getLamp()