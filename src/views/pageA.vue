<template>

    <header-com />

    <div id="page_a" :class="modeSwitch">
        <div id="input_area">
            <h2 :class="modeSwitch">選擇年齡區間：</h2>
            <custom-input :sendToInput='sendToInput' @getFromInput='getFromInput'/>
        </div>

        <ol>
            <li :class="modeSwitch" v-for='(val) in apiDataFiltered' :key="val">{{val}}</li>
        </ol>
    </div>
</template>

<script>
import headerCom from '/src/components/header.vue';
import customInput from '/src/components/customInput.vue';
import $ from 'jquery';

export default {
    name: "pageA",
    data(){
        return {
            inputType: 'radio',
            apiData: [],
            apiDataFiltered: [],
        }
    },
    components: {
        headerCom,
        customInput,
    },
    methods: {
        getFromInput(index){
            switch(index){
                case 0:
                    this.apiDataFiltered = this.apiData.filter(item => item.age <= 18).map(item => item.name);
                    break;
                case 1:
                    this.apiDataFiltered = this.apiData.filter(item => item.age >= 18 && item.age <= 30).map(item => item.name);
                    break;
                case 2:
                    this.apiDataFiltered = this.apiData.filter(item => item.age >= 30).map(item => item.name);
                    break;
            }

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
    },
    mounted(){
        console.log('test');
        $.ajax({
            url: 'https://mocki.io/v1/2c0ceda2-9953-4c6c-b7d3-fb839fa0065b',
            method: 'GET',
            dataType: 'json',
            context: this,
            success(res){
                console.log(res);
                this.apiData = res;
            },
        });
    },
};
</script>

<style lang='scss' scoped>
@import '/src/assets/scss/variable.scss';

    #page_a{
        width: 100vw;
        min-height: calc(100vh - 80px);
        padding: 50px 30px;

        h2{
            margin: 0 0 20px 0;
            font-size: 32px;
        }

        ol{
            display: inline-block;
            padding: 0;
            margin-top: 30px;
            
            li{
                font-size: 24px;
                padding: 5px 0;
            }
            li.-bright{
                color: $brightText;
            }
            li.-dark{
                color: $darkText;
            }
        }
        
        h2.-bright{
            color: $brightText;
        }
        h2.-dark{
            color: $darkText;
        }

    }
    #page_a.-bright{
        background-color: $brightBG;
    }
    #page_a.-dark{
        background-color: $darkBG;
    }
</style>
