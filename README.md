## Web-It - CMS

### Welcome to the repository of our Web-It web application.

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

### Introduction

This markdown file contains all technical documentation related to the setup, deployment, update, and customization of the Web-It web application. 

### Prerequisite 

To install Web-It locally, you will need the following:
- A computer running MacOS, Windows or Linux 
- Python or pip to manage packages 
- A supported version of Django 
- A clean empty directory on your machine 

### Setup and Installation

The web application can be installed locally on a computer. The following installation guides will guide you step-by-step to create a new project and get it started.

- Create and activate a virtual environment
- Install Django - `pip install django`
- Create the project folder - `django-admin startproject cmsproject`
- Move into the project folder and create the app - `python manage.py startapp cmsapp`
- Install the app in the settings.py file that is in the main project directory 
