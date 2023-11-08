package com.tMA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.tMA.model.Tasks;
import com.tMA.service.TasksService;

@RestController
@RequestMapping("/tasks")
public class TasksController {

    @Autowired
    private TasksService tasksService;

    @PostMapping
    public Tasks createTask(@RequestBody Tasks task) {
        return tasksService.createTask(task);
    }

    @GetMapping
    public List<Tasks> viewTasks(@RequestParam Integer uId) {
        return tasksService.viewTasks(uId);
    }

    @PutMapping
    public Tasks updateTask(@RequestBody Tasks task) {
        return tasksService.updateTasks(task);
    }

    @DeleteMapping("/{tId}")
    public void deleteTask(@PathVariable Integer tId) {
        tasksService.deleteTasks(tId);
    }
}

