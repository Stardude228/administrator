import React from 'react'
import { Card, Container, Button } from 'reactstrap'

function Orders(props) {

    return (
        <div>
            {props.data !== [] ? (
                <Container className="mt-3 justify-content-center">
                    <div className="row text-center">
                        {props.data.map((person) => (
                            <Card md={4} className="m-3 p-4" key={person.id}>
                                <h3 className="heading">Order of <p>{person.name}</p> </h3><br />
                                <p><b>Email: </b>{person.email}</p>
                                <p><b>Phone number: </b>{person.phone}</p>
                                <p><b>Chosen Items: </b>{person.productsID.map((itemsId) =>
                                    (<span key={itemsId.id}>{itemsId}</span>))}</p>
                                <p><b>Card Number: </b> {person.cardNumber}</p>
                                <p><b>Valid Card: </b> {person.valid}</p>
                                <Button className="btn btn-danger">Delete</Button>
                            </Card>
                        ))}
                    </div>
                </Container>) : (<div />)}
        </div>
    )
}

export default Orders
