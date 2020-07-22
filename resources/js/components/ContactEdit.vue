<template>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Edit contact</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form @submit.prevent="updateContact">
                            <div class='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input type="text" class="form-control" id="title" v-model="contact.name">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='content'>Content</label>
                                <textarea type="text" class="form-control" id="content" v-model="contact.number" rows="5"></textarea>
                            </div>
                            <div class='form-group'>
                                <router-link :to="{ name: 'home' }" class="btn btn-secondary">Back</router-link>
                                &nbsp;
                                &nbsp;
                                <button class='btn btn-primary'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
        return {
            contact:{},
            errors: [],
            name: null,
            number: null,
        }
    },
    created() {
        let uri = `http://localhost:8000/api/contact/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.contact = response.data.data;
        });
    },
    methods: {
        updateContact(e){

            if (this.$data.contact.name != null && this.$data.contact.number != null) {

                this.$swal.fire({
                    title: 'Success',
                    text: "contact created successfully",
                    icon: 'success',
                    timer: 1000
                });
                let uri = `http://localhost:8000/api/contact/update/${this.$route.params.id}`;
                this.axios.put(uri, this.contact).then((response) => {
                    this.$router.push({name: 'home'});
                });
                return true;
            }


            this.errors = [];

            if (!this.title) {
                this.errors.push('Title wajib diisi !');
            }
            if (!this.content) {
                this.errors.push('Content wajib diisi !');
            }

            e.preventDefault();
        }
    }
  }
</script>
