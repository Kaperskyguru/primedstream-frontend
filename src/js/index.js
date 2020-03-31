import Search from './models/Search';

/** Global state ofthe app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 * 
 */
const state = {};

const search = new Search('pizza');

console.log(search);
search.getResults();