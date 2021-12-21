<template>

    <header-com />

    <div id="page_b" :class="modeSwitch">
        <div id="input_area">
            <h2 :class="modeSwitch">依姓名或居住地篩選：</h2>
            <custom-input :sendToInput='sendToInput' @getFromInput='getFromInput'/>
        </div>
        
        <p class="data_detail" v-show="!!searchResult" :class="modeSwitch" v-for='(val) in searchResult' :key='val'>
            姓名：{{val.name}}<br>
            居住地：{{val.city}}<br>
            年齡：{{val.age}}
        </p>
    </div>
</template>

<script>
import headerCom from '/src/components/header.vue';
import customInput from '/src/components/customInput.vue';
import $ from 'jquery';

export default {
    name: "pageB",
    data(){
        return {
            inputType: 'text',
            apiData: [],
            searchResult: '',
        }
    },
    components: {
        headerCom,
        customInput,
    },
    methods: {
        getFromInput(searchVal){
            console.log(searchVal);
            this.searchResult = this.apiData.filter(item => {
                return new RegExp(searchVal, 'i').test(item.name) || new RegExp(searchVal, 'i').test(item.city);
            });
        },
    },
    computed: {
        nightMode(){
            return this.$store.state.nightMode;
        },
        modeSwitch(){
            return this.nightMode ? '-dark' : '-bright';
        },
        sendToInput(){
            return {
                inputType: this.inputType,
                data: this.apiData,
            };
        },
        // selectData(){
        //     return this.dataFromInput > -1 ? this.apiData[this.dataFromInput] : {name: '', city: '', age: ''};
        // },
    },
    mounted(){
        $.ajax({
            url: 'https://mocki.io/v1/2c0ceda2-9953-4c6c-b7d3-fb839fa0065b',
            method: 'GET',
            dataType: 'json',
            context: this,
            success(res){
                console.log(res);
                this.searchResult = this.apiData = res;
            },
        });
    },
};
</script>

<style lang='scss' scoped>
@import '/src/assets/scss/variable.scss';

    #page_b{
        width: 100vw;
        min-height: 100vh;

        padding: 130px 30px 50px;

        #input_area{
            display: flex;
            justify-content: center;
            align-items: center;

            h2{
                font-size: 24px;
                margin-right: 15px;
            }
        }

        .data_detail{
            font-size: 20px;
            margin: 20px 0;
        }
        .data_detail.-bright, h2.-bright{
            color: $brightText
        }
        .data_detail.-dark, h2.-dark{
            color: $darkText
        }
    }
    #page_b.-bright{
        background-color: $brightBG;
    }
    #page_b.-dark{
        background-color: $darkBG;
    }
</style>
