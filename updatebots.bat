@echo off
pipenv run python bots/convertdata.py
git add .
git commit -m "Added/updated bots"
git push origin master