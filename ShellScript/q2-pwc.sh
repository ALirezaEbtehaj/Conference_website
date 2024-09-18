#!/bin/bash
clear
 

#A varible VALID_PASSWORD which create a password which is "ae256"
VALID_PASSWORD="ae256"


#"Enter password" is diplayed with field to put the input value
echo "Enter The Password"
#this input reads and stores into a varible called user_password
read user_password

# The if function is used when the password is wrong output "Access Denied" and when it is right output is "You have Access" 
if [ "$user_password" = "$VALID_PASSWORD" ]; then
	echo "You have access"
else
	echo "Access Denied"
fi

