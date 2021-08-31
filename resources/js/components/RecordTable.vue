<template>
    <div>
        <b-table striped hover foot-clone primary-key="id" :fields="fields" :items="items">
            <template #cell(actions)="row">
                <b-button size="sm" @click="edit(row.item, row.index, $event.target)" class="mr-1">
                    Edit
                </b-button>
            </template>
        </b-table>
        <b-modal
            :id="editModal.id"
            title="Edit record"
            size="lg"
            cancel-title="Cancel"
            ok-title="Save"
            @ok="handleOk"
            @hide="handleClose"
        >
            <record-form ref="form" v-bind:record="editModal.record" />
            <b-alert variant="danger" v-model="editModal.error" dismissible>
                There was an error while trying to update this record.
            </b-alert>
        </b-modal>
    </div>
</template>

<script>
import RecordForm from './RecordForm';

export default {
    name: 'RecordTable',
    data() {
        return {
            items: [],
            fields: [
                'uuid',
                'name',
                { key: 'status', sortable: true },
                { key: 'actions', label: 'Actions' }
            ],
            editModal: {
                id: 'edit-modal',
                record: {},
                error: false,
                errorMessage: ''
            }
        };
    },
    components: {
        RecordForm
    },
    computed: {
        hasItems() {
            return this.items.length > 0;
        },
        totalItems() {
            return this.items.length;
        }
    },
    methods: {
        edit(record, index, button) {
            // Bind the row item (record) to the modal
            // to populate the for fields for editing or
            // review by the user
            this.editModal.record = record;
            // Show the edit modal
            this.$root.$emit('bv::show::modal', this.editModal.id, button);
        },
        handleClose(event) {
            // Reset the edit modal's target record
            // data only if the modal was closed
            if (!event.defaultPrevented) {
                this.editModal.record = {};
                this.editModal.error = false;
            }
        },
        handleOk(event) {
            // Prevent the modal from hiding until the
            // we get a response indicating the record
            // was successfully saved
            event.preventDefault();
            // Send the request to save/save the record
            this.updateRecord();
        },
        getRecords() {
            axios.post('/api/record/stored').then(r => (this.items = r.data));
        },
        updateRecord() {
            // Send a POST request to the backend and
            // if successful (200 response), then sync
            // the data up for the specific record in
            // the table
            this.attemptUpdate()
                .then(resp => {
                    // The response property "data" is an
                    // object representing the just now
                    // updated record
                    Object.keys(resp.data).forEach(key => {
                        // Only update the row data that has
                        // matching keys with the response data
                        if (Object.keys(this.editModal.record).includes(key)) {
                            this.editModal.record[key] = resp.data[key];
                        }
                    });

                    // Hide the edit modal since we are finished
                    // update the Vue instance with the latest
                    this.$root.$emit('bv::hide::modal', this.editModal.id);
                })
                .catch(e => {
                    // Show the error message to the user
                    // if there was an error
                    this.editModal.error = true;
                })
                .finally(() => {
                    //
                });
        },
        async attemptUpdate() {
            // Set the modal state to loading
            this.editModal.loading = true;

            // Referencing the $ref.form here as it
            // points to the new data the user has
            // input in the settings, which is what
            // we want to use to update the record in
            // the database
            return axios.post(
                `/api/record/update/${this.$refs.form.formData.id}`,
                this.$refs.form.formData
            );
        }
    },
    beforeMount() {
        this.getRecords();
    }
};
</script>

<style scoped></style>
