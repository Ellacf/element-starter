import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "el-form-item__content:before": {
        "display": "table",
        "content": ""
    },
    "el-form-item__content:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-form-item:before": {
        "display": "table",
        "content": ""
    },
    "el-form-item:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-breadcrumb:before": {
        "display": "table",
        "content": ""
    },
    "el-breadcrumb:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-autocomplete__suggestionsis-loading li:after": {
        "display": "inline-block",
        "content": "",
        "height": "100%",
        "verticalAlign": "middle"
    },
    "el-button-group:before": {
        "display": "table",
        "content": ""
    },
    "el-button-group:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    ":root": {},
    "fade-in-linear-enter-active": {
        "transition": "opacity 200ms linear"
    },
    "fade-in-linear-leave-active": {
        "transition": "opacity 200ms linear",
        "opacity": 0
    },
    "fade-in-linear-enter": {
        "opacity": 0
    },
    "fade-in-linear-leave": {
        "opacity": 0
    },
    "fade-in-enter-active": {
        "transition": "all .3s cubic-bezier(.55,0,.1,1)"
    },
    "fade-in-leave-active": {
        "transition": "all .3s cubic-bezier(.55,0,.1,1)",
        "opacity": 0
    },
    "fade-in-enter": {
        "opacity": 0
    },
    "md-fade-center-enter-active": {
        "transition": "all .3s cubic-bezier(.55,0,.1,1)"
    },
    "md-fade-center-leave-active": {
        "transition": "all .3s cubic-bezier(.55,0,.1,1)",
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-center-enter": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-center-leave": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-bottom-enter-active": {
        "opacity": 1,
        "transform": "scaleY(1)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "center top"
    },
    "md-fade-bottom-leave-active": {
        "opacity": 0,
        "transform": "scaleY(0)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "center top"
    },
    "md-fade-bottom-enter": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-bottom-leave": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-top-enter-active": {
        "opacity": 1,
        "transform": "scaleY(1)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "center bottom"
    },
    "md-fade-top-leave-active": {
        "opacity": 0,
        "transform": "scaleY(0)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "center bottom"
    },
    "md-fade-top-enter": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-top-leave": {
        "opacity": 0,
        "transform": "scaleY(0)"
    },
    "md-fade-left-enter-active": {
        "opacity": 1,
        "transform": "scaleX(1)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "right center"
    },
    "md-fade-left-leave-active": {
        "opacity": 0,
        "transform": "scaleX(0)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "right center"
    },
    "md-fade-left-enter": {
        "opacity": 0,
        "transform": "scaleX(0)"
    },
    "md-fade-left-leave": {
        "opacity": 0,
        "transform": "scaleX(0)"
    },
    "md-fade-right-enter-active": {
        "opacity": 1,
        "transform": "scaleX(1)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "left center"
    },
    "md-fade-right-leave-active": {
        "opacity": 0,
        "transform": "scaleX(0)",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "transformOrigin": "left center"
    },
    "md-fade-right-enter": {
        "opacity": 0,
        "transform": "scaleX(0)"
    },
    "md-fade-right-leave": {
        "opacity": 0,
        "transform": "scaleX(0)"
    },
    "fade-enter-active": {
        "transition": "opacity .3s cubic-bezier(.645,.045,.355,1)"
    },
    "fade-leave-active": {
        "transition": "opacity .3s cubic-bezier(.645,.045,.355,1)",
        "opacity": 0
    },
    "fade-enter": {
        "opacity": 0
    },
    "list-move": {
        "transition": "all .5s cubic-bezier(.55,0,.1,1)"
    },
    "list-enter-active": {
        "transition": "all .5s cubic-bezier(.55,0,.1,1)"
    },
    "list-leave-active": {
        "transition": "all .5s cubic-bezier(.55,0,.1,1)",
        "opacity": 0,
        "transform": "translate(0, -30px)"
    },
    "list-enter": {
        "opacity": 0,
        "transform": "translate(0, -30px)"
    },
    "[class^=\"el-icon-\"]": {
        "fontFamily": "'element-icons' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "verticalAlign": "baseline",
        "display": "inline-block",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "[class*=\" el-icon-\"]": {
        "fontFamily": "'element-icons' !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "verticalAlign": "baseline",
        "display": "inline-block",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "el-icon-arrow-down:before": {
        "content": "\\e600"
    },
    "el-icon-arrow-left:before": {
        "content": "\\e601"
    },
    "el-icon-arrow-right:before": {
        "content": "\\e602"
    },
    "el-icon-arrow-up:before": {
        "content": "\\e603"
    },
    "el-icon-caret-bottom:before": {
        "content": "\\e604"
    },
    "el-icon-caret-left:before": {
        "content": "\\e605"
    },
    "el-icon-caret-right:before": {
        "content": "\\e606"
    },
    "el-icon-caret-top:before": {
        "content": "\\e607"
    },
    "el-icon-check:before": {
        "content": "\\e608"
    },
    "el-icon-circle-check:before": {
        "content": "\\e609"
    },
    "el-icon-circle-close:before": {
        "content": "\\e60a"
    },
    "el-icon-circle-cross:before": {
        "content": "\\e60b"
    },
    "el-icon-close:before": {
        "content": "\\e60c"
    },
    "el-icon-upload:before": {
        "content": "\\e60d"
    },
    "el-icon-d-arrow-left:before": {
        "content": "\\e60e"
    },
    "el-icon-d-arrow-right:before": {
        "content": "\\e60f"
    },
    "el-icon-d-caret:before": {
        "content": "\\e610"
    },
    "el-icon-date:before": {
        "content": "\\e611"
    },
    "el-icon-delete:before": {
        "content": "\\e612"
    },
    "el-icon-document:before": {
        "content": "\\e613"
    },
    "el-icon-edit:before": {
        "content": "\\e614"
    },
    "el-icon-information:before": {
        "content": "\\e615"
    },
    "el-icon-loading:before": {
        "content": "\\e616"
    },
    "el-icon-menu:before": {
        "content": "\\e617"
    },
    "el-icon-message:before": {
        "content": "\\e618"
    },
    "el-icon-minus:before": {
        "content": "\\e619"
    },
    "el-icon-more:before": {
        "content": "\\e61a"
    },
    "el-icon-picture:before": {
        "content": "\\e61b"
    },
    "el-icon-plus:before": {
        "content": "\\e61c"
    },
    "el-icon-search:before": {
        "content": "\\e61d"
    },
    "el-icon-setting:before": {
        "content": "\\e61e"
    },
    "el-icon-share:before": {
        "content": "\\e61f"
    },
    "el-icon-star-off:before": {
        "content": "\\e620"
    },
    "el-icon-star-on:before": {
        "content": "\\e621"
    },
    "el-icon-time:before": {
        "content": "\\e622"
    },
    "el-icon-warning:before": {
        "content": "\\e623"
    },
    "el-icon-delete2:before": {
        "content": "\\e624"
    },
    "el-icon-upload2:before": {
        "content": "\\e627"
    },
    "el-icon-view:before": {
        "content": "\\e626"
    },
    "el-icon-loading": {
        "animation": "rotating 1s linear infinite"
    },
    "el-icon--right": {
        "marginLeft": 5
    },
    "el-icon--left": {
        "marginRight": 5
    },
    "el-button": {
        "display": "inline-block",
        "lineHeight": 1,
        "whiteSpace": "nowrap",
        "cursor": "pointer",
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D",
        "WebkitAppearance": "none",
        "textAlign": "center",
        "boxSizing": "border-box",
        "outline": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "MozUserSelect": "none",
        "WebkitUserSelect": "none",
        "MsUserSelect": "none",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 14,
        "borderRadius": 4
    },
    "el-button + el-button": {
        "marginLeft": 10
    },
    "el-button:hover": {
        "color": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-button:focus": {
        "color": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-button:active": {
        "color": "rgb(18, 156, 171)",
        "borderColor": "rgb(18, 156, 171)",
        "outline": "none"
    },
    "el-button::-moz-focus-inner": {
        "border": 0
    },
    "el-button [class*=\"el-icon-\"]": {},
    "el-button [class*=\"el-icon-\"] + span": {
        "marginLeft": 5
    },
    "el-buttonis-loading": {
        "position": "relative",
        "pointerEvents": "none"
    },
    "el-buttonis-loading:before": {
        "pointerEvents": "none",
        "content": "''",
        "position": "absolute",
        "left": -1,
        "top": -1,
        "right": -1,
        "bottom": -1,
        "borderRadius": "inherit",
        "backgroundColor": "rgba(255,255,255,.35)"
    },
    "el-buttonis-disabled": {
        "color": "#C0CCDA",
        "cursor": "not-allowed",
        "backgroundImage": "none",
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6"
    },
    "el-buttonis-disabled:hover": {
        "color": "#C0CCDA",
        "cursor": "not-allowed",
        "backgroundImage": "none",
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6"
    },
    "el-buttonis-disabled:focus": {
        "color": "#C0CCDA",
        "cursor": "not-allowed",
        "backgroundImage": "none",
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6"
    },
    "el-buttonis-disabledel-button--text": {
        "backgroundColor": "transparent"
    },
    "el-buttonis-disabledis-plain": {
        "backgroundColor": "#fff",
        "borderColor": "#d3dce6",
        "color": "#C0CCDA"
    },
    "el-buttonis-disabledis-plain:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#d3dce6",
        "color": "#C0CCDA"
    },
    "el-buttonis-disabledis-plain:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#d3dce6",
        "color": "#C0CCDA"
    },
    "el-buttonis-active": {
        "color": "rgb(18, 156, 171)",
        "borderColor": "rgb(18, 156, 171)"
    },
    "el-buttonis-plain": {},
    "el-buttonis-plain:hover": {
        "background": "#fff",
        "borderColor": "#14adbe",
        "color": "#14adbe"
    },
    "el-buttonis-plain:focus": {
        "background": "#fff",
        "borderColor": "#14adbe",
        "color": "#14adbe"
    },
    "el-buttonis-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(18, 156, 171)",
        "color": "rgb(18, 156, 171)",
        "outline": "none"
    },
    "el-button--primary": {
        "color": "#fff",
        "backgroundColor": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-button--primary:hover": {
        "background": "rgb(67, 189, 203)",
        "borderColor": "rgb(67, 189, 203)",
        "color": "#fff"
    },
    "el-button--primary:focus": {
        "background": "rgb(67, 189, 203)",
        "borderColor": "rgb(67, 189, 203)",
        "color": "#fff"
    },
    "el-button--primary:active": {
        "background": "rgb(18, 156, 171)",
        "borderColor": "rgb(18, 156, 171)",
        "color": "#fff",
        "outline": "none"
    },
    "el-button--primaryis-active": {
        "background": "rgb(18, 156, 171)",
        "borderColor": "rgb(18, 156, 171)",
        "color": "#fff"
    },
    "el-button--primaryis-plain": {
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D"
    },
    "el-button--primaryis-plain:hover": {
        "background": "#fff",
        "borderColor": "#14adbe",
        "color": "#14adbe"
    },
    "el-button--primaryis-plain:focus": {
        "background": "#fff",
        "borderColor": "#14adbe",
        "color": "#14adbe"
    },
    "el-button--primaryis-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(18, 156, 171)",
        "color": "rgb(18, 156, 171)",
        "outline": "none"
    },
    "el-button--success": {
        "color": "#fff",
        "backgroundColor": "#13ce66",
        "borderColor": "#13ce66"
    },
    "el-button--success:hover": {
        "background": "rgb(66, 216, 133)",
        "borderColor": "rgb(66, 216, 133)",
        "color": "#fff"
    },
    "el-button--success:focus": {
        "background": "rgb(66, 216, 133)",
        "borderColor": "rgb(66, 216, 133)",
        "color": "#fff"
    },
    "el-button--success:active": {
        "background": "rgb(17, 185, 92)",
        "borderColor": "rgb(17, 185, 92)",
        "color": "#fff",
        "outline": "none"
    },
    "el-button--successis-active": {
        "background": "rgb(17, 185, 92)",
        "borderColor": "rgb(17, 185, 92)",
        "color": "#fff"
    },
    "el-button--successis-plain": {
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D"
    },
    "el-button--successis-plain:hover": {
        "background": "#fff",
        "borderColor": "#13ce66",
        "color": "#13ce66"
    },
    "el-button--successis-plain:focus": {
        "background": "#fff",
        "borderColor": "#13ce66",
        "color": "#13ce66"
    },
    "el-button--successis-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(17, 185, 92)",
        "color": "rgb(17, 185, 92)",
        "outline": "none"
    },
    "el-button--warning": {
        "color": "#fff",
        "backgroundColor": "#f7ba2a",
        "borderColor": "#f7ba2a"
    },
    "el-button--warning:hover": {
        "background": "rgb(249, 200, 85)",
        "borderColor": "rgb(249, 200, 85)",
        "color": "#fff"
    },
    "el-button--warning:focus": {
        "background": "rgb(249, 200, 85)",
        "borderColor": "rgb(249, 200, 85)",
        "color": "#fff"
    },
    "el-button--warning:active": {
        "background": "rgb(222, 167, 38)",
        "borderColor": "rgb(222, 167, 38)",
        "color": "#fff",
        "outline": "none"
    },
    "el-button--warningis-active": {
        "background": "rgb(222, 167, 38)",
        "borderColor": "rgb(222, 167, 38)",
        "color": "#fff"
    },
    "el-button--warningis-plain": {
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D"
    },
    "el-button--warningis-plain:hover": {
        "background": "#fff",
        "borderColor": "#f7ba2a",
        "color": "#f7ba2a"
    },
    "el-button--warningis-plain:focus": {
        "background": "#fff",
        "borderColor": "#f7ba2a",
        "color": "#f7ba2a"
    },
    "el-button--warningis-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(222, 167, 38)",
        "color": "rgb(222, 167, 38)",
        "outline": "none"
    },
    "el-button--danger": {
        "color": "#fff",
        "backgroundColor": "#ff4949",
        "borderColor": "#ff4949"
    },
    "el-button--danger:hover": {
        "background": "rgb(255, 109, 109)",
        "borderColor": "rgb(255, 109, 109)",
        "color": "#fff"
    },
    "el-button--danger:focus": {
        "background": "rgb(255, 109, 109)",
        "borderColor": "rgb(255, 109, 109)",
        "color": "#fff"
    },
    "el-button--danger:active": {
        "background": "rgb(230, 66, 66)",
        "borderColor": "rgb(230, 66, 66)",
        "color": "#fff",
        "outline": "none"
    },
    "el-button--dangeris-active": {
        "background": "rgb(230, 66, 66)",
        "borderColor": "rgb(230, 66, 66)",
        "color": "#fff"
    },
    "el-button--dangeris-plain": {
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D"
    },
    "el-button--dangeris-plain:hover": {
        "background": "#fff",
        "borderColor": "#ff4949",
        "color": "#ff4949"
    },
    "el-button--dangeris-plain:focus": {
        "background": "#fff",
        "borderColor": "#ff4949",
        "color": "#ff4949"
    },
    "el-button--dangeris-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(230, 66, 66)",
        "color": "rgb(230, 66, 66)",
        "outline": "none"
    },
    "el-button--info": {
        "color": "#fff",
        "backgroundColor": "#50BFFF",
        "borderColor": "#50BFFF"
    },
    "el-button--info:hover": {
        "background": "rgb(115, 204, 255)",
        "borderColor": "rgb(115, 204, 255)",
        "color": "#fff"
    },
    "el-button--info:focus": {
        "background": "rgb(115, 204, 255)",
        "borderColor": "rgb(115, 204, 255)",
        "color": "#fff"
    },
    "el-button--info:active": {
        "background": "rgb(72, 172, 230)",
        "borderColor": "rgb(72, 172, 230)",
        "color": "#fff",
        "outline": "none"
    },
    "el-button--infois-active": {
        "background": "rgb(72, 172, 230)",
        "borderColor": "rgb(72, 172, 230)",
        "color": "#fff"
    },
    "el-button--infois-plain": {
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D"
    },
    "el-button--infois-plain:hover": {
        "background": "#fff",
        "borderColor": "#50BFFF",
        "color": "#50BFFF"
    },
    "el-button--infois-plain:focus": {
        "background": "#fff",
        "borderColor": "#50BFFF",
        "color": "#50BFFF"
    },
    "el-button--infois-plain:active": {
        "background": "#fff",
        "borderColor": "rgb(72, 172, 230)",
        "color": "rgb(72, 172, 230)",
        "outline": "none"
    },
    "el-button--large": {
        "paddingTop": 11,
        "paddingRight": 19,
        "paddingBottom": 11,
        "paddingLeft": 19,
        "fontSize": 16,
        "borderRadius": 4
    },
    "el-button--small": {
        "paddingTop": 7,
        "paddingRight": 9,
        "paddingBottom": 7,
        "paddingLeft": 9,
        "fontSize": 12,
        "borderRadius": 4
    },
    "el-button--mini": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "fontSize": 12,
        "borderRadius": 4
    },
    "el-button--text": {
        "border": "none",
        "color": "#14adbe",
        "background": "transparent",
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "el-button--text:hover": {
        "color": "rgb(67, 189, 203)"
    },
    "el-button--text:focus": {
        "color": "rgb(67, 189, 203)"
    },
    "el-button--text:active": {
        "color": "rgb(18, 156, 171)"
    },
    "el-button-group": {
        "display": "inline-block"
    },
    "el-button-group el-button--primary": {},
    "el-button-group el-button--primary:first-child": {
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--primary:last-child": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--primary:not(:first-child):not(:last-child)": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)",
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--success": {},
    "el-button-group el-button--success:first-child": {
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--success:last-child": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--success:not(:first-child):not(:last-child)": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)",
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--warning": {},
    "el-button-group el-button--warning:first-child": {
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--warning:last-child": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--warning:not(:first-child):not(:last-child)": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)",
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--danger": {},
    "el-button-group el-button--danger:first-child": {
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--danger:last-child": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--danger:not(:first-child):not(:last-child)": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)",
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--info": {},
    "el-button-group el-button--info:first-child": {
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--info:last-child": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button--info:not(:first-child):not(:last-child)": {
        "borderLeftColor": "rgba(255, 255, 255, 0.5)",
        "borderRightColor": "rgba(255, 255, 255, 0.5)"
    },
    "el-button-group el-button": {
        "float": "left",
        "position": "relative"
    },
    "el-button-group el-button + el-button": {
        "marginLeft": 0
    },
    "el-button-group el-button:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "el-button-group el-button:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "el-button-group el-button:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "el-button-group el-button:not(:last-child)": {
        "marginRight": -1
    },
    "el-button-group el-button:hover": {
        "zIndex": 1
    },
    "el-button-group el-button:focus": {
        "zIndex": 1
    },
    "el-button-group el-button:active": {
        "zIndex": 1
    },
    "el-button-group el-buttonis-active": {
        "zIndex": 1
    },
    "el-input": {
        "position": "relative",
        "fontSize": 14
    },
    "el-inputis-disabled el-input__inner": {
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6",
        "color": "#bbb",
        "cursor": "not-allowed"
    },
    "el-inputis-disabled el-input__inner::-webkit-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-inputis-disabled el-input__inner::-moz-placeholder": {
        "color": "#C0CCDA"
    },
    "el-inputis-disabled el-input__inner:-ms-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-inputis-disabled el-input__inner::placeholder": {
        "color": "#C0CCDA"
    },
    "el-inputis-active el-input__inner": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-input__inner": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "boxSizing": "border-box",
        "width": "100%",
        "height": 36,
        "color": "#1f2d3d",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "border": "1px solid #C0CCDA",
        "borderRadius": 4,
        "transition": "border-color .2s cubic-bezier(.645,.045,.355,1)",
        "outline": "none",
        "fontSize": "inherit",
        "lineHeight": "normal"
    },
    "el-input__inner::-webkit-input-placeholder": {
        "color": "#99a9bf"
    },
    "el-input__inner::-moz-placeholder": {
        "color": "#99a9bf"
    },
    "el-input__inner:-ms-input-placeholder": {
        "color": "#99a9bf"
    },
    "el-input__inner::placeholder": {
        "color": "#99a9bf"
    },
    "el-input__inner:hover": {
        "borderColor": "#8492a6"
    },
    "el-input__inner:focus": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-input__icon": {
        "position": "absolute",
        "width": 35,
        "height": "100%",
        "right": 0,
        "textAlign": "center",
        "color": "#C0CCDA"
    },
    "el-input__icon:after": {
        "content": "''",
        "height": "100%",
        "width": 0,
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "el-input__icon + el-input__inner": {
        "paddingRight": 35
    },
    "el-input--large": {
        "fontSize": 16
    },
    "el-input--large el-input__inner": {
        "height": 42
    },
    "el-input--small": {
        "fontSize": 13
    },
    "el-input--small el-input__inner": {
        "height": 30
    },
    "el-input--mini": {
        "fontSize": 12
    },
    "el-input--mini el-input__inner": {
        "height": 22
    },
    "el-input-group": {
        "lineHeight": "normal",
        "display": "table",
        "borderCollapse": "separate"
    },
    "el-input-group > el-input__inner": {
        "verticalAlign": "middle",
        "display": "table-cell"
    },
    "el-input-group el-input__inner:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "el-input-group el-input__inner:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "el-input-group el-input__inner:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "el-input-group__append": {
        "backgroundColor": "#f9fafc",
        "color": "#99a9bf",
        "verticalAlign": "middle",
        "display": "table-cell",
        "position": "relative",
        "border": "1px solid #C0CCDA",
        "borderRadius": 4,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": "1%",
        "whiteSpace": "nowrap",
        "borderLeft": 0,
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "el-input-group__prepend": {
        "backgroundColor": "#f9fafc",
        "color": "#99a9bf",
        "verticalAlign": "middle",
        "display": "table-cell",
        "position": "relative",
        "border": "1px solid #C0CCDA",
        "borderRadius": 4,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "width": "1%",
        "whiteSpace": "nowrap",
        "borderRight": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "el-input-group__append el-select": {
        "display": "block",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10
    },
    "el-input-group__append el-button": {
        "display": "block",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10,
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0,
        "fontSize": "inherit"
    },
    "el-input-group__prepend el-select": {
        "display": "block",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10
    },
    "el-input-group__prepend el-button": {
        "display": "block",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10,
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0,
        "fontSize": "inherit"
    },
    "el-input-group__append el-select el-input__inner": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0
    },
    "el-input-group__append el-select:hover el-input__inner": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0
    },
    "el-input-group__prepend el-select el-input__inner": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0
    },
    "el-input-group__prepend el-select:hover el-input__inner": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "inherit",
        "borderTop": 0,
        "borderBottom": 0
    },
    "el-input-group__append el-input": {
        "fontSize": "inherit"
    },
    "el-input-group__prepend el-input": {
        "fontSize": "inherit"
    },
    "el-textarea": {},
    "el-textareais-disabled el-textarea__inner": {
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6",
        "color": "#bbb",
        "cursor": "not-allowed"
    },
    "el-textareais-disabled el-textarea__inner::-webkit-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-textareais-disabled el-textarea__inner::-moz-placeholder": {
        "color": "#C0CCDA"
    },
    "el-textareais-disabled el-textarea__inner:-ms-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-textareais-disabled el-textarea__inner::placeholder": {
        "color": "#C0CCDA"
    },
    "el-textarea__inner": {
        "display": "block",
        "resize": "vertical",
        "paddingTop": 5,
        "paddingRight": 7,
        "paddingBottom": 5,
        "paddingLeft": 7,
        "lineHeight": 1.5,
        "boxSizing": "border-box",
        "width": "100%",
        "fontSize": 14,
        "color": "#1f2d3d",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "border": "1px solid #C0CCDA",
        "borderRadius": 4,
        "transition": "border-color .2s cubic-bezier(.645,.045,.355,1)"
    },
    "el-textarea__inner::-webkit-input-placeholder": {
        "color": "#99a9bf"
    },
    "el-textarea__inner::-moz-placeholder": {
        "color": "#99a9bf"
    },
    "el-textarea__inner:-ms-input-placeholder": {
        "color": "#99a9bf"
    },
    "el-textarea__inner::placeholder": {
        "color": "#99a9bf"
    },
    "el-textarea__inner:hover": {
        "borderColor": "#8492a6"
    },
    "el-textarea__inner:focus": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-select-dropdown": {
        "position": "absolute",
        "zIndex": 1001,
        "border": "solid 1px #d3dce6",
        "borderRadius": 2,
        "backgroundColor": "#fff",
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",
        "boxSizing": "border-box",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "el-select-dropdownis-multiple": {},
    "el-select-dropdownis-multiple el-select-dropdown__itemselected": {
        "color": "#14adbe",
        "backgroundColor": "#fff"
    },
    "el-select-dropdownis-multiple el-select-dropdown__itemselectedhover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-select-dropdownis-multiple el-select-dropdown__itemselected::after": {
        "position": "absolute",
        "right": 10,
        "fontFamily": "'element-icons'",
        "content": "\\E608",
        "fontSize": 11,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "el-select-dropdown__empty": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center",
        "color": "#999",
        "fontSize": 14
    },
    "el-select-dropdown__list": {
        "listStyle": "none",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "maxHeight": 274,
        "boxSizing": "border-box",
        "overflowY": "auto"
    },
    "el-tag": {
        "backgroundColor": "#8492a6",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "height": 22,
        "lineHeight": 22,
        "fontSize": 12,
        "color": "#fff",
        "borderRadius": 4,
        "border": "1px solid #8492a6"
    },
    "el-tag el-icon-close": {
        "borderRadius": "50%",
        "textAlign": "center",
        "position": "relative",
        "cursor": "pointer",
        "fontSize": 12,
        "transform": "scale(.75, .75)",
        "height": 18,
        "width": 18,
        "lineHeight": 18,
        "verticalAlign": "middle",
        "top": -1,
        "right": -2
    },
    "el-tag el-icon-close:hover": {
        "backgroundColor": "#fff",
        "color": "#8492a6"
    },
    "el-tag--gray": {
        "backgroundColor": "#e5e9f2",
        "borderColor": "#e5e9f2",
        "color": "#475669"
    },
    "el-tag--gray el-tag__close:hover": {
        "backgroundColor": "#475669",
        "color": "#fff"
    },
    "el-tag--grayis-hit": {
        "borderColor": "#475669"
    },
    "el-tag--primary": {
        "backgroundColor": "rgba(32,159,255,0.10)",
        "borderColor": "rgba(32,159,255,0.20)",
        "color": "#14adbe"
    },
    "el-tag--primary el-tag__close:hover": {
        "backgroundColor": "#14adbe",
        "color": "#fff"
    },
    "el-tag--primaryis-hit": {
        "borderColor": "#14adbe"
    },
    "el-tag--success": {
        "backgroundColor": "rgba(18,206,102,0.10)",
        "borderColor": "rgba(18,206,102,0.20)",
        "color": "#13ce66"
    },
    "el-tag--success el-tag__close:hover": {
        "backgroundColor": "#13ce66",
        "color": "#fff"
    },
    "el-tag--successis-hit": {
        "borderColor": "#13ce66"
    },
    "el-tag--warning": {
        "backgroundColor": "rgba(247,186,41,0.10)",
        "borderColor": "rgba(247,186,41,0.20)",
        "color": "#f7ba2a"
    },
    "el-tag--warning el-tag__close:hover": {
        "backgroundColor": "#f7ba2a",
        "color": "#fff"
    },
    "el-tag--warningis-hit": {
        "borderColor": "#f7ba2a"
    },
    "el-tag--danger": {
        "backgroundColor": "rgba(255,73,73,0.10)",
        "borderColor": "rgba(255,73,73,0.20)",
        "color": "#ff4949"
    },
    "el-tag--danger el-tag__close:hover": {
        "backgroundColor": "#ff4949",
        "color": "#fff"
    },
    "el-tag--dangeris-hit": {
        "borderColor": "#ff4949"
    },
    "el-select-dropdown__item": {
        "fontSize": 14,
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "position": "relative",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "color": "#475669",
        "height": 36,
        "lineHeight": 1.5,
        "boxSizing": "border-box",
        "cursor": "pointer"
    },
    "el-select-dropdown__itemhover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-select-dropdown__itemselected": {
        "color": "#fff",
        "backgroundColor": "#14adbe"
    },
    "el-select-dropdown__itemselectedhover": {
        "backgroundColor": "#d3dce6"
    },
    "el-select-dropdown__item span": {
        "lineHeight": "1.5 !important"
    },
    "el-select-dropdown__itemis-disabled": {
        "color": "#C0CCDA",
        "cursor": "not-allowed"
    },
    "el-select-dropdown__itemis-disabled:hover": {
        "backgroundColor": "#fff"
    },
    "el-select-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-select-group el-select-dropdown__item": {
        "paddingLeft": 20
    },
    "el-select-group__wrap": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-select-group__title": {
        "paddingLeft": 10,
        "fontSize": 12,
        "color": "#999",
        "height": 30,
        "lineHeight": 30
    },
    "el-select": {
        "display": "block",
        "position": "relative"
    },
    "el-select:hover el-input__inner": {
        "borderColor": "#8492a6"
    },
    "el-select el-input__inner": {
        "cursor": "pointer"
    },
    "el-select el-input__inner:focus": {
        "borderColor": "#2ea0ff"
    },
    "el-select el-input": {},
    "el-select el-input el-input__icon": {
        "color": "#C0CCDA",
        "fontSize": 12,
        "transition": "transform .3s",
        "transform": "translateY(-50%) rotateZ(180deg)",
        "lineHeight": 16,
        "top": "50%",
        "cursor": "pointer"
    },
    "el-select el-input el-input__iconis-show-close": {
        "transition": "0s",
        "width": 16,
        "height": 16,
        "fontSize": 14,
        "right": 8,
        "textAlign": "center",
        "transform": "translateY(-50%) rotateZ(180deg)",
        "borderRadius": "100%",
        "color": "#C0CCDA"
    },
    "el-select el-input el-input__iconis-show-close:hover": {
        "color": "#99a9bf"
    },
    "el-select el-input el-input__iconis-reverse": {
        "transform": "translateY(-50%)"
    },
    "el-select el-inputis-disabled": {},
    "el-select el-inputis-disabled el-input__inner": {
        "cursor": "not-allowed"
    },
    "el-select el-inputis-disabled el-input__inner:hover": {
        "borderColor": "#D3DCE6"
    },
    "el-select el-tag__close": {
        "marginTop": -2
    },
    "el-select el-tag": {
        "height": 24,
        "lineHeight": 24,
        "boxSizing": "border-box",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 6
    },
    "el-selectis-small": {},
    "el-selectis-small input": {
        "borderRadius": 2,
        "height": 28
    },
    "el-select__input": {
        "border": "none",
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": -3,
        "marginLeft": 10,
        "color": "#666",
        "fontSize": 14,
        "verticalAlign": "baseline",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "height": 28,
        "backgroundColor": "transparent"
    },
    "el-select__close": {
        "cursor": "pointer",
        "position": "absolute",
        "top": 8,
        "zIndex": 1000,
        "right": 25,
        "color": "#C0CCDA",
        "lineHeight": 18,
        "fontSize": 12
    },
    "el-select__close:hover": {
        "color": "#99a9bf"
    },
    "el-select__tags": {
        "position": "absolute",
        "lineHeight": "normal",
        "whiteSpace": "normal",
        "zIndex": 1000
    },
    "el-select__tag": {
        "display": "inline-block",
        "height": 24,
        "lineHeight": 24,
        "fontSize": 14,
        "borderRadius": 4,
        "color": "#fff",
        "backgroundColor": "#14adbe"
    },
    "el-select__tag el-icon-close": {
        "fontSize": 12
    },
    "el-alert": {
        "width": "100%",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "boxSizing": "border-box",
        "borderRadius": 4,
        "position": "relative",
        "backgroundColor": "#fff",
        "overflow": "hidden",
        "color": "#fff",
        "opacity": 1,
        "display": "table",
        "transition": "opacity .2s"
    },
    "el-alert el-alert__description": {
        "color": "#fff",
        "fontSize": 12,
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-alert--success": {
        "backgroundColor": "#13ce66"
    },
    "el-alert--info": {
        "backgroundColor": "#50BFFF"
    },
    "el-alert--warning": {
        "backgroundColor": "#f7ba2a"
    },
    "el-alert--error": {
        "backgroundColor": "#ff4949"
    },
    "el-alert__content": {
        "display": "table-cell",
        "paddingLeft": 8
    },
    "el-alert__icon": {
        "fontSize": 16,
        "width": 16,
        "display": "table-cell",
        "color": "#fff",
        "verticalAlign": "middle"
    },
    "el-alert__iconis-big": {
        "fontSize": 28,
        "width": 28
    },
    "el-alert__title": {
        "fontSize": 13,
        "lineHeight": 18
    },
    "el-alert__titleis-bold": {
        "fontWeight": "700"
    },
    "el-alert__closebtn": {
        "fontSize": 12,
        "color": "#fff",
        "opacity": 1,
        "top": 12,
        "right": 15,
        "position": "absolute",
        "cursor": "pointer"
    },
    "el-alert__closebtnis-customed": {
        "fontStyle": "normal",
        "fontSize": 13,
        "top": 9
    },
    "el-alert-fade-enter": {
        "opacity": 0
    },
    "el-alert-fade-leave-active": {
        "opacity": 0
    },
    "el-notification": {
        "width": 330,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "boxSizing": "border-box",
        "borderRadius": 2,
        "position": "fixed",
        "right": 16,
        "backgroundColor": "#fff",
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",
        "transition": "opacity 0.3s, transform .3s, right .3s, top 0.4s",
        "overflow": "hidden"
    },
    "el-notification el-icon-circle-check": {
        "color": "#14adbe"
    },
    "el-notification el-icon-circle-cross": {
        "color": "#ff4949"
    },
    "el-notification el-icon-information": {
        "color": "#50BFFF"
    },
    "el-notification el-icon-warning": {
        "color": "#f7ba2a"
    },
    "el-notification__group": {},
    "el-notification__group span": {
        "fontSize": 16,
        "color": "#1f2d3d"
    },
    "el-notification__group p": {
        "fontSize": 14,
        "lineHeight": 21,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#8492a6",
        "textAlign": "justify"
    },
    "el-notification__icon": {
        "width": 40,
        "height": 40,
        "fontSize": 40,
        "float": "left",
        "position": "relative",
        "top": 3
    },
    "el-notification__closeBtn": {
        "top": 20,
        "right": 20,
        "position": "absolute",
        "cursor": "pointer",
        "color": "#C0CCDA",
        "fontSize": 14
    },
    "el-notification__closeBtn:hover": {
        "color": "#99A9BF"
    },
    "el-notification-fade-enter": {
        "transform": "translateX(100%)",
        "right": 0
    },
    "el-notification-fade-leave-active": {
        "opacity": 0
    },
    "el-input-number": {
        "display": "inline-block",
        "overflow": "hidden",
        "width": 180,
        "position": "relative"
    },
    "el-input-number el-input__inner": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "paddingRight": 82
    },
    "el-input-numberis-disabled el-input-number__increase": {
        "borderColor": "#D3DCE6",
        "color": "#D3DCE6"
    },
    "el-input-numberis-disabled el-input-number__decrease": {
        "borderColor": "#D3DCE6",
        "color": "#D3DCE6"
    },
    "el-input-numberis-disabled el-input-number__increase:hover": {
        "color": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-input-numberis-disabled el-input-number__decrease:hover": {
        "color": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-input-number__increase": {
        "height": "auto",
        "borderLeft": "1px solid #C0CCDA",
        "width": 36,
        "lineHeight": 34,
        "top": 1,
        "textAlign": "center",
        "color": "#99A9BF",
        "cursor": "pointer",
        "position": "absolute",
        "right": 0
    },
    "el-input-number__decrease": {
        "height": "auto",
        "borderLeft": "1px solid #C0CCDA",
        "width": 36,
        "lineHeight": 34,
        "top": 1,
        "textAlign": "center",
        "color": "#99A9BF",
        "cursor": "pointer",
        "position": "absolute",
        "right": 37
    },
    "el-input-number__increase:hover": {
        "color": "#14adbe"
    },
    "el-input-number__decrease:hover": {
        "color": "#14adbe"
    },
    "el-input-number__increaseis-disabled": {
        "color": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-input-number__decreaseis-disabled": {
        "color": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-input-number--large": {
        "width": 200
    },
    "el-input-number--large el-input-number__increase": {
        "lineHeight": 42,
        "width": 42,
        "fontSize": 16
    },
    "el-input-number--large el-input-number__decrease": {
        "lineHeight": 42,
        "width": 42,
        "fontSize": 16,
        "right": 43
    },
    "el-input-number--large el-input__inner": {
        "paddingRight": 94
    },
    "el-input-number--small": {
        "width": 130
    },
    "el-input-number--small el-input-number__increase": {
        "lineHeight": 30,
        "width": 30,
        "fontSize": 13
    },
    "el-input-number--small el-input-number__decrease": {
        "lineHeight": 30,
        "width": 30,
        "fontSize": 13,
        "right": 31
    },
    "el-input-number--small el-input__inner": {
        "paddingRight": 70
    },
    "el-tooltip": {
        "display": "inline-block"
    },
    "el-tooltip__rel": {
        "display": "inline-block",
        "position": "relative"
    },
    "el-tooltip__popper": {
        "position": "absolute",
        "borderRadius": 4,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "zIndex": 2000,
        "fontSize": 12,
        "lineHeight": 1.2
    },
    "el-tooltip__popper popper__arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 6
    },
    "el-tooltip__popper popper__arrow::after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "content": " ",
        "borderWidth": 5
    },
    "el-tooltip__popper[x-placement^=\"top\"]": {
        "marginBottom": 12
    },
    "el-tooltip__popper[x-placement^=\"top\"] popper__arrow": {
        "bottom": -6,
        "borderTopColor": "#1f2d3d",
        "borderBottomWidth": 0
    },
    "el-tooltip__popper[x-placement^=\"top\"] popper__arrow::after": {
        "bottom": 1,
        "marginLeft": -5,
        "borderTopColor": "#1f2d3d",
        "borderBottomWidth": 0
    },
    "el-tooltip__popper[x-placement^=\"bottom\"]": {
        "marginTop": 12
    },
    "el-tooltip__popper[x-placement^=\"bottom\"] popper__arrow": {
        "top": -6,
        "borderTopWidth": 0,
        "borderBottomColor": "#1f2d3d"
    },
    "el-tooltip__popper[x-placement^=\"bottom\"] popper__arrow::after": {
        "top": 1,
        "marginLeft": -5,
        "borderTopWidth": 0,
        "borderBottomColor": "#1f2d3d"
    },
    "el-tooltip__popper[x-placement^=\"right\"]": {
        "marginLeft": 12
    },
    "el-tooltip__popper[x-placement^=\"right\"] popper__arrow": {
        "left": -6,
        "borderRightColor": "#1f2d3d",
        "borderLeftWidth": 0
    },
    "el-tooltip__popper[x-placement^=\"right\"] popper__arrow::after": {
        "bottom": -5,
        "left": 1,
        "borderRightColor": "#1f2d3d",
        "borderLeftWidth": 0
    },
    "el-tooltip__popper[x-placement^=\"left\"]": {
        "marginRight": 12
    },
    "el-tooltip__popper[x-placement^=\"left\"] popper__arrow": {
        "right": -6,
        "borderRightWidth": 0,
        "borderLeftColor": "#1f2d3d"
    },
    "el-tooltip__popper[x-placement^=\"left\"] popper__arrow::after": {
        "right": 1,
        "bottom": -5,
        "marginLeft": -5,
        "borderRightWidth": 0,
        "borderLeftColor": "#1f2d3d"
    },
    "el-tooltip__popperis-light": {
        "background": "#fff",
        "border": "1px solid #1f2d3d"
    },
    "el-tooltip__popperis-light[x-placement^=\"top\"] popper__arrow": {
        "borderTopColor": "#1f2d3d"
    },
    "el-tooltip__popperis-light[x-placement^=\"top\"] popper__arrow::after": {
        "borderTopColor": "#fff"
    },
    "el-tooltip__popperis-light[x-placement^=\"bottom\"] popper__arrow": {
        "borderBottomColor": "#1f2d3d"
    },
    "el-tooltip__popperis-light[x-placement^=\"bottom\"] popper__arrow::after": {
        "borderBottomColor": "#fff"
    },
    "el-tooltip__popperis-light[x-placement^=\"left\"] popper__arrow": {
        "borderLeftColor": "#1f2d3d"
    },
    "el-tooltip__popperis-light[x-placement^=\"left\"] popper__arrow::after": {
        "borderLeftColor": "#fff"
    },
    "el-tooltip__popperis-light[x-placement^=\"right\"] popper__arrow": {
        "borderRightColor": "#1f2d3d"
    },
    "el-tooltip__popperis-light[x-placement^=\"right\"] popper__arrow::after": {
        "borderRightColor": "#fff"
    },
    "el-tooltip__popperis-dark": {
        "background": "#1f2d3d",
        "color": "#fff"
    },
    "el-slider": {},
    "el-slider:before": {
        "display": "table",
        "content": ""
    },
    "el-slider:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-slider__runway": {
        "width": "100%",
        "height": 4,
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 16,
        "marginLeft": 0,
        "backgroundColor": "#e5e9f2",
        "borderRadius": 3,
        "position": "relative",
        "cursor": "pointer",
        "verticalAlign": "middle"
    },
    "el-slider__runwayshow-input": {
        "marginRight": 160,
        "width": "auto"
    },
    "el-slider__runwaydisabled": {
        "cursor": "default"
    },
    "el-slider__runwaydisabled el-slider__bar": {
        "backgroundColor": "#C0CCDA"
    },
    "el-slider__runwaydisabled el-slider__button": {
        "backgroundColor": "#C0CCDA"
    },
    "el-slider__runwaydisabled el-slider__button-wrapper": {},
    "el-slider__runwaydisabled el-slider__button-wrapper:hover": {
        "cursor": "not-allowed"
    },
    "el-slider__runwaydisabled el-slider__button-wrapperhover": {
        "cursor": "not-allowed"
    },
    "el-slider__runwaydisabled el-slider__button-wrapperdragging": {
        "cursor": "not-allowed"
    },
    "el-slider__runwaydisabled el-slider__button:hover": {
        "transform": "scale(1)",
        "cursor": "not-allowed"
    },
    "el-slider__runwaydisabled el-slider__buttonhover": {
        "transform": "scale(1)",
        "cursor": "not-allowed"
    },
    "el-slider__runwaydisabled el-slider__buttondragging": {
        "transform": "scale(1)",
        "cursor": "not-allowed"
    },
    "el-slider__input": {
        "float": "right",
        "marginTop": 3
    },
    "el-slider__bar": {
        "height": 4,
        "backgroundColor": "#14adbe",
        "borderTopLeftRadius": 3,
        "borderBottomLeftRadius": 3,
        "position": "absolute"
    },
    "el-slider__button-wrapper": {
        "width": 36,
        "height": 36,
        "position": "absolute",
        "zIndex": 1001,
        "top": -16,
        "transform": "translateX(-50%)",
        "backgroundColor": "transparent",
        "textAlign": "center"
    },
    "el-slider__button-wrapper el-tooltip": {
        "lineHeight": 1,
        "height": "100%",
        "display": "block"
    },
    "el-slider__button-wrapper el-tooltip::after": {
        "content": "''",
        "width": 0,
        "height": "100%",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "el-slider__button-wrapper el-tooltip__rel": {
        "verticalAlign": "middle"
    },
    "el-slider__button-wrapper:hover": {
        "cursor": "grab"
    },
    "el-slider__button-wrapperhover": {
        "cursor": "grab"
    },
    "el-slider__button-wrapperdragging": {
        "cursor": "grabbing"
    },
    "el-slider__button": {
        "width": 12,
        "height": 12,
        "backgroundColor": "#14adbe",
        "borderRadius": "50%",
        "transition": ".2s"
    },
    "el-slider__button:hover": {
        "transform": "scale(1.5)",
        "backgroundColor": "#d3dce6",
        "cursor": "grab"
    },
    "el-slider__buttonhover": {
        "transform": "scale(1.5)",
        "backgroundColor": "#d3dce6",
        "cursor": "grab"
    },
    "el-slider__buttondragging": {
        "transform": "scale(1.5)",
        "backgroundColor": "#d3dce6",
        "cursor": "grabbing"
    },
    "el-slider__stop": {
        "position": "absolute",
        "width": 4,
        "height": 4,
        "borderRadius": "100%",
        "backgroundColor": "#C0CCDA",
        "transform": "translateX(-50%)"
    },
    "el-checkbox": {
        "color": "#1f2d3d",
        "position": "relative",
        "cursor": "pointer",
        "display": "inline-block",
        "whiteSpace": "nowrap",
        "MozUserSelect": "none",
        "WebkitUserSelect": "none",
        "MsUserSelect": "none"
    },
    "el-checkbox + el-checkbox": {
        "marginLeft": 15
    },
    "el-checkbox__input": {
        "whiteSpace": "nowrap",
        "cursor": "pointer",
        "outline": "none",
        "display": "inline-block",
        "lineHeight": 1,
        "position": "relative",
        "verticalAlign": "middle"
    },
    "el-checkbox__inner": {
        "display": "inline-block",
        "position": "relative",
        "border": "1px solid #C0CCDA",
        "borderRadius": 4,
        "boxSizing": "border-box",
        "width": 18,
        "height": 18,
        "backgroundColor": "#fff",
        "zIndex": 1,
        "transition": "border-color .25s cubic-bezier(.71,-.46,.29,1.46),                  background-color .25s cubic-bezier(.71,-.46,.29,1.46)"
    },
    "el-checkbox__inner:not(is-disabled):hover": {
        "borderColor": "#14adbe"
    },
    "el-checkbox__inner::after": {
        "content": "",
        "border": "2px solid #fff",
        "borderLeft": 0,
        "borderTop": 0,
        "height": 8,
        "left": 5,
        "position": "absolute",
        "top": 1,
        "transform": "rotate(45deg) scaleY(0)",
        "width": 4,
        "transition": "transform .15s cubic-bezier(.71,-.46,.88,.6) .05s",
        "transformOrigin": "center"
    },
    "el-checkbox__inneris-disabledis-checked": {
        "backgroundColor": "#D3DCE6",
        "borderColor": "#D3DCE6"
    },
    "el-checkbox__inneris-disabledis-checked::after": {
        "borderColor": "#fff"
    },
    "el-checkbox__inneris-disabledis-indeterminate": {
        "backgroundColor": "#D3DCE6",
        "borderColor": "#D3DCE6"
    },
    "el-checkbox__inneris-disabledis-indeterminate::before": {
        "borderColor": "#fff"
    },
    "el-checkbox__inneris-indeterminate": {
        "backgroundColor": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-checkbox__inneris-indeterminate::before": {
        "content": "''",
        "position": "absolute",
        "display": "block",
        "border": "1px solid #fff",
        "marginTop": -1,
        "left": 3,
        "right": 3,
        "top": "50%"
    },
    "el-checkbox__inneris-indeterminate::after": {
        "display": "none"
    },
    "el-checkbox__inneris-focus": {
        "borderColor": "#14adbe"
    },
    "el-checkbox__inneris-checked": {
        "backgroundColor": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-checkbox__inneris-checked::after": {
        "transform": "rotate(45deg) scaleY(1)"
    },
    "el-checkbox__inneris-disabled": {
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-checkbox__inneris-disabled::after": {
        "cursor": "not-allowed",
        "borderColor": "#EFF2F7"
    },
    "el-checkbox__inneris-disabled + el-checkbox__label": {
        "cursor": "not-allowed"
    },
    "el-checkbox__original": {
        "opacity": 0,
        "outline": "none",
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "left": -999
    },
    "el-checkbox__label": {
        "fontSize": 14,
        "paddingLeft": 5
    },
    "el-radio": {
        "color": "#1f2d3d",
        "position": "relative",
        "cursor": "pointer",
        "display": "inline-block",
        "whiteSpace": "nowrap",
        "MozUserSelect": "none",
        "WebkitUserSelect": "none",
        "MsUserSelect": "none"
    },
    "el-radio + el-radio": {
        "marginLeft": 15
    },
    "el-radio__input": {
        "whiteSpace": "nowrap",
        "cursor": "pointer",
        "outline": "none",
        "display": "inline-block",
        "lineHeight": 1,
        "position": "relative",
        "verticalAlign": "middle"
    },
    "el-radio__inner": {
        "border": "1px solid #C0CCDA",
        "borderRadius": "50%",
        "width": 18,
        "height": 18,
        "backgroundColor": "#fff",
        "position": "relative",
        "cursor": "pointer",
        "display": "inline-block",
        "boxSizing": "border-box"
    },
    "el-radio__inner:not(is-disabled):hover": {
        "borderColor": "#14adbe"
    },
    "el-radio__inner::after": {
        "width": 6,
        "height": 6,
        "borderRadius": "50%",
        "backgroundColor": "#fff",
        "content": "",
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%, -50%) scale(0)",
        "transition": "transform .15s cubic-bezier(.71,-.46,.88,.6)"
    },
    "el-radio__inneris-disabledis-checked": {
        "backgroundColor": "#D3DCE6",
        "borderColor": "#D3DCE6"
    },
    "el-radio__inneris-disabledis-checked::after": {
        "backgroundColor": "#fff"
    },
    "el-radio__inneris-focus": {
        "borderColor": "#14adbe"
    },
    "el-radio__inneris-checked": {
        "borderColor": "#14adbe",
        "background": "#14adbe"
    },
    "el-radio__inneris-checked::after": {
        "transform": "translate(-50%, -50%) scale(1)"
    },
    "el-radio__inneris-disabled": {
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6",
        "cursor": "not-allowed"
    },
    "el-radio__inneris-disabled::after": {
        "cursor": "not-allowed",
        "backgroundColor": "#EFF2F7"
    },
    "el-radio__inneris-disabled + el-radio__label": {
        "cursor": "not-allowed"
    },
    "el-radio__original": {
        "opacity": 0,
        "outline": "none",
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-radio__label": {
        "fontSize": 14,
        "paddingLeft": 5
    },
    "el-radio-group": {
        "display": "inline-block",
        "fontSize": 0,
        "lineHeight": 1
    },
    "el-radio-group el-radio": {
        "fontSize": 14
    },
    "el-radio-button": {
        "position": "relative",
        "overflow": "hidden",
        "display": "inline-block"
    },
    "el-radio-button:not(:last-child)": {
        "marginRight": -1
    },
    "el-radio-button:first-child el-radio-button__inner": {
        "borderRadius": "4px 0 0 4px"
    },
    "el-radio-button:last-child el-radio-button__inner": {
        "borderRadius": "0 4px 4px 0"
    },
    "el-radio-button__inner": {
        "display": "inline-block",
        "lineHeight": 1,
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "background": "#fff",
        "border": "1px solid #C0CCDA",
        "color": "#1F2D3D",
        "WebkitAppearance": "none",
        "textAlign": "center",
        "boxSizing": "border-box",
        "outline": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative",
        "transition": "border-color .2s cubic-bezier(.645,.045,.355,1), color .2s cubic-bezier(.645,.045,.355,1)",
        "MozUserSelect": "none",
        "WebkitUserSelect": "none",
        "MsUserSelect": "none",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 14,
        "borderRadius": 0
    },
    "el-radio-button__inner:hover": {
        "color": "#14adbe"
    },
    "el-radio-button__inner [class*=\"el-icon-\"]": {
        "lineHeight": 0.9
    },
    "el-radio-button__inner [class*=\"el-icon-\"] + span": {
        "marginLeft": 5
    },
    "el-radio-button__orig-radio": {
        "opacity": 0,
        "outline": "none",
        "position": "absolute",
        "zIndex": -1,
        "left": -999
    },
    "el-radio-button__orig-radio:checked": {},
    "el-radio-button__orig-radio:checked + el-radio-button__inner": {
        "zIndex": 1,
        "color": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-radio-button__orig-radio:disabled": {},
    "el-radio-button__orig-radio:disabled + el-radio-button__inner": {
        "color": "#C0CCDA",
        "cursor": "not-allowed",
        "backgroundImage": "none",
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6"
    },
    "el-radio-button--large": {},
    "el-radio-button--large el-radio-button__inner": {
        "paddingTop": 11,
        "paddingRight": 19,
        "paddingBottom": 11,
        "paddingLeft": 19,
        "fontSize": 16,
        "borderRadius": 0
    },
    "el-radio-button--small": {},
    "el-radio-button--small el-radio-button__inner": {
        "paddingTop": 7,
        "paddingRight": 9,
        "paddingBottom": 7,
        "paddingLeft": 9,
        "fontSize": 12,
        "borderRadius": 0
    },
    "el-radio-button--mini": {},
    "el-radio-button--mini el-radio-button__inner": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "fontSize": 12,
        "borderRadius": 0
    },
    "el-switch": {
        "display": "inline-block",
        "position": "relative",
        "fontSize": 14,
        "lineHeight": 22
    },
    "el-switch label-fade-enter": {
        "opacity": 0
    },
    "el-switch label-fade-leave-active": {
        "opacity": 0
    },
    "el-switchis-disabled el-switch__core": {
        "borderColor": "#E5E9F3",
        "background": "#E5E9F3",
        "cursor": "not-allowed"
    },
    "el-switchis-disabled el-switch__core span": {
        "backgroundColor": "#F9FAFC"
    },
    "el-switchis-disabled el-switch__core ~ el-switch__label *": {
        "color": "#F9FAFC"
    },
    "el-switchis-disabled el-switch__input:checked + el-switch__core": {
        "borderColor": "#E5E9F3",
        "backgroundColor": "#E5E9F3"
    },
    "el-switchis-disabled": {},
    "el-switchis-disabled el-switch__label": {
        "cursor": "not-allowed"
    },
    "el-switch__label": {
        "transition": ".2s",
        "position": "absolute",
        "zIndex": 10,
        "width": 46,
        "height": 22,
        "left": 0,
        "top": 0,
        "display": "inline-block",
        "fontSize": 14,
        "cursor": "pointer",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "el-switch__label *": {
        "lineHeight": 1,
        "top": 4,
        "position": "absolute",
        "fontSize": 14,
        "display": "inline-block",
        "color": "#fff"
    },
    "el-switch__label--left i": {
        "left": 6
    },
    "el-switch__label--right i": {
        "right": 6
    },
    "el-switch__input": {
        "display": "none"
    },
    "el-switch__input:checked + el-switch__core": {
        "borderColor": "#14adbe",
        "backgroundColor": "#14adbe"
    },
    "el-switch__core": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block",
        "verticalAlign": "middle",
        "position": "relative",
        "width": 46,
        "height": 22,
        "border": "1px solid #C0CCDA",
        "outline": "none",
        "borderRadius": 12,
        "boxSizing": "border-box",
        "background": "#C0CCDA",
        "cursor": "pointer",
        "transition": "border-color .3s, background-color .3s"
    },
    "el-switch__core el-switch__button": {
        "top": 0,
        "left": 0,
        "position": "absolute",
        "borderRadius": "100%",
        "transition": "transform .3s",
        "width": 16,
        "height": 16,
        "zIndex": 20,
        "backgroundColor": "#fff"
    },
    "el-switch--wide el-switch__label": {},
    "el-switch--wide el-switch__labelel-switch__label--left span": {
        "left": 10
    },
    "el-switch--wide el-switch__labelel-switch__label--right span": {
        "right": 10
    },
    "el-dropdown": {
        "display": "inline-block",
        "position": "relative",
        "color": "#475669",
        "fontSize": 14
    },
    "el-dropdown el-button-group": {
        "display": "block"
    },
    "el-dropdown el-dropdown__caret-button": {
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "el-dropdown el-dropdown__caret-button el-dropdown__icon": {
        "paddingLeft": 0
    },
    "el-dropdown__icon": {
        "fontSize": 12,
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3
    },
    "el-dropdown-menu": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "backgroundColor": "#fff",
        "border": "1px solid #D3DCE6",
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "zIndex": 10,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "minWidth": 100
    },
    "el-dropdown-menu__item": {
        "listStyle": "none",
        "lineHeight": 36,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "cursor": "pointer"
    },
    "el-dropdown-menu__item:not(is-disabled):hover": {
        "backgroundColor": "#e5e9f2",
        "color": "#475669"
    },
    "el-dropdown-menu__itemis-disabled": {
        "cursor": "default",
        "color": "#c0ccda",
        "pointerEvents": "none"
    },
    "el-dropdown-menu__item--divided": {
        "position": "relative",
        "marginTop": 6,
        "borderTop": "1px solid #D3DCE6"
    },
    "el-dropdown-menu__item--divided:before": {
        "content": "''",
        "height": 6,
        "display": "block",
        "marginTop": 0,
        "marginRight": -10,
        "marginBottom": 0,
        "marginLeft": -10,
        "backgroundColor": "#fff"
    },
    "el-loading-mask": {
        "position": "absolute",
        "zIndex": 10000,
        "backgroundColor": "rgba(255, 255, 255, .9)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
    },
    "el-loading-maskis-fullscreen": {
        "position": "fixed"
    },
    "el-loading-maskis-fullscreen el-loading-spinner": {
        "marginTop": -25
    },
    "el-loading-maskis-fullscreen el-loading-spinner circular": {
        "width": 50
    },
    "el-loading-spinner": {
        "top": "50%",
        "marginTop": -21,
        "width": "100%",
        "textAlign": "center",
        "position": "absolute"
    },
    "el-loading-spinner el-loading-text": {
        "color": "#14adbe",
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "fontSize": 14
    },
    "el-loading-spinner circular": {
        "width": 42,
        "animation": "rotate 2s linear infinite"
    },
    "el-loading-spinner path": {
        "animation": "dash 1.5s ease-in-out infinite",
        "strokeDasharray": "1, 100",
        "strokeDashoffset": 0,
        "strokeWidth": 2,
        "stroke": "#14adbe",
        "strokeLinecap": "round"
    },
    "v-modal-enter": {
        "animation": "v-modal-in .2s ease"
    },
    "v-modal-leave": {
        "animation": "v-modal-out .2s ease forwards"
    },
    "v-modal": {
        "position": "fixed",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "opacity": 0.5,
        "background": "#000"
    },
    "el-dialog": {
        "position": "absolute",
        "left": "50%",
        "transform": "translateX(-50%)",
        "background": "#fff",
        "borderRadius": 2,
        "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.3)",
        "boxSizing": "border-box"
    },
    "el-dialog--tiny": {
        "width": "30%"
    },
    "el-dialog--small": {
        "width": "50%"
    },
    "el-dialog--large": {
        "width": "90%"
    },
    "el-dialog--full": {
        "width": "100%",
        "top": 0,
        "height": "100%",
        "overflow": "auto"
    },
    "el-dialog__wrapper": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "position": "fixed",
        "overflow": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-dialog__header": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "el-dialog__close": {
        "cursor": "pointer",
        "color": "#C0CCDA"
    },
    "el-dialog__close:hover": {
        "color": "#14adbe"
    },
    "el-dialog__title": {
        "lineHeight": 1,
        "fontSize": 16,
        "fontWeight": "700",
        "color": "#1f2d3d"
    },
    "el-dialog__body": {
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 30,
        "paddingLeft": 20,
        "color": "#475669",
        "fontSize": 14
    },
    "el-dialog__headerbtn": {
        "float": "right"
    },
    "el-dialog__footer": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "textAlign": "right",
        "boxSizing": "border-box"
    },
    "dialog-fade-enter-active": {
        "animation": "dialog-fade-in .3s"
    },
    "dialog-fade-leave-active": {
        "animation": "dialog-fade-out .3s"
    },
    "el-table": {
        "position": "relative",
        "overflow": "hidden",
        "boxSizing": "border-box",
        "width": "100%",
        "maxWidth": "100%",
        "backgroundColor": "#fff",
        "borderCollapse": "collapse",
        "border": "1px solid #e0e6ed",
        "fontSize": 14,
        "color": "#1f2d3d"
    },
    "el-table el-tooltip": {
        "display": "block"
    },
    "el-table el-tooltip__rel": {
        "display": "block"
    },
    "el-table el-tooltip__rel cell": {
        "whiteSpace": "nowrap"
    },
    "el-table th": {
        "height": 40,
        "minWidth": 0,
        "boxSizing": "border-box",
        "textOverflow": "ellipsis",
        "verticalAlign": "middle",
        "position": "relative",
        "borderBottom": "1px solid #e0e6ed",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "backgroundColor": "#EFF2F7",
        "textAlign": "left"
    },
    "el-table td": {
        "height": 40,
        "minWidth": 0,
        "boxSizing": "border-box",
        "textOverflow": "ellipsis",
        "verticalAlign": "middle",
        "position": "relative",
        "borderBottom": "1px solid #e0e6ed"
    },
    "el-table this-right": {
        "textAlign": "right"
    },
    "el-table tdis-right": {
        "textAlign": "right"
    },
    "el-table this-left": {
        "textAlign": "left"
    },
    "el-table tdis-left": {
        "textAlign": "left"
    },
    "el-table this-center": {
        "textAlign": "center"
    },
    "el-table tdis-center": {
        "textAlign": "center"
    },
    "el-table thgutter": {
        "width": 15,
        "borderRightWidth": 0,
        "borderBottomWidth": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-table tdgutter": {
        "width": 0,
        "borderRightWidth": 0,
        "borderBottomWidth": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-table tdis-hidden > *": {
        "visibility": "hidden"
    },
    "el-table this-hidden > *": {
        "visibility": "hidden"
    },
    "el-table::before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "width": "100%",
        "height": 1,
        "backgroundColor": "#e0e6ed",
        "zIndex": 1
    },
    "el-table::after": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "width": 1,
        "height": "100%",
        "backgroundColor": "#e0e6ed",
        "zIndex": 1
    },
    "el-table th > div": {
        "display": "inline-block",
        "paddingLeft": 18,
        "paddingRight": 18,
        "lineHeight": 40,
        "boxSizing": "border-box",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "el-table td > div": {
        "boxSizing": "border-box"
    },
    "el-table threquired > div::before": {
        "display": "inline-block",
        "content": "",
        "width": 8,
        "height": 8,
        "borderRadius": "50%",
        "background": "#ff4d51",
        "marginRight": 5,
        "verticalAlign": "middle"
    },
    "el-table th > cell": {
        "position": "relative",
        "wordWrap": "normal",
        "textOverflow": "ellipsis",
        "display": "inline-block",
        "lineHeight": 20,
        "verticalAlign": "middle",
        "width": "100%",
        "boxSizing": "border-box"
    },
    "el-table th > cellhighlight": {
        "color": "#14adbe"
    },
    "el-table caret-wrapper": {
        "position": "relative",
        "cursor": "pointer",
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginLeft": 5,
        "marginTop": -2,
        "width": 16,
        "height": 34,
        "overflow": "initial"
    },
    "el-table sort-caret": {
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "border": 0,
        "content": "",
        "position": "absolute",
        "left": 3,
        "zIndex": 2
    },
    "el-table sort-caretascending": {
        "top": 11,
        "borderTop": "none",
        "borderRight": "5px solid transparent",
        "borderBottom": "5px solid #99a9bf",
        "borderLeft": "5px solid transparent"
    },
    "el-table sort-caretdescending": {
        "bottom": 11,
        "borderTop": "5px solid #99a9bf",
        "borderRight": "5px solid transparent",
        "borderBottom": "none",
        "borderLeft": "5px solid transparent"
    },
    "el-table ascending sort-caretascending": {
        "borderBottomColor": "#475669"
    },
    "el-table descending sort-caretdescending": {
        "borderTopColor": "#475669"
    },
    "el-table cell": {
        "boxSizing": "border-box",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "normal",
        "wordBreak": "break-all",
        "lineHeight": 24,
        "paddingLeft": 18,
        "paddingRight": 18
    },
    "el-table tr input[type=\"checkbox\"]": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-table tr": {
        "backgroundColor": "#fff"
    },
    "el-table hidden-columns": {
        "visibility": "hidden",
        "position": "absolute",
        "zIndex": -1
    },
    "el-table__empty-block": {
        "display": "table",
        "minHeight": 60,
        "textAlign": "center",
        "width": "100%",
        "height": "100%"
    },
    "el-table__empty-text": {
        "display": "table-cell",
        "verticalAlign": "middle",
        "color": "#5e6d82"
    },
    "el-table--fit": {
        "borderRight": 0,
        "borderBottom": 0
    },
    "el-table--fit thgutter": {
        "borderRightWidth": 1
    },
    "el-table--fit tdgutter": {
        "borderRightWidth": 1
    },
    "el-table--border th": {
        "borderRight": "1px solid #e0e6ed"
    },
    "el-table--border td": {
        "borderRight": "1px solid #e0e6ed"
    },
    "el-table__fixed": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "boxShadow": "1px 0 8px #d3d4d6",
        "overflowX": "hidden"
    },
    "el-table__fixed-right": {
        "position": "absolute",
        "top": 0,
        "left": "auto",
        "boxShadow": "-1px 0 8px #d3d4d6",
        "overflowX": "hidden",
        "right": 0
    },
    "el-table__fixed::before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "width": "100%",
        "height": 1,
        "backgroundColor": "#e0e6ed",
        "zIndex": 4
    },
    "el-table__fixed-right::before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "width": "100%",
        "height": 1,
        "backgroundColor": "#e0e6ed",
        "zIndex": 4
    },
    "el-table__fixed-right el-table__fixed-header-wrapper": {
        "left": "auto",
        "right": 0
    },
    "el-table__fixed-right el-table__fixed-body-wrapper": {
        "left": "auto",
        "right": 0
    },
    "el-table__fixed-header-wrapper": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 3
    },
    "el-table__fixed-header-wrapper thead div": {
        "backgroundColor": "#EFF2F7",
        "color": "#1f2d3d"
    },
    "el-table__fixed-body-wrapper": {
        "position": "absolute",
        "left": 0,
        "top": 37,
        "overflow": "hidden",
        "zIndex": 3
    },
    "el-table__header-wrapper": {
        "width": "100%",
        "overflow": "hidden"
    },
    "el-table__body-wrapper": {
        "width": "100%",
        "overflow": "auto",
        "position": "relative"
    },
    "el-table__header": {
        "tableLayout": "fixed"
    },
    "el-table__body": {
        "tableLayout": "fixed"
    },
    "el-table__header-wrapper thead div": {
        "backgroundColor": "#EFF2F7",
        "color": "#1f2d3d"
    },
    "el-table--striped": {},
    "el-table--striped el-table__body": {},
    "el-table--striped el-table__body tr:nth-child(2n) td": {
        "background": "#FAFAFA"
    },
    "el-table--striped el-table__body tr:nth-child(2n)current-row td": {
        "background": "#EFF7FF"
    },
    "el-table__body td": {
        "transition": "background-color .25s ease"
    },
    "el-table__body trhover-row td": {
        "backgroundColor": "#eff2f7"
    },
    "el-table__body trcurrent-row td": {
        "background": "#eff7ff"
    },
    "el-table__column-resize-proxy": {
        "position": "absolute",
        "left": 200,
        "top": 0,
        "bottom": 0,
        "width": 0,
        "borderLeft": "1px solid #e0e6ed",
        "zIndex": 10
    },
    "el-table__column-filter-trigger": {
        "display": "inline-block",
        "lineHeight": 34,
        "marginLeft": 5,
        "cursor": "pointer"
    },
    "el-table__column-filter-trigger i": {
        "color": "#99a9bf"
    },
    "el-table-filter": {
        "border": "solid 1px #d3dce6",
        "borderRadius": 2,
        "backgroundColor": "#fff",
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)",
        "boxSizing": "border-box",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "el-table-filter__list": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "minWidth": 100
    },
    "el-table-filter__list-item": {
        "lineHeight": 36,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "cursor": "pointer",
        "fontSize": 14
    },
    "el-table-filter__list-item:hover": {
        "backgroundColor": "#e5e9f2",
        "color": "#475669"
    },
    "el-table-filter__list-itemis-active": {
        "backgroundColor": "#14adbe",
        "color": "#fff"
    },
    "el-table-filter__content": {
        "minWidth": 100
    },
    "el-table-filter__bottom": {
        "borderTop": "1px solid #d3dce6",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "el-table-filter__bottom button": {
        "background": "transparent",
        "border": "none",
        "color": "#8492a6",
        "cursor": "pointer",
        "fontSize": 14,
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "el-table-filter__bottom button:hover": {
        "color": "#14adbe"
    },
    "el-table-filter__bottom button:focus": {
        "outline": "none"
    },
    "el-table-filter__bottom buttonis-disabled": {
        "color": "#c0ccda",
        "cursor": "not-allowed"
    },
    "el-table-filter__checkbox-group": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "el-table-filter__checkbox-group el-checkbox": {
        "display": "block",
        "marginBottom": 8,
        "marginLeft": 5
    },
    "el-table-filter__checkbox-group el-checkbox:last-child": {
        "marginBottom": 0
    },
    "el-pagination": {
        "whiteSpace": "nowrap",
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "background": "#fff",
        "color": "#475669"
    },
    "el-pagination span": {
        "display": "inline-block",
        "fontSize": 13,
        "minWidth": 28,
        "height": 28,
        "lineHeight": 28,
        "verticalAlign": "top",
        "boxSizing": "border-box"
    },
    "el-pagination button": {
        "display": "inline-block",
        "fontSize": 13,
        "minWidth": 28,
        "height": 28,
        "lineHeight": 28,
        "verticalAlign": "top",
        "boxSizing": "border-box",
        "border": "none",
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "background": "transparent"
    },
    "el-pagination el-select el-input": {
        "width": 110
    },
    "el-pagination el-select el-input input": {
        "paddingRight": 25
    },
    "el-pagination button:focus": {
        "outline": "none"
    },
    "el-pagination button:hover": {
        "color": "#14adbe"
    },
    "el-pagination buttondisabled": {
        "color": "#e4e4e4",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "el-pagination btn-prev": {
        "background": "center center no-repeat",
        "backgroundSize": 16,
        "border": "1px solid #D3DCE6",
        "cursor": "pointer",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#99a9bf",
        "borderRadius": "2px 0 0 2px",
        "borderRight": 0
    },
    "el-pagination btn-next": {
        "background": "center center no-repeat",
        "backgroundSize": 16,
        "border": "1px solid #D3DCE6",
        "cursor": "pointer",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#99a9bf",
        "borderRadius": "0 2px 2px 0",
        "borderLeft": 0
    },
    "el-pagination btn-prev el-icon": {
        "display": "block",
        "fontSize": 12
    },
    "el-pagination btn-next el-icon": {
        "display": "block",
        "fontSize": 12
    },
    "el-pagination--small btn-prev": {
        "borderColor": "transparent",
        "fontSize": 12,
        "lineHeight": 22,
        "height": 22,
        "minWidth": 22
    },
    "el-pagination--small btn-next": {
        "borderColor": "transparent",
        "fontSize": 12,
        "lineHeight": 22,
        "height": 22,
        "minWidth": 22
    },
    "el-pagination--small el-pager li": {
        "borderColor": "transparent",
        "fontSize": 12,
        "lineHeight": 22,
        "height": 22,
        "minWidth": 22,
        "borderRadius": 2
    },
    "el-pagination--small el-pager li:last-child": {
        "borderColor": "transparent",
        "fontSize": 12,
        "lineHeight": 22,
        "height": 22,
        "minWidth": 22
    },
    "el-pagination--small arrowdisabled": {
        "visibility": "hidden"
    },
    "el-pagination__sizes": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-pagination__sizes el-input el-input__inner": {
        "fontSize": 13,
        "borderColor": "#D3DCE6"
    },
    "el-pagination__sizes el-input el-input__inner:hover": {
        "borderColor": "#14adbe"
    },
    "el-pagination__jump": {
        "marginLeft": 10
    },
    "el-pagination__total": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "el-pagination__rightwrapper": {
        "float": "right"
    },
    "el-pagination__editor": {
        "border": "1px solid #D3DCE6",
        "borderRadius": 2,
        "lineHeight": 18,
        "paddingTop": 4,
        "paddingRight": 2,
        "paddingBottom": 4,
        "paddingLeft": 2,
        "width": 30,
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 6,
        "boxSizing": "border-box",
        "transition": "border .3s"
    },
    "el-pagination__editor::-webkit-inner-spin-button": {
        "WebkitAppearance": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-pagination__editor::-webkit-outer-spin-button": {
        "WebkitAppearance": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-pagination__editor:focus": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-pager": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "listStyle": "none",
        "display": "inline-block",
        "verticalAlign": "top",
        "fontSize": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-pager li": {
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "border": "1px solid #D3DCE6",
        "borderRight": 0,
        "background": "#fff",
        "verticalAlign": "top",
        "display": "inline-block",
        "fontSize": 13,
        "minWidth": 28,
        "height": 28,
        "lineHeight": 28,
        "cursor": "pointer",
        "boxSizing": "border-box",
        "textAlign": "center"
    },
    "el-pager li:last-child": {
        "borderRight": "1px solid #D3DCE6"
    },
    "el-pager libtn-quicknext": {
        "lineHeight": 28,
        "color": "#99a9bf"
    },
    "el-pager libtn-quickprev": {
        "lineHeight": 28,
        "color": "#99a9bf"
    },
    "el-pager libtn-quickprev:hover": {
        "cursor": "pointer"
    },
    "el-pager libtn-quicknext:hover": {
        "cursor": "pointer"
    },
    "el-pager liactive + li": {
        "borderLeft": 0,
        "paddingLeft": 5
    },
    "el-pager li:hover": {
        "color": "#14adbe"
    },
    "el-pager liactive": {
        "borderColor": "#14adbe",
        "backgroundColor": "#14adbe",
        "color": "#fff",
        "cursor": "default"
    },
    "el-popover": {
        "position": "absolute",
        "background": "#fff",
        "minWidth": 150,
        "borderRadius": 2,
        "border": "1px solid #d3dce6",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "zIndex": 2000,
        "fontSize": 12,
        "boxShadow": "0px 2px 4px 0px rgba(0, 0, 0, .12),                0px 0px 6px 0px rgba(0, 0, 0, .04)"
    },
    "el-popover popper__arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 6
    },
    "el-popover popper__arrow::after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "content": " ",
        "borderWidth": 6
    },
    "el-popover[x-placement^=\"top\"]": {
        "marginBottom": 12
    },
    "el-popover[x-placement^=\"top\"] popper__arrow": {
        "bottom": -6,
        "left": "50%",
        "marginRight": 3,
        "borderTopColor": "#d3dce6",
        "borderBottomWidth": 0
    },
    "el-popover[x-placement^=\"top\"] popper__arrow::after": {
        "bottom": 1,
        "marginLeft": -6,
        "borderTopColor": "#fff",
        "borderBottomWidth": 0
    },
    "el-popover[x-placement^=\"bottom\"]": {
        "marginTop": 12
    },
    "el-popover[x-placement^=\"bottom\"] popper__arrow": {
        "top": -6,
        "left": "50%",
        "marginRight": 3,
        "borderTopWidth": 0,
        "borderBottomColor": "#d3dce6"
    },
    "el-popover[x-placement^=\"bottom\"] popper__arrow::after": {
        "top": 1,
        "marginLeft": -6,
        "borderTopWidth": 0,
        "borderBottomColor": "#fff"
    },
    "el-popover[x-placement^=\"right\"]": {
        "marginLeft": 12
    },
    "el-popover[x-placement^=\"right\"] popper__arrow": {
        "top": "50%",
        "left": -6,
        "marginBottom": 3,
        "borderRightColor": "#d3dce6",
        "borderLeftWidth": 0
    },
    "el-popover[x-placement^=\"right\"] popper__arrow::after": {
        "bottom": -6,
        "left": 1,
        "borderRightColor": "#fff",
        "borderLeftWidth": 0
    },
    "el-popover[x-placement^=\"left\"]": {
        "marginRight": 12
    },
    "el-popover[x-placement^=\"left\"] popper__arrow": {
        "top": "50%",
        "right": -6,
        "marginBottom": 3,
        "borderRightWidth": 0,
        "borderLeftColor": "#d3dce6"
    },
    "el-popover[x-placement^=\"left\"] popper__arrow::after": {
        "right": 1,
        "bottom": -6,
        "marginLeft": -6,
        "borderRightWidth": 0,
        "borderLeftColor": "#fff"
    },
    "el-popover__title": {
        "color": "#1f2d3d",
        "fontSize": 13,
        "lineHeight": 1,
        "marginBottom": 9
    },
    "el-autocomplete": {
        "position": "relative"
    },
    "el-autocomplete__suggestions": {
        "position": "absolute",
        "left": 0,
        "top": "110%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#fff",
        "border": "1px solid #D3DCE6",
        "width": "100%",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "zIndex": 10,
        "borderRadius": 2,
        "maxHeight": 280,
        "boxSizing": "border-box",
        "overflow": "auto",
        "boxShadow": "0 0 6px 0 rgba(0,0,0,0.04), 0 2px 4px 0 rgba(0,0,0,0.12)"
    },
    "el-autocomplete__suggestions li": {
        "listStyle": "none",
        "lineHeight": 36,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "cursor": "pointer",
        "color": "#475669",
        "fontSize": 14,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "el-autocomplete__suggestions li:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-autocomplete__suggestions lihighlighted": {
        "backgroundColor": "#14adbe",
        "color": "#fff"
    },
    "el-autocomplete__suggestions li:active": {
        "backgroundColor": "rgb(16, 139, 152)"
    },
    "el-autocomplete__suggestions lidivider": {
        "marginTop": 6,
        "borderTop": "1px solid #D3DCE6"
    },
    "el-autocomplete__suggestions lidivider:last-child": {
        "marginBottom": -6
    },
    "el-autocomplete__suggestionsis-loading li": {
        "textAlign": "center",
        "height": 100,
        "lineHeight": 100,
        "fontSize": 20,
        "color": "#999"
    },
    "el-autocomplete__suggestionsis-loading li:hover": {
        "backgroundColor": "#fff"
    },
    "el-autocomplete__suggestionsis-loading el-icon-loading": {
        "verticalAlign": "middle"
    },
    "el-message": {
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",
        "minWidth": 300,
        "paddingTop": 10,
        "paddingRight": 12,
        "paddingBottom": 10,
        "paddingLeft": 12,
        "boxSizing": "border-box",
        "borderRadius": 2,
        "position": "fixed",
        "left": "50%",
        "top": 20,
        "transform": "translateX(-50%)",
        "backgroundColor": "#fff",
        "transition": "opacity 0.3s, transform .4s",
        "overflow": "hidden"
    },
    "el-message el-icon-circle-check": {
        "color": "#13ce66"
    },
    "el-message el-icon-circle-cross": {
        "color": "#ff4949"
    },
    "el-message el-icon-information": {
        "color": "#50BFFF"
    },
    "el-message el-icon-warning": {
        "color": "#f7ba2a"
    },
    "el-message__group": {
        "marginLeft": 38,
        "position": "relative"
    },
    "el-message__group p": {
        "fontSize": 14,
        "lineHeight": 20,
        "marginTop": 0,
        "marginRight": 34,
        "marginBottom": 0,
        "marginLeft": 0,
        "whiteSpace": "nowrap",
        "color": "#8492a6",
        "textAlign": "justify"
    },
    "el-message__icon": {
        "width": 40,
        "height": 40,
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "el-message__closeBtn": {
        "top": 3,
        "right": 0,
        "position": "absolute",
        "cursor": "pointer",
        "color": "#C0CCDA",
        "fontSize": 14
    },
    "el-message__closeBtn:hover": {
        "color": "#99A9BF"
    },
    "el-message-fade-enter": {
        "opacity": 0,
        "transform": "translate(-50%, -100%)"
    },
    "el-message-fade-leave-active": {
        "opacity": 0,
        "transform": "translate(-50%, -100%)"
    },
    "el-message-box": {
        "textAlign": "left",
        "display": "inline-block",
        "verticalAlign": "middle",
        "backgroundColor": "#fff",
        "width": 420,
        "borderRadius": 3,
        "fontSize": 16,
        "WebkitUserSelect": "none",
        "overflow": "hidden",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "el-message-box__wrapper": {
        "position": "fixed",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "textAlign": "center"
    },
    "el-message-box__wrapper::after": {
        "content": "",
        "display": "inline-block",
        "height": "100%",
        "width": 0,
        "verticalAlign": "middle"
    },
    "el-message-box__header": {
        "position": "relative",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "el-message-box__content": {
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 30,
        "paddingLeft": 20,
        "color": "#475669",
        "fontSize": 14,
        "position": "relative"
    },
    "el-message-box__close": {
        "display": "inline-block",
        "position": "absolute",
        "top": 19,
        "right": 20,
        "color": "#999",
        "cursor": "pointer",
        "lineHeight": 20,
        "textAlign": "center"
    },
    "el-message-box__close:hover": {
        "color": "#14adbe"
    },
    "el-message-box__input": {
        "paddingTop": 15
    },
    "el-message-box__input inputinvalid": {
        "borderColor": "#ff4949"
    },
    "el-message-box__input inputinvalid:focus": {
        "borderColor": "#ff4949"
    },
    "el-message-box__errormsg": {
        "color": "#ff4949",
        "fontSize": 12,
        "minHeight": 18,
        "marginTop": 2
    },
    "el-message-box__title": {
        "paddingLeft": 0,
        "marginBottom": 0,
        "fontSize": 16,
        "fontWeight": "700",
        "height": 18,
        "color": "#333"
    },
    "el-message-box__message": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-message-box__message p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.4
    },
    "el-message-box__btns": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "textAlign": "right"
    },
    "el-message-box__btns button:nth-child(2)": {
        "marginLeft": 10
    },
    "el-message-box__btns-reverse": {
        "MsFlexDirection": "row-reverse",
        "flexDirection": "row-reverse"
    },
    "el-message-box__status": {
        "position": "absolute",
        "top": "50%",
        "transform": "translateY(-50%)",
        "fontSize": "36px !important"
    },
    "el-message-box__statusel-icon-circle-check": {
        "color": "#13ce66"
    },
    "el-message-box__statusel-icon-information": {
        "color": "#50BFFF"
    },
    "el-message-box__statusel-icon-warning": {
        "color": "#f7ba2a"
    },
    "el-message-box__statusel-icon-circle-cross": {
        "color": "#ff4949"
    },
    "msgbox-fade-enter-active": {
        "animation": "msgbox-fade-in .3s"
    },
    "msgbox-fade-leave-active": {
        "animation": "msgbox-fade-out .3s"
    },
    "el-date-table": {
        "fontSize": 12,
        "minWidth": 224,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "el-date-table td": {
        "width": 32,
        "height": 32,
        "boxSizing": "border-box",
        "textAlign": "center",
        "cursor": "pointer"
    },
    "el-date-table tdnext-month": {
        "color": "#ddd"
    },
    "el-date-table tdprev-month": {
        "color": "#ddd"
    },
    "el-date-table tdtoday": {
        "color": "#14adbe"
    },
    "el-date-table tdavailable:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-date-table tdin-range": {
        "backgroundColor": "#D3ECFF"
    },
    "el-date-table tdin-range:hover": {
        "backgroundColor": "#AFDCFF"
    },
    "el-date-table tdcurrent": {
        "backgroundColor": "#14adbe !important",
        "color": "#fff"
    },
    "el-date-table tdstart-date": {
        "backgroundColor": "#14adbe !important",
        "color": "#fff"
    },
    "el-date-table tdend-date": {
        "backgroundColor": "#14adbe !important",
        "color": "#fff"
    },
    "el-date-table tddisabled": {
        "backgroundColor": "#f4f4f4",
        "opacity": 1,
        "cursor": "not-allowed",
        "color": "#ccc"
    },
    "el-date-table tdweek": {
        "fontSize": "80%",
        "color": "#8492a6"
    },
    "el-date-table th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "color": "#8492a6",
        "fontWeight": "400"
    },
    "el-date-tableis-week-mode el-date-table__row": {},
    "el-date-tableis-week-mode el-date-table__row:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-date-tableis-week-mode el-date-table__rowcurrent": {
        "backgroundColor": "#D3ECFF"
    },
    "el-month-table": {
        "fontSize": 12,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "borderCollapse": "collapse"
    },
    "el-month-table td": {
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 3,
        "paddingBottom": 20,
        "paddingLeft": 3,
        "cursor": "pointer"
    },
    "el-month-table td cell": {
        "width": 48,
        "height": 32,
        "display": "block",
        "lineHeight": 32,
        "color": "#475669"
    },
    "el-month-table td cell:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-month-table tddisabled cell": {
        "backgroundColor": "#f4f4f4",
        "cursor": "not-allowed",
        "color": "#ccc"
    },
    "el-month-table tdcurrent cell": {
        "backgroundColor": "#14adbe !important",
        "color": "#fff"
    },
    "el-year-table": {
        "fontSize": 12,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "borderCollapse": "collapse"
    },
    "el-year-table el-icon": {
        "color": "#99a9bf"
    },
    "el-year-table td": {
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 3,
        "paddingBottom": 20,
        "paddingLeft": 3,
        "cursor": "pointer"
    },
    "el-year-table td cell": {
        "width": 48,
        "height": 32,
        "display": "block",
        "lineHeight": 32,
        "color": "#475669"
    },
    "el-year-table td cell:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-year-table tddisabled cell": {
        "backgroundColor": "#f4f4f4",
        "cursor": "not-allowed",
        "color": "#ccc"
    },
    "el-year-table tdcurrent cell": {
        "backgroundColor": "#14adbe !important",
        "color": "#fff"
    },
    "el-time-spinner": {
        "display": "flex",
        "width": "100%"
    },
    "el-time-spinner__wrapper": {
        "height": 190,
        "overflow": "hidden",
        "MsFlex": 1,
        "flex": 1,
        "verticalAlign": "top",
        "position": "relative",
        "MsOverflowStyle": "none"
    },
    "el-time-spinner__wrapper:hover": {
        "overflowY": "auto"
    },
    "el-time-spinner__list": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "el-time-spinner__list::after": {
        "content": "''",
        "display": "block",
        "width": "100%",
        "height": 80
    },
    "el-time-spinner__list::before": {
        "content": "''",
        "display": "block",
        "width": "100%",
        "height": 80
    },
    "el-time-spinner__item": {
        "height": 32,
        "lineHeight": 32,
        "fontSize": 12
    },
    "el-time-spinner__item:hover:not(disabled):not(active)": {
        "background": "#E5E9F2",
        "cursor": "pointer"
    },
    "el-time-spinner__itemactive:not(disabled)": {
        "color": "#fff"
    },
    "el-time-spinner__itemdisabled": {
        "color": "#d3dce6",
        "cursor": "not-allowed"
    },
    "el-date-editor": {
        "position": "relative",
        "display": "inline-block",
        "boxSizing": "border-box",
        "height": 36,
        "width": 182
    },
    "el-date-editor el-picker-panel": {
        "position": "absolute",
        "minWidth": 180,
        "boxSizing": "border-box",
        "boxShadow": "0 2px 6px #ccc",
        "background": "#fff",
        "zIndex": 10,
        "top": 41
    },
    "el-date-editorlg el-date-editor__editor": {
        "paddingTop": 6,
        "paddingRight": 4,
        "paddingBottom": 6,
        "paddingLeft": 4
    },
    "el-date-editorsm el-date-editor__editor": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "el-date-editoris-have-trigger el-date-editor__editor": {
        "paddingRight": 20
    },
    "el-date-editoris-have-trigger el-date-editor__clear": {
        "right": 22
    },
    "el-date-editor__editor": {
        "border": "1px solid #c0ccda",
        "borderRadius": 4,
        "lineHeight": 18,
        "height": 36,
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "width": "100%",
        "boxSizing": "border-box",
        "transition": "border 0.3s",
        "color": "#666",
        "fontSize": 14
    },
    "el-date-editor__editor::-webkit-input-placeholder": {
        "color": "#bbb",
        "fontSize": 14
    },
    "el-date-editor__editor::-moz-placeholder": {
        "color": "#bbb",
        "fontSize": 14
    },
    "el-date-editor__editor:-ms-input-placeholder": {
        "color": "#bbb",
        "fontSize": 14
    },
    "el-date-editor__editor::placeholder": {
        "color": "#bbb",
        "fontSize": 14
    },
    "el-date-editor__editoris-disabled": {
        "backgroundColor": "#EFF2F7",
        "borderColor": "#D3DCE6",
        "color": "#bbb",
        "cursor": "not-allowed"
    },
    "el-date-editor__editoris-disabled::-webkit-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-date-editor__editoris-disabled::-moz-placeholder": {
        "color": "#C0CCDA"
    },
    "el-date-editor__editoris-disabled:-ms-input-placeholder": {
        "color": "#C0CCDA"
    },
    "el-date-editor__editoris-disabled::placeholder": {
        "color": "#C0CCDA"
    },
    "el-date-editor__trigger": {},
    "el-date-editor__triggerel-icon": {
        "cursor": "pointer",
        "position": "absolute",
        "display": "inline-block",
        "width": 16,
        "right": 10,
        "top": 0,
        "bottom": 0,
        "color": "#c0ccda",
        "fontSize": 16,
        "lineHeight": 38
    },
    "el-date-editor__clear": {
        "cursor": "pointer",
        "position": "absolute",
        "width": 20,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "lineHeight": 36,
        "color": "#99a9bf"
    },
    "el-date-editor__clear:hover": {
        "color": "#14adbe"
    },
    "el-date-editor__editor:focus": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-date-editor:hover > el-date-editor__editor": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-date-editoris-active > el-date-editor__editor": {
        "outline": "none",
        "borderColor": "#14adbe"
    },
    "el-date-editor el-date-editor__clear": {
        "display": "none"
    },
    "el-date-editoris-filled:hover el-date-editor__clear": {
        "display": "inline-block"
    },
    "el-date-editoris-filledis-active > el-date-editor__clear": {
        "display": "inline-block"
    },
    "el-picker-panel": {
        "color": "#475669",
        "border": "1px solid #d3dce6",
        "boxShadow": "0 2px 6px #ccc",
        "background": "#fff",
        "borderRadius": 2,
        "lineHeight": 20,
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "el-picker-panel__body": {},
    "el-picker-panel__body-wrapper": {},
    "el-picker-panel__body::after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "el-picker-panel__body-wrapper::after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "el-picker-panel__content": {
        "position": "relative",
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "el-picker-panel__footer": {
        "borderTop": "1px solid #e4e4e4",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "textAlign": "right",
        "backgroundColor": "#fff",
        "position": "relative"
    },
    "el-picker-panel__shortcut": {
        "display": "block",
        "width": "100%",
        "border": 0,
        "backgroundColor": "transparent",
        "lineHeight": 28,
        "fontSize": 14,
        "color": "#475669",
        "paddingLeft": 12,
        "textAlign": "left",
        "outline": "none",
        "cursor": "pointer"
    },
    "el-picker-panel__shortcut:hover": {
        "backgroundColor": "#e5e9f2"
    },
    "el-picker-panel__shortcutactive": {
        "backgroundColor": "#e6f1fe",
        "color": "#14adbe"
    },
    "el-picker-panel__btn": {
        "border": "1px solid #dcdcdc",
        "color": "#333",
        "lineHeight": 24,
        "borderRadius": 2,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "cursor": "pointer",
        "backgroundColor": "transparent",
        "outline": "none",
        "fontSize": 12
    },
    "el-picker-panel__btn[disabled]": {
        "color": "#cccccc",
        "cursor": "not-allowed"
    },
    "el-picker-panel__icon-btn": {
        "fontSize": 12,
        "color": "#99a9bf",
        "border": 0,
        "background": "transparent",
        "cursor": "pointer",
        "outline": "none",
        "marginTop": 3
    },
    "el-picker-panel__icon-btn:hover": {
        "color": "#14adbe"
    },
    "el-picker-panel__link-btn": {
        "cursor": "pointer",
        "color": "#55a4ff",
        "textDecoration": "none",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontSize": 12
    },
    "el-picker-panel *[slot=sidebar]": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "width": 110,
        "borderRight": "1px solid #e4e4e4",
        "boxSizing": "border-box",
        "paddingTop": 6,
        "backgroundColor": "#f9fafc"
    },
    "el-picker-panel__sidebar": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "width": 110,
        "borderRight": "1px solid #e4e4e4",
        "boxSizing": "border-box",
        "paddingTop": 6,
        "backgroundColor": "#f9fafc"
    },
    "el-picker-panel *[slot=sidebar] + el-picker-panel__body": {
        "marginLeft": 110
    },
    "el-picker-panel__sidebar + el-picker-panel__body": {
        "marginLeft": 110
    },
    "el-date-picker": {
        "minWidth": 254
    },
    "el-date-picker el-picker-panel__content": {
        "minWidth": 224
    },
    "el-date-picker table": {
        "tableLayout": "fixed",
        "width": "100%"
    },
    "el-date-pickerhas-sidebarhas-time": {
        "minWidth": 434
    },
    "el-date-pickerhas-sidebar": {
        "minWidth": 370
    },
    "el-date-pickerhas-time": {
        "minWidth": 324
    },
    "el-date-picker__editor-wrap": {
        "position": "relative",
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "el-date-picker__editor": {
        "position": "relative",
        "border": "1px solid #c0ccda",
        "borderRadius": 4,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "boxSizing": "border-box",
        "height": 28,
        "outline": "none",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "transition": "border 0.3s",
        "width": "100%"
    },
    "el-date-picker__editor:hover": {
        "borderColor": "#14adbe"
    },
    "el-date-picker__time-header": {
        "position": "relative",
        "borderBottom": "1px solid #e4e4e4",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "display": "table",
        "width": "100%",
        "boxSizing": "border-box"
    },
    "el-date-picker__header": {
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 12,
        "textAlign": "center"
    },
    "el-date-picker__header-label": {
        "fontSize": 14,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "lineHeight": 22,
        "textAlign": "center",
        "cursor": "pointer"
    },
    "el-date-picker__header-label:hover": {
        "color": "#14adbe"
    },
    "el-date-picker__header-labelactive": {
        "color": "#14adbe"
    },
    "el-date-picker__prev-btn": {
        "float": "left"
    },
    "el-date-picker__next-btn": {
        "float": "right"
    },
    "el-date-picker__time-wrap": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "el-date-picker__time-label": {
        "float": "left",
        "cursor": "pointer",
        "lineHeight": 30,
        "marginLeft": 10
    },
    "el-date-range-picker": {
        "minWidth": 520
    },
    "el-date-range-picker table": {
        "tableLayout": "fixed",
        "width": "100%"
    },
    "el-date-range-picker el-picker-panel__body": {
        "minWidth": 513
    },
    "el-date-range-picker el-picker-panel__content": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-date-range-pickerhas-sidebarhas-time": {
        "minWidth": 766
    },
    "el-date-range-pickerhas-sidebar": {
        "minWidth": 620
    },
    "el-date-range-pickerhas-time": {
        "minWidth": 660
    },
    "el-date-range-picker__editor": {
        "position": "relative",
        "border": "1px solid #c0ccda",
        "borderRadius": 4,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "boxSizing": "border-box",
        "height": 28,
        "outline": "none",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none",
        "transition": "border 0.3s",
        "width": "100%"
    },
    "el-date-range-picker__editor:hover": {
        "borderColor": "#14adbe"
    },
    "el-date-range-picker__header": {
        "position": "relative",
        "textAlign": "center",
        "height": 28
    },
    "el-date-range-picker__header button": {
        "float": "left"
    },
    "el-date-range-picker__header div": {
        "fontSize": 14,
        "marginRight": 50
    },
    "el-date-range-picker__content": {
        "float": "left",
        "width": "50%",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    },
    "el-date-range-picker__contentis-right el-date-range-picker__header button": {
        "float": "right"
    },
    "el-date-range-picker__contentis-right el-date-range-picker__header div": {
        "marginLeft": 50,
        "marginRight": 50
    },
    "el-date-range-picker__contentis-left": {
        "borderRight": "1px solid #e4e4e4"
    },
    "el-date-range-picker__editors-wrap": {
        "boxSizing": "border-box",
        "display": "table-cell"
    },
    "el-date-range-picker__editors-wrapis-right": {
        "textAlign": "right"
    },
    "el-date-range-picker__time-header": {
        "position": "relative",
        "borderBottom": "1px solid #e4e4e4",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "display": "table",
        "width": "100%",
        "boxSizing": "border-box"
    },
    "el-date-range-picker__time-header > el-icon-arrow-right": {
        "fontSize": 20,
        "verticalAlign": "middle",
        "display": "table-cell",
        "color": "#99a9bf"
    },
    "el-date-range-picker__time-picker-wrap": {
        "position": "relative",
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "el-date-range-picker__time-picker-wrap el-picker-panel": {
        "position": "absolute",
        "top": 13,
        "right": 0,
        "zIndex": 1,
        "background": "#fff"
    },
    "el-time-range-picker": {
        "minWidth": 354,
        "overflow": "visible"
    },
    "el-time-range-picker__content": {
        "position": "relative",
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "display": "flex"
    },
    "el-time-range-picker__cell": {
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 4,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "MsFlex": 1,
        "flex": 1
    },
    "el-time-range-picker__header": {
        "marginBottom": 5,
        "textAlign": "center",
        "fontSize": 14
    },
    "el-time-range-picker__body": {
        "display": "flex",
        "borderRadius": 2,
        "border": "1px solid #d3dce6"
    },
    "el-time-panel": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "border": "solid 1px #d3dce6",
        "backgroundColor": "#fff",
        "boxShadow": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)",
        "borderRadius": 2,
        "position": "absolute",
        "width": 180,
        "left": 0,
        "zIndex": 1000,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "el-time-panel__content": {
        "fontSize": 0,
        "display": "flex",
        "position": "relative",
        "overflow": "hidden"
    },
    "el-time-panel__content::after": {
        "content": ":",
        "top": "50%",
        "color": "#fff",
        "position": "absolute",
        "fontSize": 14,
        "marginTop": -15,
        "lineHeight": 16,
        "backgroundColor": "#14adbe",
        "height": 32,
        "zIndex": -1,
        "left": "66.66667%",
        "right": 0,
        "boxSizing": "border-box",
        "paddingTop": 6,
        "textAlign": "left",
        "marginLeft": -2
    },
    "el-time-panel__content::before": {
        "content": ":",
        "top": "50%",
        "color": "#fff",
        "position": "absolute",
        "fontSize": 14,
        "marginTop": -15,
        "lineHeight": 16,
        "backgroundColor": "#14adbe",
        "height": 32,
        "zIndex": -1,
        "left": 0,
        "right": 0,
        "boxSizing": "border-box",
        "paddingTop": 6,
        "textAlign": "left",
        "paddingLeft": "33.33333%",
        "marginRight": -2
    },
    "el-time-panel__footer": {
        "borderTop": "1px solid #e4e4e4",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "height": 36,
        "lineHeight": 25,
        "textAlign": "right",
        "boxSizing": "border-box"
    },
    "el-time-panel__btn": {
        "border": "none",
        "lineHeight": 28,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "cursor": "pointer",
        "backgroundColor": "transparent",
        "outline": "none",
        "fontSize": 12,
        "color": "#8492a6"
    },
    "el-time-panel__btnconfirm": {
        "fontWeight": "800",
        "color": "#14adbe"
    },
    "time-select": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "minWidth": 0
    },
    "time-select el-picker-panel__content": {
        "maxHeight": 200,
        "overflow": "hidden",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "time-select el-picker-panel__content:hover": {
        "overflowY": "auto"
    },
    "time-select-item": {
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "fontSize": 14
    },
    "time-select-itemselected:not(disabled)": {
        "backgroundColor": "#14adbe",
        "color": "#fff"
    },
    "time-select-itemselected:not(disabled):hover": {
        "backgroundColor": "#1d8ce0"
    },
    "time-select-itemdisabled": {
        "color": "#d3dce6",
        "cursor": "not-allowed"
    },
    "time-select-item:hover": {
        "backgroundColor": "#e5e9f2",
        "cursor": "pointer"
    },
    "el-breadcrumb": {
        "fontSize": 13,
        "lineHeight": 1
    },
    "el-breadcrumb__separator": {
        "marginTop": 0,
        "marginRight": 8,
        "marginBottom": 0,
        "marginLeft": 8,
        "color": "#c0ccda"
    },
    "el-breadcrumb__item": {
        "float": "left"
    },
    "el-breadcrumb__item:last-child el-breadcrumb__item__inner": {
        "color": "#99a9bf",
        "cursor": "text"
    },
    "el-breadcrumb__item:last-child el-breadcrumb__item__inner a": {
        "color": "#99a9bf",
        "cursor": "text"
    },
    "el-breadcrumb__item:last-child el-breadcrumb__item__inner:hover": {
        "color": "#99a9bf",
        "cursor": "text"
    },
    "el-breadcrumb__item:last-child el-breadcrumb__item__inner a:hover": {
        "color": "#99a9bf",
        "cursor": "text"
    },
    "el-breadcrumb__item:last-child el-breadcrumb__separator": {
        "display": "none"
    },
    "el-breadcrumb__item__inner": {
        "transition": "color .15s linear",
        "color": "#475669"
    },
    "el-breadcrumb__item__inner a": {
        "transition": "color .15s linear",
        "color": "#475669"
    },
    "el-breadcrumb__item__inner:hover": {
        "color": "#14adbe",
        "cursor": "pointer"
    },
    "el-breadcrumb__item__inner a:hover": {
        "color": "#14adbe",
        "cursor": "pointer"
    },
    "el-form": {},
    "el-form--label-left": {},
    "el-form--label-left el-form-item__label": {
        "textAlign": "left"
    },
    "el-form--label-top": {},
    "el-form--label-top el-form-item__label": {
        "float": "none",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "el-form--inline": {},
    "el-form--inline el-form-item": {
        "display": "inline-block",
        "marginRight": 10,
        "verticalAlign": "top"
    },
    "el-form-item": {
        "marginBottom": 22
    },
    "el-form-item el-form-item": {
        "marginBottom": 0
    },
    "el-form-item el-form-item el-form-item__content": {
        "marginLeft": "0 !important"
    },
    "el-form-item el-button + el-button": {
        "marginLeft": 10
    },
    "el-form-item el-checkbox + el-checkbox": {
        "marginLeft": 10
    },
    "el-form-item el-radio + el-radio": {
        "marginLeft": 10
    },
    "el-form-itemis-error": {},
    "el-form-itemis-error el-input__inner": {
        "borderColor": "#ff4949"
    },
    "el-form-itemis-error el-textarea__inner": {
        "borderColor": "#ff4949"
    },
    "el-form-itemis-required el-form-item__label:before": {
        "content": "'*'",
        "color": "#ff4949",
        "marginRight": 4
    },
    "el-form-item__label": {
        "textAlign": "right",
        "verticalAlign": "middle",
        "float": "left",
        "fontSize": 14,
        "color": "#5e6d82",
        "lineHeight": 1,
        "paddingTop": 11,
        "paddingRight": 12,
        "paddingBottom": 11,
        "paddingLeft": 0,
        "boxSizing": "border-box"
    },
    "el-form-item__content": {
        "lineHeight": 36,
        "position": "relative",
        "fontSize": 14
    },
    "el-form-item__error": {
        "color": "#ff4949",
        "fontSize": 12,
        "lineHeight": 1,
        "paddingTop": 4,
        "position": "absolute",
        "top": "100%",
        "left": 0
    },
    "el-tabs": {
        "display": "inline-block"
    },
    "el-tabs__header": {
        "borderBottom": "1px solid #d3dce6",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "el-tabs__header:before": {
        "display": "table",
        "content": ""
    },
    "el-tabs__header:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-tabs__active-bar": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": 3,
        "backgroundColor": "#14adbe",
        "zIndex": 1,
        "transition": "transform .3s cubic-bezier(.645,.045,.355,1)",
        "listStyle": "none"
    },
    "el-tabs__item": {
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "height": 42,
        "boxSizing": "border-box",
        "lineHeight": 42,
        "float": "left",
        "listStyle": "none",
        "fontSize": 14,
        "color": "#8492a6",
        "marginBottom": -1,
        "position": "relative"
    },
    "el-tabs__item:hover": {
        "color": "#1f2d3d",
        "cursor": "pointer"
    },
    "el-tabs__itemis-active": {
        "color": "#14adbe"
    },
    "el-tabs__content": {
        "overflow": "hidden",
        "position": "relative"
    },
    "el-tabs--card el-tabs__active-bar": {
        "display": "none"
    },
    "el-tabs--card el-tabs__item": {
        "border": "1px solid transparent",
        "transition": "all .3s cubic-bezier(.645,.045,.355,1)"
    },
    "el-tabs--card el-tabs__itemis-closable": {},
    "el-tabs--card el-tabs__itemis-closable:hover": {
        "paddingRight": 9,
        "paddingLeft": 9
    },
    "el-tabs--card el-tabs__itemis-closable:hover el-icon-close": {
        "width": 14
    },
    "el-tabs--card el-tabs__itemis-active": {
        "border": "1px solid #d3dce6",
        "borderBottomColor": "#fff",
        "borderRadius": "4px 4px 0 0"
    },
    "el-tabs--card el-tabs__itemis-activeis-closable": {
        "paddingRight": 16,
        "paddingLeft": 16
    },
    "el-tabs--card el-tabs__itemis-activeis-closable el-icon-close": {
        "width": 14
    },
    "el-tabs--card el-tabs__item el-icon-close": {
        "fontSize": 12,
        "verticalAlign": "middle",
        "lineHeight": 15,
        "overflow": "hidden",
        "width": 0,
        "height": 14,
        "borderRadius": "50%",
        "textAlign": "center",
        "transformOrigin": "100% 50%",
        "transition": "all .3s cubic-bezier(.645,.045,.355,1)",
        "position": "relative",
        "top": -1,
        "right": -2
    },
    "el-tabs--card el-tabs__item el-icon-close:before": {
        "transform": "scale(.7, .7)",
        "display": "inline-block"
    },
    "el-tabs--card el-tabs__item el-icon-close:hover": {
        "backgroundColor": "#99a9bf",
        "color": "#fff"
    },
    "el-tabs--border-card": {
        "background": "#fff",
        "border": "1px solid #d3dce6",
        "boxShadow": "0px 2px 4px 0px rgba(0,0,0,0.12), 0px 0px 6px 0px rgba(0,0,0,0.04)"
    },
    "el-tabs--border-card el-tabs__content": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "el-tabs--border-card el-tabs__header": {
        "backgroundColor": "#eff2f7",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "el-tabs--border-card el-tabs__item": {
        "transition": "all .3s cubic-bezier(.645,.045,.355,1)",
        "border": "1px solid transparent",
        "borderTop": 0,
        "marginRight": -1,
        "marginLeft": -1
    },
    "el-tabs--border-card el-tabs__itemis-active": {
        "backgroundColor": "#fff",
        "borderRightColor": "#d3dce6",
        "borderLeftColor": "#d3dce6"
    },
    "el-tabs--border-card el-tabs__itemis-active:first-child": {
        "borderLeftColor": "#d3dce6"
    },
    "el-tabs--border-card el-tabs__itemis-active:last-child": {
        "borderRightColor": "#d3dce6"
    },
    "el-tab-pane": {
        "width": "100%",
        "display": "inline-block"
    },
    "slideInRight-transition": {
        "display": "inline-block"
    },
    "slideInLeft-transition": {
        "display": "inline-block"
    },
    "slideInRight-enter": {
        "animation": "slideInRight-enter .3s"
    },
    "slideInRight-leave": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "animation": "slideInRight-leave .3s"
    },
    "slideInLeft-enter": {
        "animation": "slideInLeft-enter .3s"
    },
    "slideInLeft-leave": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "animation": "slideInLeft-leave .3s"
    },
    "el-progress": {
        "position": "relative",
        "lineHeight": 1
    },
    "el-progressis-exception el-progress-bar__inner": {
        "backgroundColor": "#ff4949"
    },
    "el-progressis-exception el-progress__text": {
        "color": "#ff4949"
    },
    "el-progressis-success el-progress-bar__inner": {
        "backgroundColor": "#13ce66"
    },
    "el-progressis-success el-progress__text": {
        "color": "#13ce66"
    },
    "el-progress__text": {
        "fontSize": 14,
        "color": "#475669",
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginLeft": 10,
        "lineHeight": 1
    },
    "el-progress__text i": {
        "verticalAlign": "middle",
        "display": "block"
    },
    "el-progress--circle": {
        "display": "inline-block"
    },
    "el-progress--circle el-progress__text": {
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "width": "100%",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "transform": "translate(0, -50%)"
    },
    "el-progress--circle el-progress__text i": {
        "verticalAlign": "middle",
        "display": "inline-block"
    },
    "el-progress--without-text el-progress__text": {
        "display": "none"
    },
    "el-progress--without-text el-progress-bar": {
        "paddingRight": 0,
        "marginRight": 0,
        "display": "block"
    },
    "el-progress--text-inside el-progress-bar": {
        "paddingRight": 0,
        "marginRight": 0
    },
    "el-progress-bar": {
        "paddingRight": 50,
        "display": "inline-block",
        "verticalAlign": "middle",
        "width": "100%",
        "marginRight": -55,
        "boxSizing": "border-box"
    },
    "el-progress-bar__outer": {
        "height": 6,
        "borderRadius": 100,
        "backgroundColor": "#e5e9f2",
        "overflow": "hidden",
        "position": "relative",
        "verticalAlign": "middle"
    },
    "el-progress-bar__inner": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "height": "100%",
        "borderRadius": 100,
        "backgroundColor": "#14adbe",
        "textAlign": "right",
        "lineHeight": 1
    },
    "el-progress-bar__inner:after": {
        "display": "inline-block",
        "content": "",
        "height": "100%",
        "verticalAlign": "middle"
    },
    "el-progress-bar__innerText": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "color": "#fff",
        "fontSize": 12,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "el-tree": {
        "cursor": "default",
        "background": "#ffffff",
        "border": "1px solid #d3dce6"
    },
    "el-tree__empty-block": {
        "display": "table",
        "minHeight": 60,
        "textAlign": "center",
        "width": "100%",
        "height": "100%"
    },
    "el-tree__empty-text": {
        "display": "table-cell",
        "verticalAlign": "middle",
        "color": "#5e6d82"
    },
    "el-tree-node": {
        "whiteSpace": "nowrap"
    },
    "el-tree-node > el-tree-node__children": {
        "overflow": "hidden",
        "backgroundColor": "transparent",
        "display": "none"
    },
    "el-tree-nodeis-expanded > el-tree-node__children": {
        "display": "block"
    },
    "el-tree-node__content": {
        "lineHeight": 36,
        "height": 36,
        "cursor": "pointer"
    },
    "el-tree-node__content > el-checkbox": {
        "marginRight": 8,
        "verticalAlign": "middle"
    },
    "el-tree-node__content > el-tree-node__expand-icon": {
        "marginRight": 8
    },
    "el-tree-node__content:hover": {
        "background": "#e5e9f2"
    },
    "el-tree-node__expand-icon": {
        "display": "inline-block",
        "cursor": "pointer",
        "width": 0,
        "height": 0,
        "verticalAlign": "middle",
        "marginLeft": 10,
        "border": "6px solid transparent",
        "borderRightWidth": 0,
        "borderLeftColor": "#99a9bf",
        "borderLeftWidth": 7,
        "transform": "rotate(0deg)",
        "transition": "transform 0.3s ease-in-out"
    },
    "el-tree-node__expand-icon:hover": {
        "borderLeftColor": "#999"
    },
    "el-tree-node__expand-iconexpanded": {
        "transform": "rotate(90deg)"
    },
    "el-tree-node__expand-iconis-leaf": {
        "borderColor": "transparent",
        "cursor": "default"
    },
    "el-tree-node__label": {
        "fontSize": 14,
        "verticalAlign": "middle",
        "display": "inline-block"
    },
    "el-tree-node__loading-icon": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginRight": 4,
        "fontSize": 14,
        "color": "#99a9bf"
    },
    "el-tree--highlight-current el-tree-nodeis-current > el-tree-node__content": {
        "backgroundColor": "#eff7ff"
    },
    "collapse-transition": {
        "transition": "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out"
    },
    "el-menu-item": {
        "height": 56,
        "lineHeight": 56,
        "fontSize": 14,
        "color": "#13b7b9",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "cursor": "pointer",
        "position": "relative",
        "transition": "border-color .3s, background-color .3s, color .3s",
        "boxSizing": "border-box",
        "whiteSpace": "nowrap"
    },
    "el-submenu__title": {
        "height": 56,
        "lineHeight": 56,
        "fontSize": 14,
        "color": "#13b7b9",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "cursor": "pointer",
        "position": "relative",
        "transition": "border-color .3s, background-color .3s, color .3s",
        "boxSizing": "border-box",
        "whiteSpace": "nowrap"
    },
    "el-menu": {
        "borderRadius": 2,
        "listStyle": "none",
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 0,
        "backgroundColor": "#eff2f7"
    },
    "el-menu:before": {
        "display": "table",
        "content": ""
    },
    "el-menu:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-menu li": {
        "listStyle": "none"
    },
    "el-menu--dark": {
        "backgroundColor": "#181818"
    },
    "el-menu--dark el-menu-item": {
        "color": "#14adbe"
    },
    "el-menu--dark el-submenu__title": {
        "color": "#14adbe"
    },
    "el-menu--dark el-menu-item:hover": {
        "backgroundColor": "#475669"
    },
    "el-menu--dark el-submenu__title:hover": {
        "backgroundColor": "#475669"
    },
    "el-menu--dark el-submenu el-menu": {
        "backgroundColor": "#1f2f3d"
    },
    "el-menu--dark el-submenu el-menu el-menu-item:hover": {
        "backgroundColor": "#475669"
    },
    "el-menu--horizontal": {},
    "el-menu--horizontal el-menu-item": {
        "float": "left",
        "height": 60,
        "lineHeight": 60,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "cursor": "pointer",
        "position": "relative",
        "boxSizing": "border-box",
        "borderBottom": "5px solid transparent"
    },
    "el-menu--horizontal el-menu-item:hover": {
        "backgroundColor": "#eff2f7"
    },
    "el-menu--horizontal el-submenu": {
        "float": "left",
        "position": "relative"
    },
    "el-menu--horizontal el-submenu > el-menu": {
        "position": "absolute",
        "top": 65,
        "left": 0,
        "border": "1px solid #d3dce6",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "backgroundColor": "#fff",
        "zIndex": 100,
        "minWidth": "100%",
        "boxShadow": "0px 2px 4px 0px rgba(0,0,0,0.12), 0px 0px 6px 0px rgba(0,0,0,0.04)"
    },
    "el-menu--horizontal el-submenu el-submenu__title": {
        "height": 60,
        "lineHeight": 60,
        "borderBottom": "5px solid transparent"
    },
    "el-menu--horizontal el-submenu el-menu-item": {
        "backgroundColor": "#fff",
        "float": "none",
        "height": 36,
        "lineHeight": 36,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "el-menu--horizontal el-submenu el-submenu__icon-arrow": {
        "position": "static",
        "verticalAlign": "middle",
        "marginLeft": 5,
        "color": "#99a9bf",
        "marginTop": -3
    },
    "el-menu--horizontal el-submenu__title:hover": {
        "backgroundColor": "#eff2f7"
    },
    "el-menu--horizontal > el-menu-item:hover": {
        "borderBottom": "5px solid #14adbe"
    },
    "el-menu--horizontal > el-submenu:hover el-submenu__title": {
        "borderBottom": "5px solid #14adbe"
    },
    "el-menu--horizontal > el-submenuis-active el-submenu__title": {
        "borderBottom": "5px solid #14adbe"
    },
    "el-menu--horizontalel-menu--dark": {},
    "el-menu--horizontalel-menu--dark el-menu-item:hover": {
        "backgroundColor": "#181818"
    },
    "el-menu--horizontalel-menu--dark el-submenu__title:hover": {
        "backgroundColor": "#181818"
    },
    "el-menu--horizontalel-menu--dark el-submenu el-menu-item": {
        "color": "#475669"
    },
    "el-menu--horizontalel-menu--dark el-submenu el-submenu-title": {
        "color": "#475669"
    },
    "el-menu--horizontalel-menu--dark el-submenu el-menu-item:hover": {
        "backgroundColor": "#d3dce6"
    },
    "el-menu--horizontalel-menu--dark el-submenu el-submenu-title:hover": {
        "backgroundColor": "#d3dce6"
    },
    "el-menu--horizontalel-menu--dark el-submenu el-menu-itemis-active": {
        "color": "#14adbe"
    },
    "el-menu-item [class^=\"el-icon-\"]": {
        "verticalAlign": "baseline",
        "marginRight": 10
    },
    "el-menu-item:first-child": {
        "marginLeft": 0
    },
    "el-menu-item:last-child": {
        "marginRight": 0
    },
    "el-menu-item:hover": {
        "backgroundColor": "#d3dce6"
    },
    "el-menu-itemis-active": {
        "color": "#14adbe"
    },
    "el-submenu [class^=\"el-icon-\"]": {
        "verticalAlign": "baseline",
        "marginRight": 10
    },
    "el-submenu el-menu": {
        "backgroundColor": "#e5e9f2"
    },
    "el-submenu el-menu-item": {
        "height": 50,
        "lineHeight": 50,
        "paddingTop": 0,
        "paddingRight": 45,
        "paddingBottom": 0,
        "paddingLeft": 45
    },
    "el-submenu el-menu-item:hover": {
        "backgroundColor": "#d3dce6"
    },
    "el-submenuis-opened el-submenu__icon-arrow": {
        "transform": "rotateZ(180deg)"
    },
    "el-submenuis-active el-submenu__title": {
        "borderBottomColor": "#14adbe"
    },
    "el-submenu__title:hover": {
        "backgroundColor": "#d3dce6"
    },
    "el-submenu__icon-arrow": {
        "position": "absolute",
        "top": "50%",
        "right": 20,
        "marginTop": -7,
        "transition": "transform .3s",
        "fontSize": 12
    },
    "el-menu-item-group > ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "el-menu-item-group__title": {
        "paddingTop": 15,
        "lineHeight": "normal",
        "fontSize": 14,
        "paddingLeft": 20,
        "color": "#99a9bf"
    },
    "el-upload": {
        "width": 360
    },
    "el-upload__input": {
        "display": "none"
    },
    "el-upload__inner": {
        "display": "inline-block",
        "position": "relative"
    },
    "el-upload__inner iframe": {
        "position": "absolute",
        "zIndex": -1,
        "top": 0,
        "left": 0,
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "el-upload__files": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "el-upload__file": {
        "transition": "all .5s cubic-bezier(.55,0,.1,1)",
        "fontSize": 14,
        "color": "#475669",
        "lineHeight": 32,
        "position": "relative",
        "boxSizing": "border-box",
        "borderRadius": 4,
        "width": "100%",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "el-upload__file a": {
        "color": "#475669",
        "transition": "color .3s",
        "paddingLeft": 4
    },
    "el-upload__file a [class^=\"el-icon\"]": {
        "color": "#99a9bf",
        "marginRight": 7,
        "height": "100%",
        "lineHeight": "inherit"
    },
    "el-upload__file el-progress-bar": {
        "marginRight": 0,
        "paddingRight": 0
    },
    "el-upload__file el-progress": {
        "position": "absolute",
        "bottom": -3,
        "width": "100%"
    },
    "el-upload__file el-progress__text": {
        "position": "absolute",
        "right": 0,
        "top": -10
    },
    "el-upload__file:hover": {
        "backgroundColor": "#eff2f7"
    },
    "el-upload__fileis-finished": {},
    "el-upload__fileis-finished a:hover": {
        "color": "#14adbe",
        "cursor": "pointer"
    },
    "el-upload__fileis-finished:hover el-upload__btn-delete": {
        "display": "block",
        "cursor": "pointer"
    },
    "el-upload__tip": {
        "fontSize": 12,
        "color": "#8492a6",
        "marginTop": 7
    },
    "el-upload__btn-delete": {
        "position": "absolute",
        "right": 15,
        "top": 0,
        "fontSize": 12,
        "color": "#14adbe",
        "display": "none"
    },
    "el-dragger": {
        "backgroundColor": "#f9fafc",
        "border": "1px solid #c0ccda",
        "boxSizing": "border-box",
        "width": 360,
        "height": 180,
        "borderRadius": 4,
        "textAlign": "center",
        "cursor": "pointer",
        "position": "relative",
        "overflow": "hidden"
    },
    "el-dragger el-upload__inner": {
        "display": "block",
        "height": "100%"
    },
    "el-dragger el-icon-upload": {
        "fontSize": 67,
        "color": "#99a9bf",
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 16,
        "marginLeft": 0,
        "lineHeight": 50
    },
    "el-dragger + el-upload__tip": {
        "textAlign": "center"
    },
    "el-dragger ~ el-upload__files": {
        "marginTop": 7,
        "paddingTop": 5,
        "borderTop": "1px solid rgba(192, 204, 218, 0.2)"
    },
    "el-dragger:not(is-showCover):hover": {
        "borderColor": "#14adbe"
    },
    "el-draggeris-dragOver": {
        "backgroundColor": "rgba(32, 159, 255, .06)",
        "border": "2px dashed #14adbe"
    },
    "el-dragger__cover": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "zIndex": 10,
        "cursor": "default"
    },
    "el-dragger__cover:after": {
        "display": "inline-block",
        "content": "",
        "height": "100%",
        "verticalAlign": "middle"
    },
    "el-dragger__cover img": {
        "display": "block",
        "width": "100%",
        "height": "auto"
    },
    "el-dragger__cover + el-upload__inner": {
        "opacity": 0,
        "position": "relative",
        "zIndex": 1
    },
    "el-dragger__cover__progress": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "position": "static",
        "width": 243
    },
    "el-dragger__cover__progress + el-upload__inner": {
        "opacity": 0
    },
    "el-dragger__cover__content": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "el-dragger__cover__interact": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.72)",
        "textAlign": "center"
    },
    "el-dragger__cover__interact btn": {
        "display": "inline-block",
        "color": "#fff",
        "fontSize": 14,
        "cursor": "pointer",
        "verticalAlign": "middle",
        "transition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "marginTop": 60
    },
    "el-dragger__cover__interact btn i": {
        "marginTop": 0,
        "color": "#fff",
        "display": "block",
        "fontSize": 24,
        "lineHeight": "inherit",
        "marginRight": "auto",
        "marginBottom": 5,
        "marginLeft": "auto"
    },
    "el-dragger__cover__interact btn span": {
        "opacity": 0,
        "transition": "opacity .15s linear"
    },
    "el-dragger__cover__interact btn:not(:first-child)": {
        "marginLeft": 35
    },
    "el-dragger__cover__interact btn:hover": {
        "transform": "translateY(-13px)"
    },
    "el-dragger__cover__interact btn:hover span": {
        "opacity": 1
    },
    "el-dragger__cover__title": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "backgroundColor": "#fff",
        "height": 36,
        "width": "100%",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "fontWeight": "400",
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 36,
        "fontSize": 14,
        "color": "#475669"
    },
    "el-dragger__text": {
        "color": "#99a9bf",
        "fontSize": 14,
        "textAlign": "center"
    },
    "el-dragger__text em": {
        "color": "#14adbe",
        "fontStyle": "normal"
    },
    "el-row": {
        "position": "relative",
        "boxSizing": "border-box"
    },
    "el-row:before": {
        "display": "table",
        "content": ""
    },
    "el-row:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    "el-row--flex": {
        "display": "flex"
    },
    "el-row--flex:before": {
        "display": "none"
    },
    "el-row--flex:after": {
        "display": "none"
    },
    "el-row--flexis-align-bottom": {
        "MsFlexAlign": "end",
        "alignItems": "flex-end"
    },
    "el-row--flexis-align-middle": {
        "MsFlexAlign": "center",
        "alignItems": "center"
    },
    "el-row--flexis-justify-space-around": {
        "MsFlexPack": "distribute",
        "justifyContent": "space-around"
    },
    "el-row--flexis-justify-space-between": {
        "MsFlexPack": "justify",
        "justifyContent": "space-between"
    },
    "el-row--flexis-justify-end": {
        "MsFlexPack": "end",
        "justifyContent": "flex-end"
    },
    "el-row--flexis-justify-center": {
        "MsFlexPack": "center",
        "justifyContent": "center"
    },
    "el-col-1": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "4.16667%"
    },
    "el-col-2": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "8.33333%"
    },
    "el-col-3": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "12.5%"
    },
    "el-col-4": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "16.66667%"
    },
    "el-col-5": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "20.83333%"
    },
    "el-col-6": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "25%"
    },
    "el-col-7": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "29.16667%"
    },
    "el-col-8": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "33.33333%"
    },
    "el-col-9": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "37.5%"
    },
    "el-col-10": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "41.66667%"
    },
    "el-col-11": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "45.83333%"
    },
    "el-col-12": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "50%"
    },
    "el-col-13": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "54.16667%"
    },
    "el-col-14": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "58.33333%"
    },
    "el-col-15": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "62.5%"
    },
    "el-col-16": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "66.66667%"
    },
    "el-col-17": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "70.83333%"
    },
    "el-col-18": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "75%"
    },
    "el-col-19": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "79.16667%"
    },
    "el-col-20": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "83.33333%"
    },
    "el-col-21": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "87.5%"
    },
    "el-col-22": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "91.66667%"
    },
    "el-col-23": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "95.83333%"
    },
    "el-col-24": {
        "float": "left",
        "boxSizing": "border-box",
        "width": "100%"
    },
    "el-col-xs-1": {
        "width": "4.16667%"
    },
    "el-col-offset-1": {
        "marginLeft": "4.16667%"
    },
    "el-col-xs-offset-1": {
        "marginLeft": "4.16667%"
    },
    "el-col-pull-1": {
        "position": "relative",
        "right": "4.16667%"
    },
    "el-col-xs-pull-1": {
        "position": "relative",
        "right": "4.16667%"
    },
    "el-col-push-1": {
        "position": "relative",
        "left": "4.16667%"
    },
    "el-col-xs-push-1": {
        "position": "relative",
        "left": "4.16667%"
    },
    "el-col-xs-2": {
        "width": "8.33333%"
    },
    "el-col-offset-2": {
        "marginLeft": "8.33333%"
    },
    "el-col-xs-offset-2": {
        "marginLeft": "8.33333%"
    },
    "el-col-pull-2": {
        "position": "relative",
        "right": "8.33333%"
    },
    "el-col-xs-pull-2": {
        "position": "relative",
        "right": "8.33333%"
    },
    "el-col-push-2": {
        "position": "relative",
        "left": "8.33333%"
    },
    "el-col-xs-push-2": {
        "position": "relative",
        "left": "8.33333%"
    },
    "el-col-xs-3": {
        "width": "12.5%"
    },
    "el-col-offset-3": {
        "marginLeft": "12.5%"
    },
    "el-col-xs-offset-3": {
        "marginLeft": "12.5%"
    },
    "el-col-pull-3": {
        "position": "relative",
        "right": "12.5%"
    },
    "el-col-xs-pull-3": {
        "position": "relative",
        "right": "12.5%"
    },
    "el-col-push-3": {
        "position": "relative",
        "left": "12.5%"
    },
    "el-col-xs-push-3": {
        "position": "relative",
        "left": "12.5%"
    },
    "el-col-xs-4": {
        "width": "16.66667%"
    },
    "el-col-offset-4": {
        "marginLeft": "16.66667%"
    },
    "el-col-xs-offset-4": {
        "marginLeft": "16.66667%"
    },
    "el-col-pull-4": {
        "position": "relative",
        "right": "16.66667%"
    },
    "el-col-xs-pull-4": {
        "position": "relative",
        "right": "16.66667%"
    },
    "el-col-push-4": {
        "position": "relative",
        "left": "16.66667%"
    },
    "el-col-xs-push-4": {
        "position": "relative",
        "left": "16.66667%"
    },
    "el-col-xs-5": {
        "width": "20.83333%"
    },
    "el-col-offset-5": {
        "marginLeft": "20.83333%"
    },
    "el-col-xs-offset-5": {
        "marginLeft": "20.83333%"
    },
    "el-col-pull-5": {
        "position": "relative",
        "right": "20.83333%"
    },
    "el-col-xs-pull-5": {
        "position": "relative",
        "right": "20.83333%"
    },
    "el-col-push-5": {
        "position": "relative",
        "left": "20.83333%"
    },
    "el-col-xs-push-5": {
        "position": "relative",
        "left": "20.83333%"
    },
    "el-col-xs-6": {
        "width": "25%"
    },
    "el-col-offset-6": {
        "marginLeft": "25%"
    },
    "el-col-xs-offset-6": {
        "marginLeft": "25%"
    },
    "el-col-pull-6": {
        "position": "relative",
        "right": "25%"
    },
    "el-col-xs-pull-6": {
        "position": "relative",
        "right": "25%"
    },
    "el-col-push-6": {
        "position": "relative",
        "left": "25%"
    },
    "el-col-xs-push-6": {
        "position": "relative",
        "left": "25%"
    },
    "el-col-xs-7": {
        "width": "29.16667%"
    },
    "el-col-offset-7": {
        "marginLeft": "29.16667%"
    },
    "el-col-xs-offset-7": {
        "marginLeft": "29.16667%"
    },
    "el-col-pull-7": {
        "position": "relative",
        "right": "29.16667%"
    },
    "el-col-xs-pull-7": {
        "position": "relative",
        "right": "29.16667%"
    },
    "el-col-push-7": {
        "position": "relative",
        "left": "29.16667%"
    },
    "el-col-xs-push-7": {
        "position": "relative",
        "left": "29.16667%"
    },
    "el-col-xs-8": {
        "width": "33.33333%"
    },
    "el-col-offset-8": {
        "marginLeft": "33.33333%"
    },
    "el-col-xs-offset-8": {
        "marginLeft": "33.33333%"
    },
    "el-col-pull-8": {
        "position": "relative",
        "right": "33.33333%"
    },
    "el-col-xs-pull-8": {
        "position": "relative",
        "right": "33.33333%"
    },
    "el-col-push-8": {
        "position": "relative",
        "left": "33.33333%"
    },
    "el-col-xs-push-8": {
        "position": "relative",
        "left": "33.33333%"
    },
    "el-col-xs-9": {
        "width": "37.5%"
    },
    "el-col-offset-9": {
        "marginLeft": "37.5%"
    },
    "el-col-xs-offset-9": {
        "marginLeft": "37.5%"
    },
    "el-col-pull-9": {
        "position": "relative",
        "right": "37.5%"
    },
    "el-col-xs-pull-9": {
        "position": "relative",
        "right": "37.5%"
    },
    "el-col-push-9": {
        "position": "relative",
        "left": "37.5%"
    },
    "el-col-xs-push-9": {
        "position": "relative",
        "left": "37.5%"
    },
    "el-col-xs-10": {
        "width": "41.66667%"
    },
    "el-col-offset-10": {
        "marginLeft": "41.66667%"
    },
    "el-col-xs-offset-10": {
        "marginLeft": "41.66667%"
    },
    "el-col-pull-10": {
        "position": "relative",
        "right": "41.66667%"
    },
    "el-col-xs-pull-10": {
        "position": "relative",
        "right": "41.66667%"
    },
    "el-col-push-10": {
        "position": "relative",
        "left": "41.66667%"
    },
    "el-col-xs-push-10": {
        "position": "relative",
        "left": "41.66667%"
    },
    "el-col-xs-11": {
        "width": "45.83333%"
    },
    "el-col-offset-11": {
        "marginLeft": "45.83333%"
    },
    "el-col-xs-offset-11": {
        "marginLeft": "45.83333%"
    },
    "el-col-pull-11": {
        "position": "relative",
        "right": "45.83333%"
    },
    "el-col-xs-pull-11": {
        "position": "relative",
        "right": "45.83333%"
    },
    "el-col-push-11": {
        "position": "relative",
        "left": "45.83333%"
    },
    "el-col-xs-push-11": {
        "position": "relative",
        "left": "45.83333%"
    },
    "el-col-xs-12": {
        "width": "50%"
    },
    "el-col-offset-12": {
        "marginLeft": "50%"
    },
    "el-col-xs-offset-12": {
        "marginLeft": "50%"
    },
    "el-col-pull-12": {
        "position": "relative",
        "right": "50%"
    },
    "el-col-xs-pull-12": {
        "position": "relative",
        "right": "50%"
    },
    "el-col-push-12": {
        "position": "relative",
        "left": "50%"
    },
    "el-col-xs-push-12": {
        "position": "relative",
        "left": "50%"
    },
    "el-col-xs-13": {
        "width": "54.16667%"
    },
    "el-col-offset-13": {
        "marginLeft": "54.16667%"
    },
    "el-col-xs-offset-13": {
        "marginLeft": "54.16667%"
    },
    "el-col-pull-13": {
        "position": "relative",
        "right": "54.16667%"
    },
    "el-col-xs-pull-13": {
        "position": "relative",
        "right": "54.16667%"
    },
    "el-col-push-13": {
        "position": "relative",
        "left": "54.16667%"
    },
    "el-col-xs-push-13": {
        "position": "relative",
        "left": "54.16667%"
    },
    "el-col-xs-14": {
        "width": "58.33333%"
    },
    "el-col-offset-14": {
        "marginLeft": "58.33333%"
    },
    "el-col-xs-offset-14": {
        "marginLeft": "58.33333%"
    },
    "el-col-pull-14": {
        "position": "relative",
        "right": "58.33333%"
    },
    "el-col-xs-pull-14": {
        "position": "relative",
        "right": "58.33333%"
    },
    "el-col-push-14": {
        "position": "relative",
        "left": "58.33333%"
    },
    "el-col-xs-push-14": {
        "position": "relative",
        "left": "58.33333%"
    },
    "el-col-xs-15": {
        "width": "62.5%"
    },
    "el-col-offset-15": {
        "marginLeft": "62.5%"
    },
    "el-col-xs-offset-15": {
        "marginLeft": "62.5%"
    },
    "el-col-pull-15": {
        "position": "relative",
        "right": "62.5%"
    },
    "el-col-xs-pull-15": {
        "position": "relative",
        "right": "62.5%"
    },
    "el-col-push-15": {
        "position": "relative",
        "left": "62.5%"
    },
    "el-col-xs-push-15": {
        "position": "relative",
        "left": "62.5%"
    },
    "el-col-xs-16": {
        "width": "66.66667%"
    },
    "el-col-offset-16": {
        "marginLeft": "66.66667%"
    },
    "el-col-xs-offset-16": {
        "marginLeft": "66.66667%"
    },
    "el-col-pull-16": {
        "position": "relative",
        "right": "66.66667%"
    },
    "el-col-xs-pull-16": {
        "position": "relative",
        "right": "66.66667%"
    },
    "el-col-push-16": {
        "position": "relative",
        "left": "66.66667%"
    },
    "el-col-xs-push-16": {
        "position": "relative",
        "left": "66.66667%"
    },
    "el-col-xs-17": {
        "width": "70.83333%"
    },
    "el-col-offset-17": {
        "marginLeft": "70.83333%"
    },
    "el-col-xs-offset-17": {
        "marginLeft": "70.83333%"
    },
    "el-col-pull-17": {
        "position": "relative",
        "right": "70.83333%"
    },
    "el-col-xs-pull-17": {
        "position": "relative",
        "right": "70.83333%"
    },
    "el-col-push-17": {
        "position": "relative",
        "left": "70.83333%"
    },
    "el-col-xs-push-17": {
        "position": "relative",
        "left": "70.83333%"
    },
    "el-col-xs-18": {
        "width": "75%"
    },
    "el-col-offset-18": {
        "marginLeft": "75%"
    },
    "el-col-xs-offset-18": {
        "marginLeft": "75%"
    },
    "el-col-pull-18": {
        "position": "relative",
        "right": "75%"
    },
    "el-col-xs-pull-18": {
        "position": "relative",
        "right": "75%"
    },
    "el-col-push-18": {
        "position": "relative",
        "left": "75%"
    },
    "el-col-xs-push-18": {
        "position": "relative",
        "left": "75%"
    },
    "el-col-xs-19": {
        "width": "79.16667%"
    },
    "el-col-offset-19": {
        "marginLeft": "79.16667%"
    },
    "el-col-xs-offset-19": {
        "marginLeft": "79.16667%"
    },
    "el-col-pull-19": {
        "position": "relative",
        "right": "79.16667%"
    },
    "el-col-xs-pull-19": {
        "position": "relative",
        "right": "79.16667%"
    },
    "el-col-push-19": {
        "position": "relative",
        "left": "79.16667%"
    },
    "el-col-xs-push-19": {
        "position": "relative",
        "left": "79.16667%"
    },
    "el-col-xs-20": {
        "width": "83.33333%"
    },
    "el-col-offset-20": {
        "marginLeft": "83.33333%"
    },
    "el-col-xs-offset-20": {
        "marginLeft": "83.33333%"
    },
    "el-col-pull-20": {
        "position": "relative",
        "right": "83.33333%"
    },
    "el-col-xs-pull-20": {
        "position": "relative",
        "right": "83.33333%"
    },
    "el-col-push-20": {
        "position": "relative",
        "left": "83.33333%"
    },
    "el-col-xs-push-20": {
        "position": "relative",
        "left": "83.33333%"
    },
    "el-col-xs-21": {
        "width": "87.5%"
    },
    "el-col-offset-21": {
        "marginLeft": "87.5%"
    },
    "el-col-xs-offset-21": {
        "marginLeft": "87.5%"
    },
    "el-col-pull-21": {
        "position": "relative",
        "right": "87.5%"
    },
    "el-col-xs-pull-21": {
        "position": "relative",
        "right": "87.5%"
    },
    "el-col-push-21": {
        "position": "relative",
        "left": "87.5%"
    },
    "el-col-xs-push-21": {
        "position": "relative",
        "left": "87.5%"
    },
    "el-col-xs-22": {
        "width": "91.66667%"
    },
    "el-col-offset-22": {
        "marginLeft": "91.66667%"
    },
    "el-col-xs-offset-22": {
        "marginLeft": "91.66667%"
    },
    "el-col-pull-22": {
        "position": "relative",
        "right": "91.66667%"
    },
    "el-col-xs-pull-22": {
        "position": "relative",
        "right": "91.66667%"
    },
    "el-col-push-22": {
        "position": "relative",
        "left": "91.66667%"
    },
    "el-col-xs-push-22": {
        "position": "relative",
        "left": "91.66667%"
    },
    "el-col-xs-23": {
        "width": "95.83333%"
    },
    "el-col-offset-23": {
        "marginLeft": "95.83333%"
    },
    "el-col-xs-offset-23": {
        "marginLeft": "95.83333%"
    },
    "el-col-pull-23": {
        "position": "relative",
        "right": "95.83333%"
    },
    "el-col-xs-pull-23": {
        "position": "relative",
        "right": "95.83333%"
    },
    "el-col-push-23": {
        "position": "relative",
        "left": "95.83333%"
    },
    "el-col-xs-push-23": {
        "position": "relative",
        "left": "95.83333%"
    },
    "el-col-xs-24": {
        "width": "100%"
    },
    "el-col-offset-24": {
        "marginLeft": "100%"
    },
    "el-col-xs-offset-24": {
        "marginLeft": "100%"
    },
    "el-col-pull-24": {
        "position": "relative",
        "right": "100%"
    },
    "el-col-xs-pull-24": {
        "position": "relative",
        "right": "100%"
    },
    "el-col-push-24": {
        "position": "relative",
        "left": "100%"
    },
    "el-col-xs-push-24": {
        "position": "relative",
        "left": "100%"
    },
    "el-spinner": {
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "el-spinner-inner": {
        "animation": "rotate 2s linear infinite",
        "width": 50,
        "height": 50
    },
    "el-spinner-inner path": {
        "stroke": "#ececec",
        "strokeLinecap": "round",
        "animation": "dash 1.5s ease-in-out infinite"
    },
    "el-badge": {
        "position": "relative",
        "verticalAlign": "middle",
        "display": "inline-block"
    },
    "el-badge__content": {
        "backgroundColor": "#ff4949",
        "borderRadius": 10,
        "color": "#fff",
        "display": "inline-block",
        "fontSize": 12,
        "height": 18,
        "lineHeight": 18,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "border": "1px solid #fff"
    },
    "el-badge__contentis-dot": {
        "width": 8,
        "height": 8,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "right": 0,
        "borderRadius": "50%"
    },
    "el-badge__contentis-fixed": {
        "top": 0,
        "right": 10,
        "position": "absolute",
        "transform": "translateY(-50%) translateX(100%)"
    },
    "el-badge__contentis-fixedis-dot": {
        "right": 5
    },
    "el-card": {
        "border": "1px solid #D3DCE6",
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "overflow": "hidden",
        "boxShadow": "0px 2px 4px 0px rgba(0, 0, 0, .12),                0px 0px 6px 0px rgba(0, 0, 0, .04)"
    },
    "el-card__header": {
        "paddingTop": 18,
        "paddingRight": 20,
        "paddingBottom": 18,
        "paddingLeft": 20,
        "borderBottom": "1px solid #D3DCE6",
        "boxSizing": "border-box"
    },
    "el-card__body": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "el-rate": {
        "height": 20,
        "lineHeight": 1
    },
    "el-rate__item": {
        "display": "inline-block",
        "position": "relative",
        "fontSize": 0,
        "verticalAlign": "middle"
    },
    "el-rate__icon": {
        "position": "relative",
        "display": "inline-block",
        "fontSize": 18,
        "marginRight": 6,
        "color": "#C6D1DE",
        "transition": ".3s"
    },
    "el-rate__icon path2": {
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "el-rate__iconhover": {
        "transform": "scale(1.15)"
    },
    "el-rate__decimal": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "inline-block",
        "overflow": "hidden"
    },
    "el-rate__text": {
        "fontSize": 14,
        "verticalAlign": "middle"
    },
    "el-steps": {
        "fontSize": 0
    },
    "el-steps > :last-child el-step__line": {
        "display": "none"
    },
    "el-stepsis-horizontal": {
        "whiteSpace": "nowrap"
    },
    "el-step": {
        "position": "relative",
        "verticalAlign": "top"
    },
    "el-stepis-vertical": {},
    "el-stepis-vertical el-step__head": {
        "display": "inline-block"
    },
    "el-stepis-vertical el-step__main": {
        "display": "inline-block",
        "paddingLeft": 10
    },
    "el-stepis-horizontal": {
        "display": "inline-block"
    },
    "el-step__line": {
        "display": "inline-block",
        "position": "absolute",
        "borderColor": "inherit",
        "backgroundColor": "#c0ccda"
    },
    "el-step__lineis-vertical": {
        "width": 2,
        "boxSizing": "border-box",
        "top": 30,
        "bottom": 0
    },
    "el-step__lineis-horizontal": {
        "top": 15,
        "height": 2,
        "left": 30,
        "right": 0
    },
    "el-step__lineis-icon": {},
    "el-step__lineis-iconis-horizontal": {
        "right": 4
    },
    "el-step__line-inner": {
        "display": "inherit",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "inherit",
        "transition": "all 150ms",
        "width": 0,
        "height": 0
    },
    "el-step__icon": {
        "display": "block",
        "lineHeight": 28
    },
    "el-step__icon > *": {
        "lineHeight": "inherit",
        "verticalAlign": "middle"
    },
    "el-step__head": {
        "width": 28,
        "height": 28,
        "borderRadius": "50%",
        "backgroundColor": "transparent",
        "textAlign": "center",
        "lineHeight": 28,
        "fontSize": 28,
        "verticalAlign": "top",
        "transition": "all 150ms"
    },
    "el-step__headis-finish": {
        "color": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-step__headis-error": {
        "color": "#ff4949",
        "borderColor": "#ff4949"
    },
    "el-step__headis-success": {
        "color": "#13ce66",
        "borderColor": "#13ce66"
    },
    "el-step__headis-wait": {
        "color": "#c0ccda",
        "borderColor": "#c0ccda"
    },
    "el-step__headis-process": {
        "color": "#c0ccda",
        "borderColor": "#c0ccda"
    },
    "el-step__headis-text": {
        "fontSize": 14,
        "borderWidth": 2,
        "borderStyle": "solid"
    },
    "el-step__headis-textis-finish": {
        "color": "#fff",
        "backgroundColor": "#14adbe",
        "borderColor": "#14adbe"
    },
    "el-step__headis-textis-error": {
        "color": "#fff",
        "backgroundColor": "#ff4949",
        "borderColor": "#ff4949"
    },
    "el-step__headis-textis-success": {
        "color": "#fff",
        "backgroundColor": "#13ce66",
        "borderColor": "#13ce66"
    },
    "el-step__headis-textis-wait": {
        "color": "#c0ccda",
        "backgroundColor": "#fff",
        "borderColor": "#c0ccda"
    },
    "el-step__headis-textis-process": {
        "color": "#fff",
        "backgroundColor": "#c0ccda",
        "borderColor": "#c0ccda"
    },
    "el-step__main": {
        "whiteSpace": "normal",
        "paddingRight": 10,
        "textAlign": "left"
    },
    "el-step__title": {
        "fontSize": 14,
        "lineHeight": 32,
        "display": "inline-block"
    },
    "el-step__titleis-finish": {
        "fontWeight": "700",
        "color": "#14adbe"
    },
    "el-step__titleis-error": {
        "fontWeight": "700",
        "color": "#ff4949"
    },
    "el-step__titleis-success": {
        "fontWeight": "700",
        "color": "#13ce66"
    },
    "el-step__titleis-wait": {
        "fontWeight": "400",
        "color": "#99a9bf"
    },
    "el-step__titleis-process": {
        "fontWeight": "700",
        "color": "#475669"
    },
    "el-step__description": {
        "fontSize": 12,
        "fontWeight": "400",
        "lineHeight": 14
    },
    "el-step__descriptionis-finish": {
        "color": "#14adbe"
    },
    "el-step__descriptionis-error": {
        "color": "#ff4949"
    },
    "el-step__descriptionis-success": {
        "color": "#13ce66"
    },
    "el-step__descriptionis-wait": {
        "color": "#c0ccda"
    },
    "el-step__descriptionis-process": {
        "color": "#8492a6"
    }
});