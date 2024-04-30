import ua from '../i18n/locales/uk.json';

type Messages = typeof ua;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
