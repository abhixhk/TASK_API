const express = require('express');
const router = express.Router();
const tracker = require('../Controller/tracker');

router.post('/v1/tasks/',tracker.createTask);
// Enables the user to task to the application as a user

router.get('/v1/tasks/',tracker.allTasks);
// Enables the user to get the list of all Tasks.

router.get('/v1/tasks/:id',tracker.taskDetails);
// Enables the user to get the details of particular task.

router.put('/v1/tasks/:id',tracker.editTask);
// Enables the user to edit task detailst.

router.delete('/v1/tasks/:id',tracker.deleteTask);
// Enables the user to delete a task

router.all('*',tracker.invalid);
// Invalid Path

module.exports = router;
    