import React from 'react';
import {Alert, Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';

const MusicList = (props) => {
    return (
        <React.Fragment>
            <Alert color="primary">
                This is a primary alert — check it out!
            </Alert>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <ListGroup>
                <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </React.Fragment>

    );
}

export default MusicList;