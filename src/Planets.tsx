import React, { useState } from "react";
import { LocationsVariables, LocationData } from './interfaces';
import { FETCH_LOCATIONS } from "./queries";
import { useQuery } from '@apollo/react-hooks';
import { Card, Button, Container, Row, Col, Spinner, Collapse } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import './App.css';
import { Link } from "react-router-dom";


export const Locations: React.FC=()=> {  
  const { loading, data, fetchMore } = useQuery<LocationData, LocationsVariables>(FETCH_LOCATIONS, { variables: { page: 1 } });
  const locations = loading || !data ? [] : data.locations.results;
  const [open, setOpen] = useState(false);

  if (loading) {
    return <Spinner animation="border"></Spinner>;
  }
  
    return (
        <Container className='body'>
        <Row>
          {locations.map((it, i) => (
            <Col xs={12} md={6} lg={4} className={'row'} key={i} >
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Body onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                  <Card.Title>{it.name}</Card.Title>
                  <Card.Text>{it.type}</Card.Text>
                  <Card.Text>{it.dimension}</Card.Text>
                  <Link to={'/planets/' + it.id}><Button variant="primary">More info</Button></Link>
                  {/* <Link to={'/characters/' + it.id}><Button variant="primary">More info</Button></Link> */}
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                     This is date when created:  {it.created} and more info to come
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
  
              {
                i === locations.length - 3 && (
                  <Waypoint onEnter={() =>
                    fetchMore({
                      variables: { 
                        page: (locations.length + 20) / 20 
                      },
                      updateQuery: (previous, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return previous
                        return {
                            locations: {
                            __typename: 'Locations',
                            results: [...locations, ...fetchMoreResult.locations.results]
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