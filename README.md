# CSCI 402 - Checklist
A deceptively simple chrome extension that places a checkbox next to each video on the lectures page : https://merlot.usc.edu/cs402-s23/lectures.html 

The extension keeps track of which checkbox is checked or unchecked in the windows localStorage object, which is persisted. Even if you close and reload
the page, the checkboxes will populate again!. 

No data is transmitted to or from any server. All information on which videos you have watched, is stored in the localStorage object. 

## Installation
You can clone this repository, and load the folder as an unpacked extension.

To do this, Go to Settings > Extension. Then click on the Load unpacked button, and select the cloned folder.