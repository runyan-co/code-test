<template>
    <div>
        <b-form @submit.stop class="py-4 pr-5">
            <b-form-group
                id="fieldset-horizontal"
                label-cols-lg="2"
                content-cols-lg="10"
                label="UUID:"
                label-for="uuid"
                label-align-sm="right"
                description="Cannot be changed."
            >
                <b-form-input
                    type="text"
                    v-model="formData.uuid"
                    id="uuid"
                    disabled
                    readonly
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label-cols-lg="2"
                content-cols-lg="10"
                label="Name:"
                label-for="name"
                label-align-sm="right"
            >
                <b-form-input type="text" v-model="formData.name" id="name"></b-form-input>
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label-cols-lg="2"
                content-cols-lg="10"
                label="Status:"
                label-for="status"
                label-align-sm="right"
            >
                <b-form-select v-model="formData.status" :options="options.status"></b-form-select>
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label-cols-lg="2"
                content-cols-lg="10"
                label="Description:"
                label-for="status"
                label-align-sm="right"
            >
                <b-form-textarea
                    v-model="formData.description"
                    id="description"
                    rows="4"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="fieldset-horizontal"
                label-cols-lg="2"
                content-cols-lg="10"
                label="Code:"
                label-for="code"
                label-align-sm="right"
            >
                <b-form-textarea v-model="formData.code" id="code" rows="4"></b-form-textarea>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'RecordForm',
    props: ['record'],
    data() {
        return {
            formData: {
                id: this.record.id,
                uuid: this.record.uuid,
                name: this.record.name,
                description: this.record.description,
                code: this.record.code,
                status: this.record.status
            },
            options: {
                status: ['Active', 'Inactive']
            }
        };
    }
};
</script>

<style scoped></style>
