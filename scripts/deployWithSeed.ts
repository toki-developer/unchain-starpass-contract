import { ethers } from "hardhat"

async function main() {
    const submission = await ethers.getContractFactory("SocialNetwork")
    const contract = await submission.deploy()

    await contract.deployed()
    await contract.post("1つ目の投稿")
    await contract.post("2つ目の投稿")
    await contract.post("3つ目の投稿")
    await contract.post("4つ目の投稿")
    await contract.post("5つ目の投稿")
    await contract.like(2)
    const wallet = await ethers.getSigners()
    await contract.connect(wallet[1]).like(0)
    await contract.connect(wallet[1]).like(1)
    await contract.connect(wallet[2]).like(1)
    await contract.connect(wallet[3]).like(1)
    await contract.connect(wallet[1]).like(2)
    await contract.connect(wallet[2]).like(2)
    await contract.connect(wallet[3]).like(2)
    await contract.connect(wallet[4]).like(2)
    await contract.connect(wallet[5]).like(2)
    await contract.connect(wallet[1]).like(4)
    await contract.connect(wallet[2]).like(4)

    console.log(`Contract deployed to ${contract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
