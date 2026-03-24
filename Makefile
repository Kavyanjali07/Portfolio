# Makefile for Portfolio Project

.PHONY: setup dev build start lint clean help

help:
	@echo "Makefile for Portfolio development"
	@echo "---"
	@echo "setup     - Install dependencies"
	@echo "dev       - Start development server"
	@echo "build     - Build project for production"
	@echo "start     - Start project in production mode"
	@echo "lint      - Run ESLint to check code quality"
	@echo "clean     - Remove build artifacts and node_modules"

setup:
	@echo "--- Installing Dependencies ---"
	npm install

dev:
	@echo "--- Starting Development Server ---"
	npm run dev

build:
	@echo "--- Building for Production ---"
	npm run build

start:
	@echo "--- Starting Production Server ---"
	npm run start

lint:
	@echo "--- Running ESLint ---"
	npm run lint

clean:
	@echo "--- Cleaning Project ---"
	rm -rf .next
	rm -rf node_modules
	@echo "Cleaned up build artifacts and node_modules"
