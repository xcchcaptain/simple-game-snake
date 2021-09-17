import { Position, Direction } from "./World";

export default class Snake {
  element: HTMLElement;
  bodies: HTMLCollection;
  isAlive = true;
  position = { x: 0, y: 0 }; // 用蛇头的位置代表整体位置
  direction: Direction;

  constructor() {
    this.element = document.getElementById("snake");
    this.bodies = this.element.getElementsByTagName("div"); //getElementsByTagName 自动动态更新
  }
  getPosition() {
    let head = this.bodies[0] as HTMLElement;
    return {
      x: head.offsetLeft,
      y: head.offsetTop,
    };
  }
  run(direction: Direction) {
    if (!this.isAlive) {
      return;
    }

    if (!this.checkDirection(direction)) {
      // 无效操作，则仍然沿原方向行进
      console.log("非法操作，不能直接相反方向调头");
    } else {
      this.direction = direction;
    }
    let x = this.position.x;
    let y = this.position.y;
    switch (this.direction) {
      case "Down":
        y = y + 10;
        break;
      case "Up":
        y = y - 10;
        break;
      case "Left":
        x = x - 10;
        break;
      case "Right":
        x = x + 10;
        break;
      default:
        return;
    }
    this.moveTo({ x, y });
    if (this.checkBiteSelf()) {
      this.isAlive = false;
    }
  }
  eat() {
    this.addBody();
  }
  moveTo(position: Position) {
    // 后一关节移动到前一个关节的位置，蛇头移动到新的位置
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let target = this.bodies[i - 1] as HTMLElement;
      let source = this.bodies[i] as HTMLElement;

      source.style.left = target.offsetLeft + "px";
      source.style.top = target.offsetTop + "px";
    }
    let head = this.bodies[0] as HTMLElement;
    this.position = position;
    head.style.left = position.x + "px";
    head.style.top = position.y + "px";
  }
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  checkBiteSelf() {
    let head = this.bodies[0] as HTMLElement;
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let source = this.bodies[i] as HTMLElement;
      if (
        source.offsetLeft === head.offsetLeft &&
        source.offsetTop === head.offsetTop
      ) {
        alert("snake 咬到自己了");
        return true;
      }
    }
    return false;
  }
  // 检查是否可以更换方向
  checkDirection(direction: Direction) {
    if (!this.direction) {
      return true;
    }
    if (this.direction === Direction.Up && direction === Direction.Down) {
      return false;
    }
    if (this.direction === Direction.Down && direction === Direction.Up) {
      return false;
    }
    if (this.direction === Direction.Left && direction === Direction.Right) {
      return false;
    }
    if (this.direction === Direction.Right && direction === Direction.Left) {
      return false;
    }
    return true;
  }
}
