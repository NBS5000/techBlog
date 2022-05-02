const userSeed = require("./userSeeds");
const postSeed = require("./postSeeds");
const commentSeed = require("./commentSeeds");

const sequelize = require("../config/connection");


const runSeeds = async () => {
    await sequelize.sync({force: true});
    await userSeed();
    await postSeed();
    await commentSeed();
    process.exit(0);
}

runSeeds();