const checkSpecs = ({ cpu, os = "Arch Linux" }) => {
  console.log(`CPU: ${cpu}, OS: ${os} でシステムチェック完了`);
};

function installSoftware(onComplete, ...apps) {
  apps.forEach((val) => {
    console.log(`${val}をインストール中...`);
  });

  onComplete();
};

const trapezium = {
  startup() {
    console.log(`起動シークエンス開始`);
  }
};

trapezium.startup();

checkSpecs({ cpu: "Ryzen 7 7700" });

installSoftware(
  () => console.log("全てのセットアップが完了"),
  "Vivaldi", "Discord", "Steam", "Apex Legends"
);
