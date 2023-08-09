.PHONY: app

deploy:
	@echo "Deploying on Ganache Local Network"
	truffle deploy

test:
	@echo "Running tests"
	truffle test
