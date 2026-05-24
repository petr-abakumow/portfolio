import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function HomePageEn() {
  return (
    <>
      <JsonLd lang="en" />
      <Nav lang="en" />
      <main>
        <Hero lang="en" />
        <About lang="en" />
        <Stack lang="en" />
        <Projects lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
