import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    ":root": {
        "FadeTransition": "opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        "FadeLinearTransition": "opacity 200ms linear",
        "MdFadeTransition": "transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
        "BorderTransitionBase": "border-color .2s cubic-bezier(.645,.045,.355,1)",
        "ColorTransitionBase": "color .2s cubic-bezier(.645,.045,.355,1)",
        "ColorPrimary": "#14adbe",
        "ColorSuccess": "#13ce66",
        "ColorWarning": "#f7ba2a",
        "ColorDanger": "#ff4949",
        "ColorInfo": "#50BFFF",
        "ColorBlue": "#14adbe",
        "ColorBlueLight": "#5da9ff",
        "ColorBlueLighter": "rgba(var(--color-blue), 0.12)",
        "ColorWhite": "#fff",
        "ColorBlack": "#000",
        "ColorGrey": "#C0CCDA",
        "LinkColor": "#475669",
        "LinkHoverColor": "var(--color-primary)",
        "BorderWidthBase": 1,
        "BorderStyleBase": "solid",
        "BorderColorBase": "var(--color-grey)",
        "BorderColorHover": "#8492a6",
        "BorderBase": "var(--border-width-base) var(--border-style-base) var(--border-color-base)",
        "BorderRadiusBase": 4,
        "BorderRadiusSmall": 2,
        "BorderRadiusCircle": "100%",
        "ShadowBase": "0 0 2px rgba(var(--color-black), 0.18), 0 0 1px var(--color-blue-light)",
        "BoxShadowBase": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",
        "BoxShadowDark": "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)",
        "FillBase": "var(--color-white)",
        "FontSizeBase": 14,
        "FontColorBase": "#1f2d3d",
        "FontColorDisabledBase": "#bbb",
        "SizeBase": 14,
        "IndexNormal": 1,
        "IndexTop": 1000,
        "IndexPopper": 2000,
        "DisabledFillBase": "#EFF2F7",
        "DisabledColorBase": "#bbb",
        "DisabledBorderBase": "#D3DCE6",
        "IconColor": "#666",
        "CheckboxFontSize": 14,
        "CheckboxColor": "#1f2d3d",
        "CheckboxInputHeight": 18,
        "CheckboxInputWidth": 18,
        "CheckboxInputBorderRadius": "var(--border-radius-base)",
        "CheckboxInputFill": "var(--color-white)",
        "CheckboxInputBorder": "var(--border-base)",
        "CheckboxInputBorderColor": "var(--border-color-base)",
        "CheckboxIconColor": "var(--color-white)",
        "CheckboxDisabledInputBorderColor": "var(--disabled-border-base)",
        "CheckboxDisabledInputFill": "var(--disabled-fill-base)",
        "CheckboxDisabledIconColor": "var(--disabled-fill-base)",
        "CheckboxDisabledCheckedInputFill": "var(--disabled-border-base)",
        "CheckboxDisabledCheckedInputBorderColor": "var(--disabled-border-base)",
        "CheckboxDisabledCheckedIconColor": "var(--color-white)",
        "CheckboxCheckedInputBorderColor": "var(--color-blue)",
        "CheckboxCheckedInputFill": "var(--color-primary)",
        "CheckboxCheckedIconColor": "var(--fill-base)",
        "CheckboxInputShadowHover": "var(--shadow-base)",
        "CheckboxInputBorderColorHover": "var(--color-primary)",
        "RadioFontSize": 14,
        "RadioColor": "#1f2d3d",
        "RadioInputHeight": 18,
        "RadioInputWidth": 18,
        "RadioInputBorderRadius": "var(--border-radius-circle)",
        "RadioInputFill": "var(--color-white)",
        "RadioInputBorder": "var(--border-base)",
        "RadioInputBorderColor": "var(--border-color-base)",
        "RadioIconColor": "var(--color-white)",
        "RadioDisabledInputBorderColor": "var(--disabled-border-base)",
        "RadioDisabledInputFill": "var(--disabled-fill-base)",
        "RadioDisabledIconColor": "var(--disabled-fill-base)",
        "RadioDisabledCheckedInputFill": "var(--disabled-border-base)",
        "RadioDisabledCheckedInputBorderColor": "var(--disabled-border-base)",
        "RadioDisabledCheckedIconColor": "var(--color-white)",
        "RadioCheckedInputBorderColor": "var(--color-primary)",
        "RadioCheckedInputFill": "var(--color-white)",
        "RadioCheckedIconColor": "var(--color-primary)",
        "RadioInputShadowHover": "var(--shadow-base)",
        "RadioInputBorderColorHover": "var(--color-primary)",
        "RadioButtonFontSize": "var(--font-size-base)",
        "SelectBorderColorHover": "var(--border-color-hover)",
        "SelectDisabledBorder": "var(--disabled-border-base)",
        "SelectFontSize": "var(--font-size-base)",
        "SelectCloseHoverColor": "#99a9bf",
        "SelectInputColor": "var(--color-grey)",
        "SelectMultipleInputColor": "#666",
        "SelectInputFocusBackground": "#2ea0ff",
        "SelectInputFontSize": 12,
        "SelectTagHeight": 24,
        "SelectTagColor": "var(--color-white)",
        "SelectTagBackground": "var(--color-primary)",
        "SelectOptionColor": "var(--link-color)",
        "SelectOptionDisabledColor": "var(--color-grey)",
        "SelectOptionHeight": 36,
        "SelectOptionHoverBackground": "#e5e9f2",
        "SelectOptionSelected": "var(--color-primary)",
        "SelectOptionSelectedHover": "#d3dce6",
        "SelectGroupColor": "#999",
        "SelectGroupHeight": 30,
        "SelectGroupFontSize": 12,
        "SelectDropdownBackground": "var(--color-white)",
        "SelectDropdownShadow": "var(--box-shadow-base)",
        "SelectDropdownEmptyColor": "#999",
        "SelectDropdownMaxHeight": 274,
        "SelectDropdownPadding": "6px 0",
        "SelectDropdownEmptyPadding": "10px 0",
        "SelectDropdownBorder": "solid 1px #d3dce6",
        "AlertPadding": "8px 16px",
        "AlertBorderRadius": "var(--border-radius-base)",
        "AlertTitleFontSize": 13,
        "AlertDescriptionFontSize": 12,
        "AlertCloseFontSize": 12,
        "AlertCloseCustomedFontSize": 13,
        "AlertSuccessColor": "var(--color-success)",
        "AlertInfoColor": "var(--color-info)",
        "AlertWarningColor": "var(--color-warning)",
        "AlertDangerColor": "var(--color-danger)",
        "AlertIconSize": 16,
        "AlertIconLargeSize": 28,
        "MsgboxWidth": 420,
        "MsgboxBorderRadius": 3,
        "MsgboxFontSize": 16,
        "MsgboxContentFontSize": 14,
        "MsgboxContentColor": "var(--link-color)",
        "MsgboxErrorFontSize": 12,
        "MsgboxSuccessColor": "var(--color-success)",
        "MsgboxInfoColor": "var(--color-info)",
        "MsgboxWarningColor": "var(--color-warning)",
        "MsgboxDangerColor": "var(--color-danger)",
        "MessageShadow": "var(--box-shadow-base)",
        "MessageMinWidth": 300,
        "MessagePadding": "10px 12px",
        "MessageContentColor": "var(--border-color-hover)",
        "MessageCloseColor": "var(--color-grey)",
        "MessageCloseHoverColor": "#99A9BF",
        "MessageSuccessColor": "var(--color-success)",
        "MessageInfoColor": "var(--color-info)",
        "MessageWarningColor": "var(--color-warning)",
        "MessageDangerColor": "var(--color-danger)",
        "NotificationWidth": 330,
        "NotificationPadding": 20,
        "NotificationShadow": "var(--box-shadow-base)",
        "NotificationIconSize": 40,
        "NotificationFontSize": "var(--font-size-base)",
        "NotificationColor": "var(--border-color-hover)",
        "NotificationTitleFontSize": 16,
        "NotificationTitleColor": "#1f2d3d",
        "NotificationCloseColor": "var(--color-grey)",
        "NotificationCloseHoverColor": "#99A9BF",
        "NotificationSuccessColor": "var(--color-primary)",
        "NotificationInfoColor": "var(--color-info)",
        "NotificationWarningColor": "var(--color-warning)",
        "NotificationDangerColor": "var(--color-danger)",
        "InputFontSize": "var(--font-size-base)",
        "InputColor": "var(--font-color-base)",
        "InputWidth": 140,
        "InputHeight": 36,
        "InputShadowHover": "var(--shadow-base)",
        "InputBorder": "var(--border-base)",
        "InputBorderColor": "var(--border-color-base)",
        "InputBorderRadius": "var(--border-radius-base)",
        "InputBorderColorHover": "var(--border-color-hover)",
        "InputFill": "var(--color-white)",
        "InputFillDisabled": "var(--disabled-fill-base)",
        "InputColorDisabled": "var(--font-color-disabled-base)",
        "InputIconColor": "var(--color-grey)",
        "InputPlaceholderColor": "#99a9bf",
        "InputMaxWidth": 314,
        "InputHoverBorder": "var(--border-color-hover)",
        "InputFocusBorder": "var(--color-primary)",
        "InputFocusFill": "var(--color-white)",
        "InputDisabledFill": "var(--disabled-fill-base)",
        "InputDisabledBorder": "var(--disabled-border-base)",
        "InputDisabledColor": "var(--disabled-color-base)",
        "InputDisabledPlaceholderColor": "#C0CCDA",
        "InputLargeFontSize": 16,
        "InputLargeHeight": 42,
        "InputSmallFontSize": 13,
        "InputSmallHeight": 30,
        "InputMiniFontSize": 12,
        "InputMiniHeight": 22,
        "CascaderMenuFill": "var(--fill-base)",
        "CascaderMenuFontSize": "var(--font-size-base)",
        "CascaderMenuRadius": "var(--border-radius-base)",
        "CascaderMenuBorder": "var(--border-base)",
        "CascaderMenuBorderColor": "var(--border-color-base)",
        "CascaderMenuBorderWidth": "var(--border-width-base)",
        "CascaderMenuColor": "var(--font-color-base)",
        "CascaderMenuOptionColorActive": "var(--color-blue)",
        "CascaderMenuOptionFillActive": "rgba(var(--color-blue), 0.12)",
        "CascaderMenuOptionColorHover": "var(--font-color-base)",
        "CascaderMenuOptionFillHover": "rgba(var(--color-black), 0.06)",
        "CascaderMenuOptionColorDisabled": "#999",
        "CascaderMenuOptionFillDisabled": "rgba(var(--color-black), 0.06)",
        "CascaderMenuOptionEmptyColor": "#666",
        "CascaderMenuGroupColor": "#999",
        "CascaderMenuShadow": "0 1px 2px rgba(var(--color-black), 0.14), 0 0 3px rgba(var(--color-black), 0.14)",
        "CascaderMenuOptionPinyinColor": "#999",
        "CascaderMenuSubmenuShadow": "1px 1px 2px rgba(var(--color-black), 0.14), 1px 0 2px rgba(var(--color-black), 0.14)",
        "GroupOptionFlex": "0 0 (1/5) * 100%",
        "GroupOptionOffsetBottom": 12,
        "GroupOptionFillHover": "rgba(var(--color-black), 0.06)",
        "GroupTitleColor": "var(--color-black)",
        "GroupTitleFontSize": "var(--font-size-base)",
        "GroupTitleWidth": 66,
        "TabFontSize": "var(--font-size-base)",
        "TabBorderLine": "1px solid #e4e4e4",
        "TabHeaderColorActive": "var(--color-blue)",
        "TabHeaderColorHover": "var(--font-color-base)",
        "TabHeaderColor": "var(--font-color-base)",
        "TabHeaderFillActive": "rgba(var(--color-black), 0.06)",
        "TabHeaderFillHover": "rgba(var(--color-black), 0.06)",
        "TabVerticalHeaderWidth": 90,
        "TabVerticalHeaderCountColor": "var(--color-white)",
        "TabVerticalHeaderCountFill": "var(--color-blue)",
        "TabHorizontalBorder": "2px solid #438de0",
        "ButtonFontSize": 14,
        "ButtonBorderRadius": "var(--border-radius-base)",
        "ButtonPaddding": "5px 20px",
        "ButtonPaddingVertical": 10,
        "ButtonPaddingHorizontal": 15,
        "ButtonLargeFontSize": 16,
        "ButtonLargePaddingVertical": 11,
        "ButtonLargePaddingHorizontal": 19,
        "ButtonSmallFontSize": 12,
        "ButtonSmallPaddingVertical": 7,
        "ButtonSmallPaddingHorizontal": 9,
        "ButtonMiniFontSize": 12,
        "ButtonMiniPaddingVertical": 4,
        "ButtonMiniPaddingHorizontal": 4,
        "ButtonDefaultColor": "#1F2D3D",
        "ButtonDefaultFill": "var(--color-white)",
        "ButtonDefaultBorder": "#c4c4c4",
        "ButtonGhostColor": "#666",
        "ButtonGhostFill": "transparent",
        "ButtonGhostBorder": "none",
        "ButtonDisabledColor": "#C0CCDA",
        "ButtonDisabledFill": "#EFF2F7",
        "ButtonDisabledBorder": "#D3DCE6",
        "ButtonPrimaryBorder": "var(--color-primary)",
        "ButtonPrimaryColor": "var(--color-white)",
        "ButtonPrimaryFill": "var(--color-primary)",
        "ButtonSuccessBorder": "var(--color-success)",
        "ButtonSuccessColor": "var(--color-white)",
        "ButtonSuccessFill": "var(--color-success)",
        "ButtonWarningBorder": "var(--color-warning)",
        "ButtonWarningColor": "var(--color-white)",
        "ButtonWarningFill": "var(--color-warning)",
        "ButtonDangerBorder": "var(--color-danger)",
        "ButtonDangerColor": "var(--color-white)",
        "ButtonDangerFill": "var(--color-danger)",
        "ButtonInfoBorder": "var(--color-info)",
        "ButtonInfoColor": "var(--color-white)",
        "ButtonInfoFill": "var(--color-info)",
        "ButtonHoverTintPercent": "20%",
        "ButtonActiveShadePercent": "10%",
        "CascaderHeight": 200,
        "SwitchOnColor": "var(--color-primary)",
        "SwitchOffColor": "#C0CCDA",
        "SwitchDisabledColor": "#E5E9F3",
        "SwitchDisabledTextColor": "#F9FAFC",
        "SwitchFontSize": "var(--font-size-base)",
        "SwitchCoreBorderRadius": 12,
        "SwitchWidth": 46,
        "SwitchHeight": 22,
        "SwitchButtonSize": 16,
        "DialogBackgroundColor": "var(--color-blue)",
        "DialogFooterBackground": "var(--color-blue-lighter)",
        "DialogBoxShadow": "0 1px 3px rgba(0, 0, 0, 0.3)",
        "DialogTinyWidth": "30%",
        "DialogSmallWidth": "50%",
        "DialogLargeWidth": "90%",
        "DialogCloseColor": "var(--color-grey)",
        "DialogCloseHoverColor": "var(--color-primary)",
        "DialogTitleFontSize": 16,
        "DialogFontSize": 14,
        "TableBorderColor": "#e0e6ed",
        "TableTextColor": "#1f2d3d",
        "TableHeaderBackground": "#EFF2F7",
        "PaginationFontSize": 13,
        "PaginationFill": "var(--color-white)",
        "PaginationColor": "var(--link-color)",
        "PaginationBorderRadius": 2,
        "PaginationButtonColor": "#99a9bf",
        "PaginationButtonSize": 28,
        "PaginationButtonDisabledColor": "#e4e4e4",
        "PaginationButtonDisabledFill": "var(--color-white)",
        "PaginationBorderColor": "#D3DCE6",
        "PaginationHoverFill": "var(--color-primary)",
        "PaginationHoverColor": "var(--color-white)",
        "PopoverFill": "var(--color-white)",
        "PopoverFontSize": 12,
        "PopoverBorderColor": "#d3dce6",
        "PopoverArrowSize": 6,
        "PopoverPadding": 10,
        "PopoverTitleFontSize": 13,
        "PopoverTitleColor": "#1f2d3d",
        "TooltipFill": "#1f2d3d",
        "TooltipColor": "var(--color-white)",
        "TooltipFontSize": 12,
        "TooltipBorderColor": "#1f2d3d",
        "TooltipArrowSize": 6,
        "TooltipPadding": 10,
        "TagPadding": "0 5px",
        "TagFill": "var(--border-color-hover)",
        "TagBorder": "var(--border-color-hover)",
        "TagColor": "var(--color-white)",
        "TagCloseColor": "#666",
        "TagFontSize": 12,
        "TagBorderRadius": 4,
        "TagGrayFill": "#e5e9f2",
        "TagGrayBorder": "#e5e9f2",
        "TagGrayColor": "var(--link-color)",
        "TagPrimaryFill": "rgba(32,159,255,0.10)",
        "TagPrimaryBorder": "rgba(32,159,255,0.20)",
        "TagPrimaryColor": "var(--color-primary)",
        "TagSuccessFill": "rgba(18,206,102,0.10)",
        "TagSuccessBorder": "rgba(18,206,102,0.20)",
        "TagSuccessColor": "var(--color-success)",
        "TagWarningFill": "rgba(247,186,41,0.10)",
        "TagWarningBorder": "rgba(247,186,41,0.20)",
        "TagWarningColor": "var(--color-warning)",
        "TagDangerFill": "rgba(255,73,73,0.10)",
        "TagDangerBorder": "rgba(255,73,73,0.20)",
        "TagDangerColor": "var(--color-danger)",
        "DropdownMenuBoxShadow": "var(--box-shadow-dark)",
        "DropdownMenuitemHoverFill": "#e5e9f2",
        "DropdownMenuitemHoverColor": "var(--link-color)",
        "BadgeFill": "var(--color-danger)",
        "BadgeRadius": 10,
        "BadgeFontSize": 12,
        "BadgePadding": 6,
        "BadgeSize": 18,
        "CardBorderColor": "var(--disabled-border-base)",
        "CardBorderRadius": 4,
        "CardPadding": 20,
        "SliderMainBackgroundColor": "var(--color-primary)",
        "SliderRunwayBackgroundColor": "#e5e9f2",
        "SliderButtonHoverColor": "#d3dce6",
        "SliderStopBackgroundColor": "var(--color-grey)",
        "SliderDisableColor": "var(--color-grey)",
        "SliderMargin": "16px 0",
        "SliderBorderRadius": 3,
        "SliderHeight": 4,
        "SliderButtonSize": 12,
        "SliderButtonWrapperSize": 36,
        "SliderButtonWrapperOffset": -16,
        "StepsBorderColor": "var(--disabled-border-base)",
        "StepsBorderRadius": 4,
        "StepsPadding": 20,
        "MenuItemColor": "#13b7b9",
        "MenuItemFill": "#eff2f7",
        "MenuItemHoverFill": "#d3dce6",
        "SubmenuItemFill": "#e5e9f2",
        "DarkMenuItemColor": "#13b7b9",
        "DarkMenuItemFill": "#181818",
        "DarkMenuItemHoverFill": "#14adbe",
        "DarkSubmenuItemFill": "#1f2d3d",
        "RateHeight": 20,
        "RateFontSize": "var(--font-size-base)",
        "RateIconSize": 18,
        "RateIconMargin": 6,
        "RateIconColor": "#C6D1DE",
        "DatepickerColor": "var(--link-color)",
        "DatepickerOffColor": "#ddd",
        "DatepickerHeaderColor": "var(--border-color-hover)",
        "DatepickerIconColor": "#99a9bf",
        "DatepickerTriggerColor": "#c0ccda",
        "DatepickerBorderColor": "#d3dce6",
        "DatepickerInnerBorderColor": "#e4e4e4",
        "DatepickerCellHoverColor": "#e5e9f2",
        "DatepickerInrangeColor": "#D3ECFF",
        "DatepickerInrangeHoverColor": "#AFDCFF",
        "DatepickerActiveColor": "var(--color-primary)",
        "DatepickerTextHoverColor": "#14adbe",
        "LoadingSpinnerSize": 42,
        "LoadingFullscreenSpinnerSize": 50
    }
});