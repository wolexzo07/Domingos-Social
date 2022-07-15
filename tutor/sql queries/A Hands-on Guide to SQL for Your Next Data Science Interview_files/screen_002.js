(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/collection/CollectionFollowButton.tsx":function(e,t,n){"use strict";n.d(t,"c",function(){return A}),n.d(t,"b",function(){return R}),n.d(t,"a",function(){return V});var o=n("./node_modules/@babel/runtime/helpers/extends.js"),l=n.n(o),i=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),r=n.n(i),c=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),a=n.n(c),s=n("./node_modules/lodash/flowRight.js"),u=n.n(s),m=n("./node_modules/react/index.js"),d=n("./node_modules/graphql-tag/src/index.js"),b=n.n(d),p=n("./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js"),f=n("./node_modules/react-redux/es/index.js"),g=n("./src/components/session/WithViewer.tsx"),h=n("./src/components/susi/SusiClickable.tsx"),x=n("./src/components/style/BaseThemeProvider.tsx"),w=n("./src/framework/design-system/type/index.ts"),C=n("./src/framework/design-system/components/index.ts"),E=n("./src/framework/design-system/components/portal/ui/Toast.tsx"),v=n("./src/framework/reporter/index.ts"),_=n("./src/framework/style/index.ts"),k=n("./src/framework/source/index.ts"),y=n("./src/framework/track/DomMonitorContext.tsx"),S=n("./src/svg/arrow-down-21px.svg"),M=n("./src/styles/theme.ts"),T=n("./src/util/routes.ts");function I(){var e=a()(["\n  mutation unsubscribeCollectionEmailsMutation($id: ID!) {\n    unsubscribeCollectionEmails(collectionId: $id) {\n      ...CollectionFollowButton_collection\n    }\n  }\n  ","\n"]);return I=function(){return e},e}function L(){var e=a()(["\n  mutation subscribeCollectionEmailsMutation($id: ID!) {\n    subscribeCollectionEmails(collectionId: $id) {\n      ...CollectionFollowButton_collection\n    }\n  }\n  ","\n"]);return L=function(){return e},e}function j(){var e=a()(["\n  mutation unfollowCollectionMutation($id: ID!) {\n    unfollowCollection(targetCollectionId: $id) {\n      ...CollectionFollowButton_collection\n    }\n  }\n  ","\n"]);return j=function(){return e},e}function O(){var e=a()(["\n  mutation followCollectionMutation($id: ID!) {\n    followCollection(targetCollectionId: $id) {\n      ...CollectionFollowButton_collection\n    }\n  }\n  ","\n"]);return O=function(){return e},e}function B(){var e=a()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    viewerIsFollowing\n    name\n    viewerIsSubscribedToLetters\n    slug\n    isUserSubscribedToCollectionEmails\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ","\n  ","\n"]);return B=function(){return e},e}function F(){var e=a()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);return F=function(){return e},e}var A=b()(F()),R=b()(B(),T.z,h.b),N=function(e){var t=e.children,n=e.extraTopPadding,o=e.extraBottomPadding,l=e.padding,i=e.margin,r=e.borderTop;return m.createElement(C.b,{padding:l||"".concat(n?"20px":"5px"," 20px ").concat(o?"20px":"5px"," 20px"),margin:i,borderTop:r?"BASE_LIGHTER":"NONE"},t)},U=b()(O(),R),D=b()(j(),R),P=b()(L(),R),G=b()(I(),R),H={position:"relative",left:"6px"},V=u()(Object(p.a)(U,{name:"followCollectionMutation",props:function(e){var t=e.ownProps,n=e.followCollectionMutation;return{followCollectionMutation:function(){n({variables:{id:t.collection.id},optimisticResponse:{__typename:"Mutation",followCollection:{__typename:"Collection",viewerIsFollowing:!0,isUserSubscribedToCollectionEmails:t.collection.isUserSubscribedToCollectionEmails,id:t.collection.id,name:t.collection.name}}})}}}}),Object(p.a)(D,{name:"unfollowCollectionMutation",props:function(e){var t=e.ownProps,n=e.unfollowCollectionMutation;return{unfollowCollectionMutation:function(){return n({variables:{id:t.collection.id},optimisticResponse:{__typename:"Mutation",unfollowCollection:{__typename:"Collection",viewerIsFollowing:!1,isUserSubscribedToCollectionEmails:t.collection.isUserSubscribedToCollectionEmails,id:t.collection.id,name:t.collection.name}}})}}}}),Object(p.a)(P,{name:"subscribeCollectionEmailsMutation",props:function(e){var t=e.ownProps,n=e.subscribeCollectionEmailsMutation;return{subscribeCollectionEmailsMutation:function(){return n({variables:{id:t.collection.id},optimisticResponse:{__typename:"Mutation",subscribeCollectionEmails:{__typename:"Collection",viewerIsFollowing:t.collection.viewerIsFollowing,isUserSubscribedToCollectionEmails:!0,id:t.collection.id,name:t.collection.name}}})}}}}),Object(p.a)(G,{name:"unsubscribeCollectionEmailsMutation",props:function(e){var t=e.ownProps,n=e.unsubscribeCollectionEmailsMutation;return{unsubscribeCollectionEmailsMutation:function(){return n({variables:{id:t.collection.id},optimisticResponse:{__typename:"Mutation",unsubscribeCollectionEmails:{__typename:"Collection",viewerIsFollowing:t.collection.viewerIsFollowing,isUserSubscribedToCollectionEmails:!1,id:t.collection.id,name:t.collection.name}}})}}}}))(function(e){var t=Object(_.useCx)(),n=Object(f.e)(function(e){return e.config.isAmp}),o=Object(f.e)(function(e){return e.navigation.currentLocation}),i=e.collection,c=e.post,a=i&&i.name?i.name:"",s=Object(v.c)(),u=Object(k.d)(),d=Object(y.b)(),b=m.useState(!!e.isPopoverVisible),p=r()(b,2),I=p[0],L=p[1],j=m.useState(!!e.isToastVisible),O=r()(j,2),B=O[0],F=O[1],A=m.useCallback(function(){L(!1)},[]);m.useEffect(function(){return d.on("scroll",A),function(){d.off("scroll",A)}},[A]);var R=m.useCallback(function(){i.viewerIsFollowing||(e.followCollectionMutation&&e.followCollectionMutation(),s.event("collection.followed",{collectionId:i.id,followSource:u})),L(!0)},[i]),U=m.useCallback(function(){s.event("collection.unfollowed",{collectionId:i.id,followSource:u}),e.unfollowCollectionMutation&&e.unfollowCollectionMutation(),L(!1)},[]),D=m.useCallback(function(){L(!1)},[]),P=m.useCallback(function(t){s.event("client.action",{action:"toggle-subscribe-collection-emails",eventType:"click",classAttribute:"checkbox"}),t.target.checked?e.subscribeCollectionEmailsMutation&&e.subscribeCollectionEmailsMutation():e.unsubscribeCollectionEmailsMutation&&e.unsubscribeCollectionEmailsMutation(),F(!0)}),G=m.useCallback(function(){F(!1)});if(n)return null;var V=!!i.isUserSubscribedToCollectionEmails;return m.createElement(m.Fragment,null,m.createElement(C.x,{isVisible:!!I,hide:D,popoverTheme:M.a,popoverRenderFn:function(){return m.createElement(C.b,{width:"280px",display:"flex",flexDirection:"column"},m.createElement(N,{extraTopPadding:!0},m.createElement(w.b,{scale:"XS"},"You‘re following ",a)),m.createElement(N,null,m.createElement(C.d,null,"You‘ll now see more stories from ",a," across Medium.")),m.createElement(N,null,m.createElement(C.d,null,m.createElement("label",null,m.createElement(C.b,{display:"inline",marginRight:"5px"},m.createElement("input",{type:"checkbox",onChange:P,checked:V})),"Receive emails from this publication"))),m.createElement(N,{borderTop:!0,margin:"10px 0 0 0",padding:"15px 20px 5px 20px"},m.createElement(C.d,null,m.createElement(C.u,{href:Object(T.y)(i,o)},"View Publication"))),m.createElement(N,{extraBottomPadding:!0},m.createElement(C.d,null,m.createElement(C.u,{onClick:U},"Unfollow publication"))))}},m.createElement(function(e){var t=i.slug&&(c&&c.id?Object(T.wb)(i.slug,c.id):Object(T.vb)(i.slug));return m.createElement(g.a,null,function(n){return n?m.createElement(C.c,l()({size:"SMALL",onClick:R},e),e.children):m.createElement(h.a,l()({collection:i,buttonStyle:"OBVIOUS",isButton:!0,buttonSize:"SMALL",operation:"register",actionUrl:t},e),e.children)})},{buttonStyle:i.viewerIsFollowing?"STRONG":"OBVIOUS"},i.viewerIsFollowing?"Following":"Follow",i.viewerIsFollowing&&m.createElement("span",{className:t(H)},m.createElement(S.a,null)))),m.createElement(x.b,null,m.createElement(E.a,{isVisible:!!B,hide:G,duration:2e3},m.createElement(C.d,null,V?"You‘ll now receive emails from ".concat(a,"."):"You‘ll no longer receive emails from ".concat(a,".")))))})},"./src/components/collection/CollectionLogo.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return g});var o=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),l=n.n(o),i=n("./node_modules/react/index.js"),r=n("./src/components/ui/image/index.ts"),c=n("./src/util/miroImage.ts"),a=n("./node_modules/graphql-tag/src/index.js"),s=n.n(a),u=n("./src/framework/design-system/components/index.ts"),m=n("./src/framework/design-system/type/Type.tsx"),d=n("./src/framework/style/index.ts");function b(){var e=l()(["\n  fragment CollectionLogo_collection on Collection {\n    name\n    logo {\n      id\n      originalWidth\n      originalHeight\n    }\n  }\n"]);return b=function(){return e},e}var p=function(e){return function(t){return{color:t.baseColor.text[e]}}};function f(e){var t=e.collection,n=e.maxWidth,o=e.maxHeight,l=e.textScale,a=void 0===l?"S":l,s=e.withTextColorSubtle,b=void 0!==s&&s,f=Object(d.useTheme)();if(!t.logo||!t.logo.id)return i.createElement(m.a,{fontConfig:f.newFonts.heading,scale:a,tag:"span",additionalRules:p(b?"normal":"dark"),clamp:1},t.name||"");var g=t.logo,h=g.id,x=g.originalWidth||100,w=g.originalHeight||100;if(n&&x>n){var C=x/n;x=Math.floor(x/C),w=Math.floor(w/C)}if(o&&w>o){var E=w/o;x=Math.floor(x/E),w=Math.floor(w/E)}return i.createElement(u.b,{width:"".concat(x,"px"),height:"".concat(w,"px")},i.createElement(r.b,{miroId:h,alt:t.name||"Publication logo",width:x,height:w,strategy:c.a.Resample}))}var g=s()(b())},"./src/components/collection/CollectionMetabar.tsx":function(e,t,n){"use strict";var o=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),l=n.n(o),i=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),r=n.n(i),c=n("./node_modules/react/index.js"),a=n("./node_modules/graphql-tag/src/index.js"),s=n.n(a),u=n("./node_modules/react-redux/es/index.js"),m=n("./node_modules/@babel/runtime/helpers/extends.js"),d=n.n(m),b=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),p=n.n(b),f=n("./src/components/collection/CollectionLogo.tsx"),g=n("./src/components/metabar/constants.ts"),h=n("./src/components/metabar/Logo.tsx"),x=n("./src/components/metabar/MetabarActions.tsx"),w=n("./src/components/metabar/MetabarActionsLO.tsx"),C=n("./src/components/navigation/Anchor.tsx"),E=n("./src/framework/design-system/components/index.ts"),v=n("./src/styles/zIndex.ts"),_=n("./src/util/routes.ts");function k(){var e=l()(["\n  fragment CollectionMetabarTop_collection on Collection {\n    slug\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...MetabarActions_collection\n  }\n  ","\n  ","\n  ","\n"]);return k=function(){return e},e}var y=s()(k(),f.b,_.z,x.a),S=Object(u.c)(function(e){return{authDomain:e.config.authDomain,currentLocation:e.navigation.currentLocation}})(function(e){var t=e.authDomain,n=e.collection,o=e.currentLocation,l=e.isAmp,i=e.post,r=e.shouldShowCollectionLogo,a=e.withMonogramDark,s=e.setIsMetabarLocked,u=e.breakpoint,m=void 0===u?"sm":u;return c.createElement(E.b,{backgroundColor:"BACKGROUND"},c.createElement(E.w,null,c.createElement(E.b,d()({display:"flex",alignItems:"center",height:"".concat(g.a,"px")},p()({},m,{display:"flex",height:"".concat(g.c,"px")})),c.createElement(E.b,{display:"flex",alignItems:"center",flexGrow:"1",zIndex:v.a.metabar},c.createElement(E.b,{marginLeft:"-6px"},c.createElement(C.a,{href:"https://".concat(t,"/"),"aria-label":"Homepage"},c.createElement(h.a,{dark:a}))),r&&c.createElement(c.Fragment,null,c.createElement(E.b,d()({height:"24px",width:"1px",marginLeft:"10px",marginRight:"14px",borderLeft:"BASE_LIGHT"},p()({},m,{display:"none"}))),c.createElement(E.b,p()({},m,{display:"none"}),c.createElement(C.a,{href:Object(_.y)(n,o)},c.createElement(f.a,{collection:n,maxWidth:240,maxHeight:36,textScale:"M"}))))),c.createElement(E.b,{flexGrow:"0",zIndex:v.a.metabar},l?c.createElement(w.b,{withoutConversionButton:!0,post:i}):c.createElement(x.c,{post:i,collection:n,withoutConversionButton:!0,setIsMetabarLocked:s})))))}),M=n("./src/framework/design-system/type/Type.tsx"),T=n("./src/framework/style/index.ts"),I=n("./src/styles/breakpoints.ts");function L(){var e=l()(["\n  fragment CollectionNavItems_collection on Collection {\n    navItems {\n      title\n      url\n      type\n    }\n  }\n"]);return L=function(){return e},e}var j=function(e){var t;return t={listStyleType:"none",margin:0,lineHeight:"40px",whiteSpace:"nowrap",overflowX:"auto",display:"flex",alignItems:"flex-start"},p()(t,I.sm(e),{display:"none"}),p()(t,"marginTop","".concat(20,"px")),p()(t,"paddingTop","".concat(20,"px")),p()(t,"height","".concat(80,"px")),t},O={display:"flex",alignItems:"center",height:"".concat(20,"px"),marginRight:"15px",marginLeft:"15px",":first-child":{marginLeft:0}},B=function(e){return function(t){return{color:t.baseColor.text[e],textTransform:"uppercase",letterSpacing:"1px"}}},F=function(e){return{height:"".concat(20,"px"),minWidth:"1px",backgroundColor:e.baseColor.border.normal}};function A(e){var t=e.navItems,n=e.withTextColorSubtle,o=Object(T.useCx)(),l=Object(T.useTheme)();return t?c.createElement("ul",{className:o(j)},t.map(function(e,t){return e.url&&c.createElement(c.Fragment,{key:t},"EXTERNAL_LINK_NAV_ITEM"===e.type&&c.createElement("span",{className:o(F)}),c.createElement("li",{className:o(O)},c.createElement(M.a,{fontConfig:l.newFonts.detail,scale:"S",tag:"span",additionalRules:B(n?"lighter":"normal")},c.createElement(E.u,{href:e.url},e.title))))})):null}var R=s()(L()),N=n("./src/util/theme.ts");function U(){var e=l()(["\n  fragment CollectionMetabarBottom_collection on Collection {\n    slug\n    ...CollectionNavItems_collection\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...ThemeUtilTintBackground_collection\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return U=function(){return e},e}var D=s()(U(),R,f.b,_.z,N.b),P=Object(u.c)(function(e){return{currentLocation:e.navigation.currentLocation}})(function(e){var t=e.collection,n=e.currentLocation,o=e.shouldShowCollectionLogo,l=void 0===o||o,i=e.withBorderTop,r=void 0!==i&&i,a=e.withTextColorSubtle,s=void 0!==a&&a,u=e.breakpoint,m=void 0===u?"sm":u,b=t.navItems.slice().length>0;return c.createElement(E.b,d()({backgroundColor:"BACKGROUND",display:b?"block":"none",borderTop:r?"BASE_LIGHTER":"NONE"},p()({},m,{display:"block"})),c.createElement(E.w,null,c.createElement(E.b,{display:"flex",alignItems:"center",height:"54px",overflow:"hidden"},l?c.createElement(E.b,{flexShrink:"0",marginRight:"40px"},c.createElement(C.a,{href:Object(_.y)(t,n)},c.createElement(f.a,{collection:t,maxWidth:300,maxHeight:36,textScale:"S",withTextColorSubtle:s}))):null,c.createElement(E.b,{flexShrink:"1",overflow:"auto"},c.createElement(A,{navItems:t.navItems,withTextColorSubtle:s})))))}),G=n("./src/components/metabar/MetabarLayout.tsx"),H=n("./src/components/session/WithFlag.tsx");function V(){var e=l()(["\n  fragment CollectionMetabar_collection on Collection {\n    colorBehavior\n    ...CollectionMetabarTop_collection\n    ...CollectionMetabarBottom_collection\n    ...ThemeUtilTintBackground_collection\n    ...ThemeUtilAccent_collection\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return V=function(){return e},e}function W(e){return g.a+(e?g.b:0)}function z(e){return g.c+(e?g.b:0)}function $(e,t){return Object(N.i)(e.colorPalette.tintBackgroundSpectrum,t)}function K(e,t){return Object(N.c)(e.colorPalette.defaultBackgroundSpectrum,e.colorPalette.highlightSpectrum,t)}function Y(e){var t=Object(T.useTheme)(),n=e.post,o=e.collection,l=e.isAmp,i=e.isFixed,a=e.behavior,s=o.navItems&&o.navItems.length>0,m=c.useState(!1),d=r()(m,2),b=d[0],p=d[1],f="ACCENT_COLOR"===o.colorBehavior;return Object(u.e)(function(e){return e.client.isNativeMedium})?null:c.createElement(G.a,{height:W(s),heightSm:z(!0),isFixed:i,isLocked:b,behavior:a,marginBottom:0,marginBottomSm:0},f||s?c.createElement(E.G,{theme:K(o,t)},c.createElement(S,{post:n,collection:o,isAmp:l,shouldShowCollectionLogo:!s,withMonogramDark:!1,setIsMetabarLocked:p})):c.createElement(c.Fragment,null,c.createElement(E.G,{theme:$(o,t)},c.createElement(E.b,{display:"block",sm:{display:"none"}},c.createElement(S,{post:n,collection:o,isAmp:l,shouldShowCollectionLogo:!0,withMonogramDark:!0,setIsMetabarLocked:p}))),c.createElement(E.G,{theme:K(o,t)},c.createElement(E.b,{display:"none",sm:{display:"block"}},c.createElement(S,{post:n,collection:o,isAmp:l,shouldShowCollectionLogo:!1,withMonogramDark:!1,setIsMetabarLocked:p})))),c.createElement(E.G,{theme:f?K(o,t):$(o,t)},c.createElement(P,{collection:o,withBorderTop:f,withTextColorSubtle:f})))}function q(e){var t=e.post,n=e.collection,o=e.isAmp,l=e.isFixed,i=e.behavior,a=e.shouldShowCollectionLogo,s=void 0===a||a,m=Object(T.useTheme)(),d=c.useState(!1),b=r()(d,2),p=b[0],f=b[1],g=n.navItems&&n.navItems.length>0,h="ACCENT_COLOR"===n.colorBehavior,x=s||g;if(Object(u.e)(function(e){return e.client.isNativeMedium}))return null;var w=function(e){return{borderTop:"1px solid ".concat(e.baseColor.border.lighter),opacity:".4"}};return c.createElement(G.a,{height:W(g),heightSm:z(s),isFixed:l,isLocked:p,behavior:i,marginBottom:0,marginBottomSm:0,breakpoint:"xs"},c.createElement(E.G,{theme:h?K(n,m):$(n,m)},c.createElement(E.b,{backgroundColor:"BACKGROUND"},c.createElement(S,{post:t,collection:n,isAmp:o,shouldShowCollectionLogo:s&&!g,withMonogramDark:!h,setIsMetabarLocked:f,breakpoint:"xs"}),x&&!h?c.createElement(T.WithCx,null,function(e){return c.createElement("div",{className:e(w)})}):null,x?c.createElement(P,{collection:n,shouldShowCollectionLogo:s,withBorderTop:h,withTextColorSubtle:h,breakpoint:"xs"}):null)))}function X(e){return c.createElement(H.a,{name:"enable_new_pub_modules"},function(t){return t?c.createElement(q,e):c.createElement(Y,e)})}n.d(t,"b",function(){return q}),n.d(t,"a",function(){return X}),n.d(t,"c",function(){return J});var J=s()(V(),y,D,N.b,N.a)}}]);
//# sourceMappingURL=screen.collection.packageBuilder~screen.landingpages.pres45~screen.landingpages.tick~screen.landingp~ed90ee39.1019a77a.chunk.js.map