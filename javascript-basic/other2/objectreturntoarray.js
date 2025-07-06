function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    // 

    // const wooden = [{ chir: 6 }, { table: 10 }, { bed: 50 }]
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const wooden = [{ 'wood': chairTotalWood }, { 'wood': tableTotalWood }, { 'wood': bedTotalWood }]
    for (const wood of wooden) {
        console.log(wood.wood)
    }


    // return wooden
}

woodQuantity(2, 1, 1)