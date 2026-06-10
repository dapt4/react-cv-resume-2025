import { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
// import { Menu2 } from "../Components/Menu2";
import { SEO } from "../Components/SEO";

import { DataEN as dataSchema } from "../Schemas/Data";
import { DataES as dataSchemaEs } from "../Schemas/Data";
// import { Menu as menuSchema } from "../Schemas/Menu";


export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  const [lang, setLang] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const handleLang = () => {
    setLang(!lang)
  };

  const { profile, aboutMe, skills, socialMedia, experience } = lang === true ? dataSchema : dataSchemaEs;
  return (
    <>
      <SEO {...profile} {...aboutMe} />
      {/*!matches && <Menu2 {...menuSchema} />*/}
      <Menu handleLang={handleLang} lang={lang}/>
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} {...socialMedia} isMobileView={!matches} />
            <AboutMe {...aboutMe} />
            <Academic {...experience} label={skills.academicLabel} />
            <Skills {...skills} />
          </div>
          <div className="resume__right">
            <Works {...experience} label={skills.experienceLabel} />
            <Proyects {...experience} label={skills.projectsLabel} />
          </div>
        </div>
      </main>
    </>
  );
};
