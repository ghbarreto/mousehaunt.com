import type { NextPage } from 'next';
import Career from '../../components/career/Career';
import Header from '../../components/common/Header';
import Ruler from '../../components/common/Ruler';
import Footer from '../../components/common/Footer';
import Sections from '../../components/common/Sections';
import { Link } from '../../components/common/Link';
import Logo from '../../components/common/Logo';
import { sections } from '../../utils/sections';
import { Container } from '../../styles/Home';

const CareerPage: NextPage = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo />
          <Sections sections={sections} />
          <Link href="/store">PRIVATE SALE</Link>
        </Header>
        <Ruler />
        <Footer />
      </Container>
    </>
  );
};

export default CareerPage;
