describe("텍스트를 관리하는 클래스입니다.", () => {
  const textManager = new TextManager();

  it("텍스트 값을 가져옵니다.", () => {
    const initValue = textManager.getValue();

    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다.", () => {
    const newValue = "hello zebras";
    textManager.setValue(newValue);

    expect(textManager.getValue()).toBe(newValue);
  });
});
