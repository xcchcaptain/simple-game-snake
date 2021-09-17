import { Position } from "./World";

export default class Food {
  element: HTMLElement;
  position: Position;

  constructor() {
    this.element = document.getElementById("food");
    let positionX = Math.floor(Math.random() * 30) * 10;
    let positionY = Math.floor(Math.random() * 30) * 10;
    this.setPosition({ x: positionX, y: positionY });
  }

  getPosition() {
    return {
      x: this.element.offsetLeft,
      y: this.element.offsetTop,
    };
  }
  setPosition(position: Position) {
    this.position = position;
    this.element.style.left = position.x + "px";
    this.element.style.top = position.y + "px";
  }
  changePosition() {
    let positionX = Math.floor(Math.random() * 30) * 10;
    let positionY = Math.floor(Math.random() * 30) * 10;
    this.setPosition({ x: positionX, y: positionY });
  }
}
