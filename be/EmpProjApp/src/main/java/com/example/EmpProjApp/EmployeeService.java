package com.example.EmpProjApp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
//	public Employees emp_save(Employees employees)	{
//		employeeRepo.save(employees);
//		return employees;
//	}
	
	public EmployeeDTO emp_save(Employees employees)	{
		EmployeeDTO empDTO = new EmployeeDTO();
		employeeRepo.save(employees);
		empDTO.setMessage("Employee saved Successfully....");
		return empDTO;
	}
	
	public void delete(Integer byId)	{
		employeeRepo.deleteById(byId);
//		return "Sucessfully deleted";
	}
	
	public Iterable<Employees> readAll()	{
		return employeeRepo.findAll();
	}
	
	public Optional<Employees> view(Integer id)	{
		Optional<Employees> employee = Optional.empty();
		employee = employeeRepo.findById(id);
		return employee;
	}
}
