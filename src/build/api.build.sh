#!/usr/bin/env bash

echo "1. Building API's";

# create empty api/ duirectory
rm -r ./api && mkdir api

# check gateway config for available api repos
# clone the repos
# build the repos into api/{repoName}
