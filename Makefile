.PHONY: rebuild
rebuild:
	yarn run build
	jupyter lab build
