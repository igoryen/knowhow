// with windows 10
// the way i did it on July 31, 2016
// was:

// # install the Thunderbird
// # add one account
// # add the message filters to that account manually
// # add another account
// etc.

// if you have aaa@gmail.com and bbb@gmail.com
// then the message filters will live inside imap.gmail.com
// in the folder
// having a number 

C:\Users\Igor\AppData\Roaming\Thunderbird\Profiles\ybp3x3q8.default\ImapMail\imap.gmail.com

// the message filter file in each account's folder is called
// msgFilterRules.dat

// the format of the msgFilterRules.dat

// if the file starts with these lines
// RootFolderUri=imap://aaa%40gmail.com@imap.googlemail.com
// mailnews.customHeaders=
// it won't work

version="9" // this must be the first line of the file
logging="no"

name="Indigo"
enabled="yes"
type="17"
action="Move to folder"
actionValue="imap://igor.yentaltsev%40gmail.com@imap.gmail.com/organizations/Indigo"
condition="OR (from,is,chapters.indigo@email.indigo.ca) OR (from,is,Service@online.indigo.ca)"

name="DHL"
enabled="yes"
type="17"
action="Move to folder"
actionValue="imap://igor.yentaltsev%40gmail.com@imap.gmail.com/organizations/DHL"
condition="AND (from,contains,@dhl.com)"

