 const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "aitisam",
      "tasks": [
        {
          "title": "Complete Report",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2024-12-01",
          "description": "Prepare the monthly report for November.",
          "category": "Reports"
        },
        {
          "title": "Team Meeting",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2024-12-03",
          "description": "Participate in the weekly team meeting.",
          "category": "Meetings"
        },
        {
          "title": "Client Follow-Up",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2024-11-29",
          "description": "Follow up with the client regarding the project update.",
          "category": "Client Relations"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "aitisam",
      "tasks": [
        {
          "title": "Code Review",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2024-12-02",
          "description": "Review the new feature implementation in the project.",
          "category": "Development"
        },
        {
          "title": "Documentation Update",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2024-11-30",
          "description": "Update the project documentation with recent changes.",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "aitisam",
      "tasks": [
        {
          "title": "System Upgrade",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2024-12-05",
          "description": "Upgrade the software system to the latest version.",
          "category": "Maintenance"
        },
        {
          "title": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2024-11-27",
          "description": "Fix bugs reported in the recent release.",
          "category": "Development"
        },
        {
          "title": "Database Backup",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2024-11-28",
          "description": "Create a backup of the production database.",
          "category": "Database"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "aitisam",
      "tasks": [
        {
          "title": "UI Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2024-12-06",
          "description": "Design the user interface for the new module.",
          "category": "Design"
        },
        {
          "title": "Team Training",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2024-11-25",
          "description": "Conduct training for the team on the new tools.",
          "category": "Training"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "aitisam",
      "tasks": [
        {
          "title": "Market Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2024-12-04",
          "description": "Conduct research on market trends.",
          "category": "Research"
        },
        {
          "title": "Social Media Update",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2024-11-26",
          "description": "Update the company's social media profiles.",
          "category": "Marketing"
        }
      ]
    }
  ]
  
  const admin =[
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "aitisam"
  }];



  export const setLocalStorage = ()=> {
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}
export const getLocalStorage = ()=> {
    const employees =JSON.parse( localStorage.getItem('employees'))
    const admin =JSON.parse( localStorage.getItem('admin'))

    console.log(employees);
    
}
  