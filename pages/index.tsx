import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Header from "../components/Header";
import Stack from "../components/Stack";
import Footer from "../components/Footer";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projets from "../components/Projets";
import FormationTimeline from "../components/FormationTimeline";
import { NextPage } from "next";
import { fetchData } from "../pages/api/fetchData";
import Head from "next/head";

const Home: NextPage = ({
  headerData,
  xpData,
  projectsData,
  formationData,
  stackData,
}: any) => {
  const [isMobile, setIsMobile] = useState<boolean>();
  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return (
    <div className="App">
      <Head>
        <title>Axel Bizel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Axel Bizel's developer portfolio" />
      </Head>
      {headerData && (
        <section id="header">
          <Header data={headerData} />
        </section>
      )}
      <NavbarComponent />
      {xpData && (
        <section id="experience" className="section">
          <ExperienceTimeline data={xpData} isMobile={isMobile} />
        </section>
      )}
      {projectsData && (
        <section id="projets" className="section">
          <Projets data={projectsData} isMobile={isMobile} />
        </section>
      )}
      {formationData && (
        <section id="formation" className="section">
          <FormationTimeline data={formationData} isMobile={isMobile} />
        </section>
      )}
      {stackData && (
        <section id="stack" className="section">
          <Stack data={stackData} isMobile={isMobile} />
        </section>
      )}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const headerData = await fetchData("HEADER");
  const xpData = await fetchData("XP");
  const projectsData = await fetchData("PROJETS");
  const formationData = await fetchData("FORMATION");
  const stackData = await fetchData("STACK");
  return {
    props: { headerData, xpData, projectsData, formationData, stackData },
  };
}
