package com.tMA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tMA.model.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, Integer>{

	
	public Users findByEmail(String email);
	
}
