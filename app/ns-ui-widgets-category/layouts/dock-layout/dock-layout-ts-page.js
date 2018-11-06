"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dock_layout_1 = require("tns-core-modules/ui/layouts/dock-layout");
var _1 = require("tns-core-modules/ui/button/");
var _2 = require("tns-core-modules/color/");
function onNavigatingTo(args) {
    var page = args.object;
    var grid = page.getViewById("grid");
    var myDockLayout = new dock_layout_1.DockLayout();
    var button1 = new _1.Button();
    button1.text = "Left";
    button1.backgroundColor = "#0099CC";
    var button2 = new _1.Button();
    button2.text = "Right";
    button2.backgroundColor = "#8C489F";
    var button3 = new _1.Button();
    button3.text = "Top";
    button3.backgroundColor = "#AA0078";
    var button4 = new _1.Button();
    button4.text = "Bottom";
    button4.backgroundColor = "#B3B3D7";
    button4.color = new _2.Color("lightgray");
    var button5 = new _1.Button();
    button5.text = "Fill";
    button5.backgroundColor = "#CCFFFF";
    myDockLayout.addChild(button1);
    myDockLayout.addChild(button2);
    myDockLayout.addChild(button3);
    myDockLayout.addChild(button4);
    myDockLayout.addChild(button5);
    myDockLayout.stretchLastChild = true;
    dock_layout_1.DockLayout.setDock(button1, "left");
    dock_layout_1.DockLayout.setDock(button2, "right");
    dock_layout_1.DockLayout.setDock(button3, "top");
    dock_layout_1.DockLayout.setDock(button4, "bottom");
    grid.removeChildren();
    grid.addChild(myDockLayout);
}
exports.onNavigatingTo = onNavigatingTo;
