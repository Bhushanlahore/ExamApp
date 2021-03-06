package com.exam.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.model.User;
import com.exam.repository.UserRepository;

@Service
public class UserServiceDetailsImpl implements UserDetailsService{

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method 
		User user = this.userRepository.findByUsername(username);
		if(user == null) {
			System.out.println("User not found");
			throw new UsernameNotFoundException("NO user found!!!"); 
		}
		return user;
	}

}
