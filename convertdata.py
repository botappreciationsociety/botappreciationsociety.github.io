import json

page_data = []

with open('pageurls.txt', 'r') as f:
	i = 0
	for line in f:
		if line == ";\n":
			page_data.append(page)
			i = 0
		elif i == 0:
			page = {}
			page['title'] = line[:-1]
			i+= 1
		elif i == 1:
			page['fb_link'] = line[:-1]
			i+= 1
		elif i == 2:
			page['dp_link'] = line[:-1]
			i+= 1
		elif i == 3:
			page['tags'] = line[:-1].split(",")
			i+= 1
		elif i == 4:
			page['github'] = line[:-1]
			i+= 1

with open('botpages.json', 'w') as outfile:
    json.dump(page_data, outfile)