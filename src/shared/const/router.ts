export enum AppRoutes {
  MAIN = 'main',
  PERSON = 'person',
  ABOUT = 'about',

  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRoutePerson = (id: string) => `/persons/${id}`
export const getRouteAbout = () => '/about'
export const getRouteNotFound = () => '*'
