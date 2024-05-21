export const getAllPantalones = async()=>{
    let res = await fetch("http://localhost:5416/pantalones")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.nombre,
            precio: val.precio,
            id: val.id
        })
    });
    return dataUpdate;
}