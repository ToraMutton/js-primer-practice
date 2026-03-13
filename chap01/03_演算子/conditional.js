const parts = {
  cpu: "Ryzen 7 7700",
  gpu: "RX 9060xt 16GB",
  // ram は未実装
};

const { cpu, gpu, ram } = parts;

function addPrefix(text, comp) {
  const state = comp ?? "未実装";
  return `${text}: ${state}`;
}

console.log(`
【PC構成案】
${addPrefix("CPU", cpu)}
${addPrefix("GPU", gpu)}
${addPrefix("RAM", ram)}
`);

