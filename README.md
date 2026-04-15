# Backend API with CI/CD Deployment using GitHub Actions

## Overview

This project implements a simple backend API with a single endpoint and an automated deployment pipeline using GitHub Actions. The API runs on port 80 and is deployed to a virtual machine without any manual intervention.

---

## Features

* REST API with `/sayHello` endpoint
* Runs on Port 80
* Automated CI/CD pipeline using GitHub Actions
* Secure deployment using SSH
* No secrets stored in the codebase
* Fully automated deployment (no manual steps on VM)

---

## API Details

### Endpoint

**GET** `/sayHello`

### Response

```json
{
  "message": "Hello User"
}
```

---

## Tech Stack

* Backend: Node.js / Express
* CI/CD: GitHub Actions
* Deployment: Virtual Machine (SSH-based deployment)

---

## Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml
├── src/
│   └── app.js
├── package.json
└── README.md
```

---

## Setup Instructions (Local)

### Prerequisites

* Node.js installed
* npm 

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/shiva1101/assignment-faralpha
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   sudo node app.js
   ```

   Note: Port 80 requires elevated privileges.

4. Test the API:

   ```bash
   curl http://localhost/sayHello
   ```

---

## GitHub Actions Workflow

The CI/CD pipeline is defined in:

```
.github/workflows/deploy.yml
```

### Workflow Steps

1. Trigger on push to main branch
2. Checkout repository code
3. Install dependencies
4. Connect to VM using SSH (via GitHub Secrets)
5. Deploy application without manual intervention

---

## Deployment Details

* Deployment is fully automated via GitHub Actions
* No `git pull` is used on the VM
* Code is transferred directly from the pipeline
* No secrets are stored in the repository or VM
* All sensitive data is handled using GitHub Secrets

---

## Testing Deployment

After successful deployment:

1. Run:

   ```bash
   curl http://20.55.73.39/sayHello
   ```

2. Expected output:

   ```json
   {
     "message": "Hello User"
   }
   ```

---

## Challenges Faced and Solutions

### 1. Running on Port 80

**Challenge:**
Port 80 requires root privileges, which caused permission issues.

**Solution:**
Used `sudo` to run the application or configured appropriate permissions on the VM.

---

### 2. Secure Deployment via GitHub Actions

**Challenge:**
Ensuring secure SSH access without exposing credentials.

**Solution:**
Stored SSH keys in GitHub Secrets and accessed them securely in the workflow.

---

### 3. Avoiding Manual Deployment on VM

**Challenge:**
Requirement specified no manual setup or git pull on the VM.

**Solution:**
Configured the pipeline to directly transfer and execute the application via SSH.

---

### 4. Preventing Secret Exposure

**Challenge:**
Avoid leaking sensitive information in the repository.

**Solution:**
Used GitHub Secrets and avoided hardcoding any credentials.

---

### 5. Ensuring Clean Deployments

**Challenge:**
Repeated deployments could lead to conflicts.

**Solution:**
Stopped existing processes before starting a new instance during deployment.

---
