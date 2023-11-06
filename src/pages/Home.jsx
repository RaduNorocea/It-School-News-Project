import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/enpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  let technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  let footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let adaptedTechnologyData = getNewsList(technologyData);
  let adaptedFootballData = getNewsList(footballData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate stirile legate de tehnologie in sectiunea{""}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fotbal</h1>
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate stirile legate de fotbal in sectiunea{""}
            <Link to="/category/football" className="text-secondary"></Link>
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 py-3">Favorite</h1>
          <p> Vrei sa iti salvezi stirile favorite?</p>
          <p>
            In cadrul fiecarei stiri gasesti un buton pentru a adauga la
            favorite
          </p>
          <p className="pb-3">
            Viziteaza sectiunea{""}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>
            pentru a vedea stirile adugate
          </p>
        </Container>
      </section>
    </Layout>
  );
}
export default Home;
