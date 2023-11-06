import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetailsEndpoint } from "../api/enpoints";
import { getNewsDetails } from "../api/adaptors";
import { getFormattedDate } from "../utils/date";
import { addToFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./NewsDetails.module.css";

function NewsDetails() {
  let { favoritesDispatch } = useContext(FavoritesContext);
  let { newsId } = useParams();
  newsId = decodeURIComponent(newsId);
  let newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  let newsDetails = useFetch(newsDetailsEndpoint);
  let adaptedNewsDetails = getNewsDetails(newsDetails);

  let { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;
  let formattedDate = getFormattedDate(date);

  function handleAddToFavorites(product) {
    let actionResult = addToFavorites(product);
    favoritesDispatch(actionResult);
  }

  return (
    <Layout>
      <Container className={`${styles.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              dangerouslySetInnerHTML={{ __html: image }}
              className="mb-4"
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <p>{author}</p>
                <p className="mb-0">{formattedDate}</p>
              </div>
              <Button
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    thumbnail,
                    title,
                    description,
                    hasCloseButton: true,
                  });
                }}
              >
                Adauga la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
