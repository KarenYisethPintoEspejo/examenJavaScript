export const getAllCarritoAbrigos = async()=>{
    let res = await fetch("http://localhost:5413/carrito")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            abrigoId: val.abrigoId,
            cantidad: val.cantidad,
            id: val.id
        })
    });
    return dataUpdate;
}

export const getAllCarritoPantalones = async()=>{
    let res = await fetch("http://localhost:5414/carrito")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            abrigoId: val.abrigoId,
            cantidad: val.cantidad,
            id: val.id
        })
    });
    return dataUpdate;
}

export const getAllCarritoCamisetas = async()=>{
    let res = await fetch("http://localhost:5415/carrito")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            abrigoId: val.abrigoId,
            cantidad: val.cantidad,
            id: val.id
        })
    });
    return dataUpdate;
}