import renderer from 'react-test-renderer';
import Card from '../index';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Card component working', function() {
    let container: HTMLDivElement | null = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container)
    });

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
        container = null;
    });

    it('should renders correctly', function() {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})