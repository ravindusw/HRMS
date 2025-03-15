# HRMS (Human Resource Management System)

<!-- ![HRMS Banner](https://via.placeholder.com/800x200?text=HRMS+Platform) -->

## Overview

HRMS is a comprehensive web-based platform designed to revolutionize how organizations manage their human resources. This intuitive system streamlines essential HR processes including employee management, leave tracking, and organizational configurations through a user-friendly interface that empowers employees, HR managers, and administrators alike.

## Key Features

- **Employee Management** - Seamlessly add, update, and manage comprehensive employee profiles and information
- **Leave Management** - Efficiently handle leave requests with an automated approval workflow and tracking system
- **Real-time Notifications** - Stay informed with instant alerts for leave approvals and critical system actions
- **Job Title & Compensation Management** - Configure and maintain job titles and associated pay grades
- **Role-Based Access Control** - Tailored system access for Administrators, HR Managers, and Employees
- **Support Resources** - Dedicated help section featuring FAQs and support contact information
- **Responsive Design** - Optimized user experience across desktop and mobile devices

## Technology Stack

### Frontend
- **React.js** - Building dynamic, component-based user interfaces
- **React Router** - Managing seamless client-side navigation
- **Bootstrap** - Implementing responsive design and modern styling

### Backend
- **Node.js** - Powering server-side applications with JavaScript
- **Express.js** - Creating robust RESTful API endpoints
- **MySQL** - Storing and managing relational database data

### Deployment
- **Render.com** - Hosting the application with reliable cloud infrastructure

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/hrms.git
   cd hrms
   ```

2. **Install Dependencies**

   Backend setup:
   ```bash
   cd backend
   npm install
   ```

   Frontend setup:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Database Configuration**
   - Create a MySQL database named `hrms`
   - Import the schema and seed data from `HRMS/Database_Scripts` folder

   > **Note:** The dump file is generated from a MySQL database hosted in Digital Ocean. In case of any issues (e.g. The `DEFINER` in routines is not automatically replaced to a valid user in your database during importing), you may need to refer and update the dump file accordingly or run relevant scripts to solve those issues.

4. **Environment Setup**

   Backend `.env` file:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=hrms
   JWT_SECRET=your_jwt_secret
   ```

5. **Launch the Application**

   Start the backend:
   ```bash
   cd backend
   npm start
   ```

   Start the frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

6. **Access the Platform**
   - Navigate to [http://localhost:5173](http://localhost:5173) in your browser. (NOTE: The port number may be different)

## User Roles & Capabilities

### Administrator
- Configure organizational structure including job titles and pay grades
- Establish and modify leave policies
- Manage system-wide settings and user permissions

### HR Manager
- Review and process employee leave requests
- Generate comprehensive reports and analytics
- Oversee employee records and information

### Employee
- Submit and track personal leave requests
- Access personalized notifications
- View and update profile information

## Project Structure

```
HRMS/
├── backend/
│   ├── controllers/       # Request handlers and business logic
│   ├── models/            # Database schemas and relationships
│   ├── routes/            # API endpoint definitions
│   ├── config/            # Application configuration files
│   ├── database/          # SQL scripts for database setup
│   └── server.js          # Application entry point
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Complete page components
│   │   ├── assets/        # Static resources and images
│   │   ├── App.js         # Root application component
│   │   └── index.js       # JavaScript entry point
│   └── public/            # Static public assets
└── README.md              # Project documentation
```

<!-- ## Contributing

We welcome contributions to enhance the HRMS platform! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: detailed description of your changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for complete details. -->

---

<p align="center">
  <strong>HRMS</strong> - Streamlining HR processes for the modern workplace<br>
  Developed with ❤️ by Group 14
</p>