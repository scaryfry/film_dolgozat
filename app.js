import express from 'express';
import moviesRoute from './routes/movie.js';

const app = express();
app.use(express.json());
app.use('/movies', moviesRoute);


app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});
