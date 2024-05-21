
export const getAllAbrigos = async()=>{
    let res = await fetch("http://localhost:5411/abrigos")
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