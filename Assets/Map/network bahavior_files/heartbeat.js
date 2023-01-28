(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var U2=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.XTa)("0",Math.max(0,b-c))+a},NYa=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},OYa=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},W2=function(a){"number"===typeof a?(this.date=PYa(a,0,1),V2(this,1)):g.Ka(a)?(this.date=PYa(a.getFullYear(),a.getMonth(),a.getDate()),V2(this,a.getDate())):(this.date=new Date(g.Qa()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),V2(this,a))},PYa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},V2=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},X2=function(a,b){g.pJ.call(this,a,{F:"div",
L:"ytp-reminder-menu",T:{role:"menu",tabindex:"-1"},S:[{F:"div",L:"ytp-reminder-menu-contents",S:[{F:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.va("ytp-reminder-menu-items");this.hide()},RYa=function(a){var b=QYa(a),c=0,d={};
for(c=0;c<b.length;d={PD:d.PD},c++){var e=a.j[c];e||(e=new g.V({F:"div",L:"ytp-reminder-menu-item",T:{role:"menuitem",tabindex:"0"},S:[{F:"div",L:"ytp-reminder-menu-item-icon",X:"{{icon}}"},{F:"div",L:"ytp-reminder-menu-item-label",X:"{{text}}"}]}),d.PD=c,e.Ja("click",function(l){return function(){var m=l.PD;a.Eb();m=QYa(a)[m];a.W("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.ra(a.items),a.j[c]=e);
var f=b[c],k=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":k=NYa();break;case "NOTIFICATIONS_NONE":k=OYa();break;case "NOTIFICATIONS_ACTIVE":k=g.lG()}f=f.text?g.nv(f.text):"";e.update({icon:k,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.Eb():a.od(a.buttonElement)},QYa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},Y2=function(a){g.V.call(this,{F:"div",
S:[{F:"button",Ba:["ytp-offline-slate-button","ytp-button"],S:[{F:"div",L:"ytp-offline-slate-button-icon",X:"{{icon}}"},{F:"div",L:"ytp-offline-slate-button-text",X:"{{text}}"}]}]});this.G=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.j=null;(this.buttonElement=this.va("ytp-offline-slate-button"))&&this.N(this.buttonElement,"click",this.D);this.hide()},SYa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);Z2(a)},Z2=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.nv(b.toggledText):"";a.update({text:c,icon:$2(b.toggledIcon)})}else c=b.defaultText?g.nv(b.defaultText):"",a.update({text:c,icon:$2(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=TYa(a))?(c=b.text?g.nv(b.text):"",a.update({text:c,icon:$2(b.icon)}),a.show()):a.hide():a.hide()},VYa=function(a,b,c){a.C||(a.C=new g.Is(a.G.R().Qh));
var d={context:g.Jq(a.C.config_||g.Iq())};g.ru()&&(d.context.clientScreenNonce=g.ru());d.params=c;g.Js(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){UYa(a)},
onTimeout:function(){UYa(a)}})},UYa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,Z2(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,Z2(a))},$2=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return NYa();case "NOTIFICATIONS_NONE":return OYa();case "NOTIFICATIONS_ACTIVE":return g.lG();default:return null}},TYa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.r(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},a3=function(a){g.V.call(this,{F:"div",
L:"ytp-offline-slate",S:[{F:"div",L:"ytp-offline-slate-background"},{F:"div",L:"ytp-offline-slate-bar",S:[{F:"span",L:"ytp-offline-slate-icon",S:[{F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{F:"path",T:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{F:"circle",T:{cx:"12",cy:"12",r:"3"}}]}]},{F:"span",L:"ytp-offline-slate-messages",S:[{F:"div",L:"ytp-offline-slate-main-text",T:{"aria-label":"{{label}}"},X:"{{mainText}}"},{F:"div",L:"ytp-offline-slate-subtitle-text",X:"{{subtitleText}}"}]},{F:"span",L:"ytp-offline-slate-buttons"}]},{F:"button",Ba:["ytp-offline-slate-close-button","ytp-button"],S:[g.gG()]},{F:"button",Ba:["ytp-offline-slate-open-button","ytp-button"],S:[g.fG()]},{F:"div",L:"ytp-offline-slate-trailer-chip",X:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}]});
var b=this;this.api=a;this.j=this.u=null;this.background=this.va("ytp-offline-slate-background");this.B=this.va("ytp-offline-slate-bar");this.D=new g.K(function(){g.sn(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.K(function(){g.sn(b.element,"ytp-offline-slate-collapsed")},15E3);
g.J(this,this.C);g.J(this,this.D);this.countdownTimer=new g.K(this.XR,1E3,this);this.N(a,"presentingplayerstatechange",this.bS);this.N(a,"livestatedata",this.Ea);a=this.va("ytp-offline-slate-close-button");this.N(a,"click",function(){g.sn(b.element,"ytp-offline-slate-collapsed")});
a=this.va("ytp-offline-slate-open-button");this.N(a,"click",function(){g.un(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Ea(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().Xj;var c=8===this.api.getPresentingPlayerType();g.N(this.element,"ytp-offline-slate-premiere-trailer",a);g.N(this.element,"ytp-offline-slate-hide-background",c)},b3=function(a,b,c){if(b){var d=null!=b.subtitleText?g.nv(b.subtitleText):"";
c=c?c:null!=b.mainText?g.nv(b.mainText):"";var e,f,k,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(k=f.accessibilityData)?void 0:k.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.N(a.element,"ytp-offline-slate-single-text-line",!d);g.N(a.B,"ytp-offline-slate-bar-hidden",!c&&!d)}},c3=function(a,b){var c=(0,g.Q)();
this.trigger=a;this.j=b;this.B=c},e3=function(a){g.EI.call(this,a);
var b=this;this.J=!1;this.P=0;this.D=!1;this.u=new g.K(function(){var e=b.player.R(),f=b.getVideoData();d3(b)&&(WYa(b)?XYa(b,e,f):(YYa(b),ZYa(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.C=!1;this.I=new g.Wg(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.V=new g.Is(void 0);this.U=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new W2).getTimezoneOffset();this.B=new g.Ry(this);g.J(this,this.u);g.J(this,this.B);YYa(this);$Ya(this);this.B.N(a,"heartbeatparams",this.Uy);this.B.N(a,"presentingplayerstatechange",this.US);this.B.N(a,"videoplayerreset",this.VS);this.B.N(a,g.iv("heartbeat"),this.onCueRangeEnter);this.C&&this.j&&aZa(this,
this.j);var c=new g.gv(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.gv(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.Sd([c,d]);bZa(this)},bZa=function(a){var b=a.getVideoData();
b.di&&(b=b.botguardData)&&g.RH(b,a.player.R())},YYa=function(a){var b=a.getVideoData();
if(b.di&&(b=new g.NCa(b),g.MH.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Sa){var d=g.OCa(b);if(d){c={};var e={};d=d.split("&");d=g.r(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=cZa[Number(e.r1c)]);c.challenge=b.videoData.Sa}}a.attestationResponse=c||void 0}},WYa=function(a){var b=a.getVideoData();
if(!g.hD(a.getVideoData())||b.tK)return!1;if(b.useInnertubeDrmService()&&b.U){a="playready"===b.U.flavor&&b.K("html5_innertube_heartbeats_for_playready");var c="widevine"===b.U.flavor&&b.K("html5_innertube_heartbeats_for_widevine");b=g.Kz(b.U)&&b.K("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},f3=function(a){if(WYa(a))return!!a.heartbeatParams;
var b=a.player.R(),c=a.getVideoData();return b.K("html5_heartbeat_wait_for_drm_killswitch")||!g.hD(a.getVideoData())||!c.useInnertubeDrmService()||c.Qh||c.sH?!!c.heartbeatToken:!1},g3=function(a,b){if(!a.u.isActive()&&a.J){var c=a.getVideoData();
if(f3(a)||c.isLivePlayback){if(void 0===b)if(a.D)if(a.C)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().pK||6E4}else b=1E3;a.u.start(b)}}},gZa=function(a,b,c){b.qk&&(c=g.lh(c,{internalipoverride:b.qk}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Kb&&(d.kpt=b.Kb);c=g.lh(c,d);g.Tp(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&d3(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=dZa(e);if(f){a.player.Ia("onHeartbeat",f);var k="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else k=(k=e.match(eZa))?"0"===k[1]?0:1:-1;fZa(a,f,e,k)}},
onError:function(e){d3(a)&&h3(a,!0,"net-"+e.status)},
onTimeout:function(){d3(a)&&h3(a,!0,"timeout")},
withCredentials:!0})},XYa=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.lh(a.heartbeatParams.url,{request_id:g.mra()});c.Pa&&(e=g.lh(e,{vvt:c.Pa}),c.mdxEnvironment&&(e=g.lh(e,{mdx_environment:c.mdxEnvironment})));g.nB(b,c.oauthToken).then(function(f){f&&(e=g.lh(e,{access_token:f}));gZa(a,c,e)})}},d3=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.U(a.player.vb(a.getPlayerType()),4)?!1:f3(a)||b.isLivePlayback?!0:(i3(a),!1)},ZYa=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.Z)?d:c.heartbeatServerData};a.U=a.attestationResponse;c.di&&(e.attestationResponse=a.U);var f=g.WH(c),k;d=null!=(k=f.client)?k:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(k="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=k;k={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&k.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&k.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.eB(b)){k.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=hZa(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.fb())?void 0:g.TI(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});k.unpluggedParams=d}e.heartbeatRequestParams=
k;b.K("enable_linear_player_handling")&&c.isLivePlayback&&(l=hZa(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l}));var n={timeout:3E4,onSuccess:function(p){if(!a.u.isActive()&&d3(a)){var q=a.getVideoData(),t=q.di&&null==a.U,u;q.di=!(null==(u=p.heartbeatAttestationConfig)||!u.requiresAttestation)||t;t=p.playabilityStatus;u=JSON.stringify(t)||"{}";p.authenticationMismatch&&a.player.oa("authshear",{});var x=-1;var y=p.playabilityStatus;y&&(a.player.Ia("onHeartbeat",
y),"OK"===y.status?x=p.stopHeartbeat?2:0:"UNPLAYABLE"===y.status?x=1:"LIVE_STREAM_OFFLINE"===y.status&&(x=0));a.sequenceNumber&&-1===x||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.Z=p.heartbeatServerData);p.playerCueRanges&&0<p.playerCueRanges.length&&(q.cueRanges=p.playerCueRanges,q.W("dataupdated"));fZa(a,t,u,x)}},
onError:function(p){d3(a)&&h3(a,!0,"net-"+p.status)},
onTimeout:function(){d3(a)&&h3(a,!0,"timeout")}};
g.nB(b,g.yD(c)).then(function(p){p&&(n.yM="Bearer "+p);g.Js(a.V,"player/heartbeat",e,n)})},fZa=function(a,b,c,d){-1===d?(b="decode "+g.hc(c),h3(a,!1,b)):2===d?(i3(a),a.D=!0):(a.P=0,a.u.stop(),1===d?(a.D=!1,a.player.Rf("heartbeat.stop",2,a.kf(c)),g.Xq("heartbeatActionPlayerHalted",iZa(b))):(a.D=!0,c=0,a.C&&b&&(c=aZa(a,b),a.player.W("livestatedata",b)),c?g3(a,c):g3(a)))},aZa=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!(c.switchStreamsImmediately||
c.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===c.transitionTiming)),e=jZa(c),f=a.getVideoData(),k=a.player.vb(a.getPlayerType()),l=k.isPlaying()&&!g.mD(f)&&!a.player.isAtLiveHead(a.getPlayerType());
if(2<=f.R().U){var m,n=(null==(m=a.player.Ed())?void 0:m.Lb())||{};n.status=b.status||"";n.dvr=""+ +l;n["switch"]=""+ +d;n.ended=""+ +!(!c||!c.displayEndscreen);a.player.oa("heartbeat",n)}if(l&&!d)return e;d=c&&c.streamTransitionEndpoint&&c.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(c&&c.transitionTiming))a.getVideoData().tP=d;else{if(l=d)(l=d&&d.videoId)?(a.player.ll(l,{autonav:"1"},void 0,!0,!0,d,g.yD(a.getVideoData())),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
"HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",b),l=!0):l=!1;if(l)return e}if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;l=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;m=d!==l&&(null!=d||a.player.K("web_player_heartbeat_undefined_killswitch"));if(!f.hlsvp&&!f.sb||m){var p={video_id:f.videoId};f.bK&&(p.is_live_destination="1");a.player.K("web_player_heartbeat_request_watch_next")||
(p.disable_watch_next=!0,p.raw_watch_next_response=f.watchNextResponse);p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;p.force_gvi=f.Uh;p.Ij=f.Ij;c=void 0;f.hlsvp||f.sb?m&&(c=new c3("broadcastIdChanged",l+","+d),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(d&&(c=new c3("formatsReceived",""+d)),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b));a.player.loadVideoByPlayerVars(p,
void 0,void 0,void 0,c);return e}a.player.cf("heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.kb&&a.api.Lv()):g.lF(k)&&(f=(null==(p=a.player.Ed())?void 0:p.Lb())||{},a.player.oa("hbse",f,!0),a.player.Lv(),a.player.Ia("onLiveMediaEnded",b)));return e},jZa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},h3=function(a,b,c){var d=a.player.R();
if(!a.u.isActive()){a.u.stop();a.P++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.rK||b&&!g.hD(a.getVideoData())&&!f3(a)&&f.isLivePlayback)f=!1;else{var k,l;(null==(l=a.heartbeatParams)?0:l.Fv)?k=a.heartbeatParams.Fv:k=f.qK||5;f=a.P>=k}f?(g.Xq("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:iZa()),(b=a.getVideoData())&&b.isLivePlayback?a.player.Rf(e,1,"\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e16\u0e39\u0e01\u0e02\u0e31\u0e14\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
c):a.player.Rf(e,1,"\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e43\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e02\u0e2d\u0e07\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e19\u0e35\u0e49",c)):(d.K("html5_report_non_fatal_heartbeat_error")&&a.player.jo(e,{msg:c}),g3(a,a.I.getValue()),g.Xg(a.I))}},iZa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},i3=function(a){a.P=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},$Ya=function(a){var b=a.getVideoData(),c=a.player.R();
if(b.isLivePlayback)if(g.Sz(c.u)){a.C=!0;a.J=!0;if(!g.UA(c)||g.eB(c))a.offlineSlate=new a3(a.player),g.J(a,a.offlineSlate),g.oI(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;if("UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)||a.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.j?(d=jZa(a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?g3(a,d):g3(a,7500):g3(a,1E3)}else a.player.Rf("html5.unsupportedlive",
2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!c.K("html5_release_post_live_heartbeat_killswitch")&&g.Fb(b.ea,"heartbeat")&&a.player.cf("heartbeat",a.getPlayerType())},hZa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},dZa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},cZa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],j3={KS:["BC","AD"],JS:["Before Christ","Anno Domini"],YU:"JFMAMJJASOND".split(""),iV:"JFMAMJJASOND".split(""),WU:"January February March April May June July August September October November December".split(" "),hV:"January February March April May June July August September October November December".split(" "),dV:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
kV:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),tV:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),mV:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),fV:"Sun Mon Tue Wed Thu Fri Sat".split(" "),lV:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ZU:"SMTWTFS".split(""),jV:"SMTWTFS".split(""),eV:["Q1","Q2","Q3","Q4"],bV:["1st quarter","2nd quarter","3rd quarter","4th quarter"],qS:["AM","PM"],DS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],pV:["h:mm:ss a zzzz",
"h:mm:ss a z","h:mm:ss a","h:mm a"],ES:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],yK:6,uV:[5,6],zK:5};
j3={KS:["\u0e01\u0e48\u0e2d\u0e19 \u0e04.\u0e28.","\u0e04.\u0e28."],JS:["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e01\u0e32\u0e25","\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a"],YU:"\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),iV:"\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
WU:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e40\u0e21\u0e29\u0e32\u0e22\u0e19 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 \u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e15\u0e38\u0e25\u0e32\u0e04\u0e21 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(" "),
hV:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e40\u0e21\u0e29\u0e32\u0e22\u0e19 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 \u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e15\u0e38\u0e25\u0e32\u0e04\u0e21 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(" "),
dV:"\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),kV:"\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),tV:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "),
mV:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "),fV:"\u0e2d\u0e32. \u0e08. \u0e2d. \u0e1e. \u0e1e\u0e24. \u0e28. \u0e2a.".split(" "),lV:"\u0e2d\u0e32. \u0e08. \u0e2d. \u0e1e. \u0e1e\u0e24. \u0e28. \u0e2a.".split(" "),
ZU:"\u0e2d\u0e32 \u0e08 \u0e2d \u0e1e \u0e1e\u0e24 \u0e28 \u0e2a".split(" "),jV:"\u0e2d\u0e32 \u0e08 \u0e2d \u0e1e \u0e1e\u0e24 \u0e28 \u0e2a".split(" "),eV:["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 1","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 2","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 3","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 4"],bV:["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 1","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 2","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 3","\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 4"],qS:["\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",
"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"],DS:["EEEE\u0e17\u0e35\u0e48 d MMMM G y","d MMMM G y","d MMM y","d/M/yy"],pV:["H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 mm \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 zzzz","H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 mm \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 z","HH:mm:ss","HH:mm"],ES:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],yK:6,uV:[5,6],zK:5};g.h=W2.prototype;g.h.xN=j3.yK;g.h.yN=j3.zK;g.h.clone=function(){var a=new W2(this.date);a.xN=this.xN;a.yN=this.yN;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getYear=function(){return this.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCDay=function(){return this.date.getDay()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.setFullYear=function(a){this.date.setFullYear(a)};
g.h.setYear=function(a){this.setFullYear(a)};
g.h.setMonth=function(a){this.date.setMonth(a)};
g.h.setDate=function(a){this.date.setDate(a)};
g.h.setTime=function(a){this.date.setTime(a)};
g.h.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.h.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.h.setUTCDate=function(a){this.date.setUTCDate(a)};
g.h.add=function(a){if(a.u||a.j){var b=this.getMonth()+a.j+12*a.u,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),V2(this,a.getDate()))};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+U2(Math.abs(a),b?6:4),U2(this.getMonth()+1,2),U2(this.getDate(),2)].join("")+""};
g.h.valueOf=function(){return this.date.valueOf()};g.w(X2,g.pJ);X2.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.pJ.prototype.hide.call(this)};
X2.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.pJ.prototype.show.call(this)};
X2.prototype.Y=function(){g.ce(this.j);g.pJ.prototype.Y.call(this)};g.w(Y2,g.V);
Y2.prototype.D=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;Z2(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.kb)this.j.Eb();else{var b=TYa(this);b&&this.B(b.serviceEndpoint||b.command);b=g.r(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.j||(this.j=new X2(this.G,this.buttonElement),this.j.ra(this.element),g.J(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.B,this));b=this.j;b.menuPopupRenderer=a;RYa(b)}};
Y2.prototype.B=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(VYa(this,c,b.params),a=g.r(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;Z2(this);break}}};g.w(a3,g.V);g.h=a3.prototype;g.h.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.h.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.h.Ea=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.u=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.XR():b3(this,b);var e,f,k,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(k=f.offlineSlate)?void 0:null==(l=k.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;k=c.thumbnails;for(l=0;l<k.length;l++)k[l].width>e&&
(e=k[l].width||0,f=k[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new Y2(this.api),this.j.ra(this.va("ytp-offline-slate-buttons")),g.J(this,this.j)),SYa(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&SYa(this.j,null,null);this.u=a}else this.u=null;this.bS()};
g.h.bS=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.vb(),d=this.getVideoData();b=d.isLivePlayback&&(g.lF(c)||g.U(c,2)||g.U(c,64));var e=2===d.autonavState&&g.U(c,2);c=c.isPlaying()&&!g.mD(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.kb?(null==a?0:g.yE(a,2))&&!this.getVideoData().Xj&&(g.un(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.un(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.W("offlineslatestatechange"),
this.I&&this.api.Lv()):this.kb&&(this.hide(),this.api.W("offlineslatestatechange"))};
g.h.XR=function(){var a,b,c,d,e=null==(a=this.u)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Qa()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(b3(this,e),this.countdownTimer.stop()):(b3(this,e,g.$G(b-a)),g.ln(this.countdownTimer)))};
g.h.Y=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.V.prototype.Y.call(this)};c3.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.j===a.j:!1};
c3.prototype.isExpired=function(){return 6E4<(0,g.Q)()-this.B};
c3.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.j};g.w(e3,g.EI);g.h=e3.prototype;g.h.Y=function(){i3(this);this.player.yf("heartbeat");g.EI.prototype.Y.call(this)};
g.h.onCueRangeEnter=function(){this.J=!0;g3(this,2E3)};
g.h.Uy=function(a){this.heartbeatParams=a;g3(this,2E3)};
g.h.US=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null==(b=this.j)?void 0:b.status)&&!this.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.U(a.state,2)||g.U(a.state,64)?(i3(this),this.C&&(this.J=!0,g3(this,1E3))):(g.U(a.state,1)||g.U(a.state,8))&&g3(this,2E3))};
g.h.VS=function(){3!==this.player.getPresentingPlayerType()&&g3(this,2E3)};
g.h.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.h.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.h.jj=function(a){switch(a){case 4:case 3:return!1}return!0};
g.h.iC=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Xq("heartbeatActionPlayerTransitioned",a)};
g.h.kf=function(a){var b="LICENSE",c=dZa(a);if(c)return c.reason||g.jJ[b]||"";(a=a.match(eZa))&&(a=Number(a[1]))&&(b=g.xza(a));return g.jJ[b]||""};
g.h.uy=function(){return!!this.offlineSlate&&this.offlineSlate.kb};
var eZa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.DI("heartbeat",e3);})(_yt_player);