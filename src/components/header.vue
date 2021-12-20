<template>
    <header :class="modeSwitch">
        <div id="text_logo" :class="modeSwitch">WasaTeam TestDemo</div>
        <div id="header_link" :class="modeSwitch">
            <router-link to='/'>linkA</router-link>
            <router-link to='/'>linkB</router-link>
            <router-link to='/'>linkC</router-link>
            <div id="mode_switch">
                <div id="switch_outer" @click="nightMode = !nightMode" :class="modeSwitch">
                    <div id="switch" :class="modeSwitch"></div>
                </div>
                &nbsp;夜間模式
            </div>
        </div>
    </header>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'headerCom',
    data(){
        return{
            switchOn: false,
            nightMode: false,   // 暫時寫的，之後要改成全域資料
        }
    },
    computed: {
        modeSwitch(){
            $('#header_link').children('a').toggleClass('-bright').toggleClass('-dark');
            return this.nightMode ? '-dark' : '-bright';
        },
    },
    mounted(){
        $('#header_link').children('a').addClass('-bright');
    },
};
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/variable.scss';

    header{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        #text_logo{
            font-size: 42px;
            font-weight: 900;
        }
        #text_logo.-bright{
            color: $brightText;
        }
        #text_logo.-dark{
            color: $darkText;
        }

        #header_link{
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            font-size: 28px;

            a{
                text-decoration: none;
                color: $brightText;
                display: inline-block;
                width: 80px;

                &:hover{
                    font-weight: bold;
                }
            }
            a.-bright{
                color: $brightText;
            }
            a.-dark{
                color: $darkText;
            }
            a.-on{
                text-decoration: underline;
            }
        }
    }
    header.-bright{
        color: $brightText;
        background-color: $brightBG;
    }
    header.-dark{
        color: $darkText;
        background-color: $darkBG;
    }

    #mode_switch{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        #switch_outer{
            width: 40px;
            height: 20px;
            border-radius: 15px;
            margin-right: 5px;
            padding: 0 1px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all .5s;

            justify-content: flex-start;

            #switch{
                height: 14px;
                width: 14px;
                border-radius: 100%;
                transition: all .5s;
            }
            #switch.-bright{
                background-color: $brightText;
            }
            #switch.-dark{
                background-color: $darkText;
            }
        }
        #switch_outer.-bright{
            border: 2px solid $brightText;
        }
        #switch_outer.-dark{
            border: 2px solid $darkText;
            background-color: #88F79B;

            #switch{
                transform: translateX(140%);
            }
        }
    }
</style>