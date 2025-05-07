# Task Manager CLI

A command-line interface (CLI) tool for managing your tasks efficiently. This tool allows you to create, list, update, and delete tasks from your terminal.

## Features

- ✨ Create new tasks with descriptions
- 📋 List all tasks
- ✅ Update task status
- 🗑️ Delete tasks
- 💾 Persistent storage using JSON
- 🎨 Clean and intuitive interface

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd 01-building-cli
```

2. Install dependencies:
```bash
npm install
```

3. Link the package globally:
```bash
npm link
```

## Usage

### Add a new task
```bash
task-cli add "Your task description"
```

### List all tasks
```bash
task-cli list
```

### Update task status
```bash
task-cli update <task-id> <status>
```

### Delete a task
```bash
task-cli delete <task-id>
```

## Available Commands

| Command | Description | Example |
|---------|-------------|---------|
| `add` | Add a new task | `task-cli add "Buy groceries"` |
| `list` | List all tasks | `task-cli list` |
| `update` | Update task status | `task-cli update 1 "completed"` |
| `delete` | Delete a task | `task-cli delete 1` |

## Task Status Options

- `pending` (default)
- `completed`
- `in-progress`

## Data Storage

Tasks are stored in a `tasks.json` file in the project directory. The file is automatically created when you add your first task.

## Development

### Project Structure
```

### Running Tests
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Rahul

## Acknowledgments

- Built with Node.js
- Uses Commander.js for CLI interface