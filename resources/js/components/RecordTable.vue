<template>
    <div>
        <b-row>
            <b-col cols="4" class="my-3">
                <b-input-group size="sm">
                    <b-form-input
                        id="filter-input"
                        v-model="filter"
                        type="search"
                        placeholder="Type to Search"
                    ></b-form-input>
                    <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
            <b-col cols="8" class="my-3">
                <b-form-group
                    label="Filter by:"
                    label-cols-sm="4"
                    label-size="sm"
                    label-align-sm="right"
                    class="mb-0 text-right"
                    v-slot="{ ariaDescribedby }"
                >
                    <b-form-checkbox-group
                        v-model="filterOn"
                        :aria-describedby="ariaDescribedby"
                        class="mt-1"
                    >
                        <b-form-checkbox value="name">Name</b-form-checkbox>
                        <b-form-checkbox value="code">Code</b-form-checkbox>
                        <b-form-checkbox value="description">Description</b-form-checkbox>
                        <b-form-checkbox value="status">Status</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-overlay :show="isBusy">
            <b-table
                borderless
                striped
                hover
                foot-clone
                primary-key="id"
                ref="table"
                empty-filtered-text="No records found matching your request"
                :filter="filter"
                :filter-included-fields="filterOn"
                :fields="fields"
                :busy.sync="isBusy"
                :items="records"
            >
                <template #cell(actions)="row">
                    <b-button
                        size="sm"
                        @click="edit(row.item, row.index, $event.target)"
                        class="mr-2"
                    >
                        Edit
                        <b-icon
                            icon="pencil"
                            scale="0.75"
                            aria-hidden="true"
                            variant="light"
                        ></b-icon>
                    </b-button>
                </template>
            </b-table>
        </b-overlay>
        <b-modal
            :id="editModal.id"
            title="Edit record"
            size="lg"
            cancel-title="Cancel"
            :ok-title="editModal.saveText"
            @ok="handleOk"
            @hide="handleClose"
        >
            <record-form
                ref="form"
                @delete-record="deleteRecord"
                v-bind:record="editModal.record"
            />
            <b-alert variant="danger" v-model="editModal.error" dismissible>
                {{ editModal.errorMessage }}
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
            records: [],
            filterOn: [],
            filter: null,
            totalRecords: 1,
            sortDirection: 'asc',
            isBusy: false,
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
                errorMessage: '',
                saveText: ''
            }
        };
    },
    components: {
        RecordForm
    },
    methods: {
        edit(record, index, button) {
            // Bind the row item (record) to the modal
            // to populate the for fields for editing or
            // review by the user
            this.editModal.record = record;
            // Set the save button text
            this.editModal.saveText = 'Save';
            // Show the edit modal
            this.$root.$emit('bv::show::modal', this.editModal.id, button);
        },
        handleFiltered(filteredItems) {
            this.totalRecords = filteredItems.length;
        },
        handleClose(event) {
            // Reset the edit modal's target record
            // data only if the modal was closed
            if (!event.defaultPrevented) {
                this.editModal.record = {};
                this.editModal.error = false;
                this.editModal.errorMessage = '';
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
        deleteRecord(event) {
            // Show a confirmation modal before attempting
            // to delete the record
            this.confirmDelete()
                .then(confirmed => {
                    // If the user cancels their decision to
                    // delete, then bail here
                    if (!confirmed) {
                        return;
                    }

                    // Otherwise, fire off a DELETE request
                    // to the backend and act accordingly
                    this.attemptDelete()
                        .then(resp => {
                            // Deletion was successful, so hide the edit modal
                            this.$root.$emit('bv::hide::modal', this.editModal.id);
                            // Fresh pull of data and repopulate the table
                            this.getRecords();
                            // Tell the BootstrapVue table instance to
                            // refresh internally as well
                            this.$refs.table.refresh();
                        })
                        .catch(e => {
                            // If there was a problem deleting the record,
                            // show an error message to the user.
                            // todo Showing a more specific error message from the backend would be better here
                            this.editModal.error = true;
                            this.editModal.errorMessage =
                                'An error occurred while trying to delete this record.';
                        });
                })
                .catch(e => {});
        },
        updateRecord() {
            // Send a POST request to the backend and
            // if successful (200 response), then sync
            // the data up for the specific record in
            // the table
            this.attemptSave()
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
                    // todo Can be significantly improved by translating returned error message back into alerts/toasts for the user to see
                    this.editModal.errorMessage =
                        'An error occurred while trying to update this record.';
                    this.editModal.error = true;
                });
        },
        getRecords() {
            // Set the table state to busy while
            // the records are being retrieved
            this.isBusy = true;

            axios
                .post('/api/record/stored')
                .then(resp => (this.records = resp.data))
                .catch(e => {})
                .finally(() => (this.isBusy = false));
        },
        async confirmDelete() {
            return this.$bvModal.msgBoxConfirm('Are you sure you want to delete this record?', {
                title: 'Confirm',
                okVariant: 'danger',
                okTitle: 'Yes, Delete',
                cancelTitle: 'Cancel'
            });
        },
        async attemptDelete() {
            return axios.delete(`/api/record/delete/${this.$refs.form.id}`);
        },
        async attemptSave() {
            this.editModal.saveText = 'Saving...';

            // Referencing the $ref.form here as it
            // points to the form data only, rather
            // than the Vue instance data()
            // todo Improvement here would be form validation prior to firing off the request
            return axios.post(`/api/record/update/${this.$refs.form.id}`, this.$refs.form.form);
        }
    },
    beforeMount() {
        this.getRecords();
    },
    mounted() {
        this.totalRecords = this.records.length;
    }
};
</script>

<style scoped></style>
