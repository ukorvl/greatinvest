import { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';

/**
 * App locales.
 */
enum locales {
  ru = 'ru-RU',
  en = 'en-US',
}

/**
 * Language switcher.
 *
 * @returns React component.
 */
export const LanguageSwitcher = (): ReactElement => {
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(locales).map((x, i) => (
        <Nav.Link
          className={i === 0 ? 'ms-3' : ''}
          onClick={() => i18n.changeLanguage(locales[x as keyof typeof locales])}
          key={x}
          active={i18n.language === locales[x as keyof typeof locales]}
        >
          {x.toUpperCase()}
        </Nav.Link>
      ))}
    </>
  );
};
