.PHONY: all
THEMES=$(filter-out scss/_main.scss, $(wildcard scss/*.scss))

all:
	python3 -mscss -C scss/sakura.scss > css/sakura.css
	python3 -mscss -C scss/sakura-dark.scss > css/sakura-dark.css
	python3 -mscss -C scss/sakura-light.scss > css/sakura-light.css
	python3 -mscss -C scss/sakura-vader.scss > css/sakura-vader.css
	# python3 -mscss scss/sakura.scss > css/sakura.min.css

