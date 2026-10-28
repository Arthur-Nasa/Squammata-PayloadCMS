import os
import re
import shutil
import requests

ASSETS = [
    {"name": "logo-novo-45.png", "id": "1HCdNP24fCQc6lUL8S0KDz0Sn3o3Gd-OV"},
    {"name": "logo-novo-br-33.png", "id": "142lqTrVv2RfsnnP23lGwxvflagSipUo9"},
    {"name": "logo-novo-br-45.png", "id": "1aZV8bsfODVQyd0fN9NRLT1G-rGK5xMJ3"},
    {"name": "logo-novo-timbrado.png", "id": "13JykimsswnTWfAExn_Yo2xYHv3QmYgHt"},
    {"name": "logo-novo-33.png", "id": "1X3rseR79a5JX0A8p7fhwiaCHyLImMp2G"},
    {"name": "passarinho-branco.png", "id": "1Qs-hjAaiWIe6Lr-CuA1IzojB5CkLS9qc"},
    {"name": "passarinho.png", "id": "1n2zgqkf-GrSaIb3OQyjiD-n_E7y83th_"},
    {"name": "passarinho.ai", "id": "1blNTihYAYDDkuBmTTtZvOVe4nIWvztrg"},
    {"name": "escrito-branco.png", "id": "1jRT-pj7Zr7uBsD5xpHBKY-6foVbb2Fe4"},
    {"name": "escrito.png", "id": "1rg-E8nMWuKKwStr8sZci3kaIJumFn7dZ"},
    {"name": "logo-squammata.ai", "id": "1BY2yQvGFJqWMVspvYwHIb-mc7lxGeQfI"},
    {"name": "still-capa.jpg", "id": "1QZtxSjxD3CptHjMMd23EUnpcqT-uTHdH"},
]

OUTPUT_DIR = os.path.abspath("public/logo/squammata")
os.makedirs(OUTPUT_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def download_file(file_id, destination):
    session = requests.Session()
    session.headers.update(headers)
    
    # Method 1: direct drive.usercontent.google.com
    url1 = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&authuser=0"
    r = session.get(url1, stream=True, timeout=30)
    
    content_type = r.headers.get("Content-Type", "")
    if r.status_code == 200 and "text/html" not in content_type:
        with open(destination, "wb") as f:
            for chunk in r.iter_content(chunk_size=32768):
                if chunk:
                    f.write(chunk)
        return True
    
    # Method 2: docs.google.com / drive.google.com with confirmation
    url2 = "https://docs.google.com/uc?export=download"
    r2 = session.get(url2, params={"id": file_id}, stream=True, timeout=30)
    
    # Check confirmation token in cookies
    token = None
    for k, v in session.cookies.items():
        if k.startswith("download_warning"):
            token = v
            break
            
    if not token:
        # Check in HTML body
        text = r2.text
        m = re.search(r'confirm=([0-9A-Za-z_-]+)', text)
        if m:
            token = m.group(1)
        else:
            m2 = re.search(r'name="confirm" value="([^"]+)"', text)
            if m2:
                token = m2.group(1)
                
    if token:
        r2 = session.get(url2, params={"id": file_id, "confirm": token}, stream=True, timeout=30)
        
    with open(destination, "wb") as f:
        for chunk in r2.iter_content(chunk_size=32768):
            if chunk:
                f.write(chunk)
                
    return True

success_count = 0
for item in ASSETS:
    target = os.path.join(OUTPUT_DIR, item["name"])
    print(f"Downloading {item['name']} (ID: {item['id']})...")
    try:
        download_file(item["id"], target)
        size = os.path.getsize(target)
        # Verify not HTML error
        with open(target, "rb") as test_f:
            start_bytes = test_f.read(100)
            if b"<!DOCTYPE html" in start_bytes or b"<html" in start_bytes:
                print(f"Warning: {item['name']} downloaded as HTML, size {size} bytes")
            else:
                print(f"Successfully downloaded {item['name']} ({size} bytes)")
                success_count += 1
    except Exception as e:
        print(f"Failed to download {item['name']}: {e}")

print(f"Download completed: {success_count}/{len(ASSETS)} files.")
