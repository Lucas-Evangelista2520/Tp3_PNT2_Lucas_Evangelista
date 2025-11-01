export default {
    name: 'Usuarios',

    data() {
        return {
            formData: this.getInicialData(),   
            formDirty: this.getInicialData(),
            registros: []  
        };
    },

    computed: {
        // -------- Parseos / normalizaciones suaves ----------
        numeroEdad() {
            const v = this.formData.edad;
            if (v === null || v === '') return NaN;
            const n = Number(String(v).replace(',', '.'));
            return Number.isFinite(n) ? Math.trunc(n) : NaN; // enteros
        },

        // ---------------- Validaciones -----------------------
        errorNombre() {
            const v = String(this.formData.nombre ?? '').trim();
            let mensaje = '';
            if (!v) mensaje = 'El nombre es obligatorio';
            else if (v.length < 5 || v.length > 15) mensaje = 'Entre 5 y 15 caracteres';
            return { mensaje, mostrar: mensaje !== '' && this.formDirty.nombre === true, ok: mensaje === '' };
        },

        errorEdad() {
            let mensaje = '';
            if (this.formData.edad === null || this.formData.edad === '') mensaje = 'La edad es obligatoria';
            else if (!Number.isFinite(this.numeroEdad)) mensaje = 'Debe ser un número entero';
            else if (this.numeroEdad < 18 || this.numeroEdad > 120) mensaje = 'Entre 18 y 120 años';
            return { mensaje, mostrar: mensaje !== '' && this.formDirty.edad === true, ok: mensaje === '' };
        },

        errorEmail() {
            const v = String(this.formData.email ?? '').trim();
            let mensaje = '';
            if (!v) mensaje = 'El email es obligatorio';
            else {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(v)) mensaje = 'Email inválido';
            }
            return { mensaje, mostrar: mensaje !== '' && this.formDirty.email === true, ok: mensaje === '' };
        },

        // Form válido para “mostrar en tabla”
        formValido() {
            return this.errorNombre.ok && this.errorEdad.ok && this.errorEmail.ok;
        }
    },

    methods: {
            getInicialData() {
                return { nombre: null, edad: null, email: null };
        },

        limpiarFormulario() {
            this.formData  = this.getInicialData();
            this.formDirty = this.getInicialData();
        },
        limpiarFormularioYRegistros() {
            this.limpiarFormulario();
            this.registros = [];
        },

        agregarRegistro() {
        // defensa final
        if (!this.formValido) {
            this.formDirty = { nombre: true, edad: true, email: true };
            return;
        }
        this.registros.unshift({
            nombre: String(this.formData.nombre).trim(),
            edad: this.numeroEdad,
            email: String(this.formData.email).trim(),
        });
        this.limpiarFormulario();
        }
    }
};
