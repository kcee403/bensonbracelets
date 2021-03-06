import React from "react";
import { render } from "@testing-library/react";
import DisplayItem from "../components/routes/collections/displayitem/Displayitem";

type DisplayItemProps = React.ComponentProps<typeof DisplayItem>;

const baseProps: DisplayItemProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
  addToCart: () => {},
  name: "",
  price: 0,
  id: 0,
  src: "",
  category: "",
};

// jest.mock('react-netlify-identity-widget', () => () => 'IdentityModal')
describe("<DisplayItem />", () => {
    const setup = (overrides: {}) => {
        const props = {
            isLoggedIn: false,
            siteTitle: "Some title",
            ...overrides,
        };
        const R = render(<DisplayItem {...baseProps} {...props} />);

        return {
            ...R,
            props 
        }
    };
      it("splits the site title", () => {
        // const { getByTestId, getByText } = setup({ siteTitle: "omg gmo" });
        // expect(getByTestId("daily-text")).toHaveTextContent("omg");
        // expect(getByText("gmo")).toBeInTheDocument();
      });
      it("renders the logout text when login is true", () => {
        // const { getByText } = setup({ isLoggedIn: true });
        // expect(getByText(/Log out/i)).toBeInTheDocument();
      });
      it("renders the login text when login is false", () => {
        // const { getByText } = setup({ isLoggedIn: false });
        // expect(getByText(/Register/i)).toBeInTheDocument();
      });
});


// // test-utils.js
// import React, { PropsWithChildren, ReactNode } from "react"

// import { BrowserRouter } from "react-router-dom"
// import { Provider } from "react-redux"
// import store from "../store/store"

// import { Matcher, render, RenderOptions } from "@testing-library/react"
// import { ThemeProvider } from "@material-ui/styles"

// import theme from "../components/ui/Theme"

// import rootReducer from '../store/reducers/index';

// /** from davidgilbertson @ https://github.com/testing-library/react-testing-library/issues/322 */
// import { within, waitForElementToBeRemoved } from "@testing-library/react"
// import UserEvent from "@testing-library/user-event"
// import { StripeProvider, Elements } from "react-stripe-elements"
// import { createStore } from "redux"

// const AllTheProviders = (
//   { children }: PropsWithChildren<{}>, {store = createStore(rootReducer)} = {}) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Provider store={store}>
//         <StripeProvider stripe={null}>
//           <Elements>
//             <BrowserRouter>{children}</BrowserRouter>
//           </Elements>
//         </StripeProvider>
//       </Provider>
//     </ThemeProvider>
//   )
// }

// /** from davidgilbertson @ https://github.com/testing-library/react-testing-library/issues/322 */
// export const testMaterial = {
//   selectOption: async (element: any, optionText: Matcher) =>
//     new Promise((resolve) => {
//       // The the button that opens the dropdown, which is a sibling of the input
//       const selectButton = element.parentNode.querySelector("[role=button]")

//       // Open the select dropdown
//       UserEvent.click(selectButton)

//       // Get the dropdown element. We don't use getByRole() because it includes <select>s too.
//       const listbox = document.body.querySelector("ul[role=listbox]")

//       // Click the list item
//       const listItem = within(listbox as HTMLElement).getByText(optionText)
//       UserEvent.click(listItem)

//       // Wait for the listbox to be removed, so it isn't visible in subsequent calls
//       waitForElementToBeRemoved(() =>
//         document.body.querySelector("ul[role=listbox]")
//       ).then(resolve)
//     }),
// }

// const customRender = (ui: JSX.Element,
//   options: any | undefined) =>
//   render(ui, { wrapper: AllTheProviders, ...options })

// // re-export everything
// export * from "@testing-library/react"

// // override render method
// export { customRender as render }
