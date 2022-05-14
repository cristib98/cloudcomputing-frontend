import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';

function RecipePage(props) {

    const [currentRecipe, setCurrentRecipe] = useState([]);
    const { id } = useParams();

    var search = require('youtube-search');
    const [searchfor, setSearchfor] = useState('')
    const [reviewVisible, setReviewVisible] = useState(false)

    var opts = {
      maxResults: 10,
      key: process.env.REACT_APP_YT_KEY
  };

  const showReview = (title) => {
    setReviewVisible(true)
    search(`${title} recipe`, opts, function (err, results) {
        console.log(`----------------------------- ${title} recipe --------------------------------`)
        let link = results[0].link
        let link1 = link.slice(32, )
        setSearchfor(`https://www.youtube.com/embed/${link1}`)
        console.dir(results)
    });
}



 

      useEffect(() => {
          console.log("id = " + id)
        fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}`)
          .then(res => {
            return res.json();
          })
          .then((data) => {
            setCurrentRecipe(data.recipes);
            console.log('data useEffect', data.recipes[0])
            console.log(currentRecipe.title)
          },
          (err) => {
            return console.error(err)
          })
      }, [id])


      console.log(currentRecipe)
    
    return ( 
        <div>
            <Header/>
            {currentRecipe && currentRecipe.map((recipe, index) => (
                <div>
                  
                <h1 className='recipeTitle'>{recipe.title}</h1>
                <h2 className='recipeAuthor'>A recipe by - {recipe.author}</h2>
                <div className='container-fluid pt-3 mb-5 my-2 shadow-sm'>
                <section className='p-md-3 mx-md-5'>
                    <div className='row d-flex justify-content-center'>
                    </div>
                </section>
               </div>

                <h2 className='recipeAuthor'>Preparation time: {recipe.preparation_time} minutes</h2>
                <div className='container-fluid pt-3 mb-5 my-2 shadow-sm'>
                <section className='p-md-3 mx-md-5'>
                    <div className='row d-flex justify-content-center'>
                    </div>
                </section>
               </div>
                <h2 className='recipeAuthor'>Ingredients:</h2>
                <p className='recipeIngredients'>{recipe.ingredients}</p>
                <div className='container-fluid pt-3 mb-5 my-2 shadow-sm'>
                <section className='p-md-3 mx-md-5'>
                    <div className='row d-flex justify-content-center'>
                    </div>
                </section>
               </div>
               <h2 className='recipeAuthor'>Description:</h2>
                <p className='recipeDescription'>{recipe.description}</p>
                <img className='recipeImg' src={recipe.imageUrl} width="500rem" height="500rem"></img>
                <div className='mt-4'>
                  <h1>Youtube API here!</h1>  
                  <div className='container-fluid pt-3  my-2 shadow-sm'>
                <section className='p-md-3 mx-md-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6 text-center black-text'>
                            <h2 className='font-weight pb-2s'>Review</h2>
                            <i className='fab fa-youtube red-text fa-3x mb-5' />
                            {reviewVisible ?
                                <iframe width="100%" height="500" src={searchfor} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                :
                                <div className="glassButton" onClick={() => showReview(recipe.title)}>Show recipe on youtube:</div>
                            }
                        </div>

                    </div>
                </section>
            </div>
                </div>
            </div>

              

             ))}
         </div>
     
     );
}

export default RecipePage;