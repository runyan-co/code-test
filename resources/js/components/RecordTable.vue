<template>
    <div>
        <b-table
            striped
            hover
            foot-clone
            selectable
            select-mode="single"
            primary-key="id"
            ref="selectableTable"
            :items="items"
            :fields="fields"
            @row-selected="onRowSelected"
        ></b-table>
        <b-modal id="details" :title="selected.name">
            <h6>Description:</h6>
            <p>{{ selected.description }}</p>
            <h6>Code:</h6>
            <p>{{ selected.code }}</p>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'RecordTable',
    data() {
        return {
            fields: [
                {
                    key: 'uuid',
                    sortable: false
                },
                {
                    key: 'name',
                    sortable: true
                },
                {
                    key: 'status',
                    sortable: true
                }
            ],
            items: [],
            selected: {}
        };
    },
    methods: {
        loadRecords() {
            axios.post('/api/record/stored').then(response => (this.items = response.data));
        },
        onRowSelected(selectedRows) {
            this.selected = selectedRows[0];
            this.$bvModal.show('details');
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected();
        }
    },
    beforeMount() {
        this.loadRecords();
    }
};
</script>

<style scoped></style>
