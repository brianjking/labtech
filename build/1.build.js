webpackJsonp([1],{25:function(e,t,n){t=e.exports=n(16)(),t.push([e.id,".collapsible-header\n{\n    height: 9rem;padding: 0px 1rem;\n}\n.collection\n{\n    border: 0px;border-radius: 0px;\n}",""])},36:function(e,t){e.exports='<div class="col s12">\n    <ul class="z-depth-2 collapsible white" data-collapsible="expandable">\n        <li v-repeat="services">\n            <div class="collapsible-header">\n                <div class="collection">\n                    <div class="collection-item avatar">\n\n                        <i v-if=\'loading\' class="material-icons circle fa fa-refresh fa-spin"></i>\n\n                        <div v-if=\'!loading && checkIfAllHostsAreOnline(nodes)\'>\n                            <i class="fa fa-thumbs-up circle green"></i>\n                            <span class="title">{{$key}}</span>\n                            <p v-if=\'loading\'>\n                                {{ $t("service.refreshing") }}\n                            </p>\n                            <p v-if=\'!loading\'>\n                                {{ $t("service.ok") }}\n                            </p>\n                        </div>\n\n                        <div v-if=\'!loading && checkIfSomeHostsAreOnline(nodes)\'>\n                            <i class="fa fa-exclamation-triangle circle orange"></i>\n                            <span class="title">{{$key}}</span>\n                            <p v-if=\'loading\'>\n                                {{ $t("service.refreshing") }}\n                            </p>\n                            <p v-if=\'!loading\'>\n                                {{ $t("service.degraded") }}\n                            </p>\n                        </div>\n\n                        <div v-if=\'!loading && checkIfAllHostsAreOffline(nodes)\'>\n                            <i  class="fa fa-thumbs-down circle red"></i>\n                            <span class="title">{{$key}}</span>\n                            <p v-if=\'loading\'>\n                                {{ $t("service.refreshing") }}\n                            </p>\n                            <p v-if=\'!loading\'>\n                                {{ $t("service.offline") }}\n                            </p>\n                        </div>\n\n                        <br>\n                        <p>\n                            {{ $t("hosts.online") }}{{nodes | countOnlineHosts}}/{{nodes | countAllHosts}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class="collapsible-body white">\n                <table class="centered hoverable">\n                    <thead>\n                        <tr><th>{{ $t("hosts.host") }}</td><th>{{ $t("hosts.status") }}</th><th>{{ $t("hosts.location") }}</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr v-repeat="nodes">\n                            <td>\n                                <span>{{name}}</span>\n                            </td>\n                            <td>\n                                <div v-if="online">\n                                    <span class="fa-stack fa-lg">\n                                        <i class="green-text fa fa-circle fa-stack-2x"></i>\n                                        <i class="fa fa-check fa-stack-1x fa-inverse"></i>\n                                    </span>\n                                    <span>\n                                        {{ $t("host.online") }}\n                                    </span>\n                                </div>\n                                <div v-if="degraded">\n                                    <span class="fa-stack fa-lg">\n                                        <i class="orange-text fa fa-circle fa-stack-2x"></i>\n                                        <i class="fa fa-exclamation-triangle fa-stack-1x fa-inverse"></i>\n                                    </span>\n                                    <span>\n                                        {{ $t("host.degraded") }}\n                                    </span>\n                                </div>\n                                <div v-if="triggers">\n                                    <span class="fa-stack fa-lg">\n                                        <i class="blue-text fa fa-circle fa-stack-2x"></i>\n                                        <i class="fa fa-info fa-stack-1x fa-inverse"></i>\n                                    </span>\n                                    <span>\n                                        {{info}}\n                                    </span>\n                                    <span v-repeat=\'triggers\'>\n                                        <span v-repeat=\'acknowledges\'>\n                                            {{message}}\n                                        </span>\n                                    </span>\n                                </div>\n                                <div v-if="offline">\n                                    <span class="fa-stack fa-lg">\n                                        <i class="red-text fa fa-circle fa-stack-2x"></i>\n                                        <i class="fa fa-close fa-stack-1x fa-inverse"></i>\n                                    </span>\n                                    <span>\n                                        {{ $t("host.offlineFrom") }}{{offline | formatDate}}\n                                    </span>\n                                </div>\n                            </td>\n                            <td>\n                                <img v-attr="src: \'http://flag-cdn.com/flags/32/\'+country+\'.png\'" style="width:32px;height:32px;vertical-align:middle">\n                                <span>{{city}}, {{dc}}</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </li>\n    </ul>\n    <h5 class="white-text thin-text">{{ $t("general.refresh") }}</h5>\n</div>'},44:function(e,t,n){var i=n(25);"string"==typeof i&&(i=[[e.id,i,""]]);n(18)(i,{});i.locals&&(e.exports=i.locals)},118:function(e,t,n){(function(t){n(44),setInterval(function(){t(".collapsible").collapsible()},500),e.exports={template:n(36),replace:!0,data:function(){return{loading:!0,services:{"...":{nodes:[]}}}},ready:function(){this.$root.$set("title",this.$t("general.header")),t(".button-collapse").sideNav("hide"),this.getServers(),window.interval=setInterval(this.getServers,1e4)},filters:{timeSince:function(e){var t=Math.floor((new Date-e)/1e3),n=Math.floor(t/31536e3);return n>1?n+" lat":(n=Math.floor(t/2592e3),n>1?n+" miesięcy":(n=Math.floor(t/86400),n>1?n+" dni":(n=Math.floor(t/3600),n>1?n+" godzin":(n=Math.floor(t/60),n>1?n+" minut":Math.floor(t)+" sekund"))))},formatDate:function(e){var t=new Date(e);return t.format("yyyy-mm-dd HH:MM:ss")},countAllHosts:function(e){return e.length},countOnlineHosts:function(e){var t=0;for(var n in e){var i=e[n];(i.online||i.info)&&t++}return t}},methods:{checkIfAllHostsAreOnline:function(e){var t=0;for(var n in e){var i=e[n];(i.online||i.info)&&t++}var r=e.length;return r==t&&0!=r&&0!=t?!0:void 0},checkIfAllHostsAreOffline:function(e){var t=0;for(var n in e){var i=e[n];(i.online||i.info)&&t++}e.length;return 0===t?!0:void 0},checkIfSomeHostsAreOnline:function(e){var t=0;for(var n in e){var i=e[n];(i.online||i.info)&&t++}var r=e.length;return r!=t&&0!=r&&0!=t?!0:void 0},getServers:function(){this.loading=!0,this.$http.get("hosts.json",function(e){this.services=e,setTimeout(function(){t(".collapsible").collapsible()},500),this.loading=!1})}},beforeDestroy:function(){clearInterval(window.interval)}}}).call(t,n(4))}});