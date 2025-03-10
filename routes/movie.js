import express from 'express'   
import * as moviesController from '../controllers/movie.js'

const router = express.Router();

router.get('/', moviesController.getAllMovies);

router.get('/:id', moviesController.getMovieById);

router.post('/', moviesController.createMovie);

// router.put('/:id', moviesController.updateMovieById);

// router.delete('/:id', moviesController.deleteMovieById);

export default router;