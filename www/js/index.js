var app = {
     initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
 
    onDeviceReady: function() {  
		window.addEventListener("batterystatus", onBatteryStatus, false);
		navigator.vibrate(3000);
	},
};

 app.initialize();

function onBatteryStatus(status) {
			navigator.vibrate(5000);
			var number=document.getElementById("result");
			number.innerHTML = "Level: " + status.level + " isPlugged: " + status.isPlugged;
}
