import {
  React,
  Route,
  Routes,
  Router,
  useLocation,
  Home,
  Navbar,
  Footer,
  Movie,
  PersonWrapper,
  Login,
  AuthProvider,
  Bookmark,
  BookmarksProvider,
  Favourites,
  FavoritesProvider,
  TV,
} from "./Barrel";

const AppContent = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== "/login";

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/person/:id" element={<PersonWrapper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlist" element={<Bookmark />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/tv/:id" element={<TV />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <BookmarksProvider>
      <FavoritesProvider>
        <Router>
          <AppContent />
        </Router>
      </FavoritesProvider>
    </BookmarksProvider>
  </AuthProvider>
);

export default App;
