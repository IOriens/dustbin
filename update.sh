#!/bin/sh
message="Just added some code..."


git add . --all


if [ ${#1} -gt 0 ] 
then 
    echo $1
    git commit -m "$1"
else 
    git commit -m $message
fi

git push -u

