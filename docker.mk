.PHONY: help build bash clean
.PHONY: run test

IMAGE := tamakiii-sandbox/hello-node18-test

help:
	@cat $(firstword $(MAKEFILE_LIST))

build:
	docker build -t $(IMAGE) .

bash: build
	docker run -it --rm -v $(PWD):/work -w /work $(IMAGE) bash -l

clean:
	@echo "Nothing to do with $@"

