import json
import os

curr_dir = os.path.dirname(os.path.realpath(__file__))

pages = json.load(open(curr_dir + '\\botpages.json', 'r'))

pagename = input("Page name?:\n")
pageurl = input("Page url?:\n")
pagedp = input("Page dp link?:\n")
tags = []
tag = input("Add a tag, use ';' when done:\n")
while tag != ";":
	tags.append(tag)
	tag = input("Add a tag, use ';' when done:\n")

new_page = {"title": pagename,
			"fb_link": pageurl,
			"dp_link": pagedp,
			"tags": tags}

github = input("Github?:\n")

if github != 'n':
	new_page['github'] = github

	
pages.append(new_page)

new_pages = sorted(pages, key=lambda page: page['title'].lower())

with open(curr_dir + '\\botpages.json', 'w') as f:
	json.dump(new_pages, f)