import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameDetailsApi } from '../../redux/GameDetailsSlice';
import { GameScreenshotApi } from '../../redux/GameScreenshotSlice';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Icons } from '../../components/PlatformIconList';
import styles from './GameDetails.module.scss';

export default function GameDetails() {
  const { id } = useParams();
  const { gamesDetails, loading } = useSelector((state) => state.gameDetails);
  const { gameScreenshot } = useSelector((state) => state.gameScreenshot);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GameDetailsApi(id));
    dispatch(GameScreenshotApi(id));
  }, [dispatch, id]);

  const details = gamesDetails;
  const screenShot = gameScreenshot;

  if (loading) {
    return <div>GameDetails Loading...</div>;
  }
  return (
    <div className={styles.GameDetails}>
      <Container fluid>
        <Row className={styles.overlay}>
          <Col sm={12} lg={6}>
            <h1>{details.name}</h1>
            <div className="d-flex gap-2 mb-2 align-items-center">
              {details.platforms?.map((platform) => (
                <>
                  <i key={platform.platform.id}>
                    {Icons[platform.platform.slug]
                      ? Icons[platform.platform.slug]
                      : platform.platform.slug}
                  </i>
                </>
              ))}
              <p>AVERAGE PLAYTIME : {details.playtime}</p>
            </div>
            <h4>About</h4>
            {details.description_raw}
          </Col>
          <Col sm={12} lg={6}>
            <div>
              {screenShot?.results?.map((screenshot, index) => {
                return (
                  <>
                    {index === 0 ? (
                      <img
                        src={screenshot.image}
                        alt=""
                        className="img-fluid w-100"
                      />
                    ) : null}
                  </>
                );
              })}
              <div className="d-flex gap-3 justify-content-center mt-3 flex-wrap">
                {screenShot?.results?.map((screenshot, index) => {
                  return (
                    <>
                      {index !== 0 ? (
                        <img
                          src={screenshot.image}
                          alt=""
                          className="img-fluid w-40"
                        />
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
