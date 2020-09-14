import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getContacts, deleteContact, saveContact } from '../redux/actions';
import { url } from '../helpers/url'
import { useCustomFetch } from '../helpers/customFetch';
import Axios from 'axios';

function Notes(props) {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [isEdit, setIsEdit] = useState(null)
    const { data } = useCustomFetch({ 
        url: url + "/posts"
    })
    
    useEffect(() => {
        if (data)props.getContacts(data)
    }, [data])

    function delData(id){
        async function delContact(id){
            await Axios.delete(`${url}/posts/${id}`)
            props.deleteContact(id)
            Axios.get(url+"/posts")
            .then(({data})=>{
                props.getContacts(data)
            })

        }
        delContact(id)
    }


    function editData({title, comment, price, image, id}){
        console.log("Edit:", id)
        setTitle(title)
        setComment(comment)
        setPrice(price)
        setImage(image)


        if(isEdit !== id){
            setIsEdit(id)
        }else{
            setIsEdit('')
        }
    }
    function saveData(id){
        const data = {
            title,
            comment, 
            price,
            image,
        }
        setIsEdit("")
        async function saveContact(id){
            const res = await Axios.patch(`${url}/posts/${id}`, data)
            props.saveContact(data)          
        }
        saveContact(id)
    }   

    return (
        <div className="list-group">
            {props.contacts ? props.contacts.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                    {isEdit === item.id ?

                    <div>
                        <input className="w-50 mb-1 mr-1 " value={title} 
                        onChange={(e)=> setTitle(e.target.value)}/>
                        <input className="w-50 mb-1 mr-1" value={comment} 
                        onChange={(e)=>setComment(e.target.value)}/>
                        <input className="w-50 mb-1 mr-1" value={price} 
                        onChange={(e)=>setPrice(e.target.value)}/>
                        <input className="w-50 mb-1 mr-1" value={image} 
                        onChange={(e)=>setImage(e.target.value)}/>
                        <button className="btn btn-success btn-sm mr-3 w-50"
                        onClick={()=>saveData(item.id)}>save</button>
                    </div> : 
                        <p>
                            <b>title:</b>  {item.title} <br/>
                            <b>comment:</b>  {item.comment} <br/>
                            <b>price:</b>{item.price} <br/>
                            <b>image:</b>{item.image}
                        </p>}
                        
                    <div>
                    <button className="btn btn-warning btn-sm mr-3 w-100" 
                    onClick={()=>editData(item)}>edit</button>
                    <button className="btn btn-danger btn-sm w-100 mt-2"
                    onClick={()=>delData(item.id)}>delete</button>
                    </div>
                </li>
            )) : <p>Список товаров пуст</p>}
        </div>
    )
}

const mapStateToProps = state => {
    let { contacts } = state.ContactReducer
    return { contacts }
}

export default connect(mapStateToProps, { getContacts, deleteContact, saveContact })(Notes);
