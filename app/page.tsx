import { Column } from '@once-ui-system/core';
import PageBackground from './components/PageBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BiographySection from './components/BiographySection';
import FeatureCards from './components/FeatureCards';
import Gallery from './components/Gallery';
import BookSection from './components/BookSection';
import PrologueSection from './components/PrologueSection';
import BookReviewSection from './components/BookReviewSection';
import TypewriterQuote from './components/TypewriterQuote';
import PoemsPreview from './components/PoemsPreview';
import MainTextSection from './components/MainTextSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <Column fillWidth flex={1}>
      <PageBackground />
      <Header />
      <Column as="main" fillWidth flex={1}>
        <HeroSection />
        <BiographySection />
        <FeatureCards />
        <Gallery />
        <BookSection />
        <PrologueSection />
        <BookReviewSection />
        <TypewriterQuote />
        <PoemsPreview />
        <MainTextSection />
        <QuoteSection />
      </Column>
      <Footer />
      <ScrollToTop />
    </Column>
  );
}
