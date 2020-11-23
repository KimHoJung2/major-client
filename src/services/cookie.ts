// import Cookies, { CookieSetOptions, CookieGetOptions } from 'universal-cookie';
import Cookies, { CookieAttributes, CookiesStatic } from 'js-cookie';

const CookieStorageBuilder = (cookies: CookiesStatic) => ({
  setCookie: (key: string, value: string, options?: CookieAttributes) =>
    cookies.set(key, value, {
      path: '/',
      ...options
    }),
  getCookie: (key: string) => cookies.get(key),
  removeCookie: (key: string) => cookies.remove(key)
});

export const cookieStorage = CookieStorageBuilder(Cookies);

const COOKIE_BASE_NAME = 'major';

export const COOKIE_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_acst`;
