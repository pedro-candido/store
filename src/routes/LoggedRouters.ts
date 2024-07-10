export enum LoggedRouters {
  PRODUCTS = 'Products',
  CART = 'Cart',
}

export type LoggedNavigationParams = {
  [LoggedRouters.CART]: undefined;
  [LoggedRouters.PRODUCTS]: undefined;
};
