const express = require("express");
const app = express();
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    position: "Software Engineer",
    salary: 80000,
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, Country",
    registrationDate: "2022-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Marketing",
    position: "Marketing Manager",
    salary: 85000,
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    address: "456 Elm St, Town, Country",
    registrationDate: "2022-01-05",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 35,
    department: "HR",
    position: "HR Director",
    salary: 90000,
    email: "michael.johnson@example.com",
    phoneNumber: "555-123-4567",
    address: "789 Oak St, Village, Country",
    registrationDate: "2022-01-10",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 32,
    department: "Sales",
    position: "Sales Manager",
    salary: 87000,
    email: "emily.davis@example.com",
    phoneNumber: "111-222-3333",
    address: "101 Pine St, Town, Country",
    registrationDate: "2022-02-15",
  },
  {
    id: 5,
    name: "Christopher Lee",
    age: 40,
    department: "Engineering",
    position: "Senior Engineer",
    salary: 95000,
    email: "chris.lee@example.com",
    phoneNumber: "444-555-6666",
    address: "202 Cedar St, City, Country",
    registrationDate: "2022-02-20",
  },
  {
    id: 6,
    name: "Amanda Wilson",
    age: 29,
    department: "Marketing",
    position: "Marketing Coordinator",
    salary: 60000,
    email: "amanda.wilson@example.com",
    phoneNumber: "777-888-9999",
    address: "303 Oak St, Village, Country",
    registrationDate: "2022-02-25",
  },

  {
    id: 7,
    name: "Steven Adams",
    age: 33,
    department: "Finance",
    position: "Finance Manager",
    salary: 92000,
    email: "steven.adams@example.com",
    phoneNumber: "333-333-3333",
    address: "404 Maple St, City, Country",
    registrationDate: "2022-03-01",
  },
  {
    id: 8,
    name: "Michelle Rodriguez",
    age: 27,
    department: "Engineering",
    position: "Software Developer",
    salary: 75000,
    email: "michelle.rodriguez@example.com",
    phoneNumber: "777-777-7777",
    address: "505 Elm St, Town, Country",
    registrationDate: "2022-03-05",
  },
  {
    id: 9,
    name: "Daniel Brown",
    age: 45,
    department: "Sales",
    position: "Sales Executive",
    salary: 72000,
    email: "daniel.brown@example.com",
    phoneNumber: "999-999-9999",
    address: "606 Oak St, Village, Country",
    registrationDate: "2022-03-10",
  },
  {
    id: 10,
    name: "Rachel Green",
    age: 31,
    department: "HR",
    position: "HR Coordinator",
    salary: 85000,
    email: "rachel.green@example.com",
    phoneNumber: "111-111-1111",
    address: "707 Pine St, City, Country",
    registrationDate: "2022-03-15",
  },
  {
    id: 11,
    name: "Ryan Cooper",
    age: 36,
    department: "Engineering",
    position: "Software Architect",
    salary: 110000,
    email: "ryan.cooper@example.com",
    phoneNumber: "222-222-2222",
    address: "808 Elm St, Town, Country",
    registrationDate: "2022-03-20",
  },
  {
    id: 12,
    name: "Laura Hall",
    age: 34,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 13,
    name: "Akshan",
    age: 24,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 14,
    name: "Ikyatha",
    age: 74,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 15,
    name: "Akshan",
    age: 22,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 16,
    name: "Absara",
    age: 34,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 17,
    name: "Nilanchana",
    age: 22,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 18,
    name: "Ratheesh",
    age: 24,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 19,
    name: "Ratheesh",
    age: 24,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
  {
    id: 20,
    name: "Ratheesh",
    age: 24,
    department: "Marketing",
    position: "Marketing Director",
    salary: 100000,
    email: "laura.hall@example.com",
    phoneNumber: "333-333-3333",
    address: "909 Oak St, Village, Country",
    registrationDate: "2022-03-25",
  },
];

app.use(express.json());

//GET

//POST
app.post("/api/employees", (req, res) => {
  const {
    name,
    age,
    dapartment,
    position,
    salary,
    email,
    phoneNumber,
    address,
    registrationDate,
  } = req.body;
  const newdata = {
    id: data.length + 1,
    name,
    age,
    dapartment,
    position,
    salary,
    email,
    phoneNumber,
    address,
    registrationDate,
  };
  data.push(newdata); // Fixed the array name here
  res.status(201).json(newdata);
});

//PUT

//DELETE
app.delete("/api/employees/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id);

  const indexToDelete = data.findIndex((employee) => employee.id === idToDelete);

  if (indexToDelete !== -1) {
    const deletedEmployee = data.splice(indexToDelete, 1)[0];
    res.status(200).json({ success: true, deletedEmployee });
  } else {
    res.status(404).json({ success: false, message: "Employee not found" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`"App is running in port ${PORT}"`);
});
