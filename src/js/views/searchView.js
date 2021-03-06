// const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`);
// with this:

// const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);


// Then, in Recipe.js (as soon as you get there), please replace:

// const res = await axios(`${PROXY}http://food2fork.com/api/get?key=${KEY}&rId=${this.id}`);
// with this:

// const res = await axios(`https://forkify-api.herokuapp.com/api/g


import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () =>  {
    elements.searchInput.value = ''; 
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

/* 'pasta with tomato and spinach
acc:0 / acc+ curr.length  = 5 / newTitle = ['pasta]
acc:5 / acc+ curr.length  = 9 / newTitle = ['pasta' , 'with]
acc:9 / acc+ curr.length  = 15 / newTitle = ['pasta' , 'with', 'tomato']
acc:15 / acc+ curr.length  = 18 / newTitle = ['pasta' , 'with', 'tomato']
acc:18 / acc+ curr.length  = 24 / newTitle = ['pasta' , 'with', 'tomato']
*/ 

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <=  limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
    
        }, 0);

        //return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};
const renderRecipe = recipe => {
    const markup = ` <li>
                        <a class="results__link" href="${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="${recipe.title}">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);

};

export const renderResults = recipes => {
    console.log(recipes)
    recipes.forEach(renderRecipe);
};


