import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />

      {children}
    </div>
  );
}

export default Layout;
