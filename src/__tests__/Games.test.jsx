import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, describe, expect, it } from "vitest";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";
import Games from "../components/Games";

describe("Games tests", () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Games />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Games renders correctly", async () => {
    await waitFor(() => expect(Games).toMatchSnapshot());
  });

  it("Images are rendered correctly", async () => {
    const gameImages = document.querySelectorAll("img");
    expect(gameImages).toMatchSnapshot();
  });
})