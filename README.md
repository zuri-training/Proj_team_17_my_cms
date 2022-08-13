# Web-It - CMS

![GitHub repo size](https://img.shields.io/github/repo-size/zuri-training/Proj_team_17_my_cms?logo=github&style=for-the-badge)
![Hex.pm](https://img.shields.io/hexpm/l/plug?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zuri-training/Proj_team_17_my_cms?style=for-the-badge)

## Welcome to the repository of our Web-It web application.

Web-It is a web application that helps users create, customize, manage, and modify content on a website without the need for specialized technical knowledge. In simpler words, it is a content management system that helps you build a website without needing to write all the code from scratch (or even know how to code at all).
This application is aimed at helping bloggers and companies with little or no knowledge on how to create a website, create their own websites, depending on the use case. It is built on top of the Django framework

## Links to necessary docs for our first presentation

- [Link to our Documentation](https://docs.google.com/document/d/1QcRuKKh-H820re8t0NY9Rf9wGXVA_yY7LYIW_ivLpyY/edit?usp=sharing)
- [Link to Google sheet of active members and assigned tasks](https://docs.google.com/spreadsheets/d/1OhgptYtAjZZTQdHJEXoNbr9gJol6QgNZnJPQheVJ6vI/edit?usp=sharing)
- [Link to our Figma file](https://www.figma.com/file/Uli9IZeFBp4ZlCe46ui6dI/CMS?node-id=244%3A131)
- [Link to our FigJam](https://www.figma.com/file/DxpCUvLWq0b07Bn63LtBwi/Untitled?node-id=0%3A1)
- [Link to our Database Schema](https://www.figma.com/file/Yc6wSiRK9RwBwcHFr8ZqcM/cms-schema?node-id=0%3A1T)
- [Link to our Presentation video](https://drive.google.com/file/d/1LUQruvH3ZXqwkxbltWtDIqWfstui_EBc/view?usp=sharing)
- [Link to our Presentation slides](https://www.figma.com/file/Uli9IZeFBp4ZlCe46ui6dI/CMS?node-id=1000%3A2167)

## Introduction

This markdown file contains all technical documentation related to the setup, deployment, update, and customization of the Web-It web application.

## Features

Web-It is a platform that allows you to spin up a basic website based on the available templates. Here is a list of its attributes:

### User: Unauthenticated -

1. Visit the platform to view basic information about it
2. View and interact with the documentation
3. Register to set up a new website
4. Setup the website by filling out some information
5. Browse through available templates 

### User: Authenticated -

1. Full access to the platform
2. Access to the backend of the created website
3. Ability to create more pages
4. Ability to change the template
5. Unique address
6. Ability to add social media links

## Technologies Used

- Design: Figma and FigJam
- Frontend: React, TailwindCSS, Flexbox, React Router, Font Awesome
- Backend - Python, Django and Django REST Framework

## Prerequisite 

To install Web-It locally, you will need the following:
- A computer running MacOS, Windows or Linux 
- Python or pip to manage packages 
- A supported version of Django 
- A clean empty directory on your machine 

## Setup and Installation

The web application can be installed locally on a computer. The following installation guides will guide you step-by-step to create a new project and get it started.

- Clone the repository in your local machine - `git clone https://github.com/zuri-training/Proj_team_17_my_cms.git`
- Move into the Backend folder
- Create and activate a virtual environment
- Install all dependencies in the requirements.txt file - `pip install -r requirements.txt`
- Move into the /web_maker/accounts directory and then make migrations (ensure you have MySQL installed) - `python manage.py makemigrations`
- Next, run the command - `python manage.py migrate`
- Also move into the Frontend folder, from the base directory and run the command - `npm create-react-scripts` and then run `npm run build`
- Finally, move back into the Backend/web_maker/accounts directory and run the server with - `python manage.py runserver`
