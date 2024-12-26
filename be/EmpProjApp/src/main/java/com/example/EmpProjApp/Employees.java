package com.example.EmpProjApp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employees {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer emp_Id;
	private String empName;
	private String empMobNumber;
	private String empEMailId;
	private String empRole;
	
	public Integer getEmp_Id() {
		return emp_Id;
	}
	public void setEmp_Id(Integer emp_Id) {
		this.emp_Id = emp_Id;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpMobNumber() {
		return empMobNumber;
	}
	public void setEmpMobNumber(String empMobNumber) {
		this.empMobNumber = empMobNumber;
	}
	public String getEmpEMailId() {
		return empEMailId;
	}
	public void setEmpEMailId(String empEMailId) {
		this.empEMailId = empEMailId;
	}
	public String getEmpRole() {
		return empRole;
	}
	public void setEmpRole(String empRole) {
		this.empRole = empRole;
	}
}
