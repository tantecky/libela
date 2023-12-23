#!/bin/bash
set -eu

git checkout main
git pull
npm ci
npm run build