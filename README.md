<p align="center">
    <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" align="center" width="30%">
</p>
<p align="center"><h1 align="center">API-TRANSACTIONS</h1></p>
<p align="center">
	<img src="https://img.shields.io/github/license/lucasgomesoficial/api-transactions?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/lucasgomesoficial/api-transactions?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/lucasgomesoficial/api-transactions?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/lucasgomesoficial/api-transactions?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

## Overview

A backend service for managing financial transactions, built using modern and efficient technologies for high performance. This API leverages Fastify for fast HTTP handling, SQLite for lightweight database storage, and Vitest for end-to-end testing.

---

## Features

- **Fast and Scalable**: Built with Fastify, a high-performance framework for Node.js.
- **Flexible Query Building**: Knex.js used for database interaction.
- **Lightweight Database**: SQLite for efficient and simple local data storage.
- **Schema Validation**: Zod for ensuring data integrity with runtime validation.
- **Robust Testing**: End-to-end tests written using Vitest.

---

## Project Structure

```sh
└── api-transactions/
    ├── README.md
    ├── db
    │   └── migrations
    ├── knexfile.ts
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── @types
    │   ├── app.ts
    │   ├── controller
    │   ├── database.ts
    │   ├── env
    │   ├── index.ts
    │   ├── middlewares
    │   ├── routes
    │   └── test
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>API-TRANSACTIONS/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/package-lock.json'>package-lock.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/package.json'>package.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/knexfile.ts'>knexfile.ts</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/index.ts'>index.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/database.ts'>database.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/app.ts'>app.ts</a></b></td>
			</tr>
			</table>
			<details>
				<summary><b>env</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/env/index.ts'>index.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>middlewares</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/middlewares/check-session-id-exist.ts'>check-session-id-exist.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>test</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/test/transactions.test.ts'>transactions.test.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>@types</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/@types/knex.d.ts'>knex.d.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/routes/index.ts'>index.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>controller</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/src/controller/transactions.ts'>transactions.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- db Submodule -->
		<summary><b>db</b></summary>
		<blockquote>
			<details>
				<summary><b>migrations</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/db/migrations/20241126010257_create-transactions.ts'>20241126010257_create-transactions.ts</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lucasgomesoficial/api-transactions/blob/master/db/migrations/20241126141936_add-session-id-to-transactions.ts'>20241126141936_add-session-id-to-transactions.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with api-transactions, ensure your runtime environment meets the following requirements:

- [Node.js](https://nodejs.org/) (v18+ recommended)

### Installation

Install api-transactions using one of the following methods:

**Build from source:**

1. Clone the api-transactions repository:

```sh
❯ git clone https://github.com/lucasgomesoficial/api-transactions
```

2. Navigate to the project directory:

```sh
❯ cd api-transactions
```

3. Install the project dependencies:

Using `npm`\*\* &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

3. Run the migrations:

Using `npm`\*\* &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run knex -- migrate:latest
```

### Usage

Run api-transactions using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm dev
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/lucasgomesoficial/api-transactions/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/lucasgomesoficial/api-transactions/issues)**: Submit bugs found or log feature requests for the `api-transactions` project.
- **💡 [Submit Pull Requests](https://github.com/lucasgomesoficial/api-transactions/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/lucasgomesoficial/api-transactions
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/lucasgomesoficial/api-transactions/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=lucasgomesoficial/api-transactions">
   </a>
</p>
</details>
