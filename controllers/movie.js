import movies from '../data/movies.js'

export const getAllMovies = (req, res) => {
    res.status(200).json(movies);
};
export const getMovieById = (req, res) => {
    const id = req.params.id;
    if(id < 0 || id >= movies.length){
        res.status(404).json({message: `Movie with id ${id} not found`});
    }
    res.status(200).json(movies[id]);
}
export const CreateMovie = (req, res) => {
    const {title, director, relase, oscar_winning} = req.body;
    if(!title || !director || !relase || oscar_winning === undefined) {
        res.status(400).json({message: 'All fields are required'});
    }
    const newMovie = {title, director, relase, oscar_winning};
    movies.push(newMovie);
    res.status(201).json(newMovie);
}
export const updateMovieById = (req, res) => {
    const id = req.params.id;
    if(id < 0 || id > movies.length - 1) {
        res.status(404).json({message: 'Movie not found'});
    }
    const { title, director, relase, oscar_winning } = req.body;
    const newMovie = {title, director, relase, oscar_winning };
    movies[id] = newMovie;
    res.json(newMovie);
};
export const deleteMovieById = (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id > movies.length - 1) {
        res.status(404).json({message: 'Movie not found'});
    }
    movies.splice(id, 1);
    res.json({message : 'Movie deleted'});
};