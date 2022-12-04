import { ReactElement, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { routes } from './routing';

/**
 * App.
 *
 * @returns React component.
 */
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
