default: _site
# default: _site _site/404.html

_site: files
	bundle exec jekyll build

files: node_modules bower_components
	gulp build

bower_components: node_modules

node_modules:
	npm install

draft: files
	bundle exec jekyll serve --drafts

dev: node_modules
	gulp & bundle exec jekyll serve --drafts

serve: _site files
	bundle exec jekyll serve
