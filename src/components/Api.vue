<template>
    <section class="card">
        <div v-if="usuarios.length">
            <div class="table-responsive">
                <table class="table table-dark">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>email</th>
                        <th>phone number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(usuario, index) in usuarios" :key="index">
                        <td>{{ usuario.id }}</td>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.number_phone }}</td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>


    </section>
</template>

<script>
import ServiciosUsuarios from '../servicios/usuarios.js'

export default {
    name: 'Api',
        data() {
            return {
            serviciosUsuarios: new ServiciosUsuarios(),
            usuario: this.iniForm(),
            usuarioDirty: this.iniForm(),
            usuarios: [],
            };
        },

        methods: {
        iniForm() {
                return {
                    nombre: null,
                    email: null,
                    number_phone: null,
                }
            },

        // GET
        async obtener() {
            const usuarios = await this.serviciosUsuarios.getAll()
            this.usuarios = usuarios
        },

    },

        mounted() {
        console.log('Api -> mounted')

        this.obtener()
    },


        
}


</script>