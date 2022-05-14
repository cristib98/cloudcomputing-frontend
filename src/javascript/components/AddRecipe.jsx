import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from './Header';


function AddRecipe() {

    const form = useRef();
    const checkBtn = useRef();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparationTime, setPreparationTime] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [successful, setSuccessful] = useState(false);
    



    const handleAdd = async (e) => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const ingredients = document.getElementById('ingredients').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const preparation_time = document.getElementById('preparation_time').value;
        const description = document.getElementById('description').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/recipes/`,
                {
                    title,
                    author,
                    ingredients,
                    preparation_time,
                    description,
                    imageUrl,
                });

                if(response.status === 200) {
                    alert("The recipe was created successfully!");
                
                }
                else {console.log("nu")}
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }
    
    

    return (



        
        <React.Fragment>
                <Header/>   

                <div id="MessagesSubmit">
            <h1 className='addTitle'>Add a recipe!</h1>
            <form className="section-form">
                <div className="form">
                    <div className="inputAdd">
                        <label className="inputLabel" htmlFor="title">
                            Recipe name
                        </label>
                        <input className="inputArea" id="title" type="text" placeholder="recipe" />
                    </div>
                    <div className="inputAdd">
                    <label className="inputLabel" htmlFor="author">
                            Author name
                        </label>
                        <input className="inputArea" id="author" type="text" placeholder="Will Smith" />
                    </div>
                    <div className="inputAdd">
                    <label className="inputLabel" htmlFor="ingredients">
                            Ingredients
                        </label>
                        <input className="inputArea" id="ingredients" type="text" placeholder="Salt, sugar ..." />
                    </div>
                    <div className='inputAdd'>
                    <label className="inputLabel" htmlFor="preparation_time">
                            Preparation time in minutes
                        </label>
                        <input className="inputArea" id="preparation_time" type="text" placeholder="120" />
                    </div>
                    <div className='inputAdd'>
                    <label className="inputLabel" htmlFor="imageUrl">
                           Image URL
                        </label>
                        <input className="inputArea" id="imageUrl" type="text" placeholder="www.google.com" />
                    </div>
                </div>
                <div className="inputAdd">
                    <div className="">
                        <label className="inputLabel" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            rows={5}
                            name="comment"
                            id="description"
                            className="inputTextArea"
                            placeholder={'How do you cook it?'} />
                    </div>
                </div>
            </form>
            </div>
            <button
                        className="btnAdd"
                        onClick={handleAdd}>
                            ADD
                    </button>
            </React.Fragment>
    )

}

export default AddRecipe;