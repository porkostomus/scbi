goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37446,res){
var map__37447 = p__37446;
var map__37447__$1 = cljs.core.__destructure_map(map__37447);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37447__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37447__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37448 = res;
var G__37448__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37448,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37448);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37448__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37448__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37450 = arguments.length;
switch (G__37450) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37451,msg,handlers,timeout_after_ms){
var map__37452 = p__37451;
var map__37452__$1 = cljs.core.__destructure_map(map__37452);
var runtime = map__37452__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37552 = arguments.length;
var i__4819__auto___37554 = (0);
while(true){
if((i__4819__auto___37554 < len__4818__auto___37552)){
args__4824__auto__.push((arguments[i__4819__auto___37554]));

var G__37555 = (i__4819__auto___37554 + (1));
i__4819__auto___37554 = G__37555;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37458,ev,args){
var map__37459 = p__37458;
var map__37459__$1 = cljs.core.__destructure_map(map__37459);
var runtime = map__37459__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37463 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37466 = null;
var count__37467 = (0);
var i__37468 = (0);
while(true){
if((i__37468 < count__37467)){
var ext = chunk__37466.cljs$core$IIndexed$_nth$arity$2(null,i__37468);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37559 = seq__37463;
var G__37560 = chunk__37466;
var G__37561 = count__37467;
var G__37562 = (i__37468 + (1));
seq__37463 = G__37559;
chunk__37466 = G__37560;
count__37467 = G__37561;
i__37468 = G__37562;
continue;
} else {
var G__37563 = seq__37463;
var G__37564 = chunk__37466;
var G__37565 = count__37467;
var G__37566 = (i__37468 + (1));
seq__37463 = G__37563;
chunk__37466 = G__37564;
count__37467 = G__37565;
i__37468 = G__37566;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37463);
if(temp__5753__auto__){
var seq__37463__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37463__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37463__$1);
var G__37568 = cljs.core.chunk_rest(seq__37463__$1);
var G__37569 = c__4638__auto__;
var G__37570 = cljs.core.count(c__4638__auto__);
var G__37571 = (0);
seq__37463 = G__37568;
chunk__37466 = G__37569;
count__37467 = G__37570;
i__37468 = G__37571;
continue;
} else {
var ext = cljs.core.first(seq__37463__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37572 = cljs.core.next(seq__37463__$1);
var G__37573 = null;
var G__37574 = (0);
var G__37575 = (0);
seq__37463 = G__37572;
chunk__37466 = G__37573;
count__37467 = G__37574;
i__37468 = G__37575;
continue;
} else {
var G__37576 = cljs.core.next(seq__37463__$1);
var G__37577 = null;
var G__37578 = (0);
var G__37579 = (0);
seq__37463 = G__37576;
chunk__37466 = G__37577;
count__37467 = G__37578;
i__37468 = G__37579;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37453){
var G__37454 = cljs.core.first(seq37453);
var seq37453__$1 = cljs.core.next(seq37453);
var G__37455 = cljs.core.first(seq37453__$1);
var seq37453__$2 = cljs.core.next(seq37453__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37454,G__37455,seq37453__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37481,p__37482){
var map__37483 = p__37481;
var map__37483__$1 = cljs.core.__destructure_map(map__37483);
var runtime = map__37483__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37484 = p__37482;
var map__37484__$1 = cljs.core.__destructure_map(map__37484);
var msg = map__37484__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37484__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37485 = cljs.core.deref(state_ref);
var map__37485__$1 = cljs.core.__destructure_map(map__37485);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37487){
var map__37488 = p__37487;
var map__37488__$1 = cljs.core.__destructure_map(map__37488);
var runtime = map__37488__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37489,msg){
var map__37490 = p__37489;
var map__37490__$1 = cljs.core.__destructure_map(map__37490);
var runtime = map__37490__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37491,key,p__37492){
var map__37493 = p__37491;
var map__37493__$1 = cljs.core.__destructure_map(map__37493);
var state = map__37493__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37494 = p__37492;
var map__37494__$1 = cljs.core.__destructure_map(map__37494);
var spec = map__37494__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37510,key,spec){
var map__37511 = p__37510;
var map__37511__$1 = cljs.core.__destructure_map(map__37511);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37511__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37512_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37512_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37513_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37513_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37514_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37514_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37515_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37515_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37516_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37516_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37517,key){
var map__37518 = p__37517;
var map__37518__$1 = cljs.core.__destructure_map(map__37518);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37519,msg){
var map__37520 = p__37519;
var map__37520__$1 = cljs.core.__destructure_map(map__37520);
var runtime = map__37520__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37521,p__37522){
var map__37523 = p__37521;
var map__37523__$1 = cljs.core.__destructure_map(map__37523);
var runtime = map__37523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37524 = p__37522;
var map__37524__$1 = cljs.core.__destructure_map(map__37524);
var msg = map__37524__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37529 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37531 = null;
var count__37532 = (0);
var i__37533 = (0);
while(true){
if((i__37533 < count__37532)){
var map__37537 = chunk__37531.cljs$core$IIndexed$_nth$arity$2(null,i__37533);
var map__37537__$1 = cljs.core.__destructure_map(map__37537);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37537__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37599 = seq__37529;
var G__37600 = chunk__37531;
var G__37601 = count__37532;
var G__37602 = (i__37533 + (1));
seq__37529 = G__37599;
chunk__37531 = G__37600;
count__37532 = G__37601;
i__37533 = G__37602;
continue;
} else {
var G__37603 = seq__37529;
var G__37604 = chunk__37531;
var G__37605 = count__37532;
var G__37606 = (i__37533 + (1));
seq__37529 = G__37603;
chunk__37531 = G__37604;
count__37532 = G__37605;
i__37533 = G__37606;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37529);
if(temp__5753__auto__){
var seq__37529__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37529__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37529__$1);
var G__37607 = cljs.core.chunk_rest(seq__37529__$1);
var G__37608 = c__4638__auto__;
var G__37609 = cljs.core.count(c__4638__auto__);
var G__37610 = (0);
seq__37529 = G__37607;
chunk__37531 = G__37608;
count__37532 = G__37609;
i__37533 = G__37610;
continue;
} else {
var map__37548 = cljs.core.first(seq__37529__$1);
var map__37548__$1 = cljs.core.__destructure_map(map__37548);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37548__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37611 = cljs.core.next(seq__37529__$1);
var G__37612 = null;
var G__37613 = (0);
var G__37614 = (0);
seq__37529 = G__37611;
chunk__37531 = G__37612;
count__37532 = G__37613;
i__37533 = G__37614;
continue;
} else {
var G__37615 = cljs.core.next(seq__37529__$1);
var G__37616 = null;
var G__37617 = (0);
var G__37618 = (0);
seq__37529 = G__37615;
chunk__37531 = G__37616;
count__37532 = G__37617;
i__37533 = G__37618;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
