import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <h1>Header!</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer!</footer>
    </>
  );
};
