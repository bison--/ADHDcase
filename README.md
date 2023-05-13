# ADHDcase
A chrome plugin that makes text on websites start bold, making it faster readable for most ADHD folks.

Base on the tweet from @forestvanslyke (https://twitter.com/forestvanslyke/status/1628879347426951169)


## manual installation

* clone the repo
* open chrome://extensions
* enable `Developer Mode` on the upper right top
* drag the `ADHDcasePlugin` sub folder into the browser tab
  * or click the `load extension` button and select the `ADHDcasePlugin` directory

## use

The ADHDcase plugin is either:

* Next to the address on the right.  

or
  
* Next to the address bar on the right is a puzzle icon, click it and there you can click and PIN the ADHDcase plugin for easy access.

Select a text on any website and click the plugin icon, then the `Make selected text bolder` button.

## development

After dragging the folder inti the browser, it seems chrome keeps a file-system hook on it.
All changes to the plugin are instantly present when reloading a website. 

## known issues

The `Make all first letters bold` button is disabled since it crashed the tab on all websites tested with.
