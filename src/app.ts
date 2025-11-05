import express from 'express';
import router from './routes/taskRoutes';

const app = express();

app.use(express.json());
app.use("/tasks", router);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});