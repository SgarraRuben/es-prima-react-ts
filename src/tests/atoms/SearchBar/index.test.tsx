import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@atoms/SearchBar";
import { vi } from "vitest";
import { useState } from "react";

describe("SearchBar component", () => {
  it("renders searchbar", () => {
    render(
      <SearchBar value="hello" onChange={vi.fn()} placeholder={"Search..."} />
    );

    const input = screen.getByPlaceholderText("Search...") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("hello");
  });

  it('write text', () => {
  const handleChange = vi.fn();

  const Wrapper = () => {
    const [value, setValue] = useState('');
    return <SearchBar value={value} onChange={(e) => { setValue(e.target.value); handleChange(e); }} placeholder="Search..." />;
  };
  render(<Wrapper />);
  screen.debug(); 
  const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
  expect(handleChange).toHaveBeenCalledTimes(1);

  
});
});
