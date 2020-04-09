// const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`);
// with this:

// const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);


// Then, in Recipe.js (as soon as you get there), please replace:

// const res = await axios(`${PROXY}http://food2fork.com/api/get?key=${KEY}&rId=${this.id}`);
// with this:

// const res = await axios(`https://forkify-api.herokuapp.com/api/g