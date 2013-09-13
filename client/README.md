Do all the development work in the "app" directory. DO NOT make any changes in the default directory.

You need to install yeoman first

    npm install -g yeoman

To develop locally, run

    npm install .
    bower install
    grunt server

It will automatically load index.html file in the browser and reload if anything changed.

When you are happy, run

    grunt

to generate files for distribution and they will be copied to the default directory.
