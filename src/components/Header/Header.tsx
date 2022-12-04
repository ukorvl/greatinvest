import { CSSProperties, ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Path } from '../../routing';
import { LanguageSwitcher } from '../LanguageProvider';

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
      style={headerStyle}
      sticky="top"
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
            <Offcanvas.Title id="offcanvasLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {headerConfig.map(({ text, link }) => (
                <Nav.Link
                  key={text}
                  as={Link}
                  to={link}
                >
                  {t(text)}
                </Nav.Link>
              ))}
              <LanguageSwitcher />
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
const headerConfig = [
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
 * Styles.
 */
const headerStyle = {
  '--bs-navbar-brand-font-size': '3rem',
} as CSSProperties;
