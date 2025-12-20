from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data to simulate a database
tasks = [
    {"id": 1, "name": "Setup Project", "description": "Install Flask and Git"},
    {"id": 2, "name": "Create API", "description": "Build the backend routes"}
]

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    # This returns your tasks list as a JSON object
    return jsonify({"tasks": tasks, "status": "success"})

@app.route('/api/tasks', methods=['POST'])
def add_task():
    # This allows you to receive data sent to the API
    new_task = {
        "id": len(tasks) + 1,
        "name": request.json.get('name'),
        "description": request.json.get('description')
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

if __name__ == '__main__':
    app.run(debug=True)
