#!/bin/bash
# This script takes a URL as an argument, sends a GET request to the URL using curl, and displays the body of the response if the status code is 200

curl -sLI $1 -o /dev/null -w '%{http_code}\n' | grep -q 200 && curl -sL $1
