# Introduction to Version Control Systems (VCS) [Git and Github]:

Version Control Systems (VCS) are essential tools in software development, designed to manage changes to a set of files over time. They allow multiple people to work on the same project without stepping on each other's toes. By keeping track of every modification, a VCS enables developers to revert files back to a previous state, compare changes over time, and ensure that updates from different sources are managed effectively.

**Why We Need Version Control:**
- **History Tracking:** Like a detailed diary of your project, it records every change: who made it, what was changed, and when.
- **Collaboration:** Facilitates multiple developers working on the same project simultaneously without conflicts.
- **Backup and Restore:** Acts as a safety net; if you lose files or make a mistake, you can restore earlier versions.
- **Branching and Merging:** Allows diverging from the main line of development to experiment or work on different features concurrently and then merge changes back to the main project.

**Version Control as a Time Machine:**
Imagine working on a document like a draft for a novel. As you edit, you decide some of your previous ideas or paragraphs were better. With a VCS (Git), you can easily go "back in time" to retrieve or compare those earlier versions, similar to how a time machine would work. It's not just about going back but also merging the best of your past and present efforts.

## Content
- [Introduction to Version Control Systems (VCS) \[Git and Github\]:](#introduction-to-version-control-systems-vcs-git-and-github)
  - [Content](#content)
  - [Day 1 Lecture: Introduction to Git](#day-1-lecture-introduction-to-git)
    - [Key Concepts:](#key-concepts)
    - [Basic Git Commands:](#basic-git-commands)
    - [Hands-on Practice](#hands-on-practice)
    - [Additional Resources for Further Learning:](#additional-resources-for-further-learning)
  - [Day 2 Lecture: GitHub and Remote Operations with Git](#day-2-lecture-github-and-remote-operations-with-git)
    - [Introduction to GitHub](#introduction-to-github)
      - [Why Use GitHub?](#why-use-github)
      - [Importance of GitHub in Modern Development](#importance-of-github-in-modern-development)
      - [Connecting Git with GitHub](#connecting-git-with-github)
    - [Key Concepts:](#key-concepts-1)
    - [Common Git Commands for Managing Remote Repositories](#common-git-commands-for-managing-remote-repositories)
    - [Hands-on Practice](#hands-on-practice-1)
    - [Additional Resources:](#additional-resources)
  - [Day 3 Lecture: Advanced GitHub Features and Workflows](#day-3-lecture-advanced-github-features-and-workflows)
    - [Special GitHub Repositories](#special-github-repositories)
    - [GitHub Pages](#github-pages)
    - [GitHub Flow](#github-flow)
    - [Forks and Pull Requests](#forks-and-pull-requests)
    - [The `.gitignore` File](#the-gitignore-file)
    - [Undoing Changes in Git](#undoing-changes-in-git)
    - [Hands-on Practice](#hands-on-practice-2)
    - [Additional Resources](#additional-resources-1)
  - [**Next Steps**](#next-steps)
## Day 1 Lecture: Introduction to Git
Git is a popular version control system. It was created by Linus Torvalds in 2005, and has been maintained by Junio Hamano since then.

It is used for:
- Tracking code changes
- Tracking who made changes
- Coding collaboration

### Key Concepts:
- **Repository (Repo):** A directory which is being tracked by Git. It contains all of the project files and stores the revision history.
- **Commit:** A snapshot of your repository at a particular point in time. It’s like taking a photo; once a commit is made, you can always return to that version at any time.
- **Staging Area:** A place to prepare and organize your files before making a commit. This allows you to selectively add changes to your next commit while leaving others out of the snapshot.

### Basic Git Commands:
- **`git --version`:** This command helps you check the installed version of Git. It's useful for ensuring you are up-to-date with the latest features and security patches.
   ```bash
   git --version
   ```

- **`git init`:** Initializes a new Git repository locally, setting up the necessary .git directory and subdirectories for repository tracking.
   ```bash
   git init
   ```
- **`git status`:** Provides a summary of which files have changes, which are staged, and what's not being tracked by Git.
 - Check status:
   ```bash
   git status
   ```
- **`git add`:** Moves changes from the working directory to the staging area, marking them for inclusion in the next commit.
   ```bash
   git add <filename>
   git add .  # Adds all changes files
   ```
- **`git commit`:** Takes everything from the staging area and makes a permanent snapshot (commit), which is then saved in your repository.
   ```bash
   git commit -m "Describe your changes here"
   ```


- **`git branch`:** This command is used to manage branches within your repository. It can list, create, delete, or rename branches.
   - List all branches:
     ```bash
     git branch
     ```
   - Create a new branch:
     ```bash
     git branch <branch-name>
     ```
   - Delete a branch:
     ```bash
     git branch -d <branch-name>
     ```

- **`git checkout`:** This command is used to switch between branches or restore working tree files.
   - Switch to a branch:
     ```bash
     git checkout <branch-name>
     ```
   - Restore a file to the last commit:
     ```bash
     git checkout -- <file-name>
     ```

- **`git switch`:** Introduced in Git 2.23, this command is a simpler alternative to `git checkout` for switching branches.
   - Switch to a branch:
     ```bash
     git switch <branch-name>
     ```
   - Create a new branch and switch to it:
     ```bash
     git switch -c <new-branch-name>
     ```

- **`git log`:** This command shows the commit logs. It helps you to see a history of changes along with details like who made the commit, when, and what changes were made.
   - Show the commit history:
     ```bash
     git log
     ```
   - Show the commit history with a graph and one line per commit:
     ```bash
     git log --graph --oneline
     ```
   - Show the log for a specific file:
     ```bash
     git log -- <file-name>
     ```

- **`git merge`:** This command is used to integrate changes from different branches.
   - Merge another branch into your current branch:
     ```bash
     git merge <branch-name>
     ```

- **`git stash`:** This command temporarily shelves (or stashes) changes you've made to your working directory so you can work on something else, and then come back and re-apply them later on.
   - Stash changes:
     ```bash
     git stash
     ```
   - Apply stashed changes back to your working directory:
     ```bash
     git stash pop
     ```

### Hands-on Practice
- **Task:** Set up a new repository and practice staging and committing.
  - Create a new directory, initialize a Git repository, and commit your first file.
    ```bash
    mkdir myfirstrepo
    cd myfirstrepo
    git init
    echo "Hello, Git!" > welcome.txt
    git add welcome.txt
    git commit -m "Initial commit with welcome.txt"
    ```

### Additional Resources for Further Learning:
- [Pro Git Book](https://git-scm.com/book/en/v2) – A comprehensive resource on Git.
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) – Detailed tutorials on using Git effectively.
- [GitHub Learning Lab](https://lab.github.com/) – Interactive projects to learn GitHub by doing.
- [Oh My Git](https://ohmygit.org/) - An open source game about learning Git.

## Day 2 Lecture: GitHub and Remote Operations with Git
### Introduction to GitHub
GitHub is a cloud-based hosting service that lets you manage Git repositories. If Git is the toolbox, GitHub is the office where the team comes together to use those tools. It provides a centralized location where team members can collaborate on projects, track issues, make pull requests, and host their final products.

#### Why Use GitHub?
- **Collaboration:** Makes it easier for more than one person to work on a project by providing tools like pull requests, code reviews, and branch protections.
- **Open Source Contributions:** Allows anyone in the world to contribute to open source projects, making it a hub for open source collaboration.
- **Documentation:** Hosts not only the project code but also the documentation, which can be managed through markdown files within the repository.
- **Project Management:** Tracks bugs, tasks, and feature requests via Issues and Projects.

#### Importance of GitHub in Modern Development
GitHub is not just a tool for storing projects. It's also crucial for:
- **Professional Networking:** Showcase your projects, contributions to open source, and interact with other developers.
- **Version Control and Backup:** Ensures that the history of a project's development is clear and backed up on the cloud.
- **Continuous Integration/Continuous Deployment (CI/CD):** Automate your testing and deployment process.


#### Connecting Git with GitHub
Using Git with GitHub enhances its capabilities. Commands that were once limited to local operations can now synchronize changes with remote repositories hosted on GitHub.

### Key Concepts:
- **Remote Repository:** A repository hosted on the internet or network somewhere other than your local machine.
- **Local Repository:** A version of your project that resides on your personal computer.
- **Clone:** Making a copy of the remote repository to your local machine.

### Common Git Commands for Managing Remote Repositories

1. **`git clone`:** This command is used to copy a remote repository into a new directory, locally.
   - Syntax:
     ```bash
     git clone <repository-url>
     ```
   - Example:
     ```bash
     git clone https://github.com/username/myproject.git
     ```

2. **`git remote`:** This command lets you create, view, and delete connections to other repositories.
   - Add a new remote repository:
     ```bash
     git remote add <remote-name> <repository-url>
     ```
   - Example:
     ```bash
     git remote add origin https://github.com/<username>/<myproject.git>
     ```

3. **`git fetch`:** This command downloads commits, files, and refs from a remote repository into your local repo.
   - Fetching updates from a remote repository:
     ```bash
     git fetch origin
     ```

4. **`git pull`:** Fetches and integrates changes from a remote repository to your current branch. Essentially, `git pull` is `git fetch` followed by `git merge`.
   - Pull changes and merge:
     ```bash
     git pull origin master
     ```

5. **`git push`:** Uploads all local branch commits to the corresponding remote branch.
   - Push local changes to the remote repository:
     ```bash
     git push origin master
     ```

6. **`git branch -r`:** Lists all the remote branches.
   - Viewing remote branches:
     ```bash
     git branch -r
     ```


### Hands-on Practice
- **Task:** Connect to a remote repository, make changes, and sync them.
  - Clone a repository, make updates, commit locally, and push changes back to GitHub.

### Additional Resources:
- [GitHub Guides](https://guides.github.com/) - A collection of resources to help you learn and work with GitHub.
- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/) - GitHub’s branching strategy and workflow.


## Day 3 Lecture: Advanced GitHub Features and Workflows

### Special GitHub Repositories
1. **Username Repository (`username/username`):**
   - This is a special repository whose README.md will appear on your GitHub profile page.
   - It’s used to showcase your skills, recent projects, or anything else you want to highlight directly on your profile.

2. **GitHub Pages Repository (`username.github.io`):**
   - A static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, optionally runs the files through a build process, and publishes a website.
   - You can host your blog, project pages, or resume directly from GitHub’s servers for free.

### GitHub Pages
- Set up a project page using the Jekyll theme or plain HTML/CSS/JavaScript.
- Use the `gh-pages` branch or a `/docs` folder on the `master` branch to publish your content.

### GitHub Flow
- A lightweight, branch-based workflow that supports teams and projects where deployments are made regularly.
- Steps include:
  1. **Create a Branch:** From the repository, create a branch off the main branch (typically `main` or `master`).
  2. **Add Commits:** Make changes and commit them to your branch.
  3. **Open a Pull Request:** Initiate a discussion about your commits.
  4. **Discuss and Review:** Teammates discuss, review, and make further commits if necessary.
  5. **Merge and Deploy:** If everything is good, merge your changes into the main branch and deploy from there.

### Forks and Pull Requests
- **Forks:** A personal copy of another user’s repository that lives on your account. Forks let you make changes without affecting the original project.
- **Pull Requests:** Let you tell others about changes you've pushed to a branch in a repository on GitHub. Once opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

### The `.gitignore` File
- A text file that tells Git which files or folders to ignore in a project.
- Very useful in avoiding the accidental addition of unnecessary files (like dependency caches or build outputs) to the repository.

### Undoing Changes in Git
1. **Amend:**
   - Modify the most recent commit instead of creating a new one.
   - Useful for making corrections to the last commit.
   - Command:
     ```bash
     git commit --amend
     ```

2. **Revert:**
   - Creates a new commit that undoes all of the changes made in a specified commit, then applies it to the current branch.
   - Command:
     ```bash
     git revert <commit-hash>
     ```

3. **Reset:**
   - Resets your index (staging area) and working directory to the state of a specified commit.
   - Types of resets:
     - `--soft`: The source tree is unchanged but the HEAD moves to the given commit.
     - `--mixed`: Resets the index but not the working tree and reports what has not been updated.
     - `--hard`: Resets both the index and working tree. Any changes to tracked files in the working tree are discarded.
   - Command:
     ```bash
     git reset --hard <commit-hash>
     ```

### Hands-on Practice
- **Task:** Create a `username.github.io` repository, set up a basic web page, and explore using `.gitignore`.
- **Task:** Make a fork of an existing project, contribute changes, and open a pull request.

### Additional Resources
- [GitHub Help Documentation](https://help.github.com) - Official documentation covering all features.
- [Interactive Learning Guides for Git and GitHub](https://learngitbranching.js.org/) - Practice Git skills in your browser.
- [Github profile readme generator 1](https://rahuldkjain.github.io/gh-profile-readme-generator/)
- [Github profile readme generator 2](https://gprm.itsvg.in/)
- [Github profile readme generator 3](https://profilinator.rishav.dev/)



## **Next Steps**
Here are some next steps you can focus on within the scope of **Git** and **GitHub**, which will deepen your understanding and skills:

1. **Git Rebase and Interactive Rebase:**
   - **Rebase**: Understanding how to reapply commits on top of another base commit.
   - **Interactive Rebase**: Editing, squashing, and reordering commits to clean up your history.
   - **Scenario**: Practice cleaning up commit histories before merging branches to keep a clean log.

2. **Git Hooks:**
   - **What are Git Hooks?** Automate tasks in response to Git events (e.g., pre-commit, pre-push).
   - **Example Uses:**
     - Automatically run linters or tests before commits.
     - Sending notifications after pushes.
   - **Hands-on**: Create custom hooks for automating routine tasks in your projects.

3. **Continuous Integration (CI) with GitHub Actions:**
   - **Introduction to GitHub Actions**: Automating workflows directly in your GitHub repository.
   - **Hands-on**: Set up a basic CI pipeline for testing or linting code every time you push to a repository.
   - **Scenario**: Implementing a workflow that automatically runs tests before merging pull requests.

4. **Git Submodules:**
   - **What are Submodules?** Including one Git repository inside another.
   - **Use Cases**: Managing multiple projects or dependencies within a larger project.
   - **Hands-on**: Add submodules to a project and manage updates across multiple repositories.

5. **Git Bisect:**
   - **What is Git Bisect?** A powerful tool to track down bugs by performing a binary search through commits.
   - **Hands-on**: Practice finding the commit that introduced a bug using `git bisect`.

6. **Tagging and Releases on GitHub:**
   - **Git Tags**: Marking specific points in your history (commonly for releases).
   - **Releases**: Creating official releases from tagged commits on GitHub.
   - **Scenario**: Practice tagging releases and using GitHub’s Releases feature to distribute software.

7. **Collaborative GitHub Projects:**
   - **Working with Teams**: Managing large projects using GitHub’s **Projects**, **Issues**, and **Milestones** features.
   - **Scenario**: Set up a project board, define issues, assign team members, and manage milestones for a collaborative project.
  
8. **Git LFS (Large File Storage):**
   - **What is Git LFS?** Handling large files that are not suitable for normal Git storage.
   - **Scenario**: Set up Git LFS for handling media files or other large assets in your repositories.

9. **Contributing to Open Source Projects:**
   - **Finding Projects**: Explore how to find open-source projects to contribute to.
   - **Etiquette and Best Practices**: Learn how to create valuable contributions (forking, submitting PRs, following code guidelines).
   - **Scenario**: Contribute to an open-source repository by fixing an issue or adding a feature.

10. **Working with Git in Complex Projects:**
    - **Git Workflows**: Explore advanced workflows like **Gitflow**, **Forking Workflow**, or **Feature Branch Workflow**.
    - **Scenario**: Implement one of these workflows in a collaborative team environment.

<center>The End of <b>VCS Lectures</b></center>