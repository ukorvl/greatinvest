import { ReactElement } from 'react';
import Row from 'react-bootstrap/Row';
import { PictureBackground } from '../components';
import { MainContent } from '../components/Main/MainContent';

/**
 * Main view.
 *
 * @returns React component.
 */
const MainView = (): ReactElement => {
  return (
    <Row>
      <PictureBackground />
      <MainContent />
    </Row>
  );
};

export default MainView;
