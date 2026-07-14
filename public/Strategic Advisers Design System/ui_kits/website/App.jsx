// Strategic Advisers website — app shell / router
function App() {
  const [route, setRoute] = React.useState('home');
  const navigate = (r) => { setRoute(r || 'home'); window.scrollTo({ top: 0, behavior: 'auto' }); };
  const screens = {
    home: window.HomeScreen,
    services: window.ServicesScreen,
    industries: window.IndustriesScreen,
    contact: window.ContactScreen,
  };
  const Screen = screens[route] || window.HomeScreen;
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', background: '#fff', minHeight: '100vh' }}>
      <window.NavBar current={route} onNavigate={navigate} />
      <main><Screen onNavigate={navigate} /></main>
      <window.Footer onNavigate={navigate} />
    </div>
  );
}

Object.assign(window, { App });
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
