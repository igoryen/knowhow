built-ins
are like Java methods

user?uppercase  
	= uppercase(user) // IGOR

user?cap_first
	= cap_first(user) // Igor

user?length
	= user.length // 4

family?size
	= family.size // 4

igor.married?string("Y", "N") 
	(married == 1) ? return "Y" : return "N" // Y

family?join(", ") // igor, jenica, daniel, joy
family?join(", ")?cap_first // Igor, Jenica, Daniel, Joy

user?starts_with("J") // "false" if user == "Igor"


${user!"visitor"}
	(user) ? user: "stranger"

user??
	(!user) ? /*do nothing*/ : user

(animals.python.price)!0
	return 0 if animals == undefined/null or python == undefined/null

(animals.python.price)??
	do something only if animals or python != undefined/null

