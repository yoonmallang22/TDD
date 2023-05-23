class ViewManager {
  constructor(textManager, options) {
    if (textManager.constructor !== TextManager) {
      throw new Error("올바른 textManager 객체가 전달되지 않았습니다.");
    }

    if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
      throw new Error("전달받지 못한 요소가 존재합니다.");
    }

    this.textManager = textManager;
    this.viewerEl = options.viewerEl;
    this.inpTxt = options.inpTxt;

    options.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }

  changeValue() {
    this.textManager.setValue(this.inpTxt.value);
    this.updateView();
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
