import React from "react"
import Card from 'react-bootstrap/Card'


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Body>
            <Card.Title>GitHub profile</Card.Title>
            <Card.img variant='top' src="picture of epstein"></Card.img>
            <Card.Text>
            This is my GitHub
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard