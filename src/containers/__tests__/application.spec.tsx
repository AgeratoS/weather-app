import renderer from 'react-test-renderer';
import Application from '../index';

describe('Application works', function () {
  it('should correct render', function () {
    const tree = renderer.create(<Application />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});