function buildingInfo(building) {
    const rebuild = {}
    for (const key in building) {
        const value = building[key]
        rebuild[key] = value
    }
    return rebuild
}
const building = {
    floors: 20,
    address: { street: 'Main Road', city: 'Dhaka' },
    type: 'Commercial'
}
console.log(buildingInfo(building))