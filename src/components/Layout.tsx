import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <header>
        <h1>Header!</h1>
      </header>
      <Outlet />
      <footer>Footer!</footer>
    </main>
  );
};
