import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    ":root": {},
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
    "el-time-spinner": {},
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
    }
});