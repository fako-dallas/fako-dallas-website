
lint:fix
	npm run lint
	
fix:
	npx prettier --write .
	
install-tools: 
	sudo apt update
	sudo apt install npm
	npm install --legacy-peer-deps


analyze:
	npm run analyze
	
run:
	npm i
	npm run dev