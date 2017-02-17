.PHONY: all
THEMES=$(filter-out scss/_main.scss, $(wildcard scss/*.scss))

all:
	sass --scss scss/sakura.scss > css/sakura.css
	sass --scss scss/sakura-dark.scss > css/sakura-dark.css
	sass --scss scss/sakura-earthly.scss > css/sakura-earthly.css
	sass --scss scss/sakura-vader.scss > css/sakura-vader.css
