import { ReactElement } from 'react';
import { PictureBackground } from '../components';
import { MainContent } from '../components/Main/MainContent';

/**
 * Main view.
 *
 * @returns React component.
 */
const MainView = (): ReactElement => {
  return (
    <>
      <PictureBackground />
      <MainContent />
    </>
  );
};

export default MainView;
