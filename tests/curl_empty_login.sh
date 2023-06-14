#!/bin/bash

# create a functon to send HTTP POST
# using CURL
send_post_data() 
{	
    cmd="/usr/bin/curl  -i \
        -X POST http://localhost:8000/api/test \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'email=&password=' ";
    
    eval "$cmd";
    echo "";
}

# test send http POST
send_post_data
