@echo off
pipenv run python getimages.py
git add .
git commit -m "Added/updated bots"
git push origin master