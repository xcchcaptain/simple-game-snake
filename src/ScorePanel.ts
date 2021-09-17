export default class ScorePanel {
  score = 0;
  level = 1;
  MAX_LEVEL = 10;
  THRESHOLD_LEVEL_UP = 10;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  constructor() {
    this.scoreEle = document.getElementById("score");
    this.levelEle = document.getElementById("level")
  }

  addScore(score = 1) {
    this.score = this.score + score;
    this.scoreEle.innerHTML = this.score.toString();
    if (this.score % this.THRESHOLD_LEVEL_UP === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.MAX_LEVEL) {
      this.level++;
      this.levelEle.innerHTML = this.level.toString();
    }
  }
}