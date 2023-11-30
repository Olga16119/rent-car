import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense
        fallback={
          <Loader
            position={{
              marginTop: '100px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          />
        }
      >
        <main>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;