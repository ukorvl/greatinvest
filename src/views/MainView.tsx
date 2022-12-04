import { ReactElement } from 'react';
import Row from 'react-bootstrap/Row';
import { PictureBackground } from '../components';

/**
 * Main view.
 *
 * @returns React component.
 */
const MainView = (): ReactElement => {
  return (
    <Row>
      <PictureBackground />
      <div style={{ height: '700px', background: 'red' }}></div>
    </Row>
  );
};

export default MainView;
