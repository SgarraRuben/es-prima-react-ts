import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from '@atoms/BurgerButton';

describe('ToggleButton component test', () => {
  it('renders the button', () => {
    const mockToggle = vi.fn();
    render(<ToggleButton toggleSidebar={mockToggle} />);
    screen.debug();
    
    const button = screen.getByRole('button', { name: "Toggle sidebar" });
    expect(button).toBeInTheDocument();
  });

  it('calls toggleSidebar when clicked', () => {
    const mockToggle = vi.fn();
    render(<ToggleButton toggleSidebar={mockToggle} />);
    
    const button = screen.getByRole('button', { name: "Toggle sidebar"});
    fireEvent.click(button);
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});