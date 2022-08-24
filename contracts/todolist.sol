// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ToDoList {
struct Todo {
    string message;
    bool taskCompleted;

}

Todo[] public todos;

function createToDo(string calldata _message) external {
    todos.push(Todo ( {
        message: _message,
        taskCompleted: false


    }));


}

function updateToDo(uint _index, string calldata _message) external {
    todos[_index].message = _message;
}

function toggleCOmpleted(uint _index) external {
    todos[_index].taskCompleted = !todos[_index].taskCompleted;

}

function deleteTask (uint _index) external {
    delete todos[_index];
}

}



