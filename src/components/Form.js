import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../redux/actions'
import { url } from '../helpers/url';
import Axios from 'axios';
import { Button } from 'reactstrap';
import Orders from './Orders';



function Form(props) {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    function addContact(e) {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title,
            comment,
            price,
            image
        }
        if (title !== '' && image !== '') {
            (async function () {
                await Axios.post(url + "/posts", data)
                props.addNewContact(data)
                setTitle('')
                setComment('')
                setPrice('')
                setImage('')
            }());
        }
    }
    const [items, setItems] = useState([])
    async function showOrders() {
        await Axios.get(`${url}/orders`)
            .then(res => setItems(res.data))
    }

    return (
        <div>
            <form onSubmit={(event) => addContact(event)}>
                <div className="form-group">
                    <input
                        className="form-control mb-4"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="form-control mb-4"
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                        className="form-control mb-4"
                        type="text"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <input
                        className="form-control mb-4"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Button className="w-100" color="primary" type="submit">Add item</Button>
                    <Orders data = {items}/>
                </div>
            </form>
            <Button onClick={() => showOrders()} className="w-100 mb-5" color="success" type="submit">Show orders (also in console)</Button>
            <div id="orderDiv"></div>
        </div>
    )
}


export default connect(null, { addNewContact })(Form);