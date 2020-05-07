import bleach

with open('./fossils_wiki.html', 'r') as a:
    page = a.read()

attrs = {
    'img': 'src',
    'a': 'href',
}

tags = [ 'html', 'head', 'meta', 'h2', 'span', 'body', 'table', 'tbody', 'td', 'tr', 'th', 'a', 'img']

cleaned = bleach.clean(page, tags=tags, attributes=attrs, strip=True)

with open('./cleaned_fossils.html', 'w') as f:
    f.write(cleaned)
