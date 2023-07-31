## Authors
* Name: Matan Toledano 311516272 Email: matanto@edu.hac.ac.il
* Name: Yitzhak Halevi 315706986 Email: yitzhakha@edu.hac.ac.il

# Explanations

---------------------


# Initializing 

In order to initialize the project make sure to:
1.	When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen, or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2.	You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3.	Still see red stuff? Open the same dialog and click on "Fix" if you see some
4.	Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set
Everything ok? Let's continue:
1.	Run the SQL server like this:
![image](https://github.com/matantoled/Vaccination-Project/assets/75612523/e905d6b5-8b3f-4807-836d-fb7c750b6dce)

 
and create a database named "ex4". Here's how you can do it:
Click the Admin button in the MySQL row and a website will open:
![image](https://github.com/matantoled/Vaccination-Project/assets/75612523/f272e883-947d-4faf-8fcd-562903249d73)

 
click on the new button -> write "ex4" on the Database name and press Create.
Now you have a DB named ex4. 

The DB credentials are stored in the application.properties file. You may change them if you want (and create another with the same name).
2.	Run the project, you should not see any errors in IntelliJ console.

## Initializing the React client (movie-app):
Open a terminal in form-app and run npm install and then npm start. You should see the client running on http://localhost:3000. You can also open another instance of IntelliJ and open the movie-app folder as a project. You can then run the client from there.

