import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const FETCH_PLANET = gql`
  query fetchPlanet($page: Int) {
    locations(id: $id) {
      results{
        id
        name
        type
        dimension
        residents {
          id
          name
        }
        created
      }
    }
  }
`;

interface SingleLocationData {
  location: SingleLocation;
}

interface SingleLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  residents: SingleLocationResidents;
}

interface SingleLocationResidents {
  id: number;
  name: string;
}

interface SingleLocationVariables {
  id: number;
}

interface MatchParams {
  id: string;
}

export const SinglePlanet: React.FC<RouteComponentProps<MatchParams>> = ({
  match
}) => {
  const { loading, data } = useQuery<SingleLocationData, SingleLocationVariables>(
    FETCH_PLANET,
    { variables: { id: parseInt(match.params.id) } }
  );

  if (loading || !data || !data.location) {
    return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>;
  }
  
  const location = data.location;
  return (
    <Card className="cardBody">
      <Card.Body>
        <Card.Title> {location.name}</Card.Title>
        <Card.Text> Type: {location.type}</Card.Text>
        <Card.Text> Species: {location.dimension}</Card.Text>
        <Card.Text> Created: {location.created}</Card.Text>
        <Card.Text>
          {" "}
          Residents: {location.residents}
          <Button variant="light">
            <Link
              style={{ display: "flex", justifyContent: "center" }}
              to={"/characters/:id" + location.residents.id}
            >
              Learn more about this character!
            </Link>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
