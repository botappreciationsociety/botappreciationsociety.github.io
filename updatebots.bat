@echo off
pipenv run python bots/addbot.py
git add .
git commit -m "Added/updated bots"
git push origin master