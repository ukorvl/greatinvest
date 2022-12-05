import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
  const { t } = useTranslation('main');

  return (
    <Container
      fluid
      className={`text-bg-light ${styles.content}`}
    >
      <h1 className="display-1 text-danger text-center pt-5">{t('content.heading')}</h1>
      <Row className={`text-center justify-content-center pb-5 ${styles.features}`}>
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
                <Card.Text>{t(`content.${i}`)}</Card.Text>
                {link && (
                  <Card.Link
                    as={Link}
                    to={link}
                  >
                    {t('content.linkText')}
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="text-bg-danger">
        <Col
          xs={12}
          lg={7}
          className="g-0"
        >
          <div className={styles.missionImage}>
            <Card className={`${styles.card} text-bg-light`}>
              <Card.Body className="text-center">
                <Card.Title>
                  <h5>{t('mission.pictureHeadText')}</h5>
                </Card.Title>
                <Card.Text>{t('mission.pictureText')}</Card.Text>
                <Button
                  disabled
                  variant="dark"
                >
                  {t('mission.buttonText')}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col
          xs={12}
          lg={5}
          className="g-0 d-flex align-items-center"
        >
          <h1 className="text-bg-danger text-center py-5">{t('mission.motto')}</h1>
        </Col>
      </Row>
    </Container>
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
