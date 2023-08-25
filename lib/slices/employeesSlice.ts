import { StateCreator } from "zustand";

interface Employee {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  children?: Array<Employee>;
}

interface EmployeesData {
  employees: Array<Employee>;
}

export interface EmployeesSlice {
  employeesData: EmployeesData;
  addNewEmployee: (parent: string, newEmployee: Employee) => void;
  removeAllEmployee: () => void;
}

export const createEmployeesSlice: StateCreator<EmployeesSlice> = (
  set,
  get
) => ({
  employeesData: {
    employees: [],
  },
  addNewEmployee: (parent: string, newEmployee: Employee) => {
    const employeesData = get().employeesData;

    newEmployee.children = [];

    if (parent !== undefined && parent !== null) {
      let parentEmployee: Employee = employeesData.employees.find(
        (item) => item.id === parent
      );

      if (!parentEmployee) {
        for (let i = 0; i < employeesData.employees.length; i++) {
          const parentEmployeeItem = employeesData.employees[i].children.find(
            (item) => item.id === parent
          );
          if (parentEmployeeItem) {
            employeesData.employees[i].children
              .find((item) => item.id === parent)
              .children.push(newEmployee);
            break;
          }
        }
      } else {
        employeesData.employees
          .find((item) => item.id === parent)
          .children.push(newEmployee);
      }
    } else {
      employeesData.employees.push(newEmployee);
    }

    set({ employeesData });
  },
  removeAllEmployee: () => {
    const employeesData = get().employeesData;
    employeesData.employees = [];

    set({ employeesData });
  },
});
