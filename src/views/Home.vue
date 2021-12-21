<template>

    <header-com />

    <div id="home" :class="modeSwitch">
        <div id="select_area">
            <h2 :class="modeSwitch">查詢使用者資料</h2>
            <custom-input :sendToInput='sendToInput' @getFromInput='getFromInput'/>
        </div>
        <p id="data_detail" v-show="dataFromInput > -1" :class="modeSwitch">
            姓名：{{selectData.name}}<br>
            居住地：{{selectData.city}}<br>
            年齡：{{selectData.age}}
        </p>
    </div>
</template>

<script>
import headerCom from '/src/components/header.vue';
import customInput from '/src/components/customInput.vue';
import $ from 'jquery';

export default {
    name: "Home",
    data(){
        return {
            inputType: 'select',
            apiData: [],
            dataFromInput: -1,
        }
    },
    components: {
        headerCom,
        customInput,
    },
    methods: {
        getFromInput(index){
            this.dataFromInput = index;
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
        selectData(){
            return this.dataFromInput > -1 ? this.apiData[this.dataFromInput] : {name: '', city: '', age: ''};
        },
    },
    mounted(){
        $.ajax({
            url: 'https://mocki.io/v1/2c0ceda2-9953-4c6c-b7d3-fb839fa0065b',
            method: 'GET',
            dataType: 'json',
            context: this,
            success(res){
                // console.log(res);
                this.apiData = res;
            },
        });
    },
};
</script>

<style lang='scss' scoped>
@import '/src/assets/scss/variable.scss';

    #home{
        width: 100vw;
        min-height: 100vh;
        padding: 130px 30px 50px;

        h2{
            margin: 0 0 20px 0;
            font-size: 32px;
        }

        p{
            margin: 30px 0;
            font-size: 28px;
            line-height: 48px;
        }

        h2.-bright, p.-bright{
            color: $brightText;
        }
        h2.-dark, p.-dark{
            color: $darkText;
        }

    }
    #home.-bright{
        background-color: $brightBG;
    }
    #home.-dark{
        background-color: $darkBG;
    }
</style>
