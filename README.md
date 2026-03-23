# DeployProject

🚀 **DevOps Deployment Project**  
This project demonstrates a full-stack Node.js + MongoDB app deployed using Docker, Jenkins, Ansible, and Git, with CI/CD automation on a virtualized environment.

---

## 🛠 Project Stack

- **Frontend:** HTML, CSS, JavaScript served via NGINX Docker container  
- **Backend:** Node.js (Express) API  
- **Database:** MongoDB  
- **Admin UI:** Mongo Express  
- **Containerization:** Docker & Docker Compose  
- **Orchestration/Deployment:** Jenkins + Ansible  
- **CI/CD:** GitHub Webhooks → Jenkins → Docker Deployment  
- **Virtualization:** Oracle VirtualBox  
- **Webhook Testing:** Ngrok  

---

## 📁 Project Structure


DeployProject/
├─ backend/ # Node.js backend API
├─ frontend/ # HTML/CSS/JS frontend
├─ docker-compose.yml
├─ ansible/ # Ansible playbooks
│ └─ deploy.yml
└─ README.md


---

## ⚙ Setup

### 1️⃣ Clone the repo
```bash
git clone git@github.com:ThakshalaMadhuwanthi/DeployPreoject.git
cd DeployPreoject
2️⃣ Configure Ansible Server
Run on a VM (Oracle VirtualBox)
Ensure user has sudo privileges
Test connectivity:
ansible all -m ping

Important: Update the inventory file with the correct IP addresses of your deployment servers.

3️⃣ Configure Jenkins Server
Run Jenkins in Docker or VM
Install plugins: Docker, Git, NodeJS, Pipeline
Expose Jenkins for GitHub Webhook using Ngrok:
http://<ngrok-id>.ngrok-free.dev/github-webhook/
Update your pipeline stage to set the Deploy server IP and SSH credentials correctly.
4️⃣ Deploy with Docker Compose (Automated via CI/CD)

When the GitHub webhook triggers Jenkins, it automatically runs the Ansible playbook to:

Pull the latest code from GitHub
Build Docker images for frontend and backend
Deploy containers on the server

You can also manually deploy using:

sudo docker-compose up -d --build

Access URLs after deployment:

Frontend: http://<host-ip>:3000
Backend API: http://<host-ip>:5000/api/message
Mongo Express: http://<host-ip>:8081

Tip: app.js in the frontend must point to the correct backend IP (API_URL). When using Jenkins auto-deployment, make sure this URL matches the server where backend container is running. Jenkins + Ansible handles deployment automatically on each Git push via the webhook.

🔄 CI/CD Workflow
Push code to GitHub
GitHub Webhook triggers Jenkins
Jenkins executes Ansible playbook → builds & deploys Docker containers
📦 Backend API Endpoints
Method	Endpoint	Description
POST	/api/message	Save a message to database
GET	/api/message	Get all messages
⚠ Notes / Troubleshooting
MongoDB uses Docker volumes for persistence
Ensure ports 3000 (frontend) and 5000 (backend) are open
Verify MONGO_URI in docker-compose.yml matches your MongoDB credentials and DB name
Jenkins Docker access:
sudo usermod -aG docker jenkins
Update inventory file and frontend app.js URL according to your deployment IPs
