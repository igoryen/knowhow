
File > Scripts > Image processor
select the source folder
select the target folder
Save as JPEG
quality 12



========================
- open dir with psd files
- open one file in PS
- Window > Actions
- below - click on folder image (set of actions)
	- give a name to the set of Actions > OK
- below click on file image (action)
	- give a name to the action
	- click "Record"
- File > Save for Web > 
- create a folder "big"
- open it
- pick format of "jpg"
- pick one psd file
- save the file
- click "stop recording" image

- go to the target dir
- remove the file there

File > Automate > Batch
choose the destination folder 
set the extension for the new files
	- e.g. "_big.jpg"
destination: "Save and close"
OK

files are automatically created

=================================

---------------------------

batch > 
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
