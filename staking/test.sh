#!/usr/bin/env bash
truffle test \
        ./test/Staking.test.js \
        ./contracts/Staking.sol \
        ./test/contracts/StakingTest.sol \
        ./test/contracts/TestERC20.sol \
        ./test/contracts/TestNewStaking.sol \
        ./test/contracts/TestNewStakingNoInteface.sol
