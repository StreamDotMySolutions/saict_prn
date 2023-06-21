#!/bin/bash

# create a functon to send HTTP POST
# using CURL
send_post_data() 
{	
    cmd="/usr/bin/curl  -i \
        -X POST http://localhost:8000/api/test \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'key1=value1&key2=value2' ";
    
    eval "$cmd";
    echo "";
}

# test send http POST
send_post_data
