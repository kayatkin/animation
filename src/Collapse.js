export default class Collapsible {
  constructor(triggerElement, contentElement) {
    this.contentElement = contentElement;
    this.triggerElement = triggerElement;
    this.isCollapsed = false;
  }

  addListener() {
    this.triggerElement.addEventListener('click', this.toggleAnimation.bind(this));
  }

  toggleAnimation() {
    if (this.contentElement.classList.contains('show')) {
      this.contentElement.classList.remove('show');
    }
    if (this.contentElement.classList.contains('hide')) {
      this.contentElement.classList.remove('hide');
    }
    if (!this.isCollapsed) {
      this.contentElement.style.display = 'block';
      this.contentElement.classList.toggle('show');
      this.isCollapsed = true;
    } else {
      this.contentElement.classList.toggle('hide');
      this.isCollapsed = false;
    }
  }
}
