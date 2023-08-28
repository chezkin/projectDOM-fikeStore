
const pathServer = {
    pathAllProduct: "https://service-fike-store.onrender.com/Products/all",
    deleteProduct: `https://service-fike-store.onrender.com/products/delete/`,
    putEditProduct: "https://service-fike-store.onrender.com/products/update",
    postNewProduct : "https://service-fike-store.onrender.com/products/add-product",
    putLessProduct : "https://service-fike-store.onrender.com/products/less",
    putMoreProduct : "https://service-fike-store.onrender.com/products/more",
    postReloadData : "https://service-fike-store.onrender.com/products/reload-data",
}



async function getAllProduct() {
    try {
        const data = await fetch(pathServer.pathAllProduct)
        const dataJson = await data.json()
        return dataJson;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


async function deleteProduct(id) {
    const raw = "";

    const requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
    };
    try {
        const res = await fetch(`${pathServer.deleteProduct}${id}`, requestOptions)
        const response = await res.text()
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


async function putEditProduct(obj) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "data": obj,
            "user": "22aa4bfd-df48-4be0-b0bc-0ae16832f735"
        });

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const res = await fetch(pathServer.putEditProduct, requestOptions)
        const response = await res.text()
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


async function postNewProduct(obj) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "data": obj,
            "user": "22aa4bfd-df48-4be0-b0bc-0ae16832f735"
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

        const res = await fetch(pathServer.postNewProduct, requestOptions)
        const response = await res.text()
        return response;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}

async function putMoreProduct(id) {
    const raw = "";

    const requestOptions = {
        method: 'PUT',
        body: raw,
        redirect: 'follow'
    };
    try {

        const data = await fetch(`${pathServer.putMoreProduct}/${id}`,requestOptions)
        const datatxt = await data.text()
        console.log(datatxt);
        // return dataJson;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}

async function putLessProduct(id) {
    const raw = "";

    const requestOptions = {
        method: 'PUT',
        body: raw,
        redirect: 'follow'
    };
    try {
        const data = await fetch(`${pathServer.putLessProduct}/${id}`,requestOptions)
        const datatxt = await data.text()
        console.log(datatxt);
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


async function postReloadData() {
    const raw = "";

    const requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };
    try {
        const data = await fetch(pathServer.postReloadData,requestOptions)
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}

