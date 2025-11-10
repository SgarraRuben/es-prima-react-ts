import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '@atoms/Pagination';
import { vi } from 'vitest';



describe('Pagination component', () => {
  const onPageChange = vi.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders pagination', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
   
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  it('renders pagination with total page < 3', () => {
    render(<Pagination currentPage={1} totalPages={2} onPageChange={onPageChange} />);
   
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
  it('disable prev button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
       screen.debug();
    const prevButton = screen.getByText(/prev/i).closest('li');
    expect(prevButton).toHaveClass('_disabled_c1c234');
  });
  it('disable next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);
  
    const nextButton = screen.getByText(/next/i).closest('li');
    expect(nextButton).toHaveClass('_disabled_c1c234');
  });

  it('calls onPageChange', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
    
    fireEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
  
  it('does not call handleNext when currentPage === 1', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);

    const prevButton = screen.getByText(/prev/i).closest('li')!;
    const button = prevButton.querySelector('button')!;

    fireEvent.click(button);

    expect(onPageChange).not.toHaveBeenCalled();
  });
  it('call handleNext when currentPage > 1', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);

    const prevButton = screen.getByText(/prev/i).closest('li')!;
    const button = prevButton.querySelector('button')!;

    fireEvent.click(button);

    expect(onPageChange).toHaveBeenCalled();
  });

  it('call onPageChange when currentPage === totalpage', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);

    const nextButton = screen.getByText(/next/i).closest('li')!;
    const button = nextButton.querySelector('button')!;

    fireEvent.click(button);

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it('call onPageChange when currentPage < totalpage', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);

    const nextButton = screen.getByText(/next/i).closest('li')!;
    const button = nextButton.querySelector('button')!;

    fireEvent.click(button);

    expect(onPageChange).toHaveBeenCalled();
  });

});