<template>
    <input :type='sendToInput.inputType' v-if="sendToInput.inputType === 'text'" v-model='searchVal' @input='textSendOut'>

    <input 
        :type='sendToInput.inputType' 
        v-if="sendToInput.inputType === 'radio'" 
        name='radio_input' 
        id='_18'
        @change='radioSendOut(0)'>
    <label for='_18' v-if="sendToInput.inputType === 'radio'" :class="modeSwitch">18歲以下</label>
    <input 
        :type='sendToInput.inputType' 
        v-if="sendToInput.inputType === 'radio'" 
        name='radio_input' 
        id='19_30'
        @change='radioSendOut(1)'>
    <label for='19_30' v-if="sendToInput.inputType === 'radio'" :class="modeSwitch">19~30歲</label>
    <input 
        :type='sendToInput.inputType' 
        v-if="sendToInput.inputType === 'radio'" 
        name='radio_input' 
        id='30_'
        @change='radioSendOut(2)'>
    <label for='30_' v-if="sendToInput.inputType === 'radio'" :class="modeSwitch">30歲以上</label>

    <select v-if="sendToInput.inputType === 'select'" v-model="selectedValue" @change="selectSendOut">
        <option value='noselect' disabled>選擇姓名</option>
        <option v-for='(val, index) in sendToInput.data' :value='val.name' :key="index">{{val.name}}</option>
    </select>
</template>

<script>
export default {
    name: 'customInput',
    props: ['sendToInput'],
    data(){
        return{
            selectedValue: 'noselect',
            name: [],
            searchVal: '',
        }
    },
    methods: {
        selectSendOut(){
            this.$emit('getFromInput', this.sendToInput.data.map(item => item.name).indexOf(this.selectedValue));
        },
        radioSendOut(index){
            this.$emit('getFromInput', index);
        },
        textSendOut(){
            this.$emit('getFromInput', this.searchVal);
        },
    },
    computed: {
        nightMode(){
            return this.$store.state.nightMode;
        },
        modeSwitch(){
            return this.nightMode ? '-dark' : '-bright';
        },
    },
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/variable.scss';

    input[type='radio']{
        margin: 0 3px;
    }
    label{
        margin-right: 10px
    }
    label.-brigth{
        color: $brightText;
    }
    label.-dark{
        color: $darkText;
    }
</style>