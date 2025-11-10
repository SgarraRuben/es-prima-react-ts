import { render } from '@testing-library/react';
import SkeletonCell from '@atoms/SkeletonTable';

describe('SkeletonCell component', () => {
  it('renders a span with correct class for given width', () => {
    const { container } = render(<SkeletonCell width={6} />);

    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('col-6');
  });
});