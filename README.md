Open-Storefront
============

Open Storefront is a cataloging system for software related assets (Applications, Services, Specification...etc). 

Developed at Space Dynamics Laboratory 

Licensed under Apache V2


Developing Open-Storefront (Client)
==========================

**If you want to build or contribute to a Open-Storefront project, read this document.**

**This document will save you and us a lot of time by setting up your development environment correctly.**
If you want your pull requests (or patches) to be merged into master, you will need to comply with the current schaffolding scheme set up with the tools this document will detail. Please respect these guidelines.

If you are reading this document with a normal text editor, please take a look
at the more readable [formatted version](https://github.com/dshurt/Open-Storefront/blob/master/README.md).

If you discover pitfalls, tips and tricks, or other details not described in this document,
please update it using the [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Table of content
----------------

* **[Installing Components](#installing-components)**

* **[Building with Grunt](#building-with-grunt)**

* **[FAQ](#faq)**

Quick start
===========

If you don't want to contribute to this project and you know git, Yoeman, Bower, and Grunt, these build instructions should suffice:

* To build `Open-Storefront`:

        $ git clone https://github.com/dshurt/Open-Storefront.git
        $ cd Open-Storefront
        $ grunt build

**If you want to contribute to this project, read the rest this file!**
* You will need to install:
  * git
  * npm (node.js) 
  * yoeman & generator-angular (yoeman vanilla angular generator)
  * bower
  * grunt

* Versions currently used:
  * git version 1.9.4
  * npm version 1.4.13
  * [generator-angular](https://github.com/yeoman/generator-angular)

Installing Components
=======================

Installing and configuring git
------------------------------

* Install it in your OS:

    * Linux: Install the package git

            $ sudo apt-get install git

        Tip: Also install *gitk* to visualize your git log:

            $ sudo apt-get install gitk

    * Windows, Mac OSX: Download from [the git website](http://git-scm.com).

        Tip for Mac OSX: Also install [*gitx*](http://gitx.frim.nl/) to visualize your git log.

    * More info [in github's git installation instructions](http://help.github.com/git-installation-redirect).

* Check if git is installed correctly.

        $ git --version
        git version 1.7.1

* Configure git correctly:

        $ git config --global user.name "My Full Name"
        $ git config --global user.email myAccount@gmail.com
        $ git config --global -l
        user.name=Geoffrey De Smet
        user.email=gds...@gmail.com

    * Warning: the field `user.name` is your full name, *not your username*.

    * Note: the field `user.email` should match an email address of your github account.

    * More info on [github](http://help.github.com/git-email-settings/).

* Get a github account

    * And add your public key on github: [Follow these instructions](http://github.com/guides/providing-your-ssh-key).

* To learn more about git, read the free book [Git Pro](http://progit.org/book/).

#### Getting the sources locally

Because you 'll probably want to change our code, it's recommended to fork our code before cloning it,
so it's easier to share your changes with us later.
For more info on forking, read [Github's help on forking](http://help.github.com/fork-a-repo/).

* First fork the repository you want to work on, for example `Open-Storefront`:

    * Surf to [the specific repository (`Open-Storefront`)](https://github.com/dshurt/Open-Storefront)

    * Click the top right button *Fork*

    * Note: by forking the repository, you can commit and push your changes without our consent
    and we can easily review and then merge your changes into the blessed repository.

* **Clone your fork locally:**

        # First make a directory to hold the Open-Storefront project
        $ mkdir Open-Storefront-Project
        $ cd Open-Storefront-Project

        # Then clone the repository you want to clone.
        $ git clone https://github.com/dshurt/Open-Storefront.git
        $ cd Open-Storefront
        $ ls

    * Warning: You can clone with the *SSH URL*. It is possible that the *HTTPS URL* can be unreliable.

    * Note: it's highly recommended to name the cloned directory the same as the repository (which is the default), so the helper scripts work.

    * By default you will be looking at the sources of the master branch, which can be very unstable.

        * Use git checkout to switch to a more stable branch or tag:

                $ git checkout 5.2.0.Final

#### Share your changes with a pull request
A pull request is like a patch file, but easier to apply, more powerful and you'll be credited as the author.

* Creating a pull request

    * Push all your commits to a topic branch on your fork on github (if you haven't already).

        * You can only have 1 pull request per branch, so it's advisable to use topic branches to avoid mixing your changes.

    * Surf to that topic branch on your fork on github.

    * Click the button *Pull Request* on the top of the page.

* Accepting a pull request

    * Surf to the pull request page on github.

    * Review the changes

    * Click the button *Merge help* on the bottom of the page and follow the instructions of github to apply those changes on the master.

        * Or use the button *Merge* if there are no merge conflicts.

---
Installing and configuring npm
------------------------------
Installing [node.js](http://nodejs.org/) on your computer will also install the node package manager (npm), but if you'd rather just go straight to the source, you can follow the instructions [here](https://raw.githubusercontent.com/npm/npm/master/README.md) in order to install the npm manually.

No special configuration is required, but details on npm configuration can be found [here](https://www.npmjs.org/doc/cli/npm-config.html)

---
Installing and configuring Yoeman, Bower and Grunt
---------------------------------
To install Yeoman, simply enter this into your terminal:
        
        # The -g installs yoeman globally
        $ npm install -g yo

Once yeoman has finished installing, we then need to install the AngularJS scaffolding tool for Yeoman:
        
        # Once again the -g installs the generator globally so that you can use it anywhere inside a yoeman project
        $ npm install -g generator-angular

You can now start scaffolding your apps with Yeoman, managing dependencies with Bower, and building & running your application with Grunt!
Grunt and Bower have also been installed globally, so you should be able to use them in other projects from now on.


Building with Grunt
===================
Before Running the Build
------------------------
* First you must make sure you have all of the correct dependencies installed. 

        #navigate to client/openstorefront/
        $ cd ~/projects/Open-Storefront-Project/Open-Storefront/client/openstorefront/
        #and run npm install
        $ npm install

* This should create a node_modules folder inside of the client/openstorefront/ directory with all of the node modules you'll need to do a build.
* It will also create a folder within client/openstorefront/app/ called 'bower_components' with all of the required bower components for the site.
* NOTE: If bower is not installed correctly (globally), you will run into issues with the npm install creating the bower_components.

Running the build
-----------------

* Go into a project's front end base directory, for example `Open-Storefront/client/openstorefront`:

        $ cd ~/projects/Open-Storefront-Project/Open-Storefront/client/openstorefront
        $ ls
        app/  bower.json*  Gruntfile.js*  karma.conf.js*  karma-e2e.conf.js*  node_modules/  package.json*  test/

* **Run the build**:

        $ grunt build --appPath=/openstorefront  
        
    "appPath" is only needed when changing the root context.          
    The first build will take a long time, because a lot of dependencies will be downloaded (and cached locally).

    It might even fail, if certain servers are offline or experience hiccups.
    In that case, you 'll see an IO error, so just run the build again.

    After the first successful build, any next build should be fast and stable.

Running tests
-------------

Open-Storefront uses Karma to run tests for the frontend and hence tests need to be ran differently to others.
        
        $ cd ~/projects/Open-Storefront-Project/Open-Storefront/frontend
        $ grunt test


Developing Open-Storefront (Server)
==========================

Components used:

JDK 8  
Wildfly 8.1  
MySQL  
SOLR  
Open AM* (Configurable)  

The application is a JEE webapp.  So any JEE 7 compliant server should work with just server configuration setup.
JAX-RS is heavily used for REST API.  JPA is use for Database access so the database is also configurable.

Key Libraries used
------------------
Stripes -Action based web framework  
Jackson -JSON Handling/binding  
Apache Shiro -Security  


Building with Maven
-------------------

mvn install  

(Skip tests)  
Mav -Dmaven.test.skip=true or -DskipTests=true install  


Deploying
---------
Copy the war artifacts to the standalone deploy directory in wildfly. Some IDE can handle this for you.


Running
=======

Run wildfly in standalone mode 



FAQ
===
