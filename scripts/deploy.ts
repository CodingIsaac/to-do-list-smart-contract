import { ethers } from "hardhat";

const main = async () => {
    const Todo = await ethers.getContractFactory("ToDoList");
    const todo = await Todo.deploy();
    await todo.deployed();

    console.log("Todo  Contract deployed to:", todo.address);
}



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
