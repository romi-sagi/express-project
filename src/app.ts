import express from 'express';
import router from './routes/taskRoutes';

const app = express();
const tasksRoute = "/tasks"

app.use(express.json());
app.use(tasksRoute, router);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});