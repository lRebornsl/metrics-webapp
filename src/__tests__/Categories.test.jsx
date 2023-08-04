import { render, waitFor, screen } from "@testing-library/react";
import { beforeEach, describe, expect } from "vitest";
import Categories from "../components/Categories";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("Categories tests", () => {
  
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>
    );    
  });

  it("Categories renders correctly", async () => {
    await waitFor(() => expect(Categories).toMatchSnapshot());
  });

  it("Images are rendered correctly", async () => {
    const categoryImages = screen.getAllByRole("img");
    expect(categoryImages).toMatchSnapshot();
  });
})