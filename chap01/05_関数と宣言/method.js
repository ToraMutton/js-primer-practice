const musicPlayer = {
  currentSong: "地球儀",
  volume: 15,

  play() {
    console.log(`「${this.currentSong}」を再生中`);
  },

  setVolume(newVolume) {
    this.volume = newVolume;
    console.log(`音量を${newVolume}に変更しました`);
  }
};

musicPlayer.play();
musicPlayer.setVolume(5000);


