const os = require('os');

// info about current user
const user = os.userInfo();

console.log(user);

const osInfo = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpus: os.cpus(),
}
console.log("🚀 ~ osInfo:", osInfo)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);