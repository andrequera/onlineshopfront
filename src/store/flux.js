const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: "",
            url_image: "",
            price: "",
            discount: "",
            category: "",
            products: null,
            buscador: "",
            cantidad: "",
            namebuy: "",
            cantidadbuy: "",
            pricebuy: ""

        },

        actions: {
            // Traigo los productos del back por medio del .then, luego los muestro en el componente respectivo

            getProduct: () => {

                fetch("http://localhost:8080/api/products")
                    .then(respuesta => respuesta.json())
                    .then(data => setStore({ products: data }))
                    .catch(error => console.log(error))
            },

            capturaCampos: (e) => {
                const store = getStore();
                console.log(e.target.value, "campos del buscador inicial")
                console.log(e.target.value, "campos de la cantidad")

                setStore({ ...store, [e.target.name]: e.target.value })

            },

            enviarFormulario: (e) => {
                //para que no se recargue cada que le doy enter en un input
                e.preventDefault()
                const store = getStore();

                console.log(store.buscador, "lo que busca el usuario en el back")

                fetch("http://localhost:8080/api/products?name=" + store.buscador)
                    .then(respuesta => respuesta.json())
                    .then(data => setStore({ products: data }))
                    .catch(error => console.log(error))

            },

            enviarCompra: (price, name, history) => {
                const store = getStore();
                setStore({
                    ...store,
                    namebuy: name,
                    cantidadbuy: store.cantidad,
                    pricebuy: price
                })
                history.push("/buy")
            }
        },
    }
};
export default getState;
