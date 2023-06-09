# ADHDcase
A cross-browser plugin that makes words on websites start bold, making it faster readable for most ADHD folks.

Base on the tweet from @forestvanslyke (https://twitter.com/forestvanslyke/status/1628879347426951169)


## manual installation

* clone the repo

### Chrome

* open `chrome://extensions`
* enable `Developer Mode` on the upper right top
* drag the `ADHDcasePluginChrome` sub folder into the browser tab
  * or click the `load extension` button and select the `ADHDcasePluginChrome` directory

### Firefox

* Open Firefox and go to `about:debugging`
* Click `This Firefox`.
* Click `Load Temporary Add-on`.
* Open the extension's `ADHDcasePluginFirefox` directory and select any file inside the folder.

### Word Macro

Watch the Installation here: https://youtu.be/CeXbqJfR5aU (german UI)

### Word Add-In

Removed the Word Add-in.  
It didn't worked on Jujiblas system and the side-load ability of Word 365 was removed/limited whatever in my machine (see: https://github.com/OfficeDev/office-js/issues/705#issuecomment-1546854380).    
I didn't get it to work and I just gave up, so look in the git history if you want to take a shot on that.   

## use

### Chrome

The ADHDcase plugin is either:

* Next to the address on the right.  

or
  
* Next to the address bar on the right is a puzzle icon, click it and there you can click and PIN the ADHDcase plugin for easy access.

Select a text on any website and click the plugin icon, then the `Make selected text bolder` button.

### Firefox

Next to the address bar on the right is a puzzle icon, click it and there you can click and PIN the ADHDcase plugin for easy access.

Select a text on any website and click the plugin icon, then the `Make selected text bolder` button.

## development

After dragging (adding) the plugin folder into the browser, it seems chrome and firefox keeping a file-system hook on it.  
All changes to the plugin are instantly present when reloading a website. 

## known issues

The `Make all first letters bold` button is disabled since it crashed the tab on all websites tested with.
