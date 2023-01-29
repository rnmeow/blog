import os
import json
import base64
import requests
from pymongo import MongoClient

mongo_url = os.environ["MONGO_URL"]
client = MongoClient(mongo_url)
db = client["general"]
collection = db["blogPosts"]

headers = {
  "Authorization": f"Token {os.environ['GITHUB_TOKEN']}",
}

response = requests.get(
  f"{os.environ['GH_API']}",
  headers = headers
)
files = response.json()

for file in files:
  if file["type"] == "file" and file["name"].endswith(".md"):
    response = requests.get(file["url"], headers=headers)
    file_content = json.loads(response.text)["content"]
    content = base64.b64decode(file_content).decode('utf-8')
    if "---\n" in content:
      metadata, content = content.split("---\n", 2)[1:]
      metadata_lines = metadata.splitlines()
      data = {}
      for line in metadata_lines:
        if ":" in line:
          key, value = line.split(":", 1)
          data[key.strip()] = value.strip()
        else:
          print(f"Line {line} is not a valid metadata")
      tags = data.get("tags", "")[1:-1].split(",")
      tags = [tag.strip() for tag in tags]
      data["tags"] = tags
      data["content"] = content
      data["filename"] = file["name"].split(".md")[0]
      data["datetime"] = data.get("datetime","")
      post = collection.find_one({ "filename": file["name"].split(".md")[0] })
      if post is None:
        collection.insert_one({
          **data,
          "views": 0
        })
      elif post["content"] != content or post["datetime"] != data["datetime"] or post["tags"] != tags:
        collection.update_one({ "filename": file["name"].split(".md")[0] }, { "$set": { "content": content, "datetime": data["datetime"], "tags": tags }})
