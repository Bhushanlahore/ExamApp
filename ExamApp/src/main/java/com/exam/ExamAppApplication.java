 package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.exam.helper.UserFoundException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;

@SpringBootApplication
public class ExamAppApplication implements CommandLineRunner{

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamAppApplication.class, args);
	}

	
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		try {
		
		System.out.println("Staring Application");
		
		User user = new User();
		user.setFirstname("Bhushan");
		user.setLastname("Lahore");
		user.setUsername("Bhushan111");
		user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
		user.setEmail("bhushan@gmail.com");
		user.setPhone("8888121314");
		user.setProfile("default.png");
		
		Role role1 = new Role();
		role1.setRoleId(54L);
		role1.setRoleName("ADMIN");
		
		Set<UserRole> userRolesetSet = new HashSet<>();
		
		UserRole userRole = new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		userRolesetSet.add(userRole);
		
		User user2 = this.userService.createUser(user, userRolesetSet);
		System.out.println(user2.getUsername());
		} catch (UserFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
			
		}
	}

}
