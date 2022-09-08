import { ethers } from "hardhat";

const main = async () => {
    const Todo = await ethers.getContractFactory("ToDoList");
    const todo = await Todo.deploy();
    await todo.deployed();

    console.log("Todo  Contract deployed to:", todo.address);
}

// 0xf7D1A204Fd6eb6Bf8a680a4D371F04633726EC17 address deployed to.

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
