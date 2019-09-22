import React, { useState } from "react";
import { EpisodesVariables, EpisodeData } from './interfaces';
import { FETCH_EPISODES } from "./queries";
import { useQuery } from '@apollo/react-hooks';
import { Card, Collapse, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import './App.css';

export const Episodes: React.FC=()=> {  
  const { loading, data, fetchMore } = useQuery<EpisodeData, EpisodesVariables>(FETCH_EPISODES, { variables: { page: 1 } });
  const episodes = loading || !data ? [] : data.episodes.results;
  const [open, setOpen] = useState(false);

  if (loading) {
    return <Spinner animation="border"></Spinner>;
  }
  
    return (
        <Container className='body'>
        <Row>
          {episodes.map((it, i) => (
            <Col xs={12} md={6} lg={4} className={'row'} key={i} >
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Body onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                  <Card.Title>{it.name}</Card.Title>
                  <Card.Text>{it.episode}</Card.Text>
                  <Card.Text>First on Air: {it.air_date}</Card.Text>
                  {/* <Link to={'/characters/' + it.id}><Button variant="primary">More info</Button></Link> */}
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                     This is date when created:  {it.created} and more info to come
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
  
              {
                i === episodes.length - 3 && (
                  <Waypoint onEnter={() =>
                    fetchMore({
                      variables: { 
                        page: (episodes.length + 20) / 20 
                      },
                      updateQuery: (previous, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return previous
                        return {
                          episodes: {
                            __typename: 'Episodes',
                            results: [...episodes, ...fetchMoreResult.episodes.results]
                          }
                        }
                      }

                    })
                  } />
                )
              }
            </Col>
          ))}
        </Row>
      </Container>
    );
  };