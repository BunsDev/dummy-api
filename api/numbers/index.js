'use strict';

const { BN } = require("../../constants");

async function getNumber() {
    const randomNumber = Math.floor(Math.random() * 1_000_000_000);
    return {
        "randomNumber": randomNumber
    }
}


async function getFilteredNumber(ctx) {
    const limit = Number(ctx.params.limit)

    // time refactoring //
    const randomNumber = Math.floor(Math.random() * limit)

    return {
        "limit": limit,
        "randomNumber": randomNumber
    }
}

async function randomNumber(ctx) {
    ctx.body = (await getNumber(ctx))
}

async function filteredNumber(ctx) {
    ctx.body = (await getFilteredNumber(ctx))
}

module.exports = { randomNumber, filteredNumber };