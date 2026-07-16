# Solr React Search Lab

A simple full-stack search application that demonstrates integration between **Apache Solr** and **React.js**.

## Overview

This project is a learning lab that builds a modern search interface using React as the frontend and Apache Solr as the powerful backend search engine. The Python backend acts as a proxy between the React app and Solr.

## Features

- Responsive and clean search interface built with React
- Real-time search functionality
- Backend API to communicate with Solr
- Easy to extend with advanced Solr features (facets, highlighting, filters, etc.)

## Tech Stack

- **Frontend**: React.js (Create React App)
- **Backend**: Python (`server.py`)
- **Search Engine**: Apache Solr
- **Languages**: JavaScript, Python, HTML, CSS

## Project Structure

solr-react-search-Lab/
├── solr-search-ui/          # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── server.py                # Python backend server
└── README.md



## Getting Started

### Prerequisites
- Node.js & npm
- Python 3.x
- Apache Solr (running locally, default port 8983)

### 1. Backend Setup
```bash
Install required packages
pip install flask requests

Run the backend server
python server.py

### 2. Frontend Setup

cd solr-search-ui

# Install dependencies
npm install

# Start the React app
npm start
