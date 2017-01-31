.PHONY: all

all:
	python3 -mscss -C scss/sakura.scss > sakura.css
	python3 -mscss scss/sakura.scss > sakura.min.css

