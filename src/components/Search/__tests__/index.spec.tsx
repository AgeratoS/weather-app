import renderer from 'react-test-renderer';
import Search from '../index';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Search component working', function () {
  let container: HTMLDivElement | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
    }
    container = null;
  })

  it('should renders correctly', function () {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('should have class hover when clicked', function () {
    const onChange = jest.fn();
    act(() => {
      render(<Search value={"test"} onChange={onChange}/>, container);
    });

    const input = document.querySelector('[data-testid="SearchInput"]');
    expect(input).toBeInTheDocument();

    act(() => {
      input!.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    });

    expect(input!.classList.contains('hovered')).toBeTruthy()
  });

  it('should have not class hover when blured', function() {
    const onChange = jest.fn();
    act(() => {
      render(<Search value={"test"} onChange={onChange}/>, container);
    });

    const input = document.querySelector('[data-testid="SearchInput"]');
    expect(input).toBeInTheDocument();

    act(() => {
      input!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    act(() => {
      document.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(input!.classList.contains('hovered')).not.toBeTruthy();
  });
});