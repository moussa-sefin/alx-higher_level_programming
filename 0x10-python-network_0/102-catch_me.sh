#!/bin/bash
# This script causes the server to respond with "You got me!"
curl -s -L -X PUT "0.0.0.0:5000/catch_me" -H "Origin: HolbertonSchool" -d "user_id=98"
