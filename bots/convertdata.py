import json
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

page_data = []

with open(dir_path + 'pageurls.txt', 'r') as f:
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

with open(dir_path + 'botpages.json', 'w') as outfile:
    json.dump(page_data, outfile)