import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <p>My name is Deiniel R. David, I'am a IT student and currently
            studying in the university of the assumption</p>
            <p>
              <ol>
                <li>My expectation in this subject is always more knowledge to learn.</li>
                <li>It's a good thing that Sir Robert is my prof in this subj because Sir Robert is a great guy</li>
                <li>I expect to be able to utilize my skills in this course.</li>
              </ol>
            </p>
      </section>
    </Layout>
  );
}