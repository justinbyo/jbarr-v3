function resizeWindow(){windowHeight=$(window).height(),fullHeightContainer.css("min-height",windowHeight)}var fullHeightContainer=$(".js-fullHeight"),windowHeight="",fullHeightContainer="";$(document).ready(resizeWindow),$(window).resize(resizeWindow);