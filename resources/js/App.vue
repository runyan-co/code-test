<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col class="my-5 p-5 bg-white" cols="11">
                <h3>Record Collection</h3>
                <p>Coding test by Alex Runyan for ProcessMaker.</p>
                <record-table />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import RecordTable from './components/RecordTable';

export default {
    name: 'App',
    components: {
        RecordTable
    }
};
</script>

<style scoped></style>
