default: _site
# default: _site _site/404.html

_site: files
	bundle exec jekyll build

files: node_modules
	gulp build

node_modules:
	npm install

# _site/404.html: _site/404/index.html
# 	cp _site/404/index.html _site/404.html

draft: files
	bundle exec jekyll serve --drafts

dev: node_modules
	gulp & bundle exec jekyll serve --drafts

serve: _site files
	bundle exec jekyll serve
