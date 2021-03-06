#!/bin/sh

## A script used to push local changes to remote repo.
## Usage:
# ./update.sh
## or
# ./update.sh "Comments"

message="Just added some code..."

git add . --all

if [ ${#1} -gt 0 ]
then
    git commit -m "$1"
else
    git commit -m "$message"
fi

git push -u

