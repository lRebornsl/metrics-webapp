import { Provider } from "react-redux";
import { beforeEach, describe, expect, it } from "vitest";
import store from "../redux/store";
import NavBar from "../components/NavBar";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavBar tests", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );
  });

  it("NavBar renders correctly", async () => {
    await waitFor(() => expect(NavBar).toMatchSnapshot());
  });
  
  it("Icons are rendered correctly", async () => {
    const menuIcon = screen.getByAltText("Menu");
    const settingsIcon = screen.getByAltText("Settings");
    expect(menuIcon).toMatchSnapshot();
    expect(settingsIcon).toMatchSnapshot();
  });
})