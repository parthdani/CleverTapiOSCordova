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
var app = {
    // Application Constructor
    var FirebasePlugin;

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        CleverTap.notifyDeviceReady();
        CleverTap.setDebugLevel(3);
        CleverTap.registerPush();
        FirebasePlugin = window.FirebasePlugin;
        FirebasePlugin.initialize();
    },

    FirebasePlugin.grantPermission:function(hasPermission){
        console.log("Permission was " + (hasPermission ? "granted" : "denied"));
    });

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


    FirebasePlugin.getToken():function(getToken)
    {
        console.log(token);
        //CleverTap.setPushtoken(apnsToken);
        CleverTap.recordEventWithNameAndProps("Push token refeived using getToken method",{"token":token});
    }, function(error) {
        console.error(error);
    });

    FirebasePlugin.getAPNSToken:function(apnsToken) {
        console.log(apnsToken);
        CleverTap.setPushtoken(apnsToken);
        CleverTap.recordEventWithName("Push token refeived using getAPNSToken method");
    }, function(error) {
        console.error(error);
    });

    FirebasePlugin.onApnsTokenReceived:function(apnsToken)
    {
        console.log(apnsToken);
        CleverTap.setPushtoken(apnsToken);
        CleverTap.recordEventWithName("Push token refeived using onApnsTokenReceived method");
    }, function(error) {
        console.error(error);
    });

};

app.initialize();