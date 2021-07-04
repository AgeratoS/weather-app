import renderer from 'react-test-renderer';
import Search from '../index';
import { unmountComponentAtNode } from "react-dom";

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
    const value = "test";
    const onChange = jest.fn();
    const tree = renderer.create(<Search value={value} onChange={onChange}/>).toJSON()
    expect(tree).toMatchSnapshot();
  });
});