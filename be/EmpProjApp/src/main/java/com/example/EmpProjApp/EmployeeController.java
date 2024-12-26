package com.example.EmpProjApp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
//@CrossOrigin(origins = "*")
@RequestMapping("/emp")
public class EmployeeController {

	@Autowired
	private EmployeeService empService;
	
//	@PostMapping("/save")
//	public ResponseEntity<Employees> saveEmp(@RequestBody Employees employees) {
//		
//		return ResponseEntity.ok(empService.emp_save(employees));
//	}
	@PostMapping("/save")
	public ResponseEntity<EmployeeDTO> saveEmp(@RequestBody Employees employees) {
		
		return ResponseEntity.ok(empService.emp_save(employees));
	}
	
	@RequestMapping("/readAll")
	public ResponseEntity<Iterable<Employees>> empReadAll ()	{
		return ResponseEntity.ok(empService.readAll());
	}
	
	@DeleteMapping("/{id}")
//	public ResponseEntity<String> delete(@PathVariable Integer id)	{
//		return ResponseEntity.ok(empService.delete(id));
	public void delete(@PathVariable Integer id)	{
		empService.delete(id);
	}
	
	@RequestMapping("/{id}")
	public ResponseEntity<Optional<Employees>> viewEmp(@PathVariable Integer id)	{
		return ResponseEntity.ok(empService.view(id));
	}
}
