import { ReactElement, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import { Footer } from '../Footer';
import { Header } from '../Header';

/**
 * Layout props.
 */
type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout.
 *
 * @param {LayoutProps} props Props.
 * @returns React component.
 */
export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <Header />
      <Container
        fluid
        className="pb-4"
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};
