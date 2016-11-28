import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "el-menu:before": {
        "display": "table",
        "content": ""
    },
    "el-menu:after": {
        "display": "table",
        "content": "",
        "clear": "both"
    },
    ":root": {},
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
    "el-menu li": {
        "listStyle": "none"
    },
    "el-menu--dark": {
        "backgroundColor": "#181818"
    },
    "el-menu--dark el-menu-item": {
        "color": "#c0ccda"
    },
    "el-menu--dark el-submenu__title": {
        "color": "#c0ccda"
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
    }
});