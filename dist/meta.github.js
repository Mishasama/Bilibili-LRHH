// ==UserScript==
// @name         Bilibili直播间挂机助手3
// @namespace    SeaLoong
// @version      3.1.2
// @description  B站直播间挂机用: 签到，领瓜子，移动端心跳，瓜子换硬币等
// @author       SeaLoong
// @homepageURL  https://github.com/SeaLoong/BLRHH
// @supportURL   https://github.com/SeaLoong/BLRHH/issues
// @updateURL    https://raw.githubusercontent.com/SeaLoong/BLRHH/master/dist/installer.github.user.js
// @include      /^https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+.*$/
// @license      MIT License
// @require      https://raw.githubusercontent.com/SeaLoong/BLUL/master/dist/meta.github.js
// @require      https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/main.js
// @require      https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/main.js
// @resource     EULA https://raw.githubusercontent.com/SeaLoong/BLRHH/master/eula.html
// @resource     NOTICE https://raw.githubusercontent.com/SeaLoong/BLRHH/master/notice.html
// @resource     tfjs https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.3.0/dist/tf.min.js
// @resource     Sign https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/sign.js
// @resource     Exchange https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/exchange.js
// @resource     TreasureBox https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/treasurebox.js
// @resource     TreasureBox/worker https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/treasurebox/worker.js
// @resource     Heartbeat https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/heartbeat.js
// @resource     DailyReward https://raw.githubusercontent.com/SeaLoong/BLRHH/master/src/modules/dailyreward.js
// @resource     jquery https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @resource     lodash https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.19/lodash.min.js
// @resource     toastr https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.js
// @resource     spark-md5 https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.0/spark-md5.min.js
// @resource     Toast https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/toast.js
// @resource     Util https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/util.js
// @resource     Dialog https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/dialog.js
// @resource     Page https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/page.js
// @resource     Logger https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/logger.js
// @resource     Config https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/config.js
// @resource     Request https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/request.js
// @resource     Worker https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/worker.js
// @resource     Worker/env https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/worker/env.js
// @resource     Worker/channel https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/worker/channel.js
// @resource     AppToken https://raw.githubusercontent.com/SeaLoong/BLUL/master/src/modules/apptoken.js
// @connect      bilibili.com
// @connect      *
// @grant        unsafeWindow
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.getResourceUrl
// @grant        GM.xmlHttpRequest
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.registerMenuCommand
// @grant        GM.unregisterMenuCommand
// @run-at       document-start
// @incompatible chrome 不支持内核低于80的版本
// @incompatible firefox 不支持内核低于72的版本
// ==/UserScript==


