<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Canvasdata.aspx.cs" Inherits="_2BhkFloorplan.Canvasdata" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<%--<head runat="server">--%>
 <head>
<style type="text/css">span.iconify, i.iconify, iconify-icon { display: inline-block; width: 1em; }</style>
   <meta charset="utf-8"/>
     <link rel="icon" href="/favicon.ico"/>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
     <meta name="theme-color" content="#000000"/>
     <meta name="description" content="Web site created using create-react-app"/>
     <link rel="apple-touch-icon" href="/logo192.png"/>
     <link rel="preconnect" href="https://fonts.gstatic.com"/>
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&amp;display=swap" rel="stylesheet"/>
    <%-- <link rel="manifest" href="/manifest.json"/>--%>
     <style>
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}
     </style>
     <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
     <title>IndusFloorPlanGenerator</title>
     <link href="../css/chunk.css" rel="stylesheet"/>
     <link href="../css/main.chunk.css" rel="stylesheet"/>
     <style data-jss="" data-meta="MuiPaper">
.MuiPaper-root {
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
}
.MuiPaper-rounded {
  border-radius: 4px;
}
.MuiPaper-outlined {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.MuiPaper-elevation0 {
  box-shadow: none;
}
.MuiPaper-elevation1 {
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation2 {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation3 {
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation4 {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation5 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation6 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation7 {
  box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
}
.MuiPaper-elevation8 {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation9 {
  box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation10 {
  box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation11 {
  box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation12 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation13 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation14 {
  box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation15 {
  box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation16 {
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation17 {
  box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation18 {
  box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation19 {
  box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation20 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation21 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation22 {
  box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation23 {
  box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
}
.MuiPaper-elevation24 {
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
}
</style><style data-jss="" data-meta="MuiTouchRipple">
.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}
.MuiTouchRipple-ripple {
  opacity: 0;
  position: absolute;
}
.MuiTouchRipple-rippleVisible {
  opacity: 0.3;
  animation: MuiTouchRipple-keyframes-enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.MuiTouchRipple-ripplePulsate {
  animation-duration: 200ms;
}
.MuiTouchRipple-child {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 1;
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-childLeaving {
  opacity: 0;
  animation: MuiTouchRipple-keyframes-exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
}
.MuiTouchRipple-childPulsate {
  top: 0;
  left: 0;
  position: absolute;
  animation: MuiTouchRipple-keyframes-pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;
}
@-webkit-keyframes MuiTouchRipple-keyframes-enter {
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-exit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
}
</style><style data-jss="" data-meta="MuiButtonBase">
.MuiButtonBase-root {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.MuiButtonBase-root::-moz-focus-inner {
  border-style: none;
}
.MuiButtonBase-root.Mui-disabled {
  cursor: default;
  pointer-events: none;
}
@media print {
  .MuiButtonBase-root {
    -webkit-print-color-adjust: exact;
  }
}
</style><style data-jss="" data-meta="MuiButton">
.MuiButton-root {
  color: rgba(0, 0, 0, 0.87);
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
}
.MuiButton-root:hover {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.04);
}
.MuiButton-root.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
}
@media (hover: none) {
  .MuiButton-root:hover {
    background-color: transparent;
  }
}
.MuiButton-root:hover.Mui-disabled {
  background-color: transparent;
}
.MuiButton-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}
.MuiButton-text {
  padding: 6px 8px;
}
.MuiButton-textPrimary {
  color: #3f51b5;
}
.MuiButton-textPrimary:hover {
  background-color: rgba(63, 81, 181, 0.04);
}
@media (hover: none) {
  .MuiButton-textPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-textSecondary {
  color: #f50057;
}
.MuiButton-textSecondary:hover {
  background-color: rgba(245, 0, 87, 0.04);
}
@media (hover: none) {
  .MuiButton-textSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlined {
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 5px 15px;
}
.MuiButton-outlined.Mui-disabled {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.MuiButton-outlinedPrimary {
  color: #3f51b5;
  border: 1px solid rgba(63, 81, 181, 0.5);
}
.MuiButton-outlinedPrimary:hover {
  border: 1px solid #3f51b5;
  background-color: rgba(63, 81, 181, 0.04);
}
@media (hover: none) {
  .MuiButton-outlinedPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlinedSecondary {
  color: #f50057;
  border: 1px solid rgba(245, 0, 87, 0.5);
}
.MuiButton-outlinedSecondary:hover {
  border: 1px solid #f50057;
  background-color: rgba(245, 0, 87, 0.04);
}
.MuiButton-outlinedSecondary.Mui-disabled {
  border: 1px solid rgba(0, 0, 0, 0.26);
}
@media (hover: none) {
  .MuiButton-outlinedSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-contained {
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  background-color: #e0e0e0;
}
.MuiButton-contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
  background-color: #d5d5d5;
}
.MuiButton-contained.Mui-focusVisible {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiButton-contained:active {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiButton-contained.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
}
@media (hover: none) {
  .MuiButton-contained:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: #e0e0e0;
  }
}
.MuiButton-contained:hover.Mui-disabled {
  background-color: rgba(0, 0, 0, 0.12);
}
.MuiButton-containedPrimary {
  color: #fff;
  background-color: #3f51b5;
}
.MuiButton-containedPrimary:hover {
  background-color: #303f9f;
}
@media (hover: none) {
  .MuiButton-containedPrimary:hover {
    background-color: #3f51b5;
  }
}
.MuiButton-containedSecondary {
  color: #fff;
  background-color: #f50057;
}
.MuiButton-containedSecondary:hover {
  background-color: #c51162;
}
@media (hover: none) {
  .MuiButton-containedSecondary:hover {
    background-color: #f50057;
  }
}
.MuiButton-disableElevation {
  box-shadow: none;
}
.MuiButton-disableElevation:hover {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-focusVisible {
  box-shadow: none;
}
.MuiButton-disableElevation:active {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-disabled {
  box-shadow: none;
}
.MuiButton-colorInherit {
  color: inherit;
  border-color: currentColor;
}
.MuiButton-textSizeSmall {
  padding: 4px 5px;
  font-size: 0.8125rem;
}
.MuiButton-textSizeLarge {
  padding: 8px 11px;
  font-size: 0.9375rem;
}
.MuiButton-outlinedSizeSmall {
  padding: 3px 9px;
  font-size: 0.8125rem;
}
.MuiButton-outlinedSizeLarge {
  padding: 7px 21px;
  font-size: 0.9375rem;
}
.MuiButton-containedSizeSmall {
  padding: 4px 10px;
  font-size: 0.8125rem;
}
.MuiButton-containedSizeLarge {
  padding: 8px 22px;
  font-size: 0.9375rem;
}
.MuiButton-fullWidth {
  width: 100%;
}
.MuiButton-startIcon {
  display: inherit;
  margin-left: -4px;
  margin-right: 8px;
}
.MuiButton-startIcon.MuiButton-iconSizeSmall {
  margin-left: -2px;
}
.MuiButton-endIcon {
  display: inherit;
  margin-left: 8px;
  margin-right: -4px;
}
.MuiButton-endIcon.MuiButton-iconSizeSmall {
  margin-right: -2px;
}
.MuiButton-iconSizeSmall > *:first-child {
  font-size: 18px;
}
.MuiButton-iconSizeMedium > *:first-child {
  font-size: 20px;
}
.MuiButton-iconSizeLarge > *:first-child {
  font-size: 22px;
}
</style><style data-jss="" data-meta="MuiButtonGroup">
.MuiButtonGroup-root {
  display: inline-flex;
  border-radius: 4px;
}
.MuiButtonGroup-contained {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
}
.MuiButtonGroup-disableElevation {
  box-shadow: none;
}
.MuiButtonGroup-fullWidth {
  width: 100%;
}
.MuiButtonGroup-vertical {
  flex-direction: column;
}
.MuiButtonGroup-grouped {
  min-width: 40px;
}
.MuiButtonGroup-groupedHorizontal:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.MuiButtonGroup-groupedHorizontal:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.MuiButtonGroup-groupedVertical:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.MuiButtonGroup-groupedVertical:not(:last-child) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.MuiButtonGroup-groupedTextHorizontal:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.23);
}
.MuiButtonGroup-groupedTextVertical:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
}
.MuiButtonGroup-groupedTextPrimary:not(:last-child) {
  border-color: rgba(63, 81, 181, 0.5);
}
.MuiButtonGroup-groupedTextSecondary:not(:last-child) {
  border-color: rgba(245, 0, 87, 0.5);
}
.MuiButtonGroup-groupedOutlinedHorizontal:not(:first-child) {
  margin-left: -1px;
}
.MuiButtonGroup-groupedOutlinedHorizontal:not(:last-child) {
  border-right-color: transparent;
}
.MuiButtonGroup-groupedOutlinedVertical:not(:first-child) {
  margin-top: -1px;
}
.MuiButtonGroup-groupedOutlinedVertical:not(:last-child) {
  border-bottom-color: transparent;
}
.MuiButtonGroup-groupedOutlinedPrimary:hover {
  border-color: #3f51b5;
}
.MuiButtonGroup-groupedOutlinedSecondary:hover {
  border-color: #f50057;
}
.MuiButtonGroup-groupedContained {
  box-shadow: none;
}
.MuiButtonGroup-groupedContainedHorizontal:not(:last-child) {
  border-right: 1px solid #bdbdbd;
}
.MuiButtonGroup-groupedContainedHorizontal:not(:last-child).Mui-disabled {
  border-right: 1px solid rgba(0, 0, 0, 0.26);
}
.MuiButtonGroup-groupedContainedVertical:not(:last-child) {
  border-bottom: 1px solid #bdbdbd;
}
.MuiButtonGroup-groupedContainedVertical:not(:last-child).Mui-disabled {
  border-bottom: 1px solid rgba(0, 0, 0, 0.26);
}
.MuiButtonGroup-groupedContainedPrimary:not(:last-child) {
  border-color: #303f9f;
}
.MuiButtonGroup-groupedContainedSecondary:not(:last-child) {
  border-color: #c51162;
}
</style><style data-jss="" data-meta="MuiIconButton">
.MuiIconButton-root {
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}
.MuiIconButton-root:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
.MuiIconButton-root.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
  background-color: transparent;
}
@media (hover: none) {
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
}
.MuiIconButton-edgeStart {
  margin-left: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeStart {
  margin-left: -3px;
}
.MuiIconButton-edgeEnd {
  margin-right: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeEnd {
  margin-right: -3px;
}
.MuiIconButton-colorInherit {
  color: inherit;
}
.MuiIconButton-colorPrimary {
  color: #3f51b5;
}
.MuiIconButton-colorPrimary:hover {
  background-color: rgba(63, 81, 181, 0.04);
}
@media (hover: none) {
  .MuiIconButton-colorPrimary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-colorSecondary {
  color: #f50057;
}
.MuiIconButton-colorSecondary:hover {
  background-color: rgba(245, 0, 87, 0.04);
}
@media (hover: none) {
  .MuiIconButton-colorSecondary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-sizeSmall {
  padding: 3px;
  font-size: 1.125rem;
}
.MuiIconButton-label {
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
</style><style data-jss="" data-meta="MuiSvgIcon">
.MuiSvgIcon-root {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}
.MuiSvgIcon-colorPrimary {
  color: #3f51b5;
}
.MuiSvgIcon-colorSecondary {
  color: #f50057;
}
.MuiSvgIcon-colorAction {
  color: rgba(0, 0, 0, 0.54);
}
.MuiSvgIcon-colorError {
  color: #f44336;
}
.MuiSvgIcon-colorDisabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiSvgIcon-fontSizeInherit {
  font-size: inherit;
}
.MuiSvgIcon-fontSizeSmall {
  font-size: 1.25rem;
}
.MuiSvgIcon-fontSizeLarge {
  font-size: 2.1875rem;
}
</style><style data-jss="" data-meta="MuiInputBase">
@-webkit-keyframes mui-auto-fill {}
@-webkit-keyframes mui-auto-fill-cancel {}
.MuiInputBase-root {
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
}
.MuiInputBase-root.Mui-disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}
.MuiInputBase-multiline {
  padding: 6px 0 7px;
}
.MuiInputBase-multiline.MuiInputBase-marginDense {
  padding-top: 3px;
}
.MuiInputBase-fullWidth {
  width: 100%;
}
.MuiInputBase-input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}
.MuiInputBase-input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 0.42;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-moz-placeholder {
  color: currentColor;
  opacity: 0.42;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:-ms-input-placeholder {
  color: currentColor;
  opacity: 0.42;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-ms-input-placeholder {
  color: currentColor;
  opacity: 0.42;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:focus {
  outline: 0;
}
.MuiInputBase-input:invalid {
  box-shadow: none;
}
.MuiInputBase-input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.MuiInputBase-input.Mui-disabled {
  opacity: 1;
}
.MuiInputBase-input:-webkit-autofill {
  animation-name: mui-auto-fill;
  animation-duration: 5000s;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
  opacity: 0.42;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
  opacity: 0.42;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
  opacity: 0.42;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
  opacity: 0.42;
}
.MuiInputBase-inputMarginDense {
  padding-top: 3px;
}
.MuiInputBase-inputMultiline {
  height: auto;
  resize: none;
  padding: 0;
}
.MuiInputBase-inputTypeSearch {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
}
</style><style data-jss="" data-meta="MuiInput">
.MuiInput-root {
  position: relative;
}
label + .MuiInput-formControl {
  margin-top: 16px;
}
.MuiInput-colorSecondary.MuiInput-underline:after {
  border-bottom-color: #f50057;
}
.MuiInput-underline:after {
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  position: absolute;
  transform: scaleX(0);
  transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  border-bottom: 2px solid #3f51b5;
  pointer-events: none;
}
.MuiInput-underline.Mui-focused:after {
  transform: scaleX(1);
}
.MuiInput-underline.Mui-error:after {
  transform: scaleX(1);
  border-bottom-color: #f44336;
}
.MuiInput-underline:before {
  left: 0;
  right: 0;
  bottom: 0;
  content: "\00a0";
  position: absolute;
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  pointer-events: none;
}
.MuiInput-underline:hover:not(.Mui-disabled):before {
  border-bottom: 2px solid rgba(0, 0, 0, 0.87);
}
.MuiInput-underline.Mui-disabled:before {
  border-bottom-style: dotted;
}
@media (hover: none) {
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
}
</style><style data-jss="" data-meta="MuiFormLabel">
.MuiFormLabel-root {
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00938em;
}
.MuiFormLabel-root.Mui-focused {
  color: #3f51b5;
}
.MuiFormLabel-root.Mui-disabled {
  color: rgba(0, 0, 0, 0.38);
}
.MuiFormLabel-root.Mui-error {
  color: #f44336;
}
.MuiFormLabel-colorSecondary.Mui-focused {
  color: #f50057;
}
.MuiFormLabel-asterisk.Mui-error {
  color: #f44336;
}
</style><style data-jss="" data-meta="MuiInputLabel">
.MuiInputLabel-root {
  display: block;
  transform-origin: top left;
}
.MuiInputLabel-formControl {
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0, 24px) scale(1);
}
.MuiInputLabel-marginDense {
  transform: translate(0, 21px) scale(1);
}
.MuiInputLabel-shrink {
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
}
.MuiInputLabel-animated {
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}
.MuiInputLabel-filled {
  z-index: 1;
  transform: translate(12px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-filled.MuiInputLabel-marginDense {
  transform: translate(12px, 17px) scale(1);
}
.MuiInputLabel-filled.MuiInputLabel-shrink {
  transform: translate(12px, 10px) scale(0.75);
}
.MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {
  transform: translate(12px, 7px) scale(0.75);
}
.MuiInputLabel-outlined {
  z-index: 1;
  transform: translate(14px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-outlined.MuiInputLabel-marginDense {
  transform: translate(14px, 12px) scale(1);
}
.MuiInputLabel-outlined.MuiInputLabel-shrink {
  transform: translate(14px, -6px) scale(0.75);
}
</style><style data-jss="" data-meta="MuiFormControl">
.MuiFormControl-root {
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
}
.MuiFormControl-marginNormal {
  margin-top: 16px;
  margin-bottom: 8px;
}
.MuiFormControl-marginDense {
  margin-top: 8px;
  margin-bottom: 4px;
}
.MuiFormControl-fullWidth {
  width: 100%;
}
</style><style data-jss="" data-meta="MuiPopover">
.MuiPopover-paper {
  outline: 0;
  position: absolute;
  max-width: calc(100% - 32px);
  min-width: 16px;
  max-height: calc(100% - 32px);
  min-height: 16px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style><style data-jss="" data-meta="MuiMenu">
.MuiMenu-paper {
  max-height: calc(100% - 96px);
  -webkit-overflow-scrolling: touch;
}
.MuiMenu-list {
  outline: 0;
}
</style><style data-jss="" data-meta="PrivateNotchedOutline">
.jss34 {
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: inherit;
  pointer-events: none;
}
.jss35 {
  padding: 0;
  text-align: left;
  transition: width 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  line-height: 11px;
}
.jss36 {
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 0.75em;
  max-width: 0.01px;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  visibility: hidden;
}
.jss36 > span {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.jss37 {
  max-width: 1000px;
  transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
}
</style><style data-jss="" data-meta="MuiOutlinedInput">
.MuiOutlinedInput-root {
  position: relative;
  border-radius: 4px;
}
.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  border-color: rgba(0, 0, 0, 0.87);
}
@media (hover: none) {
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23);
  }
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #3f51b5;
  border-width: 2px;
}
.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
  border-color: #f44336;
}
.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
  border-color: rgba(0, 0, 0, 0.26);
}
.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #f50057;
}
.MuiOutlinedInput-adornedStart {
  padding-left: 14px;
}
.MuiOutlinedInput-adornedEnd {
  padding-right: 14px;
}
.MuiOutlinedInput-multiline {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-notchedOutline {
  border-color: rgba(0, 0, 0, 0.23);
}
.MuiOutlinedInput-input {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-input:-webkit-autofill {
  border-radius: inherit;
}
.MuiOutlinedInput-inputMarginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-inputMultiline {
  padding: 0;
}
.MuiOutlinedInput-inputAdornedStart {
  padding-left: 0;
}
.MuiOutlinedInput-inputAdornedEnd {
  padding-right: 0;
}
</style><style data-jss="" data-meta="MuiSelect">
.MuiSelect-select {
  cursor: pointer;
  min-width: 16px;
  user-select: none;
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
}
.MuiSelect-select:focus {
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.05);
}
.MuiSelect-select::-ms-expand {
  display: none;
}
.MuiSelect-select.Mui-disabled {
  cursor: default;
}
.MuiSelect-select[multiple] {
  height: auto;
}
.MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup {
  background-color: #fff;
}
.MuiSelect-select.MuiSelect-select {
  padding-right: 24px;
}
.MuiSelect-filled.MuiSelect-filled {
  padding-right: 32px;
}
.MuiSelect-outlined {
  border-radius: 4px;
}
.MuiSelect-outlined.MuiSelect-outlined {
  padding-right: 32px;
}
.MuiSelect-selectMenu {
  height: auto;
  overflow: hidden;
  min-height: 1.1876em;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.MuiSelect-icon {
  top: calc(50% - 12px);
  color: rgba(0, 0, 0, 0.54);
  right: 0;
  position: absolute;
  pointer-events: none;
}
.MuiSelect-icon.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiSelect-iconOpen {
  transform: rotate(180deg);
}
.MuiSelect-iconFilled {
  right: 7px;
}
.MuiSelect-iconOutlined {
  right: 7px;
}
.MuiSelect-nativeInput {
  left: 0;
  width: 100%;
  bottom: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
}
</style><style data-jss="" data-meta="PrivateSwitchBase">
.jss30 {
  padding: 9px;
}
.jss33 {
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
}
</style><style data-jss="" data-meta="MuiCheckbox">
.MuiCheckbox-root {
  color: rgba(0, 0, 0, 0.54);
}
.MuiCheckbox-colorPrimary.Mui-checked {
  color: #3f51b5;
}
.MuiCheckbox-colorPrimary.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiCheckbox-colorPrimary.Mui-checked:hover {
  background-color: rgba(63, 81, 181, 0.04);
}
@media (hover: none) {
  .MuiCheckbox-colorPrimary.Mui-checked:hover {
    background-color: transparent;
  }
}
.MuiCheckbox-colorSecondary.Mui-checked {
  color: #f50057;
}
.MuiCheckbox-colorSecondary.Mui-disabled {
  color: rgba(0, 0, 0, 0.26);
}
.MuiCheckbox-colorSecondary.Mui-checked:hover {
  background-color: rgba(245, 0, 87, 0.04);
}
@media (hover: none) {
  .MuiCheckbox-colorSecondary.Mui-checked:hover {
    background-color: transparent;
  }
}
</style><style data-jss="" data-meta="MuiSwitch">
.MuiSwitch-root {
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
}
@media print {
  .MuiSwitch-root {
    -webkit-print-color-adjust: exact;
  }
}
.MuiSwitch-edgeStart {
  margin-left: -8px;
}
.MuiSwitch-edgeEnd {
  margin-right: -8px;
}
.MuiSwitch-switchBase {
  top: 0;
  left: 0;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiSwitch-switchBase.Mui-checked {
  transform: translateX(20px);
}
.MuiSwitch-switchBase.Mui-disabled {
  color: #bdbdbd;
}
.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
  opacity: 0.5;
}
.MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
  opacity: 0.12;
}
.MuiSwitch-colorPrimary.Mui-checked {
  color: #3f51b5;
}
.MuiSwitch-colorPrimary.Mui-disabled {
  color: #bdbdbd;
}
.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
  background-color: #3f51b5;
}
.MuiSwitch-colorPrimary.Mui-disabled + .MuiSwitch-track {
  background-color: #000;
}
.MuiSwitch-colorPrimary.Mui-checked:hover {
  background-color: rgba(63, 81, 181, 0.04);
}
@media (hover: none) {
  .MuiSwitch-colorPrimary.Mui-checked:hover {
    background-color: transparent;
  }
}
.MuiSwitch-colorSecondary.Mui-checked {
  color: #f50057;
}
.MuiSwitch-colorSecondary.Mui-disabled {
  color: #bdbdbd;
}
.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
  background-color: #f50057;
}
.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track {
  background-color: #000;
}
.MuiSwitch-colorSecondary.Mui-checked:hover {
  background-color: rgba(245, 0, 87, 0.04);
}
@media (hover: none) {
  .MuiSwitch-colorSecondary.Mui-checked:hover {
    background-color: transparent;
  }
}
.MuiSwitch-sizeSmall {
  width: 40px;
  height: 24px;
  padding: 7px;
}
.MuiSwitch-sizeSmall .MuiSwitch-thumb {
  width: 16px;
  height: 16px;
}
.MuiSwitch-sizeSmall .MuiSwitch-switchBase {
  padding: 4px;
}
.MuiSwitch-sizeSmall .MuiSwitch-switchBase.Mui-checked {
  transform: translateX(16px);
}
.MuiSwitch-input {
  left: -100%;
  width: 300%;
}
.MuiSwitch-thumb {
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 50%;
  background-color: currentColor;
}
.MuiSwitch-track {
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
}
</style><style data-jss="" data-meta="MuiTypography">
.MuiTypography-root {
  margin: 0;
}
.MuiTypography-body2 {
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
}
.MuiTypography-body1 {
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
}
.MuiTypography-caption {
  font-size: 0.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
}
.MuiTypography-button {
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
}
.MuiTypography-h1 {
  font-size: 6rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.167;
  letter-spacing: -0.01562em;
}
.MuiTypography-h2 {
  font-size: 3.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
}
.MuiTypography-h3 {
  font-size: 3rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0em;
}
.MuiTypography-h4 {
  font-size: 2.125rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
}
.MuiTypography-h5 {
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
}
.MuiTypography-h6 {
  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
}
.MuiTypography-subtitle1 {
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
}
.MuiTypography-subtitle2 {
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.57;
  letter-spacing: 0.00714em;
}
.MuiTypography-overline {
  font-size: 0.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 2.66;
  letter-spacing: 0.08333em;
  text-transform: uppercase;
}
.MuiTypography-srOnly {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}
.MuiTypography-alignLeft {
  text-align: left;
}
.MuiTypography-alignCenter {
  text-align: center;
}
.MuiTypography-alignRight {
  text-align: right;
}
.MuiTypography-alignJustify {
  text-align: justify;
}
.MuiTypography-noWrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.MuiTypography-gutterBottom {
  margin-bottom: 0.35em;
}
.MuiTypography-paragraph {
  margin-bottom: 16px;
}
.MuiTypography-colorInherit {
  color: inherit;
}
.MuiTypography-colorPrimary {
  color: #3f51b5;
}
.MuiTypography-colorSecondary {
  color: #f50057;
}
.MuiTypography-colorTextPrimary {
  color: rgba(0, 0, 0, 0.87);
}
.MuiTypography-colorTextSecondary {
  color: rgba(0, 0, 0, 0.54);
}
.MuiTypography-colorError {
  color: #f44336;
}
.MuiTypography-displayInline {
  display: inline;
}
.MuiTypography-displayBlock {
  display: block;
}
</style><style data-jss="" data-meta="MuiFormControlLabel">
.MuiFormControlLabel-root {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -11px;
  margin-right: 16px;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}
.MuiFormControlLabel-root.Mui-disabled {
  cursor: default;
}
.MuiFormControlLabel-labelPlacementStart {
  margin-left: 16px;
  margin-right: -11px;
  flex-direction: row-reverse;
}
.MuiFormControlLabel-labelPlacementTop {
  margin-left: 16px;
  flex-direction: column-reverse;
}
.MuiFormControlLabel-labelPlacementBottom {
  margin-left: 16px;
  flex-direction: column;
}
.MuiFormControlLabel-label.Mui-disabled {
  color: rgba(0, 0, 0, 0.38);
}
</style><style data-jss="" data-meta="PrivateTabIndicator">
.jss26 {
  width: 100%;
  bottom: 0;
  height: 2px;
  position: absolute;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.jss27 {
  background-color: #3f51b5;
}
.jss28 {
  background-color: #f50057;
}
.jss29 {
  right: 0;
  width: 2px;
  height: 100%;
}
</style><style data-jss="" data-meta="MuiTabs">
.MuiTabs-root {
  display: flex;
  overflow: hidden;
  min-height: 48px;
  -webkit-overflow-scrolling: touch;
}
.MuiTabs-vertical {
  flex-direction: column;
}
.MuiTabs-flexContainer {
  display: flex;
}
.MuiTabs-flexContainerVertical {
  flex-direction: column;
}
.MuiTabs-centered {
  justify-content: center;
}
.MuiTabs-scroller {
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
.MuiTabs-fixed {
  width: 100%;
  overflow-x: hidden;
}
.MuiTabs-scrollable {
  overflow-x: scroll;
  scrollbar-width: none;
}
.MuiTabs-scrollable::-webkit-scrollbar {
  display: none;
}
@media (max-width:599.95px) {
  .MuiTabs-scrollButtonsDesktop {
    display: none;
  }
}
</style><style data-jss="" data-meta="MuiTab">
.MuiTab-root {
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  font-size: 0.875rem;
  max-width: 264px;
  min-width: 72px;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  white-space: normal;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
}
@media (min-width:600px) {
  .MuiTab-root {
    min-width: 160px;
  }
}
.MuiTab-labelIcon {
  min-height: 72px;
  padding-top: 9px;
}
.MuiTab-labelIcon .MuiTab-wrapper > *:first-child {
  margin-bottom: 6px;
}
.MuiTab-textColorInherit {
  color: inherit;
  opacity: 0.7;
}
.MuiTab-textColorInherit.Mui-selected {
  opacity: 1;
}
.MuiTab-textColorInherit.Mui-disabled {
  opacity: 0.5;
}
.MuiTab-textColorPrimary {
  color: rgba(0, 0, 0, 0.54);
}
.MuiTab-textColorPrimary.Mui-selected {
  color: #3f51b5;
}
.MuiTab-textColorPrimary.Mui-disabled {
  color: rgba(0, 0, 0, 0.38);
}
.MuiTab-textColorSecondary {
  color: rgba(0, 0, 0, 0.54);
}
.MuiTab-textColorSecondary.Mui-selected {
  color: #f50057;
}
.MuiTab-textColorSecondary.Mui-disabled {
  color: rgba(0, 0, 0, 0.38);
}
.MuiTab-fullWidth {
  flex-grow: 1;
  max-width: none;
  flex-basis: 0;
  flex-shrink: 1;
}
.MuiTab-wrapped {
  font-size: 0.75rem;
  line-height: 1.5;
}
.MuiTab-wrapper {
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style><style data-jss="" data-meta="MuiTextField">

</style><style data-jss="" data-meta="makeStyles">
.jss38 .MuiTextField-root {
  width: 6ch;
  margin: 8px;
}
.jss39 {
  margin: 8px;
  min-width: 120px;
}
.jss40 {
  margin-top: 16px;
}
.jss41 {
  padding: 16px;
}
.jss42 {
  margin: 8px;
}
.jss43 {
  min-width: 190px;
  margin-top: 480px;
  min-height: 60px;
  margin-left: 265px;
}
.jss44 {
  min-width: 190px;
  margin-top: 480px;
  min-height: 60px;
  margin-left: 265px;
}
.jss45 {
  margin-top: 10px;
  max-height: 40px;
}
</style><style data-jss="" data-meta="makeStyles">
.jss1 .MuiTextField-root {
  width: 6ch;
  margin: 8px;
}
.jss2 {
  margin: 8px;
  min-width: 120px;
}
.jss3 {
  margin-top: 16px;
}
.jss4 {
  padding: 16px;
}
.jss5 {
  margin: -16px;
}
.jss6 {
  min-width: 190px;
  min-height: 60px;
}
.jss7 {
  margin-top: 7px;
  max-height: 45px;
  margin-right: 100px;
}
.jss8 {
  min-width: 120px;
  margin-top: 7px;
  min-height: 35px;
  margin-right: 0;
}
.jss9 {
  min-width: 120px;
  margin-top: 7px;
  min-height: 35px;
  margin-left: 0;
}
.jss10 {
  min-width: 70px;
  max-height: 10px;
}
.jss11 {
  max-width: 540px;
}
.jss12 {
  width: 130px;
  min-width: 130px;
}
.jss13 {
  margin-top: 15px;
  max-height: 30px;
}
.jss14 {
  margin-top: 15px;
  max-height: 30px;
}
.jss15 {
  color: ;
}
.jss16 {
  border-color: !important;
  border-width: 2px;
}
.jss17.jss18 .jss16 {
  border-color: #0099FF !important;
}
.jss18 {
  border-color: #0099FF !important;
  border-width: 1px;
}
.jss19 {
  icon: [object Object];
  label: [object Object];
}
.jss19:before {
  border-color: #0099FF;
}
.jss19:after {
  border-color: #0099FF;
}
.jss20 {
  fill: #0099FF;
}
.jss21 {
  color: lightgray;
}
.jss21inputFocused {
  color: #0099FF;
}
.jss22:before {
  height: 2px;
  background-color: #0099FF;
}
.jss23 {
  color: #0099FF;
}
.jss23.jss24 {
  color: #0099FF;
}
.jss23.jss24 + .jss25 {
  background-color: #0099FF;
}
</style>
 </head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <div>
            <div class="bgcolor">
                <a id="link"></a>
                <div class="container row">
                    <div class="mx-auto col-md-6  bgindus">
                        <h1 class="text-right   mb-5"></h1>
                       <%-- <div class="container row mb-3" style="margin-top: -40px;">
                            <div class="MuiPaper-root MuiPaper-elevation1" style="background-color: rgb(235, 235, 235);">
                                <div class="MuiTabs-root jss11" style="color: rgb(0, 153, 255);">
                                    <div class="MuiTabs-scrollable" style="width: 99px; height: 99px; position: absolute; top: -9999px; overflow: scroll;"></div>
                                    <div class="MuiTabs-scroller MuiTabs-scrollable" style="margin-bottom: 0px;">
                                        <div aria-label="disabled tabs example" class="MuiTabs-flexContainer" role="tablist">
                                            <button class="MuiButtonBase-root MuiTab-root jss12 MuiTab-textColorPrimary Mui-selected" tabindex="0" type="button" role="tab" aria-selected="true" style="color: rgb(0, 153, 255); font-size: 15px; font-family: Montserrat; font-weight: 700;">
                                                <span class="MuiTab-wrapper">1BHK</span>
                                                <span class="MuiTouchRipple-root"></span></button>
                                            <button class="MuiButtonBase-root MuiTab-root jss12 MuiTab-textColorPrimary" tabindex="-1" type="button" role="tab" aria-selected="false" style="color: rgb(0, 153, 255); font-size: 15px; font-family: Montserrat; font-weight: 700;">
                                                <span class="MuiTab-wrapper">2BHK</span><span class="MuiTouchRipple-root"></span></button>
                                            <button class="MuiButtonBase-root MuiTab-root jss12 MuiTab-textColorPrimary" tabindex="-1" type="button" role="tab" aria-selected="false" style="color: rgb(0, 153, 255); font-size: 15px; font-family: Montserrat; font-weight: 700;">
                                                <span class="MuiTab-wrapper">3BHK</span>
                                                <span class="MuiTouchRipple-root"></span></button>
                                            <button class="MuiButtonBase-root MuiTab-root jss12 MuiTab-textColorPrimary" tabindex="-1" type="button" role="tab" aria-selected="false" style="color: rgb(0, 153, 255); font-size: 15px; font-family: Montserrat; font-weight: 700;">
                                                <span class="MuiTab-wrapper">4BHK</span><span class="MuiTouchRipple-root"></span></button></div>
                                        <span class="jss26 jss27 MuiTabs-indicator" style="left: 0px; width: 130px; background-color: rgb(0, 153, 255);"></span></div></div></div></div>--%>
                        <%--<div class="container row mt-1 " style="margin-left: 10px;"><span class="mr-5 mt-3" style="font-size: 15px; font-family: Montserrat; font-weight: 700;">Road</span>
                            <div class="MuiFormControl-root jss2"><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-marginDense MuiInput-marginDense">
                                <div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox" aria-labelledby="demo-simple-select-outlined-label demo-simple-select-outlined" id="demo-simple-select-outlined">North</div>
                                <input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value="N"><svg class="MuiSvgIcon-root MuiSelect-icon jss20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg></div></div>
                            <span class="ml-5 mt-2 mr-2" style="font-size: 15px; font-family: Montserrat; font-weight: 700;">ft</span><label class="MuiFormControlLabel-root" style="color: rgb(0, 153, 255);">
                                <span class="MuiSwitch-root jss1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiSwitch-switchBase jss23 MuiSwitch-colorSecondary" aria-disabled="false" style="color: rgb(0, 153, 255);">
                                    <span class="MuiIconButton-label"><input class="jss33 MuiSwitch-input" name="checkedB" type="checkbox" value=""><span class="MuiSwitch-thumb"></span></span></span>
                                    <span class="MuiSwitch-track jss25"></span></span><span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"></span></label>
                            <span class="mt-2" style="margin-left: -20px; font-size: 15px; font-family: Montserrat; font-weight: 700;">mm</span></div>--%>
                        <form class="jss1" novalidate="" autocomplete="off">
                            <div class="row mt-2">
                                <div class="col-md-5 justify-content-center align-middle mt-4"><h6 class="text-center" style="font-size: 15px; font-family: Montserrat; font-weight: 700;margin-left: -66px;">Plot Size(ft)</h6></div>
                                <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root jss10"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="filled-number" id="filled-number-label">length(ft)</label>
                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric">
                                        <input aria-invalid="false" id="filled-number" name="plotLen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="40">
                                        <fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>length(ft)</span></legend></fieldset></div></div></div>
                                <div class="col-md-3"><div class="MuiFormControl-root MuiTextField-root jss10"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">width(ft)</label>
                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="plotWid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="30">
                                        <fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>width(ft)</span></legend></fieldset></div></div></div></div>
                            <div class="container row mt-4">
                                <div class="col-md-1 mt-3"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg></span><span class="MuiTouchRipple-root"></span></span></div><div class="col-md-2 " style="margin-top: 26px;"><h6 style="font-size: 15px; font-family: Montserrat; font-weight: 700;">Vastu</h6></div>
                                </div>
                        </form>
                        <form class="container"><div class="container row mt-4"><span style="font-size: 15px; font-family: Montserrat; font-weight: 700; margin-left: 10px;"> Room Details</span></div>
                            <div class="row"><div class=" col-md-3">
                               <div class="MuiFormControl-root jss2"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false" id="demo-mutiple-name-label" style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Select Room</label><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input" tabindex="0" role="button" aria-haspopup="listbox" aria-labelledby="demo-mutiple-name-label demo-mutiple-name" id="demo-mutiple-name"><span>&ZeroWidthSpace;</span></div><input name="room" aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon jss20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg></div></div>
                                             </div>
                                <div class="col-md-3 ml-5" style="margin-top: 27px;"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" style="background-color: rgb(0, 153, 255); font-size: 12px; font-family: Montserrat; font-weight: 700;"><span class="MuiButton-label">Add </span><span class="MuiTouchRipple-root"></span></button></div>
                                </div></form><form class="jss1" novalidate="" autocomplete="off"><p></p>
                                        <div class="container row"><div class="col-md-2"></div><div class="col-md-4 ml-md-5"><h6 style="font-size: 13px; font-family: Montserrat; font-weight: 400;">Length</h6></div><div class="col-md-4 ml-4"><h6 style="font-size: 13px; font-family: Montserrat; font-weight: 400;">Width</h6></div></div>
                                        <div class="row"><div class="col-md-1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary jss31 Mui-checked MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" id="0" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value="" checked=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span>
                                            <span class="MuiTouchRipple-root"></span></span></div><div class="col-md-2 justify-content-left mt-2"><h6 class="" style="font-size: 15px; font-family: Montserrat; font-weight: 500;">Bedroom (Be)</h6></div><div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="0len" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="12"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="0inlen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="4"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="0wid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="10"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="0inwid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="11"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-1 mt-1"><button class="MuiButtonBase-root MuiIconButton-root jss5" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div>
                                        <div class="row"><div class="col-md-1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary jss31 Mui-checked MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" id="1" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value="" checked=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span><span class="MuiTouchRipple-root"></span></span></div>
                                            <div class="col-md-2 justify-content-left mt-2"><h6 class="" style="font-size: 15px; font-family: Montserrat; font-weight: 500;">Living (Li)</h6></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="1len" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="15"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="1inlen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="11"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="1wid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="10"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label><div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="1inwid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="11"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-1 mt-1"><button class="MuiButtonBase-root MuiIconButton-root jss5" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div>
                                        <div class="row"><div class="col-md-1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary jss31 Mui-checked MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" id="2" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value="" checked=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span>
                                            <span class="MuiTouchRipple-root"></span></span></div><div class="col-md-2 justify-content-left mt-2"><h6 class="" style="font-size: 15px; font-family: Montserrat; font-weight: 500;">Kitchen (Ki)</h6></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="2len" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="9"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="2inlen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="7"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="2wid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="6"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label><div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="2inwid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="0"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-1 mt-1"><button class="MuiButtonBase-root MuiIconButton-root jss5" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div>
                                        <div class="row"><div class="col-md-1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary jss31 Mui-checked MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" id="3" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value="" checked=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span><span class="MuiTouchRipple-root"></span></span></div>
                                            <div class="col-md-2 justify-content-left mt-2"><h6 class="" style="font-size: 15px; font-family: Montserrat; font-weight: 500;">Bathroom (Ba)</h6></div><div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="3len" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="3"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="3inlen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="11">
                                                        <fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16">
                                                            <legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-4">
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;">
                                                    <label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric">
                                                        <input aria-invalid="false" id="standard-number" name="3wid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="2">
                                                        <fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16">
                                                            <legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;">
                                                    <label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric">
                                                        <input aria-invalid="false" id="outlined-number" name="3inwid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="11"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16">
                                                            <legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div><div class="col-md-1 mt-1"><button class="MuiButtonBase-root MuiIconButton-root jss5" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div>
                                        <div class="row"><div class="col-md-1"><span class="MuiButtonBase-root MuiIconButton-root jss30 MuiCheckbox-root MuiCheckbox-colorPrimary jss31 Mui-checked MuiIconButton-colorPrimary" aria-disabled="false" style="color: rgb(0, 153, 255);"><span class="MuiIconButton-label"><input class="jss33" id="4" type="checkbox" data-indeterminate="false" aria-label="secondary checkbox" value="" checked=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span><span class="MuiTouchRipple-root"></span></span></div>
                                            <div class="col-md-2 justify-content-left mt-2"><h6 class="" style="font-size: 15px; font-family: Montserrat; font-weight: 500;">Entrance Hall (EH)</h6></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="4len" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="9"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="4inlen" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="10"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-4"><div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="standard-number" id="standard-number-label">ft</label>
                                                <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="standard-number" name="4wid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="5"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>ft</span></legend></fieldset></div></div>
                                                <div class="MuiFormControl-root MuiTextField-root" style="background-color: rgb(235, 235, 235); border-radius: 5px;"><label class="MuiFormLabel-root MuiInputLabel-root jss15 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true" for="outlined-number" id="outlined-number-label">in</label>
                                                    <div class="MuiInputBase-root MuiOutlinedInput-root jss17 MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense" inputmode="numeric"><input aria-invalid="false" id="outlined-number" name="4inwid" type="number" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="8"><fieldset aria-hidden="true" class="jss34 MuiOutlinedInput-notchedOutline jss16"><legend class="jss36 jss37"><span>in</span></legend></fieldset></div></div></div>
                                            <div class="col-md-1 mt-1"><button class="MuiButtonBase-root MuiIconButton-root jss5" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div>
                                        <div class="mt-3 mb-3 offset-md-1"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" style="background-color: rgb(0, 153, 255); font-size: 12px; font-family: Montserrat; font-weight: 700;"><span class="MuiButton-label">Update Dimensions</span><span class="MuiTouchRipple-root"></span></button></div></form></div>
                    <div class="col col-md-6 "><h1 class="text-left   mb-5 textwh"></h1><div id="r" style="margin-top: -40px;">
                        <div class="" style="height: 25px; width: 670px; margin-left: 25px;"><canvas width="1340" height="50" style="width: 100%; height: 100%;"></canvas></div>
                        <div style="height: 472px; width: 25px; position: absolute;"><canvas width="50" height="944" style="width: 100%; height: 100%;"></canvas></div>
                        <div><canvas id="c" width="867" height="586" style="touch-action: none; width: 694px; height: 469px; cursor: inherit;"></canvas><div><p>175</p></div></div></div>
                        <%--<div class="row mt-2 mb-3 d-flex justify-content-center " style="margin-left: 140px;">
                            <div role="group" class="MuiButtonGroup-root" aria-label="outlined primary button group" style="margin-top: -10px;">--%>
                                
                        
                    <%--</div></div>--%>
                        <div class="container row d-flex justify-content-center" style="margin-top: 60px;width: 725px;">
                            <div class="col-md-2 mx-auto d-flex  justify-content-center">
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary jss8 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" style="background-color: rgb(102, 102, 255);"><span class="MuiButton-label"><span style="font-size: 13px; font-family: Montserrat; font-weight: 700;">ZOOM IN</span></span><span class="MuiTouchRipple-root"></span>
                                </button>
                                </div>
                            <div class="col-md-2 mx-auto d-flex  justify-content-center">
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary jss8 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" id="clearButton" style="background-color: rgb(102, 102, 255);"><span class="MuiButton-label"><span style="font-size: 13px; font-family: Montserrat; font-weight: 700;">Clear Screen</span></span><span class="MuiTouchRipple-root"></span></button></div>
                            <div class="col-md-2 mx-auto d-flex  justify-content-center">
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary jss8 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" style="background-color: rgb(0, 153, 255);"><span class="MuiButton-label"><span style="font-size: 13px; font-family: Montserrat; font-weight: 700;">Generate More Plan</span></span><span class="MuiTouchRipple-root"></span></button></div>
                            <div class="col-md-2 mx-auto d-flex  justify-content-center">
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary jss8 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit" download="YourFileName.jpg" style="background-color: black;"><span class="MuiButton-label"><span style="font-size: 13px; font-family: Montserrat; font-weight: 700;">SAVE IMAGE</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></span><span class="MuiTouchRipple-root"></span></button></div>
                           <div class="col-md-2 d-flex  justify-content-center">
                               <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary jss8 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="submit"><span class="MuiButton-label"><span style="font-size: 13px; font-family: Montserrat; font-weight: 700;">ZOOM OUT</span></span><span class="MuiTouchRipple-root"></span>
                        </button>
                               </div></div></div></div></div></div></div>
    <script>
        !function (e) { function r(r) { for (var n, a, i = r[0], c = r[1], l = r[2], s = 0, p = []; s < i.length; s++)a = i[s], Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]), o[a] = 0; for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]); for (f && f(r); p.length;)p.shift()(); return u.push.apply(u, l || []), t() } function t() { for (var e, r = 0; r < u.length; r++){ for (var t = u[r], n = !0, i = 1; i < t.length; i++){ var c = t[i]; 0 !== o[c] && (n = !1) } n && (u.splice(r--, 1), e = a(a.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function a(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports } a.e = function (e) { var r = [], t = o[e]; if (0 !== t) if (t) r.push(t[2]); else { var n = new Promise((function (r, n) { t = o[e] = [r, n] })); r.push(t[2] = n); var u, i = document.createElement("script"); i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src = function (e) { return a.p + "js/" + ({}[e] || e) + "." + { 3: "c4b67178" }[e] + ".chunk.js" }(e); var c = new Error; u = function (r) { i.onerror = i.onload = null, clearTimeout(l); var t = o[e]; if (0 !== t) { if (t) { var n = r && ("load" === r.type ? "missing" : r.type), u = r && r.target && r.target.src; c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")", c.name = "ChunkLoadError", c.type = n, c.request = u, t[1](c) } o[e] = void 0 } }; var l = setTimeout((function () { u({ type: "timeout", target: i }) }), 12e4); i.onerror = i.onload = u, document.head.appendChild(i) } return Promise.all(r) }, a.m = e, a.c = n, a.d = function (e, r, t) { a.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, a.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function (e, r) { if (1 & r && (e = a(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) a.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, a.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return a.d(r, "a", r), r }, a.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, a.p = "/", a.oe = function (e) { throw console.error(e), e }; var i = this["webpackJsonpkdtree-frontend-react"] = this["webpackJsonpkdtree-frontend-react"] || [], c = i.push.bind(i); i.push = r, i = i.slice(); for (var l = 0; l < i.length; l++)r(i[l]); var f = c; t() }([])</script>
    <script src="../js/2.c24243ad.chunk.js"></script>
    <script src="../js/HouseAlgorithm.js"></script>
    <script src="../js/Canvas.js"></script>
    <script src="../js/Main.js"></script>
    <script src="../js/main.48b988f2.chunk.js"></script>
    <style>.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}</style>
   <%-- <div role="presentation" class="MuiPopover-root" id="menu-room" style="position: fixed; z-index: 1300; inset: 0px;">
        <div aria-hidden="true" style="z-index: -1; position: fixed; inset: 0px; background-color: transparent; -webkit-tap-highlight-color: transparent;">
        </div>
        <div tabindex="0" data-test="sentinelStart">
        </div>
        <div class="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" tabindex="-1" style="opacity: 1; transform: none; min-width: 120px; transition: opacity 364ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 242ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; top: 80px; left: 38px; transform-origin: 0px 230px;">
            <ul class="MuiList-root MuiMenu-list MuiList-padding" role="listbox" tabindex="-1" aria-labelledby="demo-mutiple-name-label">
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="0" role="option" aria-disabled="false" data-value="Bedroom (Be)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Bedroom (Be)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Living (Li)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Living (Li)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Kitchen (Ki)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Kitchen (Ki)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Bathroom (Ba)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Bathroom (Ba)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Entrance Hall (EH)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Entrance Hall (EH)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Closet (Cl)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Closet (Cl)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Stair External (SE)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Stair External (SE)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Stair Internal (SI)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Stair Internal (SI)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="2 car parking (P2)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">2 car parking (P2)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="1 car parking (P1)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">1 car parking (P1)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Lift (Lf)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Lift (Lf)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Puja room (Pj)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Puja room (Pj)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Study room (St)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Study room (St)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Home Theatre (HT)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Home Theatre (HT)</span><span class="MuiTouchRipple-root"></span></li>
                <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="option" aria-disabled="false" data-value="Open Terrace (OT)"><span style="font-size: 15px; font-family: Montserrat; font-weight: 400;">Open Terrace (OT)</span><span class="MuiTouchRipple-root"></span></li>
            </ul></div><div tabindex="0" data-test="sentinelEnd"></div></div>--%>
</body>
</html>
