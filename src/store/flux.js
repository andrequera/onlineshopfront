const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: "",
            url_image: "",
            price: "",
            discount: "",
            category: "",
            products: null
        },

        actions: {


            getProduct: () => {
                
                fetch("http://localhost:8080/api/products")
                    .then(respuesta => respuesta.json())
                    .then(data => setStore({ products: data }))
                    .catch(error => console.log(error))


            },



        },
    };
};
export default getState;
