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

def key_func(x):
	if x == "Alive":
		return 1
	elif x == "Dead":
		return 2
	elif x == "Interactive":
		return 3
	elif x == "Video":
		return 4
	elif x == "Image":
		return 5
	elif x == "Text":
		return 6
	else:
		return 7

for page in pages:
	new_tags = []
	for tag in page['tags']:
		if tag != "Alive":
			new_tags.append(tag)
	if "Dead" not in new_tags:
		new_tags.append("Alive")
	page['tags'] = sorted(new_tags, key=key_func, reverse=True)

new_pages = sorted(pages, key=lambda page: page['title'].lower())

with open(curr_dir + '\\botpages.json', 'w') as f:
	json.dump(new_pages, f)