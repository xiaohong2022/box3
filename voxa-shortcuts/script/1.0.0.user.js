/*
 * ============================================================================== *
 *************************** 新模型编辑器快捷键 v1.0.0 ****************************
 ************************ Copyright (C) 2023 xiaohong2022 *************************
 * ============================================================================== *
*/

// ==UserScript==
// @name         新模型编辑器快捷键
// @namespace    http://box3.codemao.cn/
// @version      1.0.0
// @description  新模型编辑器汉化！再也不担心看不懂英文了！
// @author       小宏XeLa
// @license      GPL
// @match        *://dao3.fun/edit-model
// @match        *://dao3.fun/edit-model/*
// @match        *://dao3.fun/edit-model?frombox=1
// @match        *://dao3.fun/edit-model/*?frombox=1
// @match        *://voxa.dao3.fun/
// @match        *://voxa.dao3.fun/*
// @icon         https://dao3.fun/pwa/box3/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function isEditingObject() {
        return !!document.querySelector("#voxel-editor > button");
    }
    function isEditingModel() {
        return !!document.querySelector("#voxel-editor > div.style_navBar__dPq_Q > div.style_toolBar__h38mf > div.style_tools__f7dnJ > div.style_animatorSwitch___Pk4K > button:nth-child(1).style_activated__cD6yt");
    }
    function isEditingAnimation() {
        return !!document.querySelector("#voxel-editor > div.style_navBar__dPq_Q > div.style_toolBar__h38mf > div.style_tools__f7dnJ > div.style_animatorSwitch___Pk4K > button:nth-child(2).style_activated__cD6yt");
    }
    function click(s) {
        document.querySelector(s).focus();
        document.querySelector(s).click();
    }
    function click2(s) {
        var x = document.querySelector(s);
        for (let i in x) {
            if (i.startsWith("__reactProps")) {
                x[i].onMouseDown({ stopPropagation() { } });
                return;
            }
        }
    }
    document.addEventListener("keydown", function (event) {
        var { key, shiftKey, altKey } = event,
            ctrlKey = (!!(navigator.platform.match("Mac")) ? event.metaKey : event.ctrlKey);
        console.log(key, shiftKey, ctrlKey, altKey);
        if ((event.target.localName || "") === "input") return true;
        if (key === "s" && ctrlKey) {
            event.preventDefault();
            click("#voxel-editor > div.style_navBar__dPq_Q > div.style_project__GmjFm > button.style_button__iQG7g.style_button__B1GEb.style_save__S4RaX.style_secondary__fzQmO.boxButton.style_medium__RrKpc")
        }
        if (key === "p" && ctrlKey) {
            event.preventDefault();
            click("#voxel-editor > div.style_navBar__dPq_Q > div.style_project__GmjFm > button.style_button__iQG7g.style_button__B1GEb.style_publish__arMOs.style_primary__WpCG7.boxButton.style_medium__RrKpc")
        }
        if (key === "y" && ctrlKey) {
            event.preventDefault();
            click("#voxel-editor > div.style_bottomBar__xw1l5 > div.style_leftSide___1P88 > button:nth-child(2)")
        }
        if (isEditingModel() && isEditingAnimation()) {
            if (key === "d" && ctrlKey) {
                event.preventDefault();
                click("#voxel-editor > div.style_navBar__dPq_Q > div.style_toolBar__h38mf > div.style_tools__f7dnJ > div.style_animatorSwitch___Pk4K > button:nth-child(2)")
            }
            if (key === "m" && ctrlKey) {
                event.preventDefault();
                click("#voxel-editor > div.style_navBar__dPq_Q > div.style_toolBar__h38mf > div.style_tools__f7dnJ > div.style_animatorSwitch___Pk4K > button:nth-child(1)")
            }
        }
        if (isEditingModel()) {
            if (key === "c" && ctrlKey) {
                event.preventDefault();
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(5)")
            }
            if (key === "b" && ctrlKey) {
                event.preventDefault();
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(7)")
            }
            if (key === "o" && ctrlKey) {
                event.preventDefault();
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(4)")
            }
            if (key === "n") {
                event.preventDefault();
                click("#voxel-editor > div.style_navBar__dPq_Q > div.style_toolBar__h38mf > div.style_tools__f7dnJ > div.style_axis__Cg9Qx > button:nth-child(5)")
            }
            if (key === "u") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(2)")
            }
            if (key === "i") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(1)")
            }
        }
        if (isEditingObject()) {
            if (key === "t" && !shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(5)")
            }
            else if (key === "T" && shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(7)")
            }
            else if (key === "r" && !shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(6)")
            }
            else if (key === "R" && shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(8)")
            }
            else if (key === "g" && !shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(11)")
            }
            else if (key === "G" && shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(12)")
            }
            else if (key === "h") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(9)")
            }
            else if (key === "u") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(13)")
            }
            else if (key === "i") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(1)")
            }
            else if (key === "m") {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(3)")
            }
            else if (key === "n" && !shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(2) > div > svg.style_expandIcon__vux0H")
                setTimeout(() => {
                    click("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(2) > div > div > div > div:nth-child(2)")
                }, 16)
            }
            else if (key === "N" && shiftKey) {
                click2("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(2) > div > svg.style_expandIcon__vux0H")
                setTimeout(() => {
                    click("#voxel-editor > div.style_sideBar__3GhYJ > div > div:nth-child(2) > div > div > div > div:nth-child(1)")
                }, 16)
            }
            else if (key === "Escape") {
                click("#voxel-editor > button")
            }
        }
        if (isEditingAnimation()) {
            if (key === "ArrowRight") {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(4)");
            } else if (key === 'ArrowLeft') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(2)");
            } else if (key === 'Home') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(1)");
            } else if (key === 'End') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(5)");
            } else if (key === 'PageUp') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(4)");
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(4)");
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(4)");
            } else if (key === 'PageDown') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(2)");
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(2)")
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(2)")
            } else if (key === ' ') {
                click("#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_controls__TOHLR > button:nth-child(3)");
            }
            else if (key === "+" && ctrlKey) {
                event.preventDefault()
                click('#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_hierarchyTimelines__lmUX5 > div.style_bottom__78f_P > div.style_zoomControls__nb9IA > div > button.style_button__iQG7g.style_buttonInc__klM_1.style_icon__Kpv3x.boxButton')
            }
            else if (key === "-" && ctrlKey) {
                event.preventDefault()
                click('#voxel-editor > div.container_motionPanelContainer__qjIIO > div.style_motionPanel__cSIai > div.style_hierarchyTimelines__lmUX5 > div.style_bottom__78f_P > div.style_zoomControls__nb9IA > div > button.style_button__iQG7g.style_buttonDec__f7AT2.style_icon__Kpv3x.boxButton')
            }
        }
    })
})();
