import React from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { FETCH_CHARACTERS } from "./queries";
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom'
import './App.css';
import { CharactersVariables, CharacterData } from './interfaces';
import { Waypoint } from 'react-waypoint';

export const Body: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<CharacterData, CharactersVariables>(FETCH_CHARACTERS, { variables: { page: 1 } });
  const characters = loading || !data ? [] : data.characters.results;


  if (loading) {
    return <Spinner animation="border"></Spinner>;
  }
  return (


    <Container className='body'>
      
      <Row>
        {characters.map((it, i) => (
          <Col xs={12} md={6} lg={4} className={'row'} key={i} >
            <Link to={'/characters/' + it.id}><Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={it.image} className='img' />
              <Card.Body>
                <Card.Title>{it.name}</Card.Title>
              </Card.Body>
            </Card>
            </Link>

            {
              i === characters.length - 3 && (
                <Waypoint onEnter={() =>
                  fetchMore({
                    variables: {
                      page: (characters.length + 20) / 20
                    },
                    updateQuery: (previous, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return previous
                      return {
                        characters: {
                          __typename: 'Characters',
                          results: [...characters, ...fetchMoreResult.characters.results]
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
  )
}