export const getAllAbrigos = async()=>{
    let res = await fetch("http://172.16.101.146:5420/abrigo")
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