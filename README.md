Open-Storefront
============

Open Storefront is a cataloging system for software related assets (Applications, Services, Specification...etc). 

Developed at Space Dynamics Laboratory 

Licensed under Apache V2


Developing Open-Storefront
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

* **[Source control with Git](#source-control-with-git)**

* **[Building with Maven](#building-with-maven)**

* **[Team communication](#team-communication)**

* **[Releasing](#releasing)**

* **[Synching the Product Repository](#synching-the-product-repository)**

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

Source control with Git
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

Getting the sources locally
---------------------------

Because you 'll probably want to change our code, it's recommended to fork our code before cloning it,
so it's easier to share your changes with us later.
For more info on forking, read [Github's help on forking](http://help.github.com/fork-a-repo/).

* First fork the repository you want to work on, for example `guvnor`:

    * Surf to [the blessed repositories on github](https://github.com/droolsjbpm) and log in.

        * Note: **Every git repository can be build alone.**
        You only need to fork/clone the repositories you're interested in (`guvnor` in this case).

    * Surf to [the specific repository (`guvnor`)](https://github.com/droolsjbpm/guvnor)

    * Click the top right button *Fork*

    * Note: by forking the repository, you can commit and push your changes without our consent
    and we can easily review and then merge your changes into the blessed repository.

* **Clone your fork locally:**

        # First make a directory to hold all the droolsjbpm projects
        $ mkdir droolsjbpm
        $ cd droolsjbpm

        # Then clone the repository you want to clone.
        $ git clone git@github.com:MY_GITHUB_USERNAME/guvnor.git
        $ cd guvnor
        $ ls

    * Warning: Always clone with the *SSH URL*, never clone with the *HTTPS URL* because the latter is unreliable.

    * Note: it's highly recommended to name the cloned directory the same as the repository (which is the default), so the helper scripts work.

    * By default you will be looking at the sources of the master branch, which can be very unstable.

        * Use git checkout to switch to a more stable branch or tag:

                $ git checkout 5.2.0.Final

* Add the blessed repository as upstream (if you've directly cloned the blessed repository, don't do this):

        $ git remote add upstream git@github.com:droolsjbpm/guvnor.git
        $ git fetch upstream

Working with git
----------------

* First make a topic branch:

        $ git checkout master
        $ git checkout -b myFirstTopic

    * Don't litter your local `master` branch: keep it equal to `remotes/upstream/master`

    * 1 branch can have only 1 pull request, because the pull requests evolves as you add more commits on that branch.

* Make changes, run, test and document them, then commit them:

        $ git commit -m"Fix typo in documentation"

* Push those commits on your topic branch to your fork

        $ git push origin myFirstTopic

* Get the latest changes from the blessed repository

    * Set your master equal to the blessed master:

            $ git fetch upstream
            $ git checkout master
            # Warning: this deletes all changes/commits on your local master branch, but you shouldn't have any!
            $ git reset --hard upstream/master

    * Start a new topic branch and set the code the same as the blessed master:

        $ git fetch upstream && git checkout -b mySecondTopic && git reset --hard upstream/master

    * If you have a long-running topic branch, merge master into it:

            $ git fetch upstream
            $ git merge upstream/master

        * If there are merge conflicts:

                $ git mergetool
                $ git commit

            or

                $ git status
                $ gedit conflicted-file.txt
                $ git add conflicted-file.txt
                $ git commit

            Many people get confused when a merge conflict occurs, because you're *in limbo*.
            Just fix the merge conflicts and commit (even if the git seems to contain many files),
            only then is the merge over. Then run `git log` to see what happened.
            The many files in the merge conflict resolving commit are a side-affect of non-linear history.

* You may delete your topic branch after your pull request is closed (first one deletes remotely, second one locally):

        $ git push origin :myTopicBranch
        $ git branch -D myTopicBranch

* Tips and tricks

    * To see the details of your local, unpushed commits:

            $ git diff origin...HEAD

    * To run a git command (except clone) over all repositories (only works if you cloned all repositories):

            $ cd ~/projects/droolsjbpm
            $ droolsjbpm-build-bootstrap/script/git-all.sh push

        * Note: the `git-all.sh` script is working directory independent.

        * Linux tip: Create a symbolic link to the `git-all.sh` script and place it in your `PATH` by linking it in `~/bin`:

                $ ln -s ~/projects/droolsjbpm/droolsjbpm-build-bootstrap/script/git-all.sh ~/bin/droolsjbpm-git

            For command line completion, add the following line in `~/.bashrc`:

                $ complete -o bashdefault -o default -o nospace -F _git droolsjbpm-git

Share your changes with a pull request
--------------------------------------

A pull request is like a patch file, but easier to apply, more powerful and you'll be credited as the author.

* Creating a pull request

    * Push all your commits to a topic branch on your fork on github (if you haven't already).

        * You can only have 1 pull request per branch, so it's advisable to use topic branches to avoid mixing your changes.

    * Surf to that topic branch on your fork on github.

    * Click the button *Pull Request* on the top of the page.

* Accepting a pull request

    * Surf to the pull request page on github.

    * Review the changes

    * Click the button *Merge help* on the bottom of the page and follow the instructions of github to apply those changes on the blessed master.

        * Or use the button *Merge* if there are no merge conflicts.

Building with Maven
===================

All projects use Maven 3 to build all their modules.

Installing Maven
----------------

* Get Maven

    * [Download Maven](http://maven.apache.org/) and follow the installation instructions.

* Linux

    * Note: the `apt-get` version of maven is probably not up-to-date enough.

    * Linux trick to easily upgrade to future versions later:

        * Unzip maven to `~/opt/build`
    
        * Create a version-independent link:

                $ cd ~/opt/build/
                $ ln -s apache-maven-3.0.3 apache-maven

            Next time you only have to remove the link and recreate the link to the new version.

        * Add this to your `~/.bashrc` file:

                export M3_HOME="~/opt/build/apache-maven"
                export PATH="$M3_HOME/bin:$PATH"

    * Give more memory to maven, so it can the big projects too:

        * Add this to your `~/.bashrc` file:

            export MAVEN_OPTS="-Xms256m -Xmx1024m -XX:MaxPermSize=512m"

* Windows:

    * Give more memory to maven, so it can the big projects too:

        * Open menu *Configuration screen*, menu item *System*, tab *Advanced*, button *environment variables*:

            set MAVEN_OPTS="-Xms256m -Xmx1024m -XX:MaxPermSize=512m"

* Check if maven is installed correctly.

        $ mvn --version
        Apache Maven 3.0.3 (...)
        Java version: 1.6.0_24

    Note: the enforcer plugin enforces a minimum maven and java version.

Running the build
-----------------

* Go into a project's base directory, for example `guvnor`:

        $ cd ~/projects/droolsjbpm
        $ ls
        drools  droolsjbpm-build-bootstrap  droolsjbpm-build-distribution  droolsjbpm-integration  droolsjbpm-knowledge  droolsjbpm-tools  optaplanner  guvnor
        $ cd guvnor
        $ ls
        ...  guvnor-repository  guvnor-webapp-drools  pom.xml

    Notice you see a `pom.xml` file there. Those `pom.xml` files are the heart of Maven.

* **Run the build**:

        $ mvn clean install -DskipTests

    The first build will take a long time, because a lot of dependencies will be downloaded (and cached locally).

    It might even fail, if certain servers are offline or experience hiccups.
    In that case, you 'll see an IO error, so just run the build again.

    If you consistently get `Could not transfer artifact ... Connection timed out`
    and you are behind a non-transparent proxy server,
    [configure your proxy server in Maven](http://maven.apache.org/settings.html#Proxies).

    After the first successful build, any next build should be fast and stable.

* Try running a different profile by using the option `-D<profileActivationProperty>`:

        $ mvn clean install -DskipTests -Dfull

    There are 3 profile activation properties:

    * *none*: Fast, for during development

    * `full`: Slow, but builds everything (including documentation). Used by jenkins and during releases.

    * `soa`: prunes away the non-enterprise stuff

* To run a maven build over all repositories (only works if you cloned all repositories):

        $ cd ~/projects/droolsjbpm
        $ droolsjbpm-build-bootstrap/script/mvn-all.sh -DskipTests clean install

    * Note: the `mvn-all.sh` script is working directory independent.

* Warning: The first `mvn` build of a day will download the latest SNAPSHOT dependencies of other droolsjbpm projects,
unless you build all those droolsjbpm projects from source.
Those SNAPSHOTS were build and deployed last night by jenkins jobs.

    * If you 've pulled all changes (or cloned a repository) today, this is a good thing:
    it saves you from having to download and build all those other latest droolsjbpm projects from source.

    * If you haven't pulled all changes today, this is probably a bad thing:
    you 're probably not ready to deal with those new snapshots.

        In that case, add `-nsu` (= `--no-snapshot-updates`) to the `mvn` command to avoid downloading those snapshots:

            $ mvn clean install -DskipTests -nsu

        Note that using `-nsu` will also make the build faster.

Running tests
-------------

Guvnor uses Arquillian to run tests in a J2EE container and hence tests need to be ran differently to others.

* Guvnor

        $ cd ~/projects/droolsjbpm/guvnor/guvnor-webapp-drools
        $ mvn integration-test [-Dtest=ATestClassName]

* All other modules

        $ cd ~/projects/droolsjbpm/drools
        $ mvn test [-Dtest=ATestClassName]

Configuring Maven
-----------------

To deploy snapshots and releases to nexus, you need to add this to the file `~/.m2/settings.xml`:

     <settings>
       ...
       <servers>
         <server>
           <id>jboss-snapshots-repository</id>
           <username>jboss.org_username</username>
           <password>jboss.org_password</password>
         </server>
         <server>
           <id>jboss-releases-repository</id>
           <username>jboss.org_username</username>
           <password>jboss.org_password</password>
         </server>
       </servers>
       ...
     </settings>

Furthermore, you'll need nexus rights to be able to do this.

More info in [the JBoss.org guide to get started with Maven](http://community.jboss.org/wiki/MavenGettingStarted-Developers).

Requirements for dependencies
-----------------------------

Any dependency used in any KIE project must fulfill these hard requirements:

* The dependency must have **an ASL compatible license**.

    * Good: BSD, MIT, ASL

    * Avoid: EPL, LGPL

        * Especially LGPL is a last resort and should be abstracted away or contained behind an SPI.
        
        * Test scope dependencies pose no problem if they are EPL or LPGL.

    * Forbidden: no license, GPL, AGPL, proprietary license, field of use restrictions ("this software shall be used for good, not evil"), ...
    
        * Even test scope dependencies cannot use these licenses.

* The dependency shall be **available in [Maven Central](http://search.maven.org/) or [JBoss Nexus](https://repository.jboss.org/nexus)**.

    * Any version used must be in the repository Maven Central and/or JBoss (Nexus) Public repository group

        * Never add a `<repository>` element in a `pom.xml`.

        * Note: JBoss Public repository group mirrors java.net, codehaus.org, ... Most jars are available there.

    * Why?

        * Build reproducibility. Any repository server we use, must still run 7 years from now.

        * Build speed. More repositories slow down the build.

        * Build reliability. A repository server that is temporary down can break builds.

    * Workaround to still use a great looking jar as a dependency:

        * Get that dependency into JBoss Nexus as a 3rd party library.

* The dependency must be able to run on any **JVM 1.6 and higher**.

    * It must be compiled for Java target 1.6 or lower (even if it's compiled with JDK 7 or JDK 8).

    * It must not use any JDK API's that were not yet available in Java 1.6.

* **Do not release the dependency yourself** (by building it from source).

    * Why? Because it's not an official release, by the official release guys.

        * A release must be 100% reproducible.

        * A release must be reliable (sometimes the release person does specific things you might not reproduce).

* **No security issues** (CVE's) reported on that version of the dependency

    * We don't expect you to check this manually:
    The victims enforcer plugin will automatically fail the build if a known bad dependency is used.

Any dependency used in any KIE project should fulfill these soft requirements:

* Use dependencies that are **acceptable for the [jboss-integration-platform-bom](https://github.com/jboss-integration/jboss-integration-platform-bom)**.

    * Do not override versions in `kie-parent-with-dependencies`'s `pom.xml` unless an exception is granted

        * If a newer version of the ip-bom already uses the new version, it's of course fine to do a temporarly overwrite in `kie-parent-with-dependencies`'s `pom.xml`.

* **Prefer dependencies with the groupId `org.jboss.spec`** over those with the groupId `javax.*`.

    * Dependencies with the groupId `javax.*` are unreliable and are missing metadata. No one owns/maintains them consistently.

    * Dependencies with the groupId `org.jboss.spec` are checked and fixed by JBoss.

* Only use dependencies with **an active community**.

    * Check for activity in the last year through [Ohloh](http://www.ohloh.net).

* Less is more: **less dependencies is better**. Bloat is bad.

    * Try to use existing dependencies if the functionality is available in those dependencies

        * For example: use `poi` instead of `jexcelapi` if `poi` is already a KIE dependency

* **Do not use fat jars, nor shading jars.**

    * A fat jar is a jar that includes another jar's content. For example: `weld-se.jar` which includes `org/slf4j/Logger.class`

    * A shaded jar is a fat jar that shades that other jar's content. For example: `weld-se.jar` which includes `org/weld/org/slf4j/Logger.class`

    * Both are bad because they cause dependency tree trouble. Use the non-fat jar instead, for example: `weld-se-core.jar`

There are currently a few dependencies which violate some of these rules.
If you want to add a dependency that violates any of the rules above, get approval from the project leads.

Team communication
==================

To develop a great project as a team, we need to communicate efficiently as a team.

Team workflows
--------------

* Fixing a community issue in JIRA:

    * Find/create the issue in JIRA ([Drools](https://issues.jboss.org/browse/DROOLS),
    [OptaPlanner](https://issues.jboss.org/browse/PLANNER), [jBPM](https://issues.jboss.org/browse/JBPM],
    [Guvnor](https://issues.jboss.org/browse/GUVNOR)

    * Fix the issue and push those changes to the appropriate branch(es) on github.

    * Change the *Status* to `Resolved`.

        * Once the reporter verifies the fix, he changes *Status* to `Closed`. Or we bulk change it to `Closed` after a year.

* (Red Hat developers only) Fixing BRMS issues in Bugzilla:

    * Find an issue in Bugzilla. Change *Status* to `ASSIGNED` and *Assigned To* to yourself.

    * Fix the issue and push those changes to the appropriate branch(es) on github.

        * This will likely require back porting or forward porting, because the issue must be fixed on master too.

    * Change the *Status* to `MODIFIED`.

        * Once the new product version is build, they change *Status* to `ON_QA`.

        * Once QA verifies the fix, they change *Status* to `Verified`.

Releasing
=========

Expecting a release
-------------------

One week in advance:

* Announce on the upcoming release on all the developer mailing lists and in the IRC channel topics.

    * Include a list of projects on Jenkins that are yellow or red.

        * Daily remind the lead of any project that is red.

    * For a CR/Final, also mention the FindBugs reports on jenkins.

* All external dependencies must be on a non-SNAPSHOT version, to avoid failing to *close* the staging repo on nexus near the end of the release.

    * Get those dependencies (for example `mvel` and `bpm-console`) released if needed, preferably 1 week before the kie release. This way, those released artifacts gets tested by our tests.

* Ask kie-wb module (uberfire, guvor, kie-wb-common, drools-wb, jbpm-console, jbpm-form-modeler and kie-wb-distributions) leads to update the translations with Zanata:

    * Translations into different locales are handled within Zanata (https://translate.jboss.org/)

    * Email Zanata mailing list that a release is about to be made.

    * The most recent translations need to be pulled into the release branch. Assuming you have set-up your Zanata configuration correctly, this can be achieved with:

            $ mvn zanata:pull-module

    * NOTE: If releasing a new version number (major, minor or micro) a new version of the translations should be setup in Zanata.

    * Automatically fix simple errors in the translations using the following:

            $ mvn replacer:replace -N

    * Test compile guvnor to check there are no other translation issues.

            $ mvn clean install -Dfull -DskipTests

        * Sometime the variable place-holders {0}, {1}... are missing.

        * Append missing variable place-holders {0}, {1}... to the end of the translated text and email the Zanata mailing list.

* Get access to `filemgmt.jboss.org`

    * Note: This is for internal Red Hat developer information only and requires access to Red Hat's VPN.

    * See [https://docspace.corp.redhat.com/docs/DOC-35393](https://docspace.corp.redhat.com/docs/DOC-35393)

    * Create ssh Key (if not already done)

        * Key must:

            * be RSA-2 ( default for many keygen apps )
            * have 1024+ bit ( 2048 is preferred )
            * have comment with user email address

        * Using many keygen tools the following command will work

                $ ssh-keygen -C your@email.com -b 2048

            * enter key name
            * enter passcode you want

        * Send ticket to IT

            * Have it forwarded to https://engineering.redhat.com/rt/Ticket/Create.html?Queue=58 (RT3 eng-ops-mw) queue
            * Specify that you would like access to drools@filemgmt.jboss.org
            * Attach the *.pub that you created above

48 hours in advance:

* Push deadline: Announce on the upcoming push deadline on all the developer mailing lists and in the IRC channel topics.

    * Commits pushed before the deadline will make the release, the rest won't.

* Pull the latest changes.

        $ git-all.sh pull --rebase

* Do a sanity check.

    * Produce the distribution zips, build with `-Dfull`:

            $ droolsjbpm-build-bootstrap/script/mvn-all.sh clean install -Dfull -DskipTests

        * Warning: It is not uncommon to run out of either PermGen space or Heap Space. The following settings are known (@Sept-2012) to work:-

                $ export MAVEN_OPTS='-Xms512m -Xmx2200m -XX:MaxPermSize=512m'

        * Warning: Verify that workspace contains no uncommitted changes or rogue module directories of older branches:

                $ droolsjbpm-build-bootstrap/script/git-all.sh status

            * Specifically watch out for an uncommitted `*/target` directory: that's the result of a build of an older branch that didn't get cleaned.

                * If the root of that directory gets zipped, binaries of that older branch leak into today's distribution zip.

    * Do a sanity check of the artifacts by running each runExamples.sh from the zips.

        * Go to `droolsjbpm-build-distribution/droolsjbpm-uber-distribution/target/*/download_jboss_org`:

            * Unzip the zips to a temporary directory.

            * Start the `runExamples.sh` script for drools, droolsjbpm-integration and optaplanner

            * Deploy the guvnor jboss-as-7.0 war to guvnor and surf to it:

                * Install the mortgages examples, build it and run the test scenario's

            * Verify that the reference manuals open in a browser (HTML) and Adobe Reader (PDF).

Creating a release branch
-------------------------

A release branch name should always end with `.x` so it looks different from a tag name and a topic branch name.

* When do we create a release branch?

    * We only create a release branch just before releasing CR1.

        * For example, just before releasing 6.1.0.CR1, we created the release branch 6.1.x

            * The release branch 6.1.x contained the releases 6.1.0.CR1, 6.1.0.Final, 6.1.1.Final, 6.1.2.Final, ...

    * Alpha/Beta releases are released directly from master, because we don't backport commits to Alpha/Beta's.

* Alert the IRC dev channels that you're going to branch master.

* Pull the latest changes.

        $ git-all.sh pull --rebase

* Simply use the script `script/release/create-release-branches.sh` with the drools and jbpm *release branch name*:

        $ droolsjbpm-build-bootstrap/script/release/create-release-branches.sh 6.1.x 6.1.x 
        where 6.1.x is the drools and 6.1.x is the jbpm release branch name
        
        * Note: this srcript creates a release branch, pushes it to origin and sets the upstream from local release branch to remote release branch
                   

* Switch back and forth from master to the release branches for all git repositories

    * If you haven't made the branches yourself, first make sure your local repository knows about them:

            $ droolsjbpm-build-bootstrap/script/git-all.sh fetch

    * Switch to master with `script/git-checkout-all.sh`

            $ droolsjbpm-build-bootstrap/script/git-checkout-all.sh master master

    * Update master to the next SNAPSHOT version to avoid clashing the artifacts on nexus of master and the release branch:

            $ droolsjbpm-build-bootstrap/script/release/update-version-all.sh 6.1.0-SNAPSHOT 6.2.0-SNAPSHOT 6.1.0-SNAPSHOT 6.2.0-SNAPSHOT

        * Note: the arguments are `droolsOldVersion droolsNewVersion jbpmOldVersion jbpmNewVersion`.

        * WARNING: FIXME the update-version-all script does not work correctly if you are releasing a hotfix version.

        * WARNING: jbpm/pom.xml sometimes has properties defined that override the ${jbpm.version}. Check this is not the case.

                $ grep -r '6.1.0-SNAPSHOT' **/pom.xml or for i in $(find . -name "pom.xml"); do grep '6.1.0-SNAPSHOT' $i; done 

        * WARNING: script update-version-all.sh did not update all versions in all modules for 6.2.0.Final. Check all have been updated with the following and re-run if required.

                $ grep -r '6.1.0-SNAPSHOT' **/pom.xml or for i in $(find . -name "pom.xml"); do grep '6.1.0-SNAPSHOT' $i; done 
        
        * Note: in either case it is important to search for -SNAPSHOT, as there are various hidden -SNAPSHOT dependencies in some pom.xml files and they should be prevented for releases        

        * Commit those changes (so you can tag them properly):
        
            * Add changes from untracked files if there are any. WARNING: DO NOT USE "git add ." . You may accidentally add files that are not meant to be added into git. 

                    $ git add {filename}
                
            * Commit all changes
                
                    $ droolsjbpm-build-bootstrap/script/git-all.sh commit -m "Set release version: 6.2.0-SNAPSHOT"
                    
            * Check if all repositories build after version upgrade
    
                    $ sh droolsjbpm-build-bootstrap/mvnall.sh mvn clean install -Dfull -DskipTests
        
    * Push the new -SNAPSHOT version to master of the blessed directory
 
             $ sh droolsjbpbm-build-bootstrap/script/git-all.sh pull --rebase (pulls all changes fro master that could be commited in the meantime and prevents merge problems when pushing commits)
             $ sh droolsjbpm-build-bootstrap/script/git-all.sh push origin master (pushes all commits to master)


    * Switch back to the *release branch name* with `script/git-checkout-all.sh` with drools and jbpm *release branch name*:

            $ sh droolsjbpm-build-bootstrap/script/git-checkout-all.sh 6.1.x 6.1.x

* Push the created release branches to the blessed directory
            
            $ sh droolsjbm-build-bootstrap/script/git-all.sh push origin 6.1.x

* Set up jenkins build jobs for the branch.

    * Go to the internal jenkins website inside the VPN.

    * Clone each of the master build jobs for every git repo that was branched.

        * Suffix the build job name with the branch name, for example `drools-6.1.x` and `droolsjbpm-integration-6.1.x`.

        * Change the build job configuration to use the git repo branch, for example `6.1.x`.

* Set up a new Jenkins view for the related release builds

    * https://jenkins.mw.lab.eng.bos.redhat.com/hudson/me/my-views/view/All/

        * Note: Add all Drools, jBPM and Guvnor jobs manually or use a regex pattern similar to `^((drools|guvnor).*5\.5|jbpm.*5\.4).*$`

* Alert the dev mailing list and the IRC channel that the branch has been made.

    * Remind everyone clearly that every new commit to `master` will not make the upcoming CR and Final release, unless they cherry-pick it to this new branch.


#### NOTE: 
* at this point we have created a release branch
* we have updated the master branch to the new development version (* -SNAPSHOT)
* we have pushed the created release branches to origin
* we have set up a new Jenkins view for the created "release branch" 


Releasing from a release branch
-------------------------------

* Alert the IRC dev channels that you're starting the release.

* Pull the latest changes.

        $ git-all.sh pull --rebase

* Optional: do another sanity check.

If everything is perfect (compiles, jenkins is all blue and sanity checks succeed):

* Define the version and adjust the sources accordingly:

    * First define the version.

        * There are only 4 acceptable patterns:

            * `major.minor.micro.Alpha[n]`, for example `1.2.3.Alpha1`

            * `major.minor.micro.Beta[n]`, for example `1.2.3.Beta1`

            * `major.minor.micro.CR[n]`, for example `1.2.3.CR1`
            
            * `major.minor.micro.Final`, for example `1.2.3.Final`

        * See the [JBoss version conventions](http://community.jboss.org/wiki/JBossProjectVersioning)

            * Not following those, for example `1.2.3` or `1.2.3.M1` results in OSGi eclipse updatesite corruption.

        * **The version has 3 numbers and qualifier. The qualifier is case-sensitive and starts with a capital.**

            * Use the exact same version everywhere (especially in URL's).

    * Adjust the version in the poms, manifests and other eclipse stuff.

            $ droolsjbpm-build-bootstrap/script/release/update-version-all.sh 5.2.0-SNAPSHOT 5.2.0.Final 5.1.0-SNAPSHOT 5.1.0.Final

        * Note: the arguments are `droolsOldVersion droolsNewVersion jbpmOldVersion jbpmNewVersion`.

        * WARNING: FIXME the update-version-all script does not work correctly if you are releasing a hotfix version.

        * WARNING: Guvnor has a hard-coded version number in org.drools.guvnor.server.test.GuvnorIntegrationTest.createDeployment. This must be changed manually and committed.

        * WARNING: script update-version-all.sh did not update all versions in all modules for 5.5.0.Final. Check all have been updated with the following and re-run if required.

                $ grep -r '5.4.0-SNAPSHOT' **/pom.xml or for i in $(find . -name "pom.xml"); do grep '5.4.0-SNAPSHOT' $i; done 

        * Commit those changes (so you can tag them properly):
        
            * Add changes from untracked files if there are any. WARNING: DO NOT USE "git add ." . You may accidentally add files that are not meant to be added into git. 

                    $ git add {filename}
                
            * Commit all changes

                    $ droolsjbpm-build-bootstrap/script/git-all.sh commit -m"Set release version: 5.2.0.Final"

    * Update the *Compatibility matrix* in `droolsjbpm-knowledge/kie-docs/shared/.../Chapter-Compatibility_matrix.xml`.

        * Cherry pick that change to master too.

* Create the tag locally. The arguments are the Drools version, the jBPM version:

        $ droolsjbpm-build-bootstrap/script/release/git-tag-locally-all.sh 5.2.0.Final 5.1.0.Final

* Go to [nexus](https://repository.jboss.org/nexus), menu item *Staging repositories*, drop all your old staging repositories.

* Deploy the artifacts:

        $ droolsjbpm-build-bootstrap/script/mvn-all.sh -Dfull -DskipTests clean deploy

    * This will take a long while (3+ hours)

    * The release skips the tests because jbpm and guvnor have random failing tests

    * If it fails for any reason, go to nexus and drop your stating repositories again and start over.

* Go to [nexus](https://repository.jboss.org/nexus), menu item *Staging repositories*, find your staging repository.

    * Look at the files in the repository.

        * Sometimes they are split into 2 staging repositories (with no intersecting files): just threat those 2 as 1 staging repository.

    * Button *close*

        * This will validate the nexus rules. If any fail: fix the issues, and force a git retag locally.

* Do another sanity check of the artifacts by running the examples and opening the manuals from the zips. See above.

* This is **the point of no return**.

    * Warning: The slightest change after this requires the use of the next version number!

        * **NEVER TAG OR DEPLOY A VERSION THAT ALREADY EXISTS AS A PUSHED TAG OR A DEPLOY!!!**

            * Except deploying `SNAPSHOT` versions.

            * Git tags are cached on developer machines forever and are never refreshed.

            * Maven non-snapshot versions are cached on developer machines and proxies forever and are never refreshed.

        * So even if the release is broken, do not reuse the same version number! Create a hotfix version.

* Define the next development version an adjust the sources accordingly:

    * Define the next development version on the branch from which you are releasing.

        * There are only 1 acceptable pattern:

            * `major.minor.micro-SNAPSHOT`, for example `1.2.0-SNAPSHOT` or `1.2.1-SNAPSHOT`

        * Warning: The release branch should never have the same SNAPSHOT version as any other branch.

            * If you're releasing a Final, increment the micro number, not the minor number.

    * Adjust the version in the poms, manifests and other eclipse stuff:

            $ droolsjbpm-build-bootstrap/script/release/update-version-all.sh 5.2.0.Final 5.3.0-SNAPSHOT 5.1.0.Final 5.2.0-SNAPSHOT

        * Commit those changes:

                $ droolsjbpm-build-bootstrap/script/git-all.sh add .

                $ droolsjbpm-build-bootstrap/script/git-all.sh commit -m"Set next development version: 5.3.0-SNAPSHOT"

        * Push all changes, both the first and the last version change commit, to the repository *together*:

                $ droolsjbpm-build-bootstrap/script/git-all.sh push

        * Warning: Guvnor has a hard-coded version number in org.drools.guvnor.server.test.GuvnorIntegrationTest.createDeployment. This must be changed manually and committed.

        * Warning: script update-version-all.sh did not update all versions in all modules for 5.5.0.Final. Check all have been updated with the following and re-run if required.

                $ grep -r '5.4.0-SNAPSHOT' **/pom.xml or for i in $(find . -name "pom.xml"); do grep '5.4.0-SNAPSHOT' $i; done 

        * Warning: If releasing from master (i.e. a Beta release) and the push fails as there have been other commits to the remote master branch it might be necessary to pull.

                $ droolsjbpm-build-bootstrap/script/git-all.sh pull

* Push the local tag to the remote blessed repository.

        $ droolsjbpm-build-bootstrap/script/release/git-push-tag-all.sh 5.2.0.Final 5.1.0.Final

    * Push your changes to the release branch:

        * Especially if the release branch is master: First pull any latest changes **without `--rebase`**, .

                $ git-all.sh pull

            * Without the `--rebase` it's a merge, and their commits will not be rebased before your version-changing commits.

        * Push your version-changing commits to the release branch:

                $ git-all.sh push origin 5.2.x

* Release your staging repository on [nexus](https://repository.jboss.org/nexus)

    * Button *release*

* Go to [jira](https://issues.jboss.org) and for each of our JIRA projects (DROOLS, PLANNER, JBPM, GUVNOR):

    * Open menu item *Administration*, link *Manage versions*, release the version.

    * Create a new version if needed. There should be at least 2 unreleased non-FUTURE versions.

* Upload the zips, documentation and javadocs to filemgmt and update the website.

    * Go to `droolsjbpm-build-distribution/droolsjbpm-uber-distribution/target`.

    * To get access to `filemgmt.jboss.org`, see preparation above.

    * Folder `download_jboss_org` should be uploaded to `filemgmt.jboss.org/downloads_htdocs/drools/release`
    which ends up at [download.jboss.org](http://download.jboss.org/drools/release/)

        * Update [the download webpage](http://www.jboss.org/drools/downloads) accordingly.

    * Folder `docs_jboss_org` should be uploaded to `filemgmt.jboss.org/docs_htdocs/drools/release`
    which ends up at [docs.jboss.org](http://download.docs.org/drools/release/)

        * Use `documentation_table.txt` to update [the documentation webpage](http://www.jboss.org/drools/documentation).

* Update the symbolic links `latest` and `latestFinal` links on filemgmt, if and only if there is no higher major or minor release was already released.

        $ droolsjbpm-build-bootstrap/script/release/create_filemgmt_links.sh 5.2.0.Final

    * Wait 5 minutes and then check these URL's. Hit ctrl-F5 in your browser to do a hard refresh:

        * [http://download.jboss.org/drools/release/latest/](http://download.jboss.org/drools/release/latest/)

        * [http://download.jboss.org/drools/release/latestFinal/](http://download.jboss.org/drools/release/latestFinal/)

        * [http://docs.jboss.org/drools/release/latest/](http://docs.jboss.org/drools/release/latest/)

        * [http://docs.jboss.org/drools/release/latestFinal/](http://docs.jboss.org/drools/release/latestFinal/)

Announcing the release
----------------------

* Create a blog entry on [the droolsjbpm blog](http://blog.athico.com/)

    * Include a direct link to the new and noteworthy section and to that blog entry in all other correspondence.

    * Twitter and Google+ the links.

        * Most people just want to read the new and noteworthy, so link that first.

    * Mail the links to the user list.

* If it's a Final, non-hotfix release:

    * Notify TheServerSide and Dzone's Daily Dose.
    

Synching the Product Repository
===============================

The community code repositories under the @droolsjbpm account contains all the code released as part of the community projects for Drools and jBPM. Every time a new minor or major version is released, a new community branch is created for that version. For instance, at the time of this writing, we have, for instance, branches *6.0.x*, *5.6.x*, *5.5.x*, etc for each minor/major version released and the *master* branch for future releases.

Red Hat also has a mirror private repository that is used as a base for the product releases. This mirror repository contains all the code from the community repositories, plus a few product specific commits, comprising branding commits (changing names, for instance from Drools to BRMS), different icons/images, etc.

Every time a new product build is required, a request for synching the repositories is made and a new tag has to be created to serve as the base of the new product build.

This new tag will usually be based on the HEAD of a specific community branch with the product specific commits applied on top of it. 

At the time of this writing, the product version 6.0.1.GA is being built. Each tag is then created based on the 6.0.x branch with the prod-6.0.1.GA.x-YYYY.MM.DD rebased on top of it, where YYYY.MM.DD is the year/month/day the branch was created.

Follows a step-by-step instruction on how to do that. These instructions assume:

* You have a local clone of all Drools/jBPM repositories (19 at the time of this writing).
* The clones have a remote repository reference to the @droolsjbpm repositories that we will name **main**
* The clones have a remote repository reference to the @jboss-integration mirrors of these repositories that we will name **prod**

Here are the steps:

**1 - cd into the scripts directory**
```
$ cd droolsjbpm-build-bootstrap/script
```
**2 - Fetch the changes from the _main_ repository:**
```
$ ./git-all.sh fetch main
```
**3 - Rebase the corresponding branches (master and 6.0.x at the time of this writing, and 0.3.x branch for Uberfire)**
```
$ ./git-all.sh rebase main/master master
$ ./git-all.sh rebase main/6.0.x 6.0.x
```
The second command above will raise an error in the Uberfire repository as the branch in Uberfire is named 0.3.x. Ignore the error and in another shell, cd into the uberfire folder and manually rebase Uberfire:
```
$ cd <uberfire clone directory>
$ git rebase main/0.3.x 0.3.x
```
**4 - Fetch the changes from the _prod_ repository:**
```
$ ./git-all.sh fetch prod
```
At the time of this writing, there are only 4 repositories that contain product specific branches. The fetch should only return changes, if it returns, in those 4 repositories. In case any change is picked up in any other repository or in any branch that is not the product branch, someone made a mistake and commited changes to the product repository. This has to be fixed. The 4 repositories are:
```
jbpm-console-ng
dashboard-builder
jbpm-dashboard
kie-wb-distribution
```
**5 - For each of the 4 repositories, in another shell, rebase the product branch:**
```
$ cd <repository>
$ git rebase prod/prod-6.0.1.GA.x-2014.02.10 prod-6.0.1.GA.x-2014.02.10
```
Please note that the above has to be done for each repository that contains product specific branches. Please also note that the product branch name might be different. The example above uses the branch name at the time of this writing.

**6 - Checkout the branch that will serve as the base for the tag on all repositories. This might be a release branch in case the tag will be created based on a community release, or it can be a regular branch like 6.0.x (0.3.x in case of Uberfire):**
```
$ ./git-all.sh checkout 6.0.x
```
The above will raise an error for Uberfire, so in another shell do:
```
$ cd <uberfire folder>
$ git checkout 0.3.x
```
**7 - Create a branch to base the tag on. I usually name the base branch as "bsync.YYYY.MM.DD" where YYYY.MM.DD is the year, month and day when the tag is being created.**
```
$ ./git-all.sh checkout -b bsync.2014.10.12
```
**8 - For each repository with a product specific branch, it is necessary to rebase the product branch on top of the base code. There are several different ways to do that. I prefer to reset the tag branch to the product branch and then rebase it. Here are the steps to do that. In another shell, cd into the repository that contains the product branch, reset the current release branch to the product branch, rebase it on top of the base branch.**
```
$ cd <repository folder>
$ git reset --hard prod-6.0.1.GA.x-2014.02.10
$ git rebase 6.0.x
```
Please note that the example above uses the same branch names used in setp (5) for product branch and (6) for the base branch.
If the rebase creates any conflicts, fix the conflicts and continue the rebase.

**9 - If any conflict happened in step 8, then we need to create new product branches. For each repository with a product branch, cd into the repository folder, create a new product branch and checkout the tag branch again.**
```
$ cd <repository folder>
$ git checkout -b prod-6.0.1.GA.x-2014.02.12
$ git checkout bsync.2014.10.12
```
**10 - If there are any commits that have to be manually cherry-picked into the tag, cd into the corresponding repository and cherry-pick the commit. This should not happen often, but sometimes it does.**
```
$ cd <repository>
$ git cherry-pick -x <SHA>
```
**11 - Build the code for all repositories and test to make sure it is working. Fix any problems in case it is not working. **

**12 - Create the tag for all repositories. For product tags, we use a naming standard of "sync.YYYY.MM.DD", where YYYY.MM.DD is the date the tag is created. If for any reason more than one tag needs to be created on the same day, add a sequential counter sufix: "sync.YYYY.MM.DD.C"**
```
$ ./git-all.sh tag sync.2014.02.12
```
**13 - Push the tag and branches to the _prod_ server.**
```
$ ./git-all.sh push prod sync.2014.02.12
$ ./git-all.sh push prod 6.0.x
$ ./git-all.sh push prod master
```
**14. In case a new product branch was created in step 9, push the new product branch and delete the old remote branch:**
```
$ git push prod-6.0.1.GA.x-2014.02.12
$ git push :prod-6.0.1.GA.x-2014.02.10
```
Please note that this will not delete the old local product branch. I usually leave the local branch around for a few weeks just in case some mistake happened, as it will make it easier to fix, but it can be deleted.


FAQ
===

* Why do you not accept `@author` lines in your source code?

    * Because the author tags in the java files are a maintenance nightmare

        * A large percentage is wrong, incomplete or inaccurate.

        * Most of the time, it only contains the original author. Many files are completely refactored/expanded by other authors.

        * Git is accurate, that is the canonical source to find the correct author.

    * Because the author tags promote *code ownership*, which is bad in the long run.

        * If people work on a piece they perceive as being owned by someone else, they tend to:

            * only fix what they are assigned to fix, instead of everything that's broken

            * discard responsibility if that code doesn't work properly

            * be scared of stepping on the feet of the owner.

        * For more motivation, see [this video on How to get a healthy open source project?](http://video.google.com/videoplay?docid=-4216011961522818645#)

    * Credit to the authors is given:

        * on [the team page](http://www.jboss.org/drools/team)

             * Please contact Geoffrey (or any of us) if you want to add/change/expand your entry in the team page. Don't be shy!

        * on [the blog](http://blog.athico.com)

            * Write an article about the improvements you did! Contact us if you don't have write authorization on the blog yet.

        * with [ohloh](https://www.ohloh.net/p/jboss-drools/contributors) which also has statistics

        * in [the github web interface](https://github.com/droolsjbpm).