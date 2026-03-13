const userFanSpeed = 0;

const fanSpeed1 = userFanSpeed || 800;
const fanSpeed2 = userFanSpeed ?? 800;

console.log(fanSpeed1, fanSpeed2);
