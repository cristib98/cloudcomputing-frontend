import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "../components/Header"

function RecipesList() {
    const [recipes, setRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/recipes`,
            );
            if (result.data.recipes) {
                let recipesArray = result.data.recipes;
                recipesArray.reverse();
                setRecipes(result.data.recipes);
            }
        };

        fetchData();
    }, []);


    const findByName = (e) => {
        const fetchByTitle = async () => {
            const search = e.target.value;
            setSearchRecipe(search)
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/recipes/bytitle/${search}`,
            );
            if (result.data.recipes) {
                let recipesArray = result.data.recipes;
                recipesArray.reverse();
                setRecipes(result.data.recipes);
            }
        };

        fetchByTitle();
    };

    return (

        <React.Fragment>
                    <Header/>
                    <div className='container-fluid pt-3 mb-5 my-2 shadow-sm'>
                <section className='p-md-3 mx-md-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6 text-center black-text'>
                            <h2 className='homeTitle'>Here are some recipes added by our users!</h2>
                        </div>
                    </div>
                </section>
            </div>
        <div>
            <input
                    type="text"
                    className="search-bar mt-4 mb-4"
                    placeholder="Search a recipe by name..."
                    value={searchRecipe}
                    onChange={findByName}
                />
        </div>
        <div className='row row-cols-2 row-cols-md-3 mt-4'>
            
            {recipes && recipes.map((recipe, index) => (
                <Card className='recipeCard' key={index} style={{ width: 'auto' }}>
                <Card.Img className='cardImg' variant="top" src={recipe.imageUrl} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>   
                  <Card.Text>
                    {recipe.ingredients}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{recipe.preparation_time} minutes</ListGroupItem>
                  <ListGroupItem>By {recipe.author}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={"/recipes/" + recipe.recipeID}>
                  <Card.Link className='cardLink'>Check Recipe</Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            

                ))}
        </div>
        </React.Fragment>
    )


}


  

export default RecipesList;