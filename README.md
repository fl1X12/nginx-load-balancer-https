# Web Application with Express Backend and Nginx Load Balancer

This repository contains a basic web application built with HTML for the frontend, an Express.js backend, and an Nginx layer configured as a load balancer. The system communicates securely using HTTPS.

## Project Structure

```
.
├── backend/              # Express backend
│   ├── app.js           # Main Express application
│   └── package.json     # Node.js dependencies
├── frontend/            # Basic HTML webpage
│   └── index.html
├── nginx/               # Nginx configuration
│   └── nginx.conf
└── docker-compose.yml   # Docker Compose setup
```

## Prerequisites

Ensure you have the following installed:

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Set up SSL Certificates (for HTTPS):

   Place your SSL certificates (e.g., `cert.pem` and `key.pem`) in the `nginx/ssl` directory.

3. Start the services using Docker Compose:

   ```bash
   docker-compose up --build
   ```

4. Access the application at:

   ```
   https://localhost
   ```

## Nginx Configuration

The `nginx/nginx.conf` file is configured to:

- Act as a reverse proxy for the Express backend
- Distribute incoming traffic across multiple backend instances
- Support HTTPS with SSL termination

## Express Backend

A simple Express.js server is located in `backend/app.js`. It responds with basic JSON output.

Example snippet:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

## Docker Compose Configuration

The `docker-compose.yml` file defines services for:

- Nginx load balancer
- Multiple Express instances

Example snippet:

```yaml
version: '3'

services:
  backend1:
    build: ./backend

  backend2:
    build: ./backend

  nginx:
    image: nginx:latest
    ports:
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - backend1
      - backend2
```

## Customization

- Modify `frontend/index.html` for your UI.
- Adjust `nginx/nginx.conf` to scale more backend instances.

## Stopping the Application

To stop the services, run:

```
   docker compose down
```



