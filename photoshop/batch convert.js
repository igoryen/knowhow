


// ============================================================

File > Scripts > Image processor
select the source folder
select the target folder
Save as JPEG
quality 12



========================
// CREATING the action

- go to/open dir with psd files
- open one file in PS
- Window > Actions
- at the bottom of the dialog box 
	- click on the folder icon (set of actions)
	- give a name to the new set of Actions e.g. "PSD to JPG"
	- OK
- at the bottom of the dialog box 
	- click on file icon (action)
	- give a name to the action e.g. "to 150 wide"
	- click "Record"
- File > Save for Web > 
- create a folder "big"
- open it
- pick format of "jpg"
- pick one psd file
- save the file
- click "stop recording" image

// REMOVE THE TRIAL FILE
- go to the target dir
- remove the file there

//
File > Automate > Batch
- Destination: "Folder"
- Choose: // select the target dir
- set the extension for the new files
	- e.g. "_big.jpg"
- OK

files are automatically created

=================================

---------------------------
// USING the actions


File > Automate > Batch > 
	play
		set: "PSD to JPG"
		Action: "to 150 wide"
	source: "Folder"
		Choose: the source path
	destination "Folder"
		choose: destination path

	File naming:
		"Document Name"
		dont use an extension
