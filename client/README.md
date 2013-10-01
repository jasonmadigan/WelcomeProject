Do all the development work in the "app" directory. DO NOT make any changes in the default directory.

You need to install yeoman first

    npm install -g yeoman

To develop locally, run:

    npm install .
    bower install
    grunt server

It will automatically load index.html file in the browser and reload if anything changed. Note that this only runs the client side of the app. 

If you also wish to run server functionality locally, install and run both Redis and MongoDB on your machine and then run the following from the top level of the project:

    fhc target [your-studio-domain].feedhenry.com
	fhc login your-studio-username your-studio-password
	fhc apps
    fhc local the-id-of-your-app

When you are finished with your changes, run

    grunt

to generate files for distribution and they will be copied to the default directory.
