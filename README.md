# Web-It - CMS

![GitHub repo size](https://img.shields.io/github/repo-size/zuri-training/Proj_team_17_my_cms?logo=github&style=for-the-badge)
![Hex.pm](https://img.shields.io/hexpm/l/plug?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zuri-training/Proj_team_17_my_cms?style=for-the-badge)

<img src="https://drive.google.com/uc?export=view&id=1Kp_MdfR2UEcYqkzAZ4TbSu_rSjVm2srI" alt="First section of Web-It landing page" />

## Welcome to the repository of our Web-It web application.

Web-It is a web application that helps users create, customize, manage, and modify content on a website without the need for specialized technical knowledge. In simpler words, it is a content management system that helps you build a website without needing to write all the code from scratch (or even know how to code at all).
This application is aimed at helping bloggers and companies with little or no knowledge on how to create a website, create their own websites, depending on the use case. It is built on top of the Django framework

## Table of Contents

1. [Links to necessary documentations](#links-to-necessary-documentations)
2. [Introduction](#introduction)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Prerequisite](#prerequisite)
6. [Setup and Instatllation](#setup-and-installation)
7. [How To Contribute](#how-to-contribute)
8. [Acknowlodgement](#acknowledgement)
9. [Authors](#authors)

## Links to necessary documentations

- [Link to our Documentation](https://docs.google.com/document/d/1QcRuKKh-H820re8t0NY9Rf9wGXVA_yY7LYIW_ivLpyY/edit?usp=sharing)
- [Link to Google sheet of active members and assigned tasks](https://docs.google.com/spreadsheets/d/1OhgptYtAjZZTQdHJEXoNbr9gJol6QgNZnJPQheVJ6vI/edit?usp=sharing)
- [Link to our Figma file](https://www.figma.com/file/Uli9IZeFBp4ZlCe46ui6dI/CMS?node-id=244%3A131)
- [Link to our FigJam](https://www.figma.com/file/DxpCUvLWq0b07Bn63LtBwi/Untitled?node-id=0%3A1)
- [Link to an extensive report on how our product designers created our designs](https://docs.google.com/document/d/1T8S4bTtX42IiN7-NCuHtfx58u-CFKKfx/edit?usp=sharing&ouid=115120354710465633047&rtpof=true&sd=true)
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
- Backend - Python, Django, Django REST Framework and MySQL (database)

## Prerequisite 

To install Web-It locally, you will need the following:
- A computer running macOS, Windows or Linux 
- Python or pip to manage packages 
- A supported version of Django 
- A clean empty directory on your machine 

## Setup and Installation

The web application can be installed locally on a computer. The following installation guides will guide you step-by-step to create a new project and get it started.

- Clone the repository in your local machine - 
```sh
git clone https://github.com/zuri-training/Proj_team_17_my_cms.git
```
- Move into the **Backend** folder
- Create a virtual environment - `python -m venv env`
- Activate the virtual environment - `env\Scripts\activate` (for Windows) or `source env/bin/activate` (for macOS)
- Install all dependencies in the requirements.txt file - `pip install -r requirements.txt`
- Move into the **web_maker** folder and run the command - `npm create-react-scripts` and then run `npm run build`
- Ensure you have MySQL installed for the database
- You would be required to create a password during the installation of MySQL
- Go into the **settings.py** file in the **Backend/web_maker/web_maker/** diectory, edit the **PASSWORD** in the **DATABASES** to the password you created when installing MYSQL

i.e. In the settings.py file
```sh
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'webit',
        'USER': 'root',
        'PASSWORD': '<your-created-password>',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
           'charset' : 'utf8',
            'use_unicode' : True,
             'init_command': 'SET '
                'character_set_connection=utf8,'
                'collation_connection=utf8_bin',
        }, 
        'TEST_CHARSET': 'utf8,',
        'TEST_COLLATION': 'utf8_unicode_ci',
    }
}
```
- Next, move back into the **Backend/web_maker/** directory and then make migrations - `python manage.py makemigrations`
- Next, run the command - `python manage.py migrate`
- Run the server with - `python manage.py runserver`
- Finally, go to `http://127.0.0.1:8000/` to see the web application

## How To Contribute
- Fork the project repository by clicking on the **fork symbol** at the top right corner of the page
- Clone the forked repository on your local machine -
```sh
git clone https://github.com/zuri-training/Proj_team_17_my_cms.git
```
- Move into the repository (folder) just created on your local machine
- Set upstream - 
```sh
git remote add https://github.com/zuri-training/Proj_team_17_my_cms.git
```
- Create and move to a new branch to make your changes -
```sh
git checkout -b <name-of-your-new-branch>
```
- Stage the files you made changes to - `git add <name-of-file>`
- Commit your changes with a message - `git commit -m "your-message"`
- Push your changes to your forked repository - `git push -u origin <name-of-your-new-branch>`
- Create a pull request on GitHub for your changes to be reviewed
- Wait for one of the administrators to review your pull request and merge

## Acknowledgement
We would like to thank [Ingressive For Good & the Zuri Team](https://training.zuri.team/) for this training and for everything that was put in place to make this a success. We have been pushed to do a lot during the course of this training, especially during this project phase. We are grateful for this opportunity that was given to learn, grow and also connect with other amazing designers, developers and mentors.

## Authors
This a file containing the authors of this project repository - [AUTHORS](./AUTHORS)
