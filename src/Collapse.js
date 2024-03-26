export default class Collapse {
  constructor(startElem, changeElem) {
    this.changeElem = changeElem;
    this.startElem = startElem;
    this.collapse = false;
  }

  addListener() {
    this.startElem.addEventListener('click', this.animation.bind(this));
  }

  animation() {
    if (this.changeElem.classList.contains('collapsed')) this.changeElem.classList.remove('collapsed');
    if (!this.collapse) {
      this.changeElem.style.display = 'block';
      this.changeElem.classList.toggle('collapsed');
      this.collapse = true;
    } else {
      this.changeElem.classList.toggle('collapsed');
      this.collapse = false;
    }
  }
}
