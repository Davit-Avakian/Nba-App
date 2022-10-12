import { GlobalStyles, AppContainer } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Login from 'components/Login';
import Home from 'components/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useState } from 'react';
import RequireAuth from 'components/Auth/RequireAuth';

const theme = {
  borderBottom: '1px solid #ebe9e7',
  secondaryTextColor: '#ebe9e7',
  linkColor: '#1070d8',
  containerBgColor: '#ffff'
};

/**
 *  Creates App component containing all components of the page
 *  @returns {component} App component including the components of the page
 */
function App() {
  // keeps boolean value for showing menu
  const [showMenu, setShowMenu] = useState(false);

  // keeps boolean value for checking if user is signed in
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AppContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />

        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="/" element={<Login setSignedIn={setSignedIn} />} />
          <Route path="/register" element={<Login setSignedIn={setSignedIn} register />} />

          {/* PROTECTED ROUTE */}
          <Route element={<RequireAuth signedIn={signedIn} />}>
            <Route path="/home" element={<Home showMenu={showMenu} />} />
          </Route>
        </Routes>

        <Footer />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
