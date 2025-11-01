import axios from "axios"

class ServiciosUsuarios {
    #url = ''

    constructor() {
        this.#url = 'https://69066927ee3d0d14c135bf98.mockapi.io/api/usuarios'
    }

    getAll = async () => {
        try {
            const { data:usuarios } = await axios.get(this.#url)
            return usuarios
        }
        catch(error) {
            console.error('Error usuarios GET', error.message)
        }
    }
}

export default ServiciosUsuarios
