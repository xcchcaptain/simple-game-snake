import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  ArrowDown = "Down",
  ArrowUp = "Up",
  ArrowLeft = "Left",
  ArrowRight = "Right",
  Down = "Down",
  Up = "Up",
  Left = "Left",
  Right = "Right",
}

export default class Game {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: Direction;
  isRunning = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    document
      .getElementById("btnRun")
      .addEventListener("click", this.start.bind(this));
    document
      .getElementById("btnPause")
      .addEventListener("click", this.pause.bind(this));
    document
      .getElementById("btnReset")
      .addEventListener("click", this.reset.bind(this));
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = Direction[event.key as keyof typeof Direction];
  }
  run() {
    if (this.isRunning) {
      if (this.checkPosition(this.snake)) {
        alert("snake 非法越界");
        this.isRunning = false;
        return;
      }
      if (this.checkAlive(this.snake)) {
        alert("snake 已经死亡");
        this.isRunning = false;
        return;
      }
      if (this.checkEat(this.snake, this.food)) {
        this.snake.eat();
        this.food.changePosition();
        this.scorePanel.addScore();
      }
      this.snake.run(this.direction);
    }
    setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  start() {
    this.isRunning = true;
  }
  pause() {
    this.isRunning = false;
  }
  reset() {
    window.location.reload();
  }
  checkPosition(snake: Snake) {
    return (
      snake.position.x < 0 ||
      snake.position.x > 290 ||
      snake.position.y > 290 ||
      snake.position.y < 0
    );
  }
  checkAlive(snake: Snake) {
    return !snake.isAlive;
  }
  checkEat(snake: Snake, food: Food) {
    return (
      snake.position.x === food.position.x &&
      snake.position.y === food.position.y
    );
  }
}
