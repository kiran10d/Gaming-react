import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newGamesApi } from '../../redux/NewGamesSlice';
import { Icons } from '../../components/PlatformIconList';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewGames() {
  const navigate = useNavigate();
  const { games, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newGamesApi());
  }, [dispatch]);

  const gameDetails = (id) => {
    navigate(`/${id}`);
  };

  const NewGames = games;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <h1>New and trending</h1>
          <p>Based on player counts and release date</p>
        </Col>
      </Row>
      <Row>
        {NewGames?.results?.map((game) => (
          <Col sm={12} md={6} lg={4} key={game.name}>
            <div className="gameCard mb-4" onClick={() => gameDetails(game.id)}>
              <img src={game.background_image} alt="" className="img-fluid" />
              <div className="p-3">
                <div className="d-flex gap-2 mb-2">
                  {game.platforms?.map((platform) => (
                    <i key={platform.platform.id}>
                      {Icons[platform.platform.slug]
                        ? Icons[platform.platform.slug]
                        : platform.platform.slug}
                    </i>
                  ))}
                </div>
                <h3>{game.name}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewGames;
