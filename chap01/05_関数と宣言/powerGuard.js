const powerGuard = (currentWatt, alertAction) => {
  if (currentWatt > 500) {
    alertAction();
  }
}

const myAlert = () => console.log("⚠️警告: 消費電力が大きすぎます！");

powerGuard(600, myAlert);
