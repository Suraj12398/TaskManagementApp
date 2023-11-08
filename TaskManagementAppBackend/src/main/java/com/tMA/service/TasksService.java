package com.tMA.service;

import java.util.List;

import com.tMA.model.Tasks;


public interface TasksService {

	public Tasks createTask(Tasks task);
	
	public List<Tasks> viewTasks(Integer uId);
	
	public Tasks updateTasks(Tasks task);
	
	public void deleteTasks(Integer tId);

	
}
