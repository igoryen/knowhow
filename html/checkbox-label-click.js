https://stackoverflow.com/questions/35149814/why-does-click-for-toggle-checkbox-become-a-double-click

	As you are using for="toggle-checkbox" in the label when you click label it also fire click on the  checkbox. 
	So the click event of the parent fires twice for event bubbling. Use click event for the checkbox instead of .js-coupon-code.


if the label is bound to the checkbox
	by for=""
then a click on the label will trigger a click on the checkbox
as a result you will get 2 clicks.

a click handle therefore should be registered for only the checkbox
i.e. the id="" shold sit on the checkbox, not on the label