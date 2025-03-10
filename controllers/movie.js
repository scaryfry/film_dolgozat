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
export const createMovie = (req, res) => {
    const movie = req.body;
    if(!movie.title || !movie.director || !movie.release || movie.oscar_winning === undefined){
        res.status(400).json({message: 'Invalid movie data'});
    }
    const newMovie = {
        title: movie.title,
        director: movie.director,
        release: movie.release,
        oscar_winning: movie.oscar_winning
    };
}