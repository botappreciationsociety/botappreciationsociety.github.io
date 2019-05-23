from PIL import Image
import requests
from io import BytesIO
import json

pages = json.load(open('bots/botpages.json', 'r'))

new_json = []

pageid = 1
for page in pages:
	dpurl = page["dp_link"]
	new_page_data = {}
	new_page_data["title"] = page["title"]
	new_page_data["fb_link"] = page["fb_link"]
	new_page_data["tags"] = page["tags"]
	new_page_data["dp_link"] = page["dp_link"]
	new_page_data["dp_id"] = "../pagedps/{}.png".format(pageid)
	if "github" in page:
		new_page_data["github"] = page["github"]
	new_json.append(new_page_data)

	response = requests.get(dpurl)
	img = Image.open(BytesIO(response.content))
	img.thumbnail((80, 80))
	img.save("pagedps/{}.png".format(pageid), "PNG")

	print(str(pageid) + " done")
	pageid += 1

with open('bots/botpages.json', 'w') as outfile:
    json.dump(new_json, outfile)