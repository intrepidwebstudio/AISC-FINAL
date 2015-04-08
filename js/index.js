/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var GOOGLE_PROJECT_ID = "";
var PUSHAPPS_APP_TOKEN = "6f747f13-5c54-41f0-84c5-892d4c0ffdf6";

/**
 * Register current device with PushApps
 */
function registerDevice() {
	PushNotification.registerDevice(GOOGLE_PROJECT_ID, PUSHAPPS_APP_TOKEN, function (pushToken) {
                              //      alert('registerDevice, push token' + pushToken);
                                    }, function (error) {
                            //        alert('gggg='+error);
                                    });
	
	document.removeEventListener('pushapps.message-received');
	document.addEventListener('pushapps.message-received', function(event) {
                              var notification = event.notification;
                              var devicePlatform = device.platform;
                              if (devicePlatform === "iOS") {
                              console.log('ss2');
                              console.log("message-received, Message: " + notification.aps.alert + " , D: " + notification.D);
                              } else {
                              console.log("message-received, Message: " + notification.Message + " , Title: " + notification.Title + " , D: " + notification.D);
                              }
                              });
							
    
}

/**
 * Unregister current device with PushApps
 */
function unregisterDevice() {
	document.removeEventListener('pushapps.message-received');
	PushNotification.unRegisterDevice(function () {
                                      alert("Your device was unregistered from PushApps");
                                      }, function () {
                                      console.log("error");
                                      alert("Error unregistering your device");
                                      });
}

/**
 * Send boolean tag
 */
function sendBooleanTag() {
	var d = document.getElementById('booleanTagInput').value === "on" ? "true" : "false";
	var iden = document.getElementById('booleanIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send number tag
 */
function sendNumberTag() {
	var d = document.getElementById("numberTagInput").value;
	var iden = document.getElementById('numberIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send string tag
 */
function sendStringTag() {
	var d = document.getElementById("stringTagInput").value;
	var iden = document.getElementById('stringIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send date tag
 */
function sendDateTag() {
	var d = new Date(document.getElementById("dateTagInput").value);
    var n = d.toISOString();
    var iden = document.getElementById('dateIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: n
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

function removeTag() {
	var idens = [ document.getElementById('identifierRemoveTagInput').value ];
	PushNotification.removeTags(idens, function () {
                                alert("Tag removed successfully");
                                }, function (message) {
                                alert("ERROR: " + message);
                                });
}

function getDeviceId() {
    PushNotification.getDeviceId(function (deviceId) {
                                 alert("Your device id is: " + deviceId);
                                 }, function () {
                                 alert("We could not get your device id. Please check your logs or contact our support team");
                                 })
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
          
		
		$('#abc div.ui-checkbox label').removeClass('ui-btn');
		
		registerDevice();
            if(navigator.network.connection.type == Connection.NONE){
              callbanner(); 
            }else{
           		callbannerfromserver();
				//console.log('connectin server');
            }
			browser_setting();
			
			loadlinks();
			loadupcomingevents();
			loadcontacts();
			loadupcomingNewsletter();
			loadnotifications();
			loadpassword();
			
			
			
	
     if(navigator.network.connection.type == Connection.NONE){

    navigator.notification.alert("Network problem , please try after sometime !!", alertCallback, "AISC", "OK");
	
	 }else{

	var mapid1='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.1983216655128!2d80.24665805295187!3d12.981672347328574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xa9a3700f3f4b67b0!2sAmerican+International+School!5e1!3m2!1sen!2sin!4v1428049841141" width="600" height="450" frameborder="0" style="border:0"></iframe>';
	
	$('#mapid').html(mapid1);    

	
	 }
    
	
			
			
			
			
			
			
			
	    }
};




/*
function loadimages()
{
	
		  
					var screenwidth=window.screen.width;
					var screenheight=window.screen.height;
					
					
					alert(screenwidth +'    '+screenheight );
					
					
					
					if(screenwidth == 320 && screenheight == 480)
					{
						document.getElementById("sliderres1").style.height = "136px";
						document.getElementById("sliderres2").style.height = "136px";
						document.getElementById("sliderres3").style.height = "136px";
						document.getElementById("sliderres4").style.height = "136px";
						
						$('#sliderres1').html('<img style="width:100%; height:100%;" src="slider/courage.png" >');
						$('#sliderres2').html('<img style="width:100%; height:100%;"  src="slider/compassion.png" >');
						$('#sliderres3').html('<img style="width:100%; height:100%;"  src="slider/confidence.png" >');
						$('#sliderres4').html('<img style="width:100%; height:100%;"  src="slider/creativity.png" >');
					}else 
					if(screenwidth == 320 && screenheight == 568){
						
						document.getElementById("sliderres1").style.height = "229px";
						document.getElementById("sliderres2").style.height = "229px";
						document.getElementById("sliderres3").style.height = "229px";
						document.getElementById("sliderres4").style.height = "229px";
						
						$('#sliderres1').html('<img style="width:100%; height:100%;" src="slider/courage@2x.png" >');
						$('#sliderres2').html('<img style="width:100%; height:100%;"  src="slider/compassion@2x.png" >');
						$('#sliderres3').html('<img style="width:100%; height:100%;"  src="slider/confidence@2x.png" >');
						$('#sliderres4').html('<img style="width:100%; height:100%;"  src="slider/creativity@2x.png" >');
						
						}else if(screenwidth == 375 && screenheight == 667){
						
						
						$('#locateusicon').attr('src','homeicons/LocateUs@3x.png');
						$('#notification').attr('src','homeicons/notification@3x.png');
						
						document.getElementById("sliderres1").style.height = "323px";
						document.getElementById("sliderres2").style.height = "323px";
						document.getElementById("sliderres3").style.height = "323px";
						document.getElementById("sliderres4").style.height = "323px";
						
						$('#sliderres1').html('<img style="width:100%; height:100%;"  src="slider/courage@3x.png" >');
						$('#sliderres2').html('<img style="width:100%; height:100%;"  src="slider/compassion@3x.png" >');
						$('#sliderres3').html('<img style="width:100%; height:100%;"  src="slider/confidence@3x.png" >');
						$('#sliderres4').html('<img style="width:100%; height:100%;"  src="slider/creativity@3x.png" >');
											
						}else if(screenwidth == 414 && screenheight == 736){
							
						$('#locateusicon').attr('src','homeicons/LocateUs@3x.png');
						$('#notification').attr('src','homeicons/notification@3x.png');
							
						document.getElementById("sliderres1").style.height = "392px";
						document.getElementById("sliderres2").style.height = "392px";
						document.getElementById("sliderres3").style.height = "392px";
						document.getElementById("sliderres4").style.height = "392px";
						
						$('#sliderres1').html('<img style="width:100%; height:100%;" src="slider/courage@3x.png" >');
						$('#sliderres2').html('<img style="width:100%; height:100%;"  src="slider/compassion@3x.png" >');
						$('#sliderres3').html('<img style="width:100%; height:100%;"  src="slider/confidence@3x.png" >');
						$('#sliderres4').html('<img style="width:100%; height:100%;"  src="slider/creativity@3x.png" >');
							
			        }
					
		
	
	} */