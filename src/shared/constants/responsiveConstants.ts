const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1200;
const BEST_PRODUCTS_MOBILE = 1;
const BEST_PRODUCTS_TABLET = 2;
const BEST_PRODUCTS_DESKTOP = 4;
const PRODUCT_LIST_MOBILE = 4;
const PRODUCT_LIST_TABLET = 6;
const PRODUCT_LIST_DESKTOP = 10;

export const getResponsiveConstant = (width: number) => {
  if (width < BREAKPOINT_TABLET) {
    return {
      bestProductsSize: BEST_PRODUCTS_MOBILE,
      productListSize: PRODUCT_LIST_MOBILE,
    };
  }

  if (width < BREAKPOINT_DESKTOP) {
    return {
      bestProductsSize: BEST_PRODUCTS_TABLET,
      productListSize: PRODUCT_LIST_TABLET,
    };
  }

  return {
    bestProductsSize: BEST_PRODUCTS_DESKTOP,
    productListSize: PRODUCT_LIST_DESKTOP,
  };
};
