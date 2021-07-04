export type RoutesType = { [route: string]: { path: string } };

export const routes: RoutesType = {
  home: {
    path: '/',
  },
  about: {
    path: '/about',
  },
};