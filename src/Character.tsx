import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Image, Spinner, Row, Col } from "react-bootstrap";
import { FETCH_CHARACTER } from "./queries";
import { useQuery } from "@apollo/react-hooks";
import './App.css';
import { MatchParams, Char } from './interfaces';

export const Character: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<Char>(FETCH_CHARACTER, {variables: { id: match.params.id }});

  if (loading) {
    return <Spinner animation="border"></Spinner>;
  }

  return (
    <div className="char-content">
      {data === undefined || data.character === undefined ? <Spinner animation="border"></Spinner> :
        <>
          <Row>
            <Col xs={12} md={6} lg={4}><Image className="" src={data.character.image} rounded /></Col>
            <Col className="chosenCharacter" xs={12} md={6} lg={4}>
              <h1><span>NAME:    </span>{data.character.name}</h1>
              <h1><span>STATUS:  </span>{data.character.status}</h1>
              <h1><span>SPECIES: </span>{data.character.species}</h1>
              <h1><span>GENDER:  </span>{data.character.gender}</h1>
              
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              {/* <h1>EPISODES: </h1> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              {/* <h1>PLANETS: </h1> */}
            </Col>
          </Row>
        </>
      }
    </div>
  );
};
