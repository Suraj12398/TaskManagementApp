package com.tMA.service;

import java.util.ArrayList;

import com.tMA.exception.InvalidCredentialException;
import com.tMA.exception.NotFoundException;
import com.tMA.model.Users;


public interface UsersService{

	public Users login(String email, String password) throws InvalidCredentialException, NotFoundException;
	
	public Users signUp(Users user);
	
	
}
