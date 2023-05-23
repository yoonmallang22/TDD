import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/*
test("renders learn react link", () => {
  // render 함수 : 인자로 받는 JSX의 가상돔을 생성한다
  render(<App />);
  // screen : 생성된 가상돔에 접근하기 위한 전역 객체
  // getByText 함수 : 인자로 전달된 텍스트를 가지는 돔 안의 요소를 찾는다
  const linkElement = screen.getByText(/learn react/i);

  // expect 함수 : 기대한 결과가 성공인지 실패인지 판단한다
  // toBeInTheDocument 함수 : matcher 함수
  expect(linkElement).toBeInTheDocument();
});
*/

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />);
  // getByRole 함수 : 요소를 찾는다. 두번째 인자로 찾아야할 요소 안의 텍스트는 무엇인지 알려줘야한다.
  // role : aria에서 사용하는 요소의 역할을 의미하는 속성
  const button = screen.getByRole("button", { name: "change to blue" });

  // toHaveStyle 함수 : 요소가 특정한 CSS 스타일을 가지고 있는지 체크한다
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // fireEvent : 가상돔과의 상호작용이 가능하도록 하는 객체
  fireEvent.click(button);

  expect(button.textContent).toBe("change to red");
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
