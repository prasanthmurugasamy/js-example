**1)Why NPM:**

>**NPM - Node Package Manager**

>NPM is the world's Largest software registry

>Contains over 8Laksh code packages

>It is a open source

>It automates dependency and package management.

>You can specify all of your projects dependencies inside your ***package.json***.If any time you or someone else need to get started with your project they can just run **'npm-install**' and immediately have all the dependencies installed in their system.

>It also contains what **version of dependencies** your project was build.

>It will be definitely be a time consuming process where you need to search and install the dependencies need for a specific project. Instead use NPM.
---------------------------------------------------------------
**2)  a)npm -g:**

The 'g' in 'npm install -g' is flag signifying that you want to install that particular npm module globally(to all users in the system).Without the 'g' option, the module will be installed locally inside the current directory callled 'node_modules'.

**b)'--save'** saves the name and version of the package being installed in the dependency object.

**'--save-dev'** saves the name and version of the package being installed in the dev-dependency object.
---------------------------------------------------------------
**3)Yarn:**

>nom installs dependencies in a no -deterministically way meaning the two developer could have a different **'node_modules'** directory resulting into different behaviors.

>npm has suffered from bad reputation as for example in Feb 2018: an issue was discovered in 'version 5.7.0' in which running **'sudo npm'** on **Linux** systems would **change the ownership** of system files, permanently breaking the operating system.

>To resolve those problems, Facebook introduced a new package manager: Yarn a faster, more securely, and more reliably package manager for JavaScript.

>You can add Yarn to a project by typing:

>**yarn init**
>
>This will create a 'package.json' file. Then, install the dependencies with:

>**'yarn install'**

>A folder **'node_modules'** will be generated. Yarn will also generate a file called yarn. Lock. This file serve the same purpose as the **'package-lock'.json** but is instead constructed using a deterministic and reliable algorithm thus leading to consistent builds.
>
>If you started a project with npm, you can actually migrate to Yarn easily. yarn will consume the same **'package.json'**

**Advantages of yarn:**

>When installing a package in NPM these tasks are executed per package and sequentially, meaning it will wait for a package to be fully installed before moving on to the next. In contrast, Yarn executes these tasks in parallel, increasing performance.

---------------------------------------------------------------
**4)**
---------------------------------------------------------------

**5)How to use old express?**
express(Old version): **npm install express@4.26.2**
It will change the current version to the specified old version;  **Lowest version won't work** (ex: npm install express@2.1.2).

---------------------------------------------------------------