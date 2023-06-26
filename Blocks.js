function gradient(block1, block2) {
    if (block2 - block1 > 0) {
        return "UPWARD"
    }

    if (block2 - block1 < 0) {
        return "DOWNWARD"
    }

    return "NEUTRAL"
}

function solve(blocks) {
    let previousGradient = null
    let currentDistance = 1
    let maxDistance = 1
    let checkpoint = null

    for (let idx = 0; idx < blocks.length - 1; idx++) {
        const currentGradient = gradient(blocks[idx], blocks[idx + 1])

        if (currentGradient === "NEUTRAL") {
            currentDistance += 1
            maxDistance = currentDistance > maxDistance ? currentDistance : maxDistance
            checkpoint = !checkpoint ? idx : null
            continue
        }

        if (previousGradient === null) {
            previousGradient = currentGradient
            currentDistance += 1
            maxDistance = currentDistance > maxDistance ? currentDistance : maxDistance
            continue
        }

        if (previousGradient === currentGradient) {
            currentDistance += 1
            maxDistance = currentDistance > maxDistance ? currentDistance : maxDistance
            continue
        }

        if (previousGradient === "DOWNWARD" && currentGradient === "UPWARD") {
            previousGradient = currentGradient
            currentDistance += 1
            maxDistance = currentDistance > maxDistance ? currentDistance : maxDistance
            continue
        }

        if (checkpoint) {
            idx = checkpoint
            previousGradient = currentGradient
            currentDistance = 2
            checkpoint = null
            continue
        }

        previousGradient = currentGradient
        currentDistance = 2
    }

    return maxDistance
}

console.log(solve([2, 6, 8, 5]))
console.log(solve([1, 5, 5, 2, 6]))
