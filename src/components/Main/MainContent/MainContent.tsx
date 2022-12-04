import { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import styles from './MainContent.module.scss';

/**
 * Footer.
 *
 * @returns React component.
 */
export const MainContent = (): ReactElement => {
  const { t } = useTranslation('main', { keyPrefix: 'content' });

  return (
    <Container
      fluid
      className={`text-bg-light ${styles.content}`}
    >
      <Row className="text-center">
        <Col />
      </Row>
    </Container>
  );
};
