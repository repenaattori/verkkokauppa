import { createContext } from "react";

/**
 * Context for storing the cart. May be provided for all the app child components.
 * As the car is updated, the context state may change and rerender child components.
 * Localstorage is used only when the state is changed (App)
 */
export const CartContext = createContext();