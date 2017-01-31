.PHONY: all
THEMES=$(filter-out scss/_main.scss, $(wildcard scss/*.scss))

all:
	python3 -mscss -C scss/sakura.scss > sakura.css
	python3 -mscss -C scss/sakura-dark.scss > sakura-dark.css
	python3 -mscss -C scss/sakura-light.scss > sakura-light.css
	python3 -mscss -C scss/sakura-vader.scss > sakura-vader.css
	# python3 -mscss scss/sakura.scss > sakura.min.css

