import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd lang="ru" />
      <Nav lang="ru" />
      <main>
        <Hero lang="ru" />
        <About lang="ru" />
        <Stack lang="ru" />
        <Projects lang="ru" />
        <Contact lang="ru" />
      </main>
      <Footer lang="ru" />
    </>
  );
}
