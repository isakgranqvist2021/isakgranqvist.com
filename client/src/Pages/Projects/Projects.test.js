import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Projects from './Projects';

test('renders learn react link', () => {
    const { container, getByText } = render(<Projects />);

});
