import { CSSProperties, ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Path } from '../../routing';
import { LanguageSwitcher } from '../LanguageProvider';
import styles from './Header.module.scss';

/**
 * Header.
 *
 * @returns React component.
 */
export const Header = (): ReactElement => {
  const { t } = useTranslation('common', { keyPrefix: 'header' });

  return (
    <Navbar
      expand="lg"
      className={styles.header}
      style={headerStyle}
      variant="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand>
          <strong className="text-danger">G</strong>
          reatinvest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          aria-labelledby="offcanvasLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasLabel">{t('offcanvasTitle')}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {headerLinksConfig.map(({ text, link }) => (
                <Nav.Link
                  key={text}
                  as={Link}
                  to={link}
                >
                  {t(text)}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <LanguageSwitcher />
              {headerIconsConfig.map(({ link, icon }) => (
                <Nav.Link
                  key={link}
                  href={link}
                >
                  <FontAwesomeIcon icon={icon} />
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

/**
 * Header links configuration.
 */
const headerLinksConfig = [
  {
    link: Path.root,
    text: 'company',
  },
  {
    link: Path.root,
    text: 'expertise',
  },
  {
    link: Path.root,
    text: 'media',
  },
  {
    link: Path.root,
    text: 'scheduleMeeting',
  },
];

/**
 * Header icons config.
 */
const headerIconsConfig: Array<{
  link: string;
  icon: [IconPrefix, IconName];
}> = [
  {
    link: '/',
    icon: ['fab', 'telegram'],
  },
  {
    link: `tel:${process.env.REACT_APP_SITE_PHONE_NUMBER}`,
    icon: ['fas', 'square-phone'],
  },
];

/**
 * Styles.
 */
const headerStyle = {
  '--bs-navbar-brand-font-size': '2.5rem',
} as CSSProperties;
