// https://forkify-api.herokuapp.com/api/search

import { elements } from './views/base';
import Search from './modules/Search';
import * as searchView from './views/searchView';

/** global state of the app
 *  -search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */

const state = {};

const controlSearch = async () => {
    //1) get query from view
    const query = searchView.getInput();
   
    if(query){
        //2) new search object and add to state
        state.search = new Search(query);

        //3)prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4) search for recipes
        await state.search.getResults();

        //5) render result on UI
        console.log(state.search.result)
        searchView.renderResults(state.search.result);

    }


}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})





