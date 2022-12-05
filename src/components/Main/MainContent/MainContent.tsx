import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path } from '../../../routing';
import styles from './MainContent.module.scss';

/**
 * Footer.
 *
 * @returns React component.
 */
export const MainContent = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('main', { keyPrefix: 'content' });

  return (
    <>
      <Container className={`text-bg-light ${styles.content}`}>
        <h1 className="display-1 text-danger text-center pt-5">{t('heading')}</h1>
        <Row className="text-center justify-content-center">
          {featuresConfig.map(({ icon, link }, i) => (
            <Col
              xs={12}
              sm={6}
              lg={4}
              key={i}
            >
              <Card className="text-bg-dark my-4">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon
                      size="3x"
                      icon={icon}
                    />
                  </Card.Title>
                  <Card.Text>{t(i.toString())}</Card.Text>
                  {link && (
                    <Card.Link
                      as={Link}
                      to={link}
                    >
                      {t('linkText')}
                    </Card.Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

/**
 * Features config.
 */
const featuresConfig: Array<{
  icon: [IconPrefix, IconName];
  link?: Path;
}> = [
  {
    icon: ['fas', 'briefcase'],
    link: Path.root,
  },
  {
    icon: ['fas', 'shield-halved'],
    link: Path.root,
  },
  {
    icon: ['fas', 'percent'],
    link: Path.root,
  },
  {
    icon: ['fas', 'handshake'],
    link: Path.root,
  },
  {
    icon: ['fas', 'building-shield'],
    link: Path.root,
  },
];
