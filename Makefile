.PHONY: help test

help:
	@cat $(firstword $(MAKEFILE_LIST))

test:
	node --test test.mjs
