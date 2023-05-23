describe("클릭 이벤트가 일어나면 데이터를 가져와서 화면에 뿌려주는 클래스입니다.", () => {
  it("viewManager에 textManager 객체가 잘 전달되는지 확인합니다.", () => {
    const textManager = null;
    const viewerEl = document.createElement("strong");
    const inpTxt = document.createElement("input");
    const btnEl = document.createElement("button");

    // 인자가 잘 전달되는지 확인하는 함수
    const actual = () => new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

    // toThrowError: 함수가 에러를 던지는지 판별한다
    expect(actual).toThrowError();
  });

  it("viewManager에 요소들이 인자로 잘 전달되는지 확인합니다.", () => {
    const textManager = new TextManager();
    const viewerEl = null;
    const inpTxt = null;
    const btnEl = null;

    // 인자가 잘 전달되는지 확인하는 함수
    const actual = () => new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

    expect(actual).toThrowError();
  });

  const textManager = new TextManager();
  const viewerEl = document.createElement("strong");
  const inpTxt = document.createElement("input");
  const btnEl = document.createElement("button");
  const viewManager = new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

  it("클릭 이벤트가 발생했을 때 changeValue 함수가 실행되는지 확인합니다.", () => {
    // 특정 모듈의 함수를 감시한다
    spyOn(viewManager, "changeValue");
    btnEl.click();

    // toHaveBeenCalled: 함수가 호출된 적이 있는지 판별한다
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수가 실행되고나서 updateView 함수가 실행되는지 확인합니다.", () => {
    spyOn(viewManager, "updateView");
    viewManager.changeValue();

    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
