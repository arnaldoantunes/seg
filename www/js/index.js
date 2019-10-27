var app = {
     initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
 
    onDeviceReady: function() {  
		window.addEventListener("batterystatus", onBatteryStatus, false);
	},
};

 app.initialize();

function onBatteryStatus(status) {
			
			var number=document.getElementById("result");
			number.innerHTML = "Level: " + status.level + " isPlugged: " + status.isPlugged;
}
