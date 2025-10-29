<template>
    <div class="container mt-5 col-md-4">
        <h3>Iniciar Sesión</h3>
        <input v-model="usuario" class="form-control mt-2" type="text" placeholder="Usuario" />
        <input v-model="clave" type="password" class="form-control mb-2" placeholder="Contraseña" />
        <button class="btn btn-primary w-100" @click="login">Entrar</button>
        <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usuario: '',
                clave: '',
                error: ''
            }
        },
        methods: {
            login() {
                const users = [
                    { user: 'admin', pass: '1234' },
                    { user: 'jhorman', pass: '5678' }
                ];

                const usuarioEncontrado = users.find(u => u.user === this.usuario && u.pass === this.clave);
                    if (usuarioEncontrado) {
                        localStorage.setItem('logeado', 'true');
                        this.$router.push('/dashboard');
                    } else {
                        this.error = 'Usuario o contraseña incorrectos';
                    }
                }
            }
        }
</script>